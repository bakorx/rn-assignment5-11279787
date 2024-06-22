import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const transactions = [
  { id: '1', icon: 'apple', title: 'Apple Store', category: 'Entertainment', amount: '- $5,99' },
  { id: '2', icon: 'spotify', title: 'Spotify', category: 'Music', amount: '- $12,99' },
  { id: '3', icon: 'swap-vert', title: 'Money Transfer', category: 'Transaction', amount: '$300' },
  { id: '4', icon: 'cart', title: 'Grocery', category: '', amount: '- $88' },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Welcome back,</Text>
        <Text style={styles.name}>Eric Atsu</Text>
        <Image source={require('../assets/profile.jpg')} style={styles.profileImage} />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardNumber}>4562 1122 4595 7852</Text>
        <Text style={styles.cardHolder}>AR Jonson</Text>
        <Text style={styles.cardDetails}>Expiry Date: 24/2000</Text>
        <Text style={styles.cardDetails}>CVV: 6986</Text>
        <MaterialIcon name="credit-card" size={30} color="#fff" />
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="arrow-up" size={30} color="#000" />
          <Text>Sent</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="arrow-down" size={30} color="#000" />
          <Text>Receive</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="cash" size={30} color="#000" />
          <Text>Loan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="cloud-upload" size={30} color="#000" />
          <Text>Topup</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.transactionHeader}>
        <Text style={styles.transactionTitle}>Transaction</Text>
        <TouchableOpacity>
          <Text style={styles.sellAll}>Sell All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={transactions}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.transactionItem}>
            <MaterialIcon name={item.icon} size={30} color="#000" />
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionTitle}>{item.title}</Text>
              <Text style={styles.transactionCategory}>{item.category}</Text>
            </View>
            <Text style={styles.transactionAmount}>{item.amount}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 18,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 'auto',
  },
  card: {
    backgroundColor: '#2c3e50',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  cardNumber: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  cardHolder: {
    color: '#fff',
    fontSize: 16,
  },
  cardDetails: {
    color: '#bdc3c7',
    fontSize: 14,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  actionButton: {
    alignItems: 'center',
  },
  transactionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  transactionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sellAll: {
    color: 'blue',
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  transactionDetails: {
    flex: 1,
    marginLeft: 10,
  },
  transactionCategory: {
    color: '#bdc3c7',
  },
  transactionAmount: {
    fontWeight: 'bold',
  },
});

export default HomeScreen;
