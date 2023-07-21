import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';
import {
  BaseAnimationBuilder,
  EntryExitAnimationFunction,
  Keyframe,
} from 'react-native-reanimated';

export type DialogViewProps = {
  children: ReactNode;
  visible: boolean;
  animationTime?: number;
  animationIn?:
    | BaseAnimationBuilder
    | typeof BaseAnimationBuilder
    | EntryExitAnimationFunction
    | Keyframe;
  animationOut?:
    | BaseAnimationBuilder
    | typeof BaseAnimationBuilder
    | EntryExitAnimationFunction
    | Keyframe;
  backdropColor?: string;
  overlayStyle?: ViewStyle;
  onPressBackdrop?: () => void;
};
