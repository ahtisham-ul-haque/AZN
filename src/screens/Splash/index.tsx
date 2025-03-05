import { ImageBackground, StyleSheet, Text, View, StatusBar, Image, Animated } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Splash = ({ navigation }: any) => {
  const pulseAnim = useRef(new Animated.Value(1)).current; // Initial scale value: 1

  useEffect(() => {
    // Create a looping pulse animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.2, // Scale up to 1.2
          duration: 500, // Duration of the scale-up animation
          useNativeDriver: true, // Use native driver for better performance
        }),
        Animated.timing(pulseAnim, {
          toValue: 1, // Scale back to 1
          duration: 500, // Duration of the scale-down animation
          useNativeDriver: true,
        }),
      ]),
      { iterations: -1 } // Loop indefinitely
    ).start();

    // Set a timeout to navigate to the login screen after 5 seconds
    const timer = setTimeout(() => {
      navigation.navigate('Login'); // Replace 'Login' with your login screen name
    }, 5000);

    // Clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, [navigation, pulseAnim]);

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require('../../assets/images/splash.jpeg')}
    >
      <SafeAreaView style={{ flex: 1 }}>
        {/* Logo at the top */}
        <View style={{ alignItems: 'center',  }}>
          <Image
            style={{ height: 50, width: 50 }}
            source={require('../../assets/images/logo.png')}
          />
        </View>

        {/* Text at the bottom */}
        <View style={{ flex: 1,  alignItems: 'center',justifyContent:'center'  }}>
          <Animated.Text
            style={{
              fontSize: 24,
              fontWeight:'400',
              color: 'white',
              transform: [{ scale: pulseAnim }], // Bind scale to the animated value
            }}
          >
            Loading
          </Animated.Text>
        </View>
      </SafeAreaView>

      <StatusBar translucent backgroundColor="transparent" />
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  // You can add styles here if needed
});