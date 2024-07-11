export type PossibleModes = 'dark' | 'light';
type UseModeOptions = {
    mode?: PossibleModes;
    acceptModeBySearchParam?: boolean;
    persistMode?: boolean;
    onModeChange?: (newMode: PossibleModes) => void;
};
export default function useMode({ mode, acceptModeBySearchParam, persistMode, onModeChange }: UseModeOptions): readonly ["light" | "dark", () => () => void];
export {};
