import { useEffect } from 'react';

import { useContextSelector } from 'use-context-selector';

import chatInit from './chat';
import TopbarContext from '../context';

import './style.css';

const TopbarUnitySupportChat = () => {
  const user = useContextSelector(TopbarContext, context => context.user);

  useEffect(() => {
    if (!user?.isClubeBlack) return;
    const destroy = chatInit(user);
    return () => destroy();
  }, [user]);

  return null;
};
export default TopbarUnitySupportChat;
