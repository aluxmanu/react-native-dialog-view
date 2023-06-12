import { ReactNode } from 'react';

export type DialogViewProps = {
  children: ReactNode;
  visible: boolean;
  animationTime?: number;
  hideModal?: () => void;
};
