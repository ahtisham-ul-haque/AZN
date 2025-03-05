import React, { useEffect } from 'react';
import { StyleSheet, Image,View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';

const PinScreen = ({navigation}) => {
          useEffect(() => {

                    const timer = setTimeout(() => {
                      navigation.navigate('Home'); // 
                    }, 5000);
                
                  
                    return () => clearTimeout(timer);
                  }, [navigation,]);
  return (
          <ImageBackground 
          source={require('../../assets/images/splash.jpeg')}
          style={styles.container}>
 <Image
            style={{ height: 50, width: 50 }}
            source={require('../../assets/images/logo.png')}
          />
      <Text style={styles.title}>Enter Your PIN</Text>

      {/* PIN Pad */}
      <View style={{marginVertical:20,alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
<View style={{borderWidth:1,height:25,width:25,borderRadius:15,borderColor:'#fff'}}>

</View>
<View style={{borderWidth:1,height:25,width:25,borderRadius:15,marginLeft:15,borderColor:'#fff'}}>

</View>
<View style={{borderWidth:1,height:25,width:25,borderRadius:15,marginLeft:15,borderColor:'#fff'}}>

</View>
<View style={{borderWidth:1,height:25,width:25,borderRadius:15,marginLeft:15,borderColor:'#fff'}}>

</View>
      </View>
      <View style={styles.pinPad}>
          
        <View style={styles.row}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>1</Text>
            <Text style={styles.buttonSubText}>ABC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>2</Text>
            <Text style={styles.buttonSubText}>DEF</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>3</Text>
            <Text style={styles.buttonSubText}>GHI</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>4</Text>
            <Text style={styles.buttonSubText}>JKL</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>5</Text>
            <Text style={styles.buttonSubText}>MNO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>6</Text>
            <Text style={styles.buttonSubText}>PQRS</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>7</Text>
            <Text style={styles.buttonSubText}>TUV</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>8</Text>
            <Text style={styles.buttonSubText}>WXYZ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>9</Text>
            <Text style={styles.buttonSubText}></Text>
          </TouchableOpacity>
          
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.buttons}>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
           <Icon name='close-circle' size={30} color={'#fff'}/>
          </TouchableOpacity>
        </View>
        
      </View>

      {/* Footer Buttons */}
      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.footerText}>Forgot PIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerText}>Deregister</Text>
        </TouchableOpacity>
        
      </View>
    </ImageBackground>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color:'#fff'
  },
  pinPad: {
    width: '80%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3178B8',
    borderRadius: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttons: {
          width: 80,
          height: 80,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 40,
         
        },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color:'#fff'
  },
  buttonSubText: {
    fontSize: 13,
    color: '#fff',

  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 40,
  },
  footerText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default PinScreen;