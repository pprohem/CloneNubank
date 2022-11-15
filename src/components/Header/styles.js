import { StyleSheet, Dimensions } from "react-native"
const{width,height}= Dimensions.get("screen")
const styles = StyleSheet.create({
    Container:{
    backgroundColor: "#8A05BE",
    width: "100%",
    height: height * 0.24 
    },
    textUsuario:{
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFF",
    },




    viewCabecalho:{
        flexDirection:"row",
        alignItems: "center",
        marginTop: 55,
        justifyContent: 'space-evenly'


    },

    viewUser:{
        
        justifyContent: "space-around",
        marginLeft: 10,
        height: 140,
        width: 150,
    },

    userLogo: {
        height: 50,
        width: 50,
        borderRadius:100,
        backgroundColor: "#BA4DE3",
        fontSize: 30,
        padding: 10,
        color: "#f1f1f1"
        
    },



    viewIcons:{
        alignItems: "center",
        height: "80%",
        width: "40%",
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 60
    }
})

 export default styles