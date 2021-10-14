import  React , { useContext } from 'react';
import { IconButton } from 'react-native-paper';
import { NavMenuContext } from '../../../contexts/navMenu';
import { MoreVertIcon } from '../../icons/More-Vert/index';
import { useNavigation } from '@react-navigation/native';




const ListItemsNavMenuDashboard = ()=>{
const {isEnabled, toggleButton} = useContext(NavMenuContext);
const navigation = useNavigation();
    console.log(isEnabled ? "Abrindo NavMenu" : "Fechando NavMenu");


const iscolor = isEnabled ? "white":"black";


    return(

        <IconButton icon={({ size, color }) => (
            <MoreVertIcon size={24} color={iscolor}/>     

             )} onPress={()=>{toggleButton()}}/>
    );
}
export default ListItemsNavMenuDashboard;