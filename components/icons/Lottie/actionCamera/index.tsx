import React from 'react';
import LottieView from 'lottie-react-native';

export default class ActionCameraIcon extends React.Component {
  render() {
    return (
      
            <LottieView  source={require('./../../../../assets/action_camera_3.json')} autoPlay loop />
        
    );
  }
}