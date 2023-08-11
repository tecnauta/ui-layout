import { useEffect } from 'react';

import { useContextSelector } from 'use-context-selector';

import chatInit from './chat';
import TopbarContext from '../context';

import './style.css';

export interface TopbarUnitySupportChatProps {
  /**
   * Token gerado pelo servidor para acesso ao LiveHelper
   */
  token?: string;
}

const TopbarUnitySupportChat = ({ token }: TopbarUnitySupportChatProps) => {
  const user = useContextSelector(TopbarContext, context => context.user);

  useEffect(() => {
    if (!user?.isClubeBlack) return;
    const destroy = chatInit(user, token);
    return () => destroy();
  }, [user, token]);

  return null;
};

export default TopbarUnitySupportChat;
