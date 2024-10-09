import React from "react";
import {View , Text , Image , TextInput , StyleSheet , ScrollView, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProductContainer from "../component/productcontainer";

export default function HomeScreen({navigation}){
    return (
        <View style={{padding:20,paddingTop:50}}>
            <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{gap:10,marginVertical:10,paddingVertical:10}}>
                
            <View style={[style.container,{justifyContent:'space-between',padding:20,borderRadius:8,backgroundColor:"#e6e6f0"}]}>
                <View style={[style.container]}>
                    <Ionicons style={style.icon} name="search"/>
                    <TextInput style={[style.textInput,{marginLeft:10}]} placeholder="Search keywords..."/>
                </View>
                <Ionicons style={style.icon} name="menu"/>
            </View>
            
       
            <ScrollView horizontal={true}
            showsHorizontalScrollIndicator={false}>
               
            <View style={style.category}>
                <View >  
                <Image style={style.bannercontainer}
                    source={require('../assets/banner2.webp')}/>
                </View>
                <View >
                <Image style={style.bannercontainer}
                    source={require('../assets/home-banner.png')}/>
                </View>
            </View>
            </ScrollView>
            
            <View style={[style.container,{justifyContent:'space-between'}]}>
                <Text style={style.title}>
                    Categories
                </Text>
                <TouchableOpacity onPress={()=>navigation.navigate('category')}>
                    <Ionicons style={style.icon} name='chevron-forward'/>   
                </TouchableOpacity>
                
            </View>
            
            <ScrollView horizontal='true'>
                <View style={style.category}>
                <View style={style.category2}>
                    <View style={[style.categoryImage,{backgroundColor:'#E6F2EA'}]}>
                        <Image source={require('../assets/vege.png')}/>
                    </View>
                    <Text style={{color:'#868889',fontSize:12}}>Vegetables</Text>
                </View>
                <View style={style.category2}>
                    <View style={[{backgroundColor:'#FFE9E5'},style.categoryImage]}>
                        <Image source={require('../assets/apple.png')}/>
                    </View>
                    <Text style={{color:'#868889',fontSize:12}}>Fruits</Text>
                </View>
                <View style={style.category2}>
                    <View style={[style.categoryImage,{backgroundColor:'#FFF6E3',}]}>
                        <Image source={require('../assets/beverages.png')}/>
                    </View>
                    <Text style={{color:'#868889',fontSize:12}}>Beverages</Text>
                </View>
                <View style={style.category2}>
                    <View style={[style.categoryImage,{backgroundColor:'#F3EFFA'}]}>
                        <Image source={require('../assets/grocery.png')}/>
                    </View>
                    <Text style={{color:'#868889',fontSize:12}}>Grocery</Text>
                </View>
                <View style={style.category2}>
                    <View style={[style.categoryImage,{backgroundColor:'#DCF4F5'}]}>
                        <Image source={require('../assets/oil.png')}/>
                    </View>
                    <Text style={{color:'#868889',fontSize:12}}>Edible oil</Text>
                </View>

                <View style={style.category2}>
                    <View style={[style.categoryImage,{backgroundColor:'#FFE8F2'}]}>
                        <Image source={require('../assets/household.png')}/>
                    </View>
                    <Text style={{color:'#868889',fontSize:12}}>Household</Text>
                </View>

                <View style={style.category2}>
                    <View style={[style.categoryImage,{backgroundColor:'#D2EFFF'}]}>
                        <Image source={require('../assets/babycare.png')}/>
                    </View>
                    <Text style={{color:'#868889',fontSize:12}}>Babycare</Text>
                </View>

                </View>
                
            </ScrollView>

            <View style={[style.container,{justifyContent:'space-between',paddingTop:20}]}>
                <Text style={style.title}>
                    Featured products
                </Text>
                <TouchableOpacity onPress={()=>navigation.navigate('vegetable')}>
                 <Ionicons style={style.icon} name='chevron-forward'/>   
                </TouchableOpacity>
               
            </View>
            <TouchableOpacity onPress={()=> navigation.navigate('describe')}>
                     <ProductContainer/>
            </TouchableOpacity>
            
            </ScrollView>
        </View>
    );
}
const style = StyleSheet.create(
    {
        container:{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
        },
        icon:{
            fontSize:22,
            color:'#868889'
        },
        textInput:{
            fontSize:18,
            color:'#868889'
        },
        homebanner:{
            resizeMode:'containe',
           
            marginVertical:10
        },
        title:{
            fontSize:18,
            fontWeight:'700',
        },
        category:{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            gap:10,
        },
        category2:{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            gap:8
        },
        categoryImage:{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            borderRadius:30,
            height:60,
            width:60
        },
        topslider:{
            flexDirection:'row',
            alignItems:'center'
        },
        bannercontainer:{
            height:300,
            width:500,
            resizeMode:'cover'
        }
    }
)