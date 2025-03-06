import React from "react";
import { View, FlatList, Text, StatusBar, ImageBackground, TextInput, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Foundation from "react-native-vector-icons/Foundation";
const transactions = [
  {
    day: "Thursday",
    date: "6 February 2025",
    data: [
      {
        id: "1",
        title: "ANZ Mobile Banking Payment 854858 To Shakeel Bhatti",
        amount: "-$500.00",
        type: "debit",
      },
      {
        id: "2",
        title: "Payment From Shakeel Bhatti",
        amount: "$500.00",
        type: "credit",
        green:true
      },
    ],
  },
];

const Transaction = ({navigation}:any) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>

      <ImageBackground source={require("../../assets/images/back.jpeg")} style={styles.background}>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={styles.container}>
<View style={{flexDirection:'row',}}>
        <TouchableOpacity 
        onPress={()=>navigation.navigate('Home')}
        style={{paddingVertical:5}}>
              <Ionicons name="chevron-back" size={30} color="#fff" />
            
            </TouchableOpacity>
          <Text style={styles.header}>Accounts</Text>

</View>
<View style={{marginHorizontal:10,}}>

          <View style={styles.card}>
            <Image
              style={styles.cardImage}
              source={require('../../assets/images/ANZ.jpg')} />

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
            <TouchableOpacity style={styles.button}>
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
        </View>

      </ImageBackground>

      <View style={styles.tabs}>
        <View style={{ borderBottomWidth: 1, borderColor: '#007AFF', height: 40 }}>

          <Text style={[styles.tabText, styles.activeTab]}>Transactions</Text>
        </View>

        <Text style={styles.tabText}>Statements</Text>
        <Text style={styles.tabText}>Notices</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#fff" style={styles.searchIcon} />
        <TextInput placeholder="Search" placeholderTextColor="#fff" style={styles.searchInput} />
      </View>

      <View style={styles.spendSummary}>
        <Ionicons name="bar-chart-outline" size={20} color="white" />
        <Text style={styles.spendText}>View your Spend Summary</Text>
        <Ionicons name="chevron-forward-sharp" size={20} color="grey" />
      </View>

      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {

          return (
            <View style={styles.transactionItem}>
              <View style={{ paddingVertical: 5, width: '95%', justifyContent: 'space-between', flexDirection: 'row',marginHorizontal:10 }}>
                <Text style={{ fontSize: 18, color: '#fff', fontWeight: '800' }}>{item?.day}</Text>
                <Text style={{ fontSize: 18, color: '#fff', fontWeight: '800' }}>{item?.date}</Text>
              </View>

              <FlatList
                data={item?.data}
                renderItem={({ item }) => {
                  return (
                    <View style={{ borderColor: 'red', paddingVertical: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                      <View style={{ borderColor: 'red',flexDirection:'row' }}>
                        <View style={{alignItems:'center',justifyContent:'center',marginLeft:20}}>


                        <Foundation name="dollar" size={30} color="grey" />
                        </View>
                        <View style={{ borderColor: 'red',paddingVertical: 10, width: '60%',marginLeft:20 }}>
                        <Text style={{ fontSize: 17, color: '#fff',fontWeight:'600' }}>{item?.title}</Text>
                        
</View>
                      </View>
                   
                      <View style={{ borderColor: 'red',  paddingVertical: 10, width: '30%',flexDirection:'row',alignItems:'center',justifyContent:'center' }}>
                        <View>
                        <Text style={{ fontSize: 17 ,fontWeight:'600',color:item?.green? "green":"#fff" }}>{item?.amount}</Text>
                        </View>
                        <View style={{paddingLeft:10}}>
                        <Ionicons name="chevron-forward-sharp" size={20} color="grey" />
                        </View>
                      </View>
                    </View>
                  )
                }}
              />
              {/* <Ionicons name="cash-outline" size={20} color="gray" style={styles.transactionIcon} />
            <View style={styles.transactionText}>
              <Text style={styles.transactionTitle}>{item.title}</Text>
              <Text style={styles.transactionDate}>{item.date}</Text>
            </View>
            <Text style={[styles.transactionAmount, item.type === "credit" ? styles.credit : styles.debit]}>
              {item.amount}
            </Text> */}
            </View>
          )
        }}
      />

      {/* <View style={{ position: 'absolute', bottom: 0, height: 50, width: '100%' }} >
        <Image style={{ height: '100%', width: '100%' }} source={require("../../assets/images/Bottom.jpeg")} />
      </View> */}
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  background: {
    height: Dimensions.get('screen').height / 2.2

  },
  container: {
    marginVertical: 25
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
    marginHorizontal:10
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
    textAlign: 'center'
  },
  chevron: {
    marginLeft: 10,
  },
  balanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    marginHorizontal:10
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
  tabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    marginHorizontal: 10,
    borderBottomWidth: 1, borderBlockColor: 'grey'
  },
  tabText: {
    fontSize: 16,
    color: "gray",
  },
  activeTab: {
    color: "#007AFF",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#222",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 10
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: "white",
  },
  spendSummary: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginVertical: 15,
  },
  spendText: {
    color: "white",
    marginLeft: 10,
    fontSize: 20,
    width: '85%'
  },
  transactionItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  transactionIcon: {
    marginRight: 10,
  },
  transactionText: {
    flex: 1,
  },
  transactionTitle: {
    color: "#fff",
    fontSize: 14,
  },
  transactionDate: {
    color: "gray",
    fontSize: 12,
  },
  transactionAmount: {
    fontSize: 14,
    fontWeight: "bold",
  },
  credit: {
    color: "green",
  },
  debit: {
    color: "red",
  },
});

export default Transaction;