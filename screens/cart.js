import React from "react";
import {View , Text, StyleSheet ,TouchableOpacity , ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Cartproduct from "../component/cartproduct";


export default function Cart({navigation}){
    return(
        
        <View style={style.container}>
            <ScrollView>
            <View style={style.header}>
                <TouchableOpacity onPress={()=>navigation.navigate('Main')}>
                         <Ionicons style={{fontSize:34,color:'black',right:80}} name="arrow-back"/>
                </TouchableOpacity>  
                <Text style={style.headertitle}>Shopping Cart</Text>
            </View>
            <View >
                <Cartproduct/>
            </View>
            </ScrollView>
            <View style={style.cartcost}>

                <View style={style.row}>
                    <Text style={style.smalltext}>Subtotal</Text>
                    <Text style={style.smalltext}>$567</Text>
                </View>

                <View style={style.row}>
                    <Text style={style.smalltext}>Shipping Charges</Text>
                    <Text style={style.smalltext}>$5.6</Text>
                </View>
        
                <View style={style.horizonline}></View>
                
                <View style={style.row}>
                    <Text style={style.bigtext}>Total </Text>
                    <Text style={style.bigtext}>$5.82</Text>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('shippingaddress')}>
                <View style={style.butn}>
                    <Text style={{color:'white', fontSize:18,fontWeight:'600'}}>Checkout</Text>
                </View>
                </TouchableOpacity>
                 
            </View>
        </View>
        
    );
}
const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        paddingVertical:30,
        paddingTop:60,
        paddingHorizontal:18,
             
    },
    headertitle:{
        fontSize:26,
        fontWeight:'600',
        right:20   
    },
    cartcost:{
        padding:20,
        height:230,
        backgroundColor:'white',
        display:'flex',
        justifyContent:'space-between',
        borderTopLeftRadius:16,
        borderTopRightRadius:16,
        borderColor:'green',
        borderWidth:1,
        bottom:0,
        alignSelf:'stretch'
    },
    row:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    horizonline:{
        borderBottomWidth:1,
        borderBottomColor:'#b5b5b5'
    },
    smalltext:{
        color:'grey'
    },
    bigtext:{
        fontSize:23,
        fontWeight:'700'
    },
    butn:{
        
        backgroundColor:"#6CC51D",
        padding:20,
        alignItems:'center',
        borderRadius:5,
        shadowColor:'black',
        shadowOffset:{height:2,width:2},
        shadowOpacity:0.2,
        marginTop:10,
        marginBottom:20,
      },
    
})