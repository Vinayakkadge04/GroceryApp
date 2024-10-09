import React from 'react';
import { View, 
  Text,
  StyleSheet, 
  ImageBackground, 
  TouchableOpacity, 
  TextInput,
  Switch
 } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function Signup({navigation}) {
    return (
      <View style={style.container}>
      <ImageBackground style={style.image} source={require('../assets/signup.png')}>
        <View style={style.header}>
          <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
          <Ionicons name='arrow-back-outline' size={30} color={'white'} />
          </TouchableOpacity>
          <View style={{flex:1,flexDirection:'row',justifyContent:'center'}}>
          <Text style={{
            fontSize: 22,
            fontWeight: '600',
            color: 'white',
          }}>Welcome</Text>
          </View>
        </View>
        <View style={style.bottomcontainer}>
          <View>
            <Text style={style.title}>Create account</Text>
          </View>
          <View>
            <Text style={[style.para , {paddingBottom:20}]}>Quickly create account</Text>
          </View>
        
          <View style={[style.textBox,{justifyContent:'start'}]}>
            <Ionicons name='mail-outline' size={28} color={'#868889'}/>
            <TextInput placeholder='Email Address' style={{fontSize:15, marginLeft:12}}/>
          </View>

          <View style={[style.textBox,{justifyContent:'start'}]}>
            <Ionicons name='call-outline' size={28} color={'#868889'}/>
            <TextInput placeholder='Phone number' style={{fontSize:15, marginLeft:12}}/>
          </View>


          <View style={style.textBox}>
            <View style={{flex:1,flexDirection:'row'}}>
              <Ionicons name='lock-closed-outline' size={28} color={'#868889'}/>
              <TextInput placeholder='Password' secureTextEntry={true} style={{fontSize:15, marginLeft:12}}/>
            </View>
            <Ionicons name='eye-outline' size={24} color={'#868889'}/>
          </View>
          
          <TouchableOpacity onPress={()=>{navigation.navigate('Main')}}>
          <View style={style.butn}>
            <Text style={{color:'white', fontSize:18,fontWeight:'600'}}>Signup</Text>
          </View>
          </TouchableOpacity>
          <View style={style.richtext}>
            <Text style={{color:'grey',fontSize:18}}>Already have an account ?</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                <Text style={{fontSize:18,fontWeight:'600'}}>Login</Text>
            </TouchableOpacity>
            
          </View>
        </View>
      </ImageBackground>
    </View>
    );
  }

  const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between'
    },
    image: {
      flex: 1,
      justifyContent: 'center',
      
    },
    text: {
      color: 'white',
      fontSize: 42,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000c0',
    },
    header: {
      flex: 1,
      flexDirection: 'row',
      paddingTop: 60,
      justifyContent:'center'
    },
    bottomcontainer: {
      backgroundColor: '#F4F5F9',
      padding:20,
      borderRadius:12
    },
    title:{
      fontSize:25,
      color:'black',
      fontWeight:'700'
    },
    para:{
      color:'#868889',
      fontSize:18
    },
    textBox:{
      backgroundColor:'white',
      padding:14,
      alignItems:'center',
      justifyContent:'space-between',
      shadowColor:'black',
      shadowOffset:{height:2,width:2},
      shadowOpacity:0.2,
      marginTop:10,
      display:'flex',
      flexDirection:'row',
      borderRadius:4
    },
    butn:{
      backgroundColor:"#6CC51D",
      padding:17,
      alignItems:'center',
      borderRadius:5,
      shadowColor:'black',
      shadowOffset:{height:2,width:2},
      shadowOpacity:0.2,
      marginTop:20
    },
    richtext:{
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      paddingTop:20
    }
  });