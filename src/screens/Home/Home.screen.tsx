import React from "react";
import { View, Text,StatusBar, ImageBackground, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import  Ionicons  from "react-native-vector-icons/Ionicons";
import  SimpleLineIcons  from "react-native-vector-icons/SimpleLineIcons";
import  Foundation  from "react-native-vector-icons/Foundation";

const HomeScreen = ({navigation}:any) => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#000'}}>
 
    <ImageBackground source={require("../../assets/images/back.jpeg")} style={styles.background}>
    <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.container}>
        <Text style={styles.header}>Accounts</Text>

        <View style={styles.card}>
        <Image
style={styles.cardImage}
source={require('../../assets/images/ANZ.jpg')}/>
         
          <View>
            <Text style={styles.cardTitle}>ANZ Business Essentials</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#fff" style={styles.chevron} />
        </View>

        <View style={styles.balanceContainer}>
          <View style={styles.balanceItem}>
            <Text style={styles.label}>Funds</Text>
            <Text style={styles.amount}>$0.00</Text>
          </View>
          <View style={styles.balanceItem}>
            <Text style={styles.label}>Balance</Text>
            <Text style={styles.amount}>$0.00</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
          onPress={()=>navigation.navigate('Transaction')}
          style={styles.button}>
            <SimpleLineIcons name="refresh" size={24} color="#fff" />
            <Text style={styles.buttonText}>Transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Foundation name="dollar" size={24} color="#fff" />
            <Text style={styles.buttonText}>Pay</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="ellipsis-horizontal" size={30} color="#fff" />
            <Text style={styles.buttonText}>More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
    <View style={{height:70,marginVertical:20,alignItems:'center',flexDirection:'row'}}>
<View style={{marginLeft:20,borderWidth:1,height:40,width:60,}}>
<Image
style={{height:'100%',width:'100%'}}
source={require('../../assets/images/ANZ.jpg')}/>
</View>
<Text style={{color:'#fff',fontSize:18,paddingLeft:15,width:'55%',fontWeight:'800'}}>Business Online Saver</Text>
<Text style={{color:'#fff',fontSize:18,paddingLeft:15,fontWeight:'800'}}>$0.00</Text>
<Ionicons name="chevron-forward-outline" size={20} color={'#fff'} style={{marginLeft:6}}/>
    </View>
    <View style={{marginVertical:5,alignItems:'center',flexDirection:'row'}}>
<View style={{marginLeft:20,borderWidth:1,height:40,width:60,}}>
<Image
style={{height:'100%',width:'100%'}}
source={require('../../assets/images/ANZ.jpg')}/>
</View>
<Text style={{color:'#fff',fontSize:18,paddingLeft:15,width:'55%',fontWeight:'800'}}>ANZ Access Advantage</Text>
<Text style={{color:'#fff',fontSize:18,paddingLeft:15,fontWeight:'800'}}>$0.00</Text>
<Ionicons name="chevron-forward-outline" size={20} color={'#fff'} style={{marginLeft:6}}/>
    </View>
    <View style={{marginVertical:30,alignItems:'center',flexDirection:'row'}}>
<View style={{marginLeft:20,borderWidth:1,height:40,width:60,backgroundColor:'#0E79FD',alignItems:'center',justifyContent:'center'}}>
<Foundation name="plus" size={20} color={'#fff'} />
</View>
<Text style={{color:'#0E79FD',fontSize:18,paddingLeft:15,width:'55%',fontWeight:'800'}}>Open a New Accounts</Text>

    </View>
    <View style={{position:'absolute',bottom:0,height:50,width:'100%'}} >
<Image  style={{height:'100%',width:'100%'}}source={require("../../assets/images/Bottom.jpeg")}/>
    </View>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  background: {
   height:Dimensions.get('screen').height/2.3
  
  },
  container: {
    padding: 20,
    marginVertical:25
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
    marginVertical:5,
    textAlign:'center'
  },
  chevron: {
    marginLeft: 10,
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
});

export default HomeScreen;