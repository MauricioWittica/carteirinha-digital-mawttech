import React from 'react';
import LottieView from 'lottie-react-native';

export default class SucessofullRegisterIcon extends React.Component {
  render() {
    return (
      
            <LottieView  source={require('./../../../../assets/sucessefull.json')} autoPlay loop={false}/>
        
    );
  }
}