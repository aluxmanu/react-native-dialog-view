import { Portal } from '@gorhom/portal';
import React, { useEffect, useMemo, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import { DialogViewProps } from './DialogViewProps';
import { styleSet } from './DialogViewStyle';
import { ANIMATION_DIALOG_VIEW, PORTAL_HOST_NAME } from 'src/constants/general';

const DialogView: React.FC<DialogViewProps> = (props) => {
  const {
    children,
    visible,
    animationTime = ANIMATION_DIALOG_VIEW,
    hideModal,
  } = props;
  const [isModalVisible, setIsModalVisible] = useState(visible);
  const styles = useMemo(() => styleSet, []);
  const animatedStyle = useAnimatedStyle(() => {
    const newOpacity = withTiming(isModalVisible ? 1 : 0, {
      duration: animationTime,
    });
    const newTranslateY = withTiming(isModalVisible ? 0 : 100);
    return {
      opacity: newOpacity,
      transform: [{ translateY: newTranslateY }],
    };
  }, [isModalVisible]);

  useEffect(() => {
    setIsModalVisible(visible);
  }, [visible]);

  useEffect(() => {
    if (!isModalVisible && visible) {
      setTimeout(() => {
        hideModal?.();
      }, animationTime);
    }
  }, [isModalVisible]);

  const onPressHide = () => {
    setIsModalVisible(false);
  };

  return (
    <Portal hostName={PORTAL_HOST_NAME}>
      {visible ? (
        <Animated.View
          style={[styles.container, styles.overlay, animatedStyle]}
        >
          <TouchableOpacity onPress={onPressHide} style={styles.overlay} />
          {children}
        </Animated.View>
      ) : null}
    </Portal>
  );
};

export default React.memo(DialogView);
