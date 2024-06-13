import {Gesture} from 'react-native-gesture-handler';
import {SharedValue, withDecay, withSpring} from 'react-native-reanimated';

interface UsePanGestureParams {
  height: number;
  setIsVisible: (visible: boolean) => void;
  translateY: SharedValue<number>;
}

export const usePanGesture = ({
  height,
  setIsVisible,
  translateY,
}: UsePanGestureParams) => {
  const gesture = Gesture.Pan()
    .onChange(event => {
      const newY = translateY.value + event.changeY;
      if (newY < height * 0.5) {
        translateY.value = height * 0.5;
      } else {
        translateY.value = newY;
      }
    })
    .onEnd(event => {
      translateY.value = withDecay({
        velocity: event.velocityY,
        clamp: [height * 0.5, height],
      });

      if (translateY.value > height * 0.75) {
        translateY.value = withSpring(height, {damping: 10});
        setIsVisible(false);
      } else if (translateY.value < height * 0.5) {
        translateY.value = withSpring(height * 0.5, {damping: 10});
      }
    });

  return gesture;
};
