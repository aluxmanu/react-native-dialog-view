import type { ReactNode } from 'react';

export type ModalProps = {
  children: ReactNode;
  visible: boolean;
  hideModal?: () => void;
};
