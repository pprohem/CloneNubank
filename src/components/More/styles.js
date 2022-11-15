import { StyleSheet, Dimensions } from "react-native"
const{width,height}= Dimensions.get("screen")

const styles = StyleSheet.create({
    viewContainer:{
        height: height * 0.38,
        backgroundColor: "#F5F5F5"
    },

    boxAcompanhe:{
       
        height:height * 0.18,
        borderBottomWidth:2,
        borderColor: "#D9D9D9"
    },

    textTitle:{
        fontSize: 20,
        fontWeight: "500",
        marginLeft: 16,
        marginTop: 20
    },

    viewAcompanheTambem:{
        height: height * 0.07,
        width: width * 0.9,
        backgroundColor: "#D9D9D9",
        borderRadius: 15,
        flexDirection: "row",
        alignItems: "center",
        padding:15,
        marginLeft:16,
        marginTop:20
    },

    textAcompanheTambem:{
        fontSize: 15,
        fontWeight:"500",
        marginLeft: 15
    },

    viewContainerEmprestimo:{
        backgroundColor: "#F5F5F5",
        height: height * 0.11,
    },


    viewEmprestimo:{
        justifyContent: 'space-between',
        flexDirection:"row",
        marginRight: 25,
        marginTop: 20,
        
    },

    textEmprestimo:{
        fontSize: 20,
        fontWeight:"500",
        marginLeft: 15,
        marginBotton: 100
    },

    textValorEmprestimo:{
        fontSize: 15,
        fontWeight:"500",
        marginLeft: 15,
        color: "grey",
        marginTop:3
    },


})

export default styles;