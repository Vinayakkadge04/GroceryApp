import React , {useState} from 'react';
import { View, 
  Text, 
  Button, 
  StyleSheet, 
  ImageBackground, 
  TouchableOpacity, 
  TextInput,
  Switch
 } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function LoginScreen({navigation}) {

  const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
      <View style={style.container}>
      <ImageBackground style={style.image} source={require('../assets/login.png')}>
        <View style={style.header}>
          <TouchableOpacity onPress={()=>navigation.navigate('welcome')}>
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
            <Text style={style.title}>Welcome Back!</Text>
          </View>
          <View>
            <Text style={[style.para , {paddingBottom:20}]}>Sign in to your account</Text>
          </View>
          <View>
          <View style={[style.textBox,{justifyContent:'start'}]}>
            <Ionicons name='mail-outline' size={28} color={'#868889'}/>
            <TextInput placeholder='Email Address' style={{fontSize:15, marginLeft:12}}/>
          </View>
          </View>
          <View style={style.textBox}>
            <View style={{flex:1,flexDirection:'row'}}>
              <Ionicons name='lock-closed-outline' size={28} color={'#868889'}/>
              <TextInput placeholder='Password' secureTextEntry={true} style={{fontSize:15, marginLeft:12}}/>
            </View>
            <Ionicons name='eye-outline' size={24} color={'#868889'}/>
          </View>
          <View style={{display:'flex', flexDirection:'row',justifyContent:'space-between',alignItems:'center', paddingTop:20}}>
            <View style={{display:'flex' , flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
            <Switch
              style={{transform:[{scaleX:.8},{scaleY:.7}]}}
              trackColor={{ false: "#fffff", true: "#6CC51D" }}
              onValueChange={toggleSwitch}
              value={isEnabled} />
              <Text>Remember me</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('forgot')}>
              <Text style={{color:'#407EC7'}}>Forgot Password</Text>
            </TouchableOpacity>
           
          </View>
          <TouchableOpacity onPress={()=>{navigation.navigate('signup')}}>
          <View style={style.butn}>
            <Text style={{color:'white', fontSize:18,fontWeight:'600'}}>Login</Text>
          </View>
          </TouchableOpacity>
          <View style={style.richtext}>
            <Text style={{color:'grey',fontSize:18}}>Don't have an account? </Text>
            <TouchableOpacity onPress={()=>navigation.navigate('signup')}>
                <Text style={{fontSize:18,fontWeight:'600'}}>Sign up</Text>
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
      marginTop:10
    },
    richtext:{
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      paddingTop:20
    }
  });