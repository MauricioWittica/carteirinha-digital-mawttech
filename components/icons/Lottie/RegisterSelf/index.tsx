import React from 'react';
import LottieView from 'lottie-react-native';

export default class RegisterSelfIcon extends React.Component {
  render() {
    return (
      
            <LottieView  source={require('./../../../../assets/self.json')} autoPlay loop />
        
    );
  }
}