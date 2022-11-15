import React from "react";
import { View, Text, TouchableOpacity} from "react-native";
import styles from "./styles";
import Barcode from "react-native-vector-icons/MaterialCommunityIcons"
import Cards from "react-native-vector-icons/MaterialCommunityIcons"
import Setinha from "react-native-vector-icons/AntDesign"
import Coin from "react-native-vector-icons/FontAwesome5"
import Transfer from "react-native-vector-icons/MaterialCommunityIcons"
import Pix from "react-native-vector-icons/Octicons"

export default function Body(){
    return (
        <> 
        <View style={styles.viewContainer}>
            
            <View style={styles.viewConta}>
                <View style={styles.viewContaRight}> 
                    <Text style={styles.contaText}> Conta </Text>
                    <Setinha name="right" size={20} color = "#7F80A3"></Setinha>
                </View>
                
                <Text style={styles.contaText}> R$87.574,90</Text>
            </View>
           
            
            
            <View style={styles.viewIcons}> 
                <TouchableOpacity style={styles.viewIconsText}>
                    <Pix style={styles.iconButton} name="diamond" size={38} color="#000" > </Pix>
                    <Text>Pix</Text> 
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.viewIconsText}>
                    <Barcode style={styles.iconButton} name="barcode" size={40} color="#000" > </Barcode>
                    <Text>Pagar</Text> 
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.viewIconsText}>
                    <Coin style={styles.iconButton} name="coins" size={35} color="#000" > </Coin>
                    <Text>Cripto</Text> 
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.viewIconsText}>
                    <Transfer style={styles.iconButton} name="bank-transfer" size={40} color="#000" > </Transfer>
                    <Text>Transferir</Text> 
                </TouchableOpacity>

                </View>
            
                <View style={styles.viewBoxes}>
                    <TouchableOpacity style={styles.viewMyCards}>
                        <Cards name="cards-outline" size={30} color="#000"></Cards>
                        <Text style={styles.textMyCards}> Meus cartões</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.viewBoxText}>
                        <Text style={styles.viewText}> 
                        <Text style={styles.textNovidade}>Novidade! </Text> 
                         Conheça a ferramenta {'\n'} de Controle de Gastos do Nubank.</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
            
            <View style={styles.viewCartaoContainer}>
                    <View style={styles.viewCartao}> 
                    <Text style={styles.textCartao}> Cartão de crédito </Text>
                    <Setinha style={styles.setinhaCartao} name="right" size={20} color = "#7F80A3"></Setinha>
                </View>

                <View>
                    <Text style={ styles.textLimite}>Fatura atual</Text>
                    <Text style={ styles.textFatura}>R$4.740,90</Text>
                    <Text style={ styles.textLimite}>Limite disponivel de R$5.259,10</Text>
                    
                    
                    <TouchableOpacity style={styles.viewParcelar}>
                    <Text style={styles.textParcelar}>Parcelar compras</Text>
                    </TouchableOpacity>
 
                 </View>

            </View>
            </>
    )
}