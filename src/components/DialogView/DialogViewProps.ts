import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';

export type DialogViewProps = {
  children: ReactNode;
  visible: boolean;
  animationTime?: number;
  backdropColor?: string;
  overlayStyle?: ViewStyle;
  activeBackdrop?: boolean;
  hideModal?: () => void;
};
