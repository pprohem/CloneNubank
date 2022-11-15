import React from "react";
import { View,Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Cifrao from 'react-native-vector-icons/MaterialIcons'
import Shop from 'react-native-vector-icons/MaterialCommunityIcons'
import Swap from 'react-native-vector-icons/MaterialCommunityIcons'
export default function Footer (){
    return(
        <View style={styles.opacidade}> 
            <View style={styles.viewIcons}>  
                <TouchableOpacity>
                    <Swap name="swap-vertical" size={30} color="#BA4DE3"></Swap> 
                </TouchableOpacity>
                
                <TouchableOpacity >
                    <Cifrao name="attach-money" size={30} color="grey"></Cifrao>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Shop name="shopping-outline" size={30} color="grey"></Shop>
                
                </TouchableOpacity>

                
                
                
               
                
            </View>

        </View>
    )
}