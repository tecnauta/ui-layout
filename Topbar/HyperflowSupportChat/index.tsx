import HyperflowSupportChat from './chat';

export interface TopbarHyperflowSupportChatProps {
  jwtToHyperflow?: string;
  helpUser?: any;
}

const TopbarHyperflowSupportChat = ({ jwtToHyperflow, helpUser }: TopbarHyperflowSupportChatProps) => {
  if (!jwtToHyperflow) return null;

  return <HyperflowSupportChat jwtToHyperflow={jwtToHyperflow} helpUser={helpUser} />;
};

export default TopbarHyperflowSupportChat;
