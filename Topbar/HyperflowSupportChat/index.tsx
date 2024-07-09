import SupportChat from './chat';

export interface TopbarHyperflowSupportChatProps {
  /**
   * Token gerado pelo servidor para acesso ao Hyperflow
   */
  jwtToHyperflow?: string;
}

const TopbarHyperflowSupportChat = ({ jwtToHyperflow }: TopbarHyperflowSupportChatProps) => {
  if (!jwtToHyperflow) return null;

  return <SupportChat jwtToHyperflow={jwtToHyperflow} />;
};

export default TopbarHyperflowSupportChat;
