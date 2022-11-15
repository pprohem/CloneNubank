import { StyleSheet, Dimensions } from "react-native"
const{width,height}= Dimensions.get("screen")

const styles = StyleSheet.create({
  viewContainer:{
    backgroundColor: "#F5F5F5",
    height: height*0.59,
    borderBottomWidth: 55,
    borderColor: "#D5D5D5",
    },

  viewContaRight: {
    justifyContent: 'space-between',
    flexDirection:"row",
    marginRight: 25,
    
  },

  viewConta:{
   
    height: height*0.12,
    justifyContent: "space-around"
  },

  contaText: {
    fontSize: 20,
    fontWeight: "500",
    marginLeft: 25
  },

  viewIcons: {
    marginTop: 25,
    flexDirection: "row",
    // backgroundColor: "#7F80A3",
    height: height *0.15,
    justifyContent: "space-evenly",
    alignItems: "center"
  },

  viewIconsText:{
    width: "auto",
    height:"auto",
    alignItems: "center",
  },

  iconButton:{

    backgroundColor: "#D9D9D9",
    height: 80,
    width: 80,
    borderRadius:100,
    padding: 20
 },

viewBoxes: {
    height: "55%",
    backgroundColor: "#F5F5F5",
    alignItems: "center"
},

viewMyCards: {
    width: "90%",
    height:"23%",
    backgroundColor: "#D9D9D9",
    marginTop: 20,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    padding: 15
    
},

textMyCards: {
    fontSize: 15,
    fontWeight:"600",
    marginLeft: 10
},

viewBoxText: {
backgroundColor: "#D9D9D9",
width: "90%",
height: 100,
marginTop: 25,
borderRadius: 25,
alignItems: "center",
justifyContent: "center"

},

viewText: {
  fontSize: 17
},

textNovidade:{
  color:"#BA4DE3",
  fontWeight: "bold"
},

viewCartaoContainer:{
  backgroundColor: "#F5F5F5",
  height: "auto",
  borderBottomWidth:2,
    borderColor: "#D5D5D5"

},


viewCartao:{
  flexDirection: "row",
  justifyContent: "space-between",
  marginLeft: 10,
  marginRight: 18,
  marginTop: 7,
},

textCartao:{
  fontSize: 20,
  fontWeight: "500",
  marginBotton: 20,
  marginTop: 20
},
setinhaCartao:{
  marginTop: 28
},

viewTextFatura:{
  justifyContent: "center",
  alignItems: "center",
  marginLeft: 20,
  marginBottom: 10
},

textFatura:{
  fontSize: 20,
  fontWeight: "400",
  marginLeft: 20,
  marginTop: 5

},

textLimite:{
  color: "grey",
  fontSize: 15,
  fontWeight: "600",
  marginLeft: 20,
  marginTop: 5
},

viewParcelar:{
  marginTop: 20,
  marginBottom: 20,
  width:width * 0.43,
  height: height * 0.05,
  backgroundColor:"#D9D9D9",
  borderRadius: 50,
  alignItems: "center",
  justifyContent: "center",
  marginLeft: 20
},

textParcelar:{
  fontWeight: "600",
  fontSize: 18
},

    
})

 export default styles