import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';
import { ComplexAnimationBuilder } from 'react-native-reanimated';

export type DialogViewProps = {
  children: ReactNode;
  visible: boolean;
  animationTime?: number;
  animationIn?: ComplexAnimationBuilder;
  animationOut?: ComplexAnimationBuilder;
  backdropColor?: string;
  overlayStyle?: ViewStyle;
  onPressBackdrop?: () => void;
};
