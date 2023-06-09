import { Portal } from '@gorhom/portal';
import React, { useEffect, useMemo, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import type { ModalProps } from './ModalProps';
import { styleSet } from './ModalStyle';
import { ANIMATION_MODAL } from 'src/constants/general';

const Modal: React.FC<ModalProps> = (props) => {
  const { children, visible, hideModal } = props;
  const [isModalVisible, setIsModalVisible] = useState(visible);
  const styles = useMemo(() => styleSet, []);
  const animatedStyle = useAnimatedStyle(() => {
    const newOpacity = withTiming(isModalVisible ? 1 : 0, {
      duration: ANIMATION_MODAL,
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
      }, ANIMATION_MODAL);
    }
  }, [isModalVisible]);

  const onPressHide = () => {
    setIsModalVisible(false);
  };

  return (
    <Portal>
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

export default React.memo(Modal);
