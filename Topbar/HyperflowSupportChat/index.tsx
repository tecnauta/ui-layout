import SupportChat from './chat';

export interface TopbarHyperflowSupportChatProps {
  jwtToHyperflow?: string;
}

const TopbarHyperflowSupportChat = ({ jwtToHyperflow }: TopbarHyperflowSupportChatProps) => {
  if (!jwtToHyperflow) return null;

  return <SupportChat jwtToHyperflow={jwtToHyperflow} />;
};

export default TopbarHyperflowSupportChat;
