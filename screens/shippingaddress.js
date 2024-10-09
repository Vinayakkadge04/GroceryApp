import React , {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity ,TextInput , Switch} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ShippingAddress({navigation}) {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View>
            <View style={style.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                    <Ionicons style={{ fontSize: 34, color: 'black', right: 80 }} name="arrow-back" />
                </TouchableOpacity>
                <Text style={style.headertitle}>Shipping Address</Text>
            </View>


            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                <View>
                    <View style={style.circle}>
                        <Ionicons style={style.icon} name='checkmark-sharp' />
                    </View>
                    <Text style={style.smalltext}>Delivery</Text>
                </View>
                <View style={style.horizonline}></View>
                <View>
                    <View style={[style.circle, { backgroundColor: 'white' }]}>
                        <Text style={{ color: 'grey', fontSize: 20 }}>2</Text>
                    </View>
                    <Text style={style.smalltext}>Address</Text>
                </View>
                <View style={[style.horizonline, { backgroundColor: 'grey' }]}></View>
                <View>
                    <View style={[style.circle, { backgroundColor: 'white' }]}>
                        <Text style={{ color: 'grey', fontSize: 20 }}>3</Text>
                    </View>
                    <Text style={style.smalltext}>Payment</Text>
                </View>
            </View>

            <View style={{marginHorizontal:20,marginTop:40}}>
                <View style={style.textbox}>
                    <Ionicons size={28} color={'grey'} name="person-outline"/>
                    <TextInput style={style.inputtext} placeholder="Name"/>
                </View>
                <View style={style.textbox}>
                    <Ionicons size={28} color={'grey'} name="mail-outline"/>
                    <TextInput style={style.inputtext} placeholder="Email Address"/>
                </View>
                <View style={style.textbox}>
                    <Ionicons size={28} color={'grey'} name="call-outline"/>
                    <TextInput style={style.inputtext} placeholder="Phone number"/>
                </View>
                <View style={style.textbox}>
                    <Ionicons size={28} color={'grey'} name="location-outline"/>
                    <TextInput style={style.inputtext} placeholder="Address"/>
                </View>
                <View style={style.textbox}>
                    <Ionicons size={28} color={'grey'} name="card-outline"/>
                    <TextInput style={style.inputtext} placeholder="Zip code"/>
                </View>
                <View style={style.textbox}>
                    <Ionicons size={28} color={'grey'} name="map-outline"/>
                    <TextInput style={style.inputtext} placeholder="City"/>
                </View>
                <View style={style.textbox}>
                    <Ionicons size={28} color={'grey'} name="earth-outline"/>
                    <TextInput style={style.inputtext} placeholder="Country"/>
                </View>
            </View>

            <View style={{display:'flex' , flexDirection:'row',justifyContent:'flex-start',alignItems:'center',margin:20,}}>
              <Switch
              style={{transform:[{scaleX:.8},{scaleY:.7}]}}
              trackColor={{ false: "#fffff", true: "#6CC51D" }}
              onValueChange={toggleSwitch}
              value={isEnabled} />
              <Text>Remember me</Text>
            </View>

            <TouchableOpacity onPress={()=>{navigation.navigate('shipmethod')}}>
                <View style={style.butn}>
                    <Text style={{color:'white', fontSize:18,fontWeight:'600'}}>Next</Text>
                </View>
          </TouchableOpacity>

        </View>
    );
}

const style = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingVertical: 30,
        paddingTop: 60,
        paddingHorizontal: 18,

    },
    headertitle: {
        fontSize: 26,
        fontWeight: '600',
        right: 20
    },
    circle: {
        height: 45,
        width: 45,
        backgroundColor: '#6CC51D',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        left: 4
    },
    horizonline: {
        width: 100,
        height: 1,
        backgroundColor: '#6CC51D',
        bottom: 10
    },
    smalltext: {
        color: 'grey',
        fontSize: 16
    },
    icon: {
        fontSize: 25,
        fontWeight: '600',
        color: 'white'
    },
    inputicon:{

    },
    textbox:{
        backgroundColor:'white',
        padding:14,
        alignItems:'center',
        shadowColor:'black',
        shadowOffset:{height:2,width:2},
        shadowOpacity:0.2,
        marginTop:10,
        display:'flex',
        flexDirection:'row',
        borderRadius:6,
        alignSelf:'stretch',
        gap:10,
        paddingVertical:18
      },
      inputtext:{
        fontSize:18
      },
      butn:{
        backgroundColor:"#6CC51D",
        padding:17,
        alignItems:'center',
        borderRadius:5,
        shadowColor:'black',
        shadowOffset:{height:2,width:2},
        shadowOpacity:0.2,
        marginHorizontal:20

      },
})