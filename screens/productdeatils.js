
import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, SafeAreaView , ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Description({navigation}) {
    return (
        <ScrollView>
        <SafeAreaView style={{flex:1,backgroundColor:'#F2FFE6'}}>
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <Ionicons style={{fontSize:34,color:'black',top:36,left:30,zIndex:5}} name="arrow-back"/>
                </TouchableOpacity>
             <View style={style.container}>
            <View style={style.productbg}>
                <View style={{alignItems:'center'}}>
                <Image
                    source={require('../assets/lime.png')} />
                </View>
            </View>
            <View style={style.describecontainer}>
                <View style={{justifyContent:'space-between',flexDirection:'row'}}>
                <Text style={style.price}>$2.20</Text>
                <Ionicons style={{color:'grey', fontSize:24,marginRight:10}} name="heart-outline"/>
                </View>
                
                <Text style={style.producttitle}>Organic Lemons</Text>
                <Text style={style.quantity}>1.50 lbs</Text>
                <View style={style.review}>
                    <Text style={style.reviewcount}>4.5</Text>
                    <Image source={require('../assets/review.png')} />
                    <Text style={style.quantity}>(89 reviews)</Text>
                </View>
                <Text style={style.desc}>Organic Mountain works as a seller for many organic growers of organic lemons. Organic lemons are easy to spot in your produce aisle. They are just like regular lemons, but they will usually have a few more scars on the outside of the lemon skin. Organic lemons are considered to be the world's finest lemon for juicing</Text>
                <View style={style.btn1}>
                    <Text style={style.quantity}>Quantity</Text>
                    <View style={style.quantitycount}> 
                        <MaterialCommunityIcons style={{color:'#6CC51D', fontSize:24}} name='minus'/>
                        <View style={style.verticleLine}></View>
                        <Text>3</Text>
                        <View style={style.verticleLine}></View>
                        <MaterialCommunityIcons style={{color:'#6CC51D', fontSize:24}} name='plus'/>
                    </View>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('cart')}>
                    <View style={style.butn}>
                        <Text style={{color:'white', fontSize:18,fontWeight:'600'}}>Add to Cart</Text>
                    </View>
                </TouchableOpacity>
                
            </View>
        </View>
    </SafeAreaView>
    </ScrollView>
    )
}

const style = StyleSheet.create(
    {
        container: {
            flex:1,
            justifyContent:'space-between',
            backgroundColor:'white',
            marginTop:50
        },
        
      
        productbg: {
            backgroundColor: '#F2FFE6',
            padding:20,
            borderBottomLeftRadius: 150,
            borderBottomRightRadius: 150,
            marginBottom:60,
            height:300
        },
        describecontainer: {
            backgroundColor: '#F4F5F9',
            borderRadius: 20,
            alignSelf:'flex-end',
            paddingVertical:20,
            paddingHorizontal:10,

            
        },
        icon: {
            size: 40,
            color: 'black',
            marginLeft: 20
        },
        review: {
            display: 'flex',
            flexDirection: 'row',
            gap:5,
            alignItems:'center',
            paddingVertical:6
        },
        price:{
            color:'#6CC51D',
            fontSize:14,
            fontWeight:'400',
            marginVertical:2
        },
        producttitle:{
            fontSize:20,
            fontWeight:'600',
            color:'black',
            marginVertical:2
        },
        quantity:{
            color:'#868889',
            fontSize:14,
            marginVertical:2

        },
        reviewcount:{
            fontSize:16,
            fontWeight:'500'
        },
        desc:{
            color:'#868889',
            lineHeight:20
        },
        btn1:{
            backgroundColor:'white',
            borderRadius:6,
            shadowColor:'black',
            shadowOffset:{height:2,width:2},
            shadowOpacity:0.1,
            height:45,
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            flexDirection:'row',
            paddingHorizontal:16,
            marginTop:10
        },
        verticleLine:{
            height:45,
            width: 1,
            backgroundColor: '#BBBBBB',
            marginHorizontal:25
          },
          quantitycount:{
            flexDirection:'row',
            alignItems:'center'
          },
          butn:{
            backgroundColor:"#6CC51D",
            padding:17,
            alignItems:'center',
            borderRadius:5,
            shadowColor:'black',
            shadowOffset:{height:2,width:2},
            shadowOpacity:0.2,
            marginTop:10
          },
    }
)