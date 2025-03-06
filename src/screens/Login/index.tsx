import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PinScreen = ({ navigation }) => {
  const [pin, setPin] = useState('');

  // Function to handle PIN input
  const handlePress = (value) => {
    if (pin.length < 4) {
      setPin(pin + value);
    }
  };

  // Function to handle delete
  const handleDelete = () => {
    setPin(pin.slice(0, -1)); // Remove the last digit
  };

  // Navigate to Dashboard when PIN length is 4
  useEffect(() => {
    if (pin.length === 4) {
      setTimeout(() => {
        navigation.navigate('Dashboard'); // Replace with your screen name
      }, 500); // 500ms delay for user feedback
    }
  }, [pin]);

  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  return (
    <ImageBackground source={require('../../assets/images/splash.jpeg')} style={styles.container}>
      {/* Logo */}
      <Image
        style={{ height: screenHeight * 0.1, width: screenWidth * 0.2, resizeMode: 'contain' }}
        source={require('../../assets/images/logo.png')}
      />

      {/* Title */}
      <Text style={[styles.title, { marginTop: screenHeight * 0.0 }]}>Enter Your PIN</Text>

      {/* PIN Circles */}
      <View style={styles.pinContainer}>
        {[...Array(4)].map((_, index) => (
          <View
            key={index}
            style={[
              styles.circle,
              pin.length > index && styles.filledCircle,
            ]}
          />
        ))}
      </View>

      {/* PIN Pad */}
      <View style={[styles.pinPad, { marginTop: screenHeight * 0.05 }]}>
        {[['1', 'ABC'], ['2', 'DEF'], ['3', 'GHI']].map(([num, text]) => (
          <TouchableOpacity
            key={num}
            style={[styles.button, { width: screenWidth * 0.22, height: screenWidth * 0.22 }]}
            onPress={() => handlePress(num)}
          >
            <Text style={styles.buttonText}>{num}</Text>
            <Text style={styles.buttonSubText}>{text}</Text>
          </TouchableOpacity>
        ))}

        {[['4', 'JKL'], ['5', 'MNO'], ['6', 'PQRS']].map(([num, text]) => (
          <TouchableOpacity
            key={num}
            style={[styles.button, { width: screenWidth * 0.22, height: screenWidth * 0.22 }]}
            onPress={() => handlePress(num)}
          >
            <Text style={styles.buttonText}>{num}</Text>
            <Text style={styles.buttonSubText}>{text}</Text>
          </TouchableOpacity>
        ))}

        {[['7', 'TUV'], ['8', 'WXYZ'], ['9', '']].map(([num, text]) => (
          <TouchableOpacity
            key={num}
            style={[styles.button, { width: screenWidth * 0.22, height: screenWidth * 0.22 }]}
            onPress={() => handlePress(num)}
          >
            <Text style={styles.buttonText}>{num}</Text>
            <Text style={styles.buttonSubText}>{text}</Text>
          </TouchableOpacity>
        ))}

        {/* Empty Button */}
        <View style={[styles.emptyButton, { width: screenWidth * 0.22, height: screenWidth * 0.22 }]} />

        {/* Zero Button */}
        <TouchableOpacity
          style={[styles.button, { width: screenWidth * 0.22, height: screenWidth * 0.22 }]}
          onPress={() => handlePress('0')}
        >
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>

        {/* Delete Button */}
        <TouchableOpacity
          style={[styles.button, { width: screenWidth * 0.22, height: screenWidth * 0.22 }]}
          onPress={handleDelete}
        >
          <Icon name="close-circle" size={30} color={'#fff'} />
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={[styles.footer, { marginTop: screenHeight * 0.02 }]}>
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  pinContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    borderWidth: 1,
    height: 25,
    width: 25,
    borderRadius: 15,
    marginHorizontal: 10,
    borderColor: '#fff',
    backgroundColor: 'transparent',
  },
  filledCircle: {
    backgroundColor: '#fff',
  },
  pinPad: {
    width: '85%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3178B8',
    borderRadius: 80,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  emptyButton: {
    margin: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonSubText: {
    fontSize: 13,
    color: '#fff',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  footerText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default PinScreen;