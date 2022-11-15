import React from "react"
import { View, Text,TouchableOpacity} from "react-native"
import styles from "./styles"
import MailPlus from 'react-native-vector-icons/MaterialCommunityIcons'
import Question from 'react-native-vector-icons/FontAwesome'
import User from 'react-native-vector-icons/AntDesign'
export default function Cabecalho (){
    return(
        <View style={styles.Container}>
           
           <View style={styles.viewCabecalho}>
                
                <View style={styles.viewUser}>
                    <TouchableOpacity>
                        <User style={styles.userLogo} name="user" ></User> 
                    </TouchableOpacity>
                    <Text style ={styles.textUsuario}>Olá, Pedro </Text> 
                 </View>

                <View style={styles.viewIcons}> 
                    <TouchableOpacity>
                        <MailPlus name="eye-outline" size={28} color="#FFF" ></MailPlus>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Question name= "question-circle-o" size={28} color="#FFF" ></Question>
                    </TouchableOpacity>
                   
                   <TouchableOpacity>
                        <MailPlus name= "email-plus-outline" size={28} color="#FFF" ></MailPlus>
                   </TouchableOpacity>
                   
                    

                   
                </View>
                
           </View>
          
          
          
          
           
           
        </View>
    )


}