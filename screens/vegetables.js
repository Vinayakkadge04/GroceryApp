import React from "react";
import { StyleSheet ,View , TouchableOpacity , Text, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import ProductContainer from "../component/productcontainer";

export default function Vegetables({navigation}){
    return(
        <View>
         <View style={style.header}>
                <TouchableOpacity onPress={()=>navigation.navigate('Main')}>
                         <Ionicons style={{fontSize:34,color:'black'}} name="arrow-back"/>
                </TouchableOpacity>
                
                <Text style={style.headertitle}>Vegetables</Text>
                <Ionicons style={{fontSize:34,color:'black'}} name="options-sharp"/>
            </View>
            <ScrollView>
                <View style={style.container}>
                <ProductContainer/>
                </View>
                
            </ScrollView>
            
    </View>
    )
}

const style = StyleSheet.create({
    header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'white',
        paddingVertical:30,
        paddingTop:60,
        paddingHorizontal:18,
        
        
    },
    headertitle:{
        fontSize:26,
        fontWeight:'600'
    },
    container:{
        padding:20
    }
})