import { useContextSelector } from 'use-context-selector';

import useExternalScript from './import';
import TopbarContext from '../context';

type HyperflowParams = {
  id?: number;
  name?: string;
  email?: string;
  eliteChatToken?: string;
  original_id?: number;
  original_name?: string;
  original_email?: string;
  sender?: string;
};

interface SupportChatProps {
  jwtToHyperflow: string;
}

const SupportChat: React.FC<SupportChatProps> = ({ jwtToHyperflow }) => {
  const currentUser = useContextSelector(TopbarContext, context => context.user);
  const hyperflow = useExternalScript('https://webchat.hyperflow.global/sdk.js');

  if (!currentUser) return null;

  function getChatTokenID() {
    const chatUnityID = process.env.HYPERFLOW_CHAT_UNITY_ID ?? '';
    const chatBlackID = process.env.HYPERFLOW_CHAT_BLACK_ID ?? '';
    const chatEliteID = process.env.HYPERFLOW_CHAT_ELITE_ID ?? '';
    const beltsCanViewChatBlack = ['Black', 'Golden', 'Sensei'];
    const beltUserCanViewChatBlack = beltsCanViewChatBlack.includes((currentUser?.belt || '').split(' ')[0]);

    if (currentUser?.tag === 'unity') return chatUnityID;
    if (beltUserCanViewChatBlack || currentUser?.isChatBlack) return chatBlackID;
    return chatEliteID;
  }

  if (hyperflow === 'ready') {
    Hyperflow.init(getChatTokenID()).on('getStarted', () => {
      const params: HyperflowParams = {
        id: currentUser?.id,
        name: currentUser?.name.split(' ')[0],
        email: currentUser?.email,
        eliteChatToken: getChatTokenID(),
        sender: jwtToHyperflow
      };

      if (currentUser?.isAccessPolicy) {
        params.original_id = currentUser?.originalUserId;
        params.original_name = currentUser?.originalUserName?.split(' ')[0];
        params.original_email = currentUser?.originalUserEmail;
      }

      Hyperflow.initFlow('faknvewds', params);
    });
  }

  return null;
};

export default SupportChat;
