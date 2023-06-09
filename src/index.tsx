import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-dialog-view' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type DialogViewProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'DialogViewView';

export const DialogViewView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<DialogViewProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
