import { Portal } from '@gorhom/portal';
import React, { useEffect, useMemo, useState } from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
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
    animationIn = FadeIn,
    animationOut = FadeOut,
    overlayStyle,
    backdropColor = 'transparent',
    onPressBackdrop,
  } = props;
  const [isModalVisible, setIsModalVisible] = useState(visible);
  const styles = useMemo(() => styleSet, []);

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

  const getModalComponent = () => {
    return isModalVisible ? (
      <Animated.View
        entering={animationIn}
        exiting={animationOut}
        style={[
          styles.container,
          styles.overlay,
          { backgroundColor: backdropColor },
          overlayStyle,
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
    ) : null;
  };

  const getOSModal = () => {
    if (Platform.OS === 'ios') {
      return <FullWindowOverlay>{getModalComponent()}</FullWindowOverlay>;
    }
    return getModalComponent();
  };

  return <Portal hostName={PORTAL_HOST_NAME}>{getOSModal()}</Portal>;
};

export default React.memo(DialogView);
