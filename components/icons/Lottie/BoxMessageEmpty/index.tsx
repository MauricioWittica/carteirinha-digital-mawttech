import React from 'react';
import LottieView from 'lottie-react-native';

export default class BoxMessageEmpty extends React.Component {
  render() {
    return <LottieView source={require('./../../../../assets/box_message_empty.json')} autoPlay loop />;
  }
}