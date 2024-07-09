import HyperflowSupportChat from './chat';

export interface TopbarHyperflowSupportChatProps {
  jwtToHyperflow?: string;
}

const TopbarHyperflowSupportChat = ({ jwtToHyperflow }: TopbarHyperflowSupportChatProps) => {
  if (!jwtToHyperflow) return null;

  return <HyperflowSupportChat jwtToHyperflow={jwtToHyperflow} />;
};

export default TopbarHyperflowSupportChat;
