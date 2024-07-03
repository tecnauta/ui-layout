import { useContextSelector } from 'use-context-selector';

import SupportChat from './chat';
import TopbarContext from '../context';

export interface TopbarHyperflowSupportChatProps {
  /**
   * Token gerado pelo servidor para acesso ao LiveHelper
   */
  token?: string;
}

const TopbarHyperflowSupportChat = ({ token }: TopbarHyperflowSupportChatProps) => {
  const user = useContextSelector(TopbarContext, context => context.user);

  console.log(user);

  if (!token) return null;

  return <SupportChat />;
};

export default TopbarHyperflowSupportChat;
