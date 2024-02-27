import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';
import {
  BaseAnimationBuilder,
  EntryExitAnimationFunction,
} from 'react-native-reanimated';
import { ReanimatedKeyframe } from 'react-native-reanimated/lib/typescript/reanimated2/layoutReanimation/animationBuilder/Keyframe';

type EntryOrExitLayoutType =
  | BaseAnimationBuilder
  | typeof BaseAnimationBuilder
  | EntryExitAnimationFunction
  | ReanimatedKeyframe
  | any;

export type DialogViewProps = {
  children: ReactNode;
  visible: boolean;
  animationTime?: number;
  animationIn?: EntryOrExitLayoutType;
  animationOut?: EntryOrExitLayoutType;
  backdropColor?: string;
  overlayStyle?: ViewStyle;
  onPressBackdrop?: () => void;
};
