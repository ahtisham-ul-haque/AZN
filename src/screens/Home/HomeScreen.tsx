import React, { useRef } from "react";
import { View, Text, StatusBar, ImageBackground, Image, TouchableOpacity, StyleSheet, ScrollView, Dimensions, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Foundation from "react-native-vector-icons/Foundation";
import RBSheet from "react-native-raw-bottom-sheet";

const HomeScreen = ({ navigation }: any) => {
  const refRBSheet = useRef<RBSheet>(null);
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      <ImageBackground source={require("../../assets/images/back.jpeg")} style={[styles.background, { height: screenHeight / 2 }]}>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={[styles.container, { padding: screenWidth * 0.05, marginVertical: screenHeight * 0.09 }]}>
          <Text style={[styles.header, { fontSize: screenWidth * 0.08, marginBottom: screenHeight * 0.02 }]}>Accounts</Text>

          <View style={styles.card}>
            <Image
              style={[styles.cardImage, { width: screenWidth * 0.15, height: screenHeight * 0.07 }]}
              source={require('../../assets/images/ANZ.jpg')}
            />
            <View>
              <Text style={[styles.cardTitle, { fontSize: screenWidth * 0.045,width:'100%' }]}>ANZ Business Essentials</Text>
            </View>
            <Ionicons name="chevron-forward" size={screenWidth * 0.05} color="#fff" style={styles.chevron} />
          </View>

          <View style={[styles.balanceContainer, { marginVertical: screenHeight * 0.02 }]}>
            <View style={styles.balanceItem}>
              <Text style={[styles.label, { fontSize: screenWidth * 0.035 }]}>Funds</Text>
              <Text style={[styles.amount, { fontSize: screenWidth * 0.05 }]}>$0.00</Text>
            </View>
            <View style={styles.balanceItem}>
              <Text style={[styles.label, { fontSize: screenWidth * 0.035 }]}>Balance</Text>
              <Text style={[styles.amount, { fontSize: screenWidth * 0.05 }]}>$0.00</Text>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Transaction')}
              style={[styles.button, { padding: screenWidth * 0.03, marginHorizontal: screenWidth * 0.01 }]}
            >
              <SimpleLineIcons name="refresh" size={screenWidth * 0.06} color="#fff" />
              <Text style={[styles.buttonText, { fontSize: screenWidth * 0.035, marginTop: screenHeight * 0.01 }]}>Transfer</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { padding: screenWidth * 0.03, marginHorizontal: screenWidth * 0.01 }]}
            >
              <Foundation name="dollar" size={screenWidth * 0.06} color="#fff" />
              <Text style={[styles.buttonText, { fontSize: screenWidth * 0.035, marginTop: screenHeight * 0.01 }]}>Pay</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { padding: screenWidth * 0.03, marginHorizontal: screenWidth * 0.01 }]}
            >
              <Ionicons name="ellipsis-horizontal" size={screenWidth * 0.07} color="#fff" />
              <Text style={[styles.buttonText, { fontSize: screenWidth * 0.035, marginTop: screenHeight * 0.01 }]}>More</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>

      {/* Bottom Sections */}
      <View style={{ height: screenHeight * 0.1, marginVertical: screenHeight * 0.02, alignItems: 'center', flexDirection: 'row' }}>
        <View style={{ marginLeft: screenWidth * 0.05, borderWidth: 1, height: screenHeight * 0.06, width: screenWidth * 0.15 }}>
          <Image
            style={{ height: '100%', width: '100%' }}
            source={require('../../assets/images/ANZ.jpg')}
          />
        </View>
        <Text style={{ color: '#fff', fontSize: screenWidth * 0.045, paddingLeft: screenWidth * 0.04, width: '55%', fontWeight: '800' }}>Business Online Saver</Text>
        <Text style={{ color: '#fff', fontSize: screenWidth * 0.045, paddingLeft: screenWidth * 0.04, fontWeight: '800' }}>$0.00</Text>
        <Ionicons name="chevron-forward-outline" size={screenWidth * 0.05} color={'#fff'} style={{ marginLeft: screenWidth * 0.02 }} />
      </View>

      <View style={{ marginVertical: screenHeight * 0.01, alignItems: 'center', flexDirection: 'row' }}>
        <View style={{ marginLeft: screenWidth * 0.05, borderWidth: 1, height: screenHeight * 0.06, width: screenWidth * 0.15,alignItems:'center' }}>
          <Image
            style={{ height: '100%', width: '100%' }}
            source={require('../../assets/images/ANZ.jpg')}
          />
        </View>
        <Text style={{ color: '#fff', fontSize: screenWidth * 0.045, paddingLeft: screenWidth * 0.04, width: '55%', fontWeight: '800' }}>ANZ Access Advantage</Text>
        <Text style={{ color: '#fff', fontSize: screenWidth * 0.045, paddingLeft: screenWidth * 0.04, fontWeight: '800' }}>$0.00</Text>
        <Ionicons name="chevron-forward-outline" size={screenWidth * 0.05} color={'#fff'} style={{ marginLeft: screenWidth * 0.02 }} />
      </View>

      <View>
        <TouchableOpacity
          style={{ marginVertical: screenHeight * 0.03, alignItems: 'center', flexDirection: 'row' }}
          onPress={() => refRBSheet.current?.open()}
        >
          <View style={{ marginLeft: screenWidth * 0.05, borderWidth: 1, height: screenHeight * 0.06, width: screenWidth * 0.15, backgroundColor: '#0E79FD', alignItems: 'center', justifyContent: 'center' }}>
            <Foundation name="plus" size={screenWidth * 0.05} color={'#fff'} />
          </View>
          <Text style={{ color: '#0E79FD', fontSize: screenWidth * 0.045, paddingLeft: screenWidth * 0.04, width: '55%', fontWeight: '800' }}>Open a New Accounts</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Image */}
      <View style={{ position: 'absolute', bottom: 0, height: screenHeight * 0.1, width: '100%' }}>
        <Image style={{ height: '100%', width: '100%' }} source={require("../../assets/images/Bottom.jpeg")} />
      </View>

      {/* Bottom Sheet */}
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={screenHeight / 1.2}
        customStyles={{
          wrapper: { backgroundColor: "rgba(0,0,0,0.5)" },
          draggableIcon: { backgroundColor: "#666" },
          container: { backgroundColor: "#000", borderTopLeftRadius: 15, borderTopRightRadius: 15, padding: 20 },
        }}
      >
        <ScrollView>
          <TouchableOpacity onPress={() => refRBSheet.current?.close()}>
            <Text style={[styles.closeText, { fontSize: screenWidth * 0.05 }]}>Close</Text>
          </TouchableOpacity>

          <Text style={[styles.title, { fontSize: screenWidth * 0.06, marginBottom: screenHeight * 0.02 }]}>Information about {'\n'}‘Funds’ and ‘Balance’</Text>

          <Text style={[styles.heading, { fontSize: screenWidth * 0.05, marginTop: screenHeight * 0.02 }]}>Funds</Text>
          <Text style={[styles.description, { fontSize: screenWidth * 0.04 }]}>
            Sometimes, the amount shown here will be different to what you are able to use without overdrawing your account or exceeding your credit limit.{' '}
            <Text style={styles.link} onPress={() => Linking.openURL('https://example.com')}>
              Tap here for further details.
            </Text>{' '}
            If you proceed with a transaction which makes your account go overdrawn or exceed its credit limit, fees, charges, and interest may be applied in accordance with your account terms and conditions.
          </Text>

          <Text style={[styles.heading, { fontSize: screenWidth * 0.05, marginTop: screenHeight * 0.02 }]}>Balance</Text>
          <Text style={[styles.description, { fontSize: screenWidth * 0.04 }]}>
            Balance is indicative of the amount in your account or the amount you owe. It can be different to the funds (if any) you may currently be able to use (including for deposit accounts).{' '}
            <Text style={styles.link} onPress={() => Linking.openURL('https://example.com')}>
              Tap here for more information
            </Text>{' '}
            about what is included and not included in the balance amount displayed.
          </Text>
        </ScrollView>
      </RBSheet>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  background: {
    height: Dimensions.get('screen').height / 2.3,
  },
  container: {
    padding: 20,
    marginVertical: 25,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  card: {
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  cardImage: {
    width: 60,
    height: 40,
    marginRight: 10,
  },
  cardTitle: {
    fontSize: 18,
    color: "#fff",
    flex: 1,
    marginVertical: 5,
    textAlign: 'center',
  },
  chevron: {
    marginLeft: 80,
    
  },
  balanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  balanceItem: {
    alignItems: "center",
  },
  label: {
    color: "#fff",
    fontSize: 14,
  },
  amount: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: 10,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
    marginHorizontal: 5,
  },
  buttonText: {
    color: "#fff",
    marginTop: 5,
  },
  closeText: {
    color: "#007AFF",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 10,
  },
  heading: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  description: {
    color: "#fff",
    fontSize: 18,
    marginTop: 5,
  },
  link: {
    color: "#007AFF",
    fontWeight: "bold",
  },
});