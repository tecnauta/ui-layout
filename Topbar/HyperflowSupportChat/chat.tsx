import useExternalScript from './import';

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
  helpUser: any;
}

function getChatTokenID(currentUser: any) {
  // const chatUnityID = '3880e664e69b156d6041b75c2e0abb1b';
  // const chatBlackID = '133078e7bc2207b2cc245aa7cbaed56d';
  // const chatEliteID = '95abf83ad8a1ba348a65eba0f9ee4d97';
  // const beltsCanViewChatBlack = ['Black', 'Golden', 'Sensei'];
  // const beltUserCanViewChatBlack = beltsCanViewChatBlack.includes((currentUser?.belt || '').split(' ')[0]);

  // if (currentUser?.tag === 'unity') return chatUnityID;
  // if (beltUserCanViewChatBlack || currentUser?.isClubeBlack) return chatBlackID;
  // return chatEliteID;
  return '865b006f4733ca82bc33b5a7a976040e';
}

const HyperflowSupportChat: React.FC<SupportChatProps> = ({ jwtToHyperflow, helpUser }) => {
  const currentUser = helpUser;
  const hyperflow = useExternalScript('https://webchat.hyperflow.global/sdk.js');
  const chatToken = getChatTokenID(currentUser);

  if (hyperflow === 'ready') {
    Hyperflow.init(chatToken).on('getStarted', () => {
      const params: HyperflowParams = {
        id: currentUser?.id,
        name: currentUser?.name.split(' ')[0],
        email: currentUser?.email,
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

export default HyperflowSupportChat;
