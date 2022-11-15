import { StyleSheet, Dimensions } from "react-native"
const{height}= Dimensions.get("screen")

const styles = StyleSheet.create ({
    opacidade:{
     height: height *0.07, 
     opacity:0.9, 
     position:"absolute",
     bottom: 0,
     left: 0,
     right: 0 
    },
    viewIcons:{
        flexDirection:"row",
        justifyContent: "space-around",
        backgroundColor: '#F1F1F1',
        padding: 15,
        borderTopWidth:2,
        borderColor: "#D9D9D9",   
    }


})

export default styles;