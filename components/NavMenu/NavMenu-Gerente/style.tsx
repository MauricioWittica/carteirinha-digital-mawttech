
import { StyleSheet } from 'react-native';

const StyleNavMenu = StyleSheet.create({

modalView: {
    marginTop: 20,
    marginRight: 10,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 2,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
},
button: {
width:"100%",
    borderBottomColor:"#58876e",
    borderBottomWidth: 3,
    borderRadius: 2,
    padding: 10,
},


textStyle: {
    color: "#4d4d4d",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20
},
modalText: {
    fontSize: 20,

    marginBottom: 15,
    textAlign: "center"
}
})
;export default StyleNavMenu;