import { TopbarProps } from '../..';

declare global {
    interface Window {
        lhc_var: any;
        LHCChatOptions: any;
        __houston_chat_loader__: Promise<void>;
        __houston_chat_loaded_completed__: boolean;
        $_LHC: any;
    }
}
export default function chatInit(user: TopbarProps['user'], token?: string): () => void;
