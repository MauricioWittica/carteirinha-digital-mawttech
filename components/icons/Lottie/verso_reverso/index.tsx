import React from 'react';
import LottieView from 'lottie-react-native';

export default class VersoReversoIcon extends React.Component {
  render() {
    return <LottieView source={require('./../../../../assets/verso_reverso.json')} autoPlay loop />;
  }
}