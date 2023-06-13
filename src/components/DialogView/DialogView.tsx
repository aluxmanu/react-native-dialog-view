import { Portal } from '@gorhom/portal';
import React, { useEffect, useMemo, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { FullWindowOverlay } from 'react-native-screens';

import { DialogViewProps } from './DialogViewProps';
import { styleSet } from './DialogViewStyle';
import {
  ANIMATION_DIALOG_VIEW,
  PORTAL_HOST_NAME,
} from '../../constants/general';

const DialogView: React.FC<DialogViewProps> = (props) => {
  const {
    children,
    visible,
    animationTime = ANIMATION_DIALOG_VIEW,
    overlayStyle,
    backdropColor = 'transparent',
    onPressBackdrop,
  } = props;
  const [isModalVisible, setIsModalVisible] = useState(visible);
  const styles = useMemo(() => styleSet, []);
  const animatedStyle = useAnimatedStyle(() => {
    const newOpacity = withTiming(visible ? 1 : 0, {
      duration: animationTime,
    });
    const newTranslateY = withTiming(visible ? 0 : 100);
    return {
      opacity: newOpacity,
      transform: [{ translateY: newTranslateY }],
    };
  }, [visible]);

  useEffect(() => {
    if (visible) {
      setIsModalVisible(true);
    } else {
      setModalHidden();
    }
  }, [visible]);

  const setModalHidden = () => {
    setTimeout(() => {
      setIsModalVisible(false);
    }, animationTime);
  };

  const onPressHide = () => {
    if (onPressBackdrop) {
      onPressBackdrop();
      setModalHidden();
    }
  };

  return (
    <Portal hostName={PORTAL_HOST_NAME}>
      <FullWindowOverlay>
        {isModalVisible ? (
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
                onPressHide();
              }}
              style={styles.overlay}
            />
            {children}
          </Animated.View>
        ) : null}
      </FullWindowOverlay>
    </Portal>
  );
};

export default React.memo(DialogView);
