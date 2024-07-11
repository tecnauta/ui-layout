import { ComponentType } from 'react';

export default function nestedComponent<P, N>(component: ComponentType<P>, nested: N): ComponentType<P> & N;
