import { useContextSelector } from 'use-context-selector';

import useExternalScript from './import';
import TopbarContext from '../context';

type HyperflowParams = {
  id: number;
  name: string;
  email: string;
  eliteChatToken: string;
  original_id?: number;
  original_name?: string;
  original_email?: string;
};

function SupportChat() {
  // const [chatInitialized, setChatInitialized] = useState(false);
  const currentUser = useContextSelector(TopbarContext, context => context.user);
  const hyperflow = useExternalScript('https://webchat.hyperflow.global/sdk.js');

  console.log('typeof hyperflow hyperflow: ', typeof hyperflow);
  console.log(hyperflow);
  if (!currentUser) return null;

  function getChatTokenID() {
    const chatUnityID = '3880e664e69b156d6041b75c2e0abb1b';
    const chatBlackID = '133078e7bc2207b2cc245aa7cbaed56d';
    const chatEliteID = '95abf83ad8a1ba348a65eba0f9ee4d97';
    // const chatUnityID = process.env.HYPERFLOW_CHAT_UNITY_ID ?? '';
    // const chatBlackID = process.env.HYPERFLOW_CHAT_BLACK_ID ?? '';
    // const chatEliteID = process.env.HYPERFLOW_CHAT_ELITE_ID ?? '';
    const beltsCanViewChatBlack = ['Black', 'Golden', 'Sensei'];
    const beltUserCanViewChatBlack = beltsCanViewChatBlack.includes((currentUser.belt || '').split(' ')[0]);

    if (currentUser.tag === 'unity') return chatUnityID;
    if (beltUserCanViewChatBlack || currentUser.isChatBlack) return chatBlackID;
    return chatEliteID;
  }

  if (hyperflow === 'ready') {
    console.log('Hyperflow initialized');
    Hyperflow.init(getChatTokenID()).on('getStarted', () => {
      const params: HyperflowParams = {
        id: currentUser.id,
        name: currentUser.name.split(' ')[0],
        email: currentUser.email,
        eliteChatToken: getChatTokenID(),
        jwtToHyperflow: currentUser.jwtToHyperflow
      };

      if (currentUser.isAccessPolicy) {
        params.original_id = currentUser.originalUserId;
        params.original_name = currentUser.originalUserName.split(' ')[0];
        params.original_email = currentUser.originalUserEmail;
      }

      Hyperflow.initFlow('faknvewds', params);
    });
  }

  return null;
}

export default SupportChat;

// - bater em um endpoint do myeduzz-api
// - myeduzz-api vai bater no accounts que gera um JWT
// - myeduzz-api retorna o JWT para o front
// - front manda a requisição para o Hyperflow com o JWT
