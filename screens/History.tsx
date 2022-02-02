import React , { useState, useEffect } from 'react';
import styled  from 'styled-components';
import { Button,  TextInput} from 'react-native-paper';
import { Alert, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import TopToolBar from '../components/top-bar/Topbar';
import { NavMenuContext } from '../contexts/navMenu';
import History from '../components/HistoryPartido';
import MyHistory from './../components/MyHistory/index';


const Background = styled.View``;

const Card = styled.View`
padding: 20px;
justify-content: center;
align-items: center;

`;
Card.Title = styled.Text`
font-size: 30px;
text-align: center;
`;
const ScreenHistory
 = ({navigation,route}) => {
    const isFocused = useIsFocused();

    const [statePage, setStatePage] = useState<string | null>(null);
    
    useEffect(
        () => navigation.addListener('focus', () => setStatePage('History')),
        []
      );
      

    useEffect(
        () => navigation.addListener('blur', () => setStatePage(null)),
        []
      );
    
      return(
        <View>
            <MyHistory/>
        </View>
    );
}
export default ScreenHistory;