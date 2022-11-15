import React from "react";
import {View,Text,TouchableOpacity} from 'react-native';
import styles from "./styles";
import Setinha from "react-native-vector-icons/AntDesign"
import Pagamento from "react-native-vector-icons/MaterialCommunityIcons"

export default function More(){
    return(
        <View style={styles.viewContainer}>
           
           
           <View style={styles.boxAcompanhe}>
                <Text style={styles.textTitle}>Acompanhe também</Text>
                <TouchableOpacity style={styles.viewAcompanheTambem}>
                    <Pagamento name="account-cash-outline" size={28} color= "#BA4DE3"></Pagamento>
                    <Text style={styles.textAcompanheTambem}>Assistente de pagamentos</Text>
                </TouchableOpacity>
           </View>
           
           <View style={styles.viewContainerEmprestimo}>
                <View style={styles.viewEmprestimo}> 
                    <Text style={styles.textEmprestimo}>Empréstimo</Text>
                    <Setinha name="right" size={20} color = "#7F80A3"></Setinha>
                </View>
                <View>
                    <Text style={styles.textValorEmprestimo}> Valor disponível de até </Text>
                    <Text style={styles.textValorEmprestimo}> R$ 25.000,00</Text>
                </View>
                
            </View>
       
            
       
       
       
       
        </View>

    )
}