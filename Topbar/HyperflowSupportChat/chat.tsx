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
  const chatUnityID = process.env.HYPERFLOW_CHAT_UNITY_ID ?? '';
  const chatBlackID = process.env.HYPERFLOW_CHAT_BLACK_ID ?? '';
  const chatEliteID = process.env.HYPERFLOW_CHAT_ELITE_ID ?? '';
  const beltsCanViewChatBlack = ['Black', 'Golden', 'Sensei'];
  const beltUserCanViewChatBlack = beltsCanViewChatBlack.includes((currentUser?.belt || '').split(' ')[0]);

  if (currentUser?.tag === 'unity') return chatUnityID;
  if (beltUserCanViewChatBlack || currentUser?.isClubeBlack) return chatBlackID;
  return chatEliteID;
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
        eliteChatToken: chatToken,
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
