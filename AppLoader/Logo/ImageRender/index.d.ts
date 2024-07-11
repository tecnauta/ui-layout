import { ReactNode } from 'react';

type ImageRenderProps = {
    image: string | ReactNode;
    className?: string;
};
declare const ImageRender: ({ image, className }: ImageRenderProps) => number | boolean | Iterable<ReactNode> | import("react/jsx-runtime").JSX.Element | null | undefined;
export default ImageRender;
