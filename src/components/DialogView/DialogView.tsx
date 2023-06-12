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
    overlayStyle,
    backdropColor = 'transparent',
    activeBackdrop = false,
    hideModal,
  } = props;
  const [isModalVisible, setIsModalVisible] = useState(visible);
  const styles = useMemo(() => styleSet, []);
  const animatedStyle = useAnimatedStyle(() => {
    const newOpacity = withTiming(isModalVisible || visible ? 1 : 0, {
      duration: animationTime,
    });
    const newTranslateY = withTiming(isModalVisible || visible ? 0 : 100);
    return {
      opacity: newOpacity,
      transform: [{ translateY: newTranslateY }],
    };
  }, [isModalVisible, visible]);

  useEffect(() => {
    if (visible) {
      setIsModalVisible(true);
    } else {
      setTimeout(() => {
        setIsModalVisible(false);
        hideModal?.();
      }, animationTime);
    }
  }, [visible]);

  useEffect(() => {
    if (!isModalVisible) {
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
      {visible || isModalVisible ? (
        <Animated.View
          style={[
            styles.container,
            styles.overlay,
            { backgroundColor: backdropColor },
            overlayStyle,
            animatedStyle,
          ]}
        >
          <TouchableOpacity
            activeOpacity={0}
            onPress={() => {
              activeBackdrop && onPressHide();
            }}
            style={styles.overlay}
          />
          {children}
        </Animated.View>
      ) : null}
    </Portal>
  );
};

export default React.memo(DialogView);
