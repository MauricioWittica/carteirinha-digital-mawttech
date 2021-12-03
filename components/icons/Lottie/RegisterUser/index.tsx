import React from 'react';
import LottieView from 'lottie-react-native';

export default class RegisterUserIcon extends React.Component {
  render() {
    return (
      
            <LottieView  source={require('./../../../../assets/register_user.json')} autoPlay loop />
        
    );
  }
}