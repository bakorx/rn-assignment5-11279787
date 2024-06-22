import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../theme-context';

const transactions = [
  { id: '1', icon: 'apple', title: 'Apple Store', category: 'Entertainment', amount: '- $5,99' },
  { id: '2', icon: 'spotify', title: 'Spotify', category: 'Music', amount: '- $12,99' },
  { id: '3', icon: 'swap-vert', title: 'Money Transfer', category: 'Transaction', amount: '$300' },
  { id: '4', icon: 'cart', title: 'Grocery', category: '', amount: '- $88' },
];

const HomeScreen = () => {
  const { isDarkMode } = useTheme();

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.header}>
        <Text style={[styles.greeting, isDarkMode && styles.darkText]}>Welcome back,</Text>
        <Text style={[styles.name, isDarkMode && styles.darkText]}>Kwame Bakor</Text>
        <Image source={require('../assets/profilepic.jpeg')} style={styles.profileImage} />
      </View>

      <View style={[styles.card, isDarkMode && styles.darkCard]}>
        <Text style={[styles.cardNumber, isDarkMode && styles.darkText]}>4562 1122 4595 7852</Text>
        <Text style={[styles.cardHolder, isDarkMode && styles.darkText]}>AR Jonson</Text>
        <Text style={[styles.cardDetails, isDarkMode && styles.darkText]}>Expiry Date: 24/2000</Text>
        <Text style={[styles.cardDetails, isDarkMode && styles.darkText]}>CVV: 6986</Text>
        <MaterialIcon name="credit-card" size={30} color="#fff" />
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="arrow-up" size={30} color={isDarkMode ? '#fff' : '#000'} />
          <Text style={[styles.actionText, isDarkMode && styles.darkText]}>Sent</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="arrow-down" size={30} color={isDarkMode ? '#fff' : '#000'} />
          <Text style={[styles.actionText, isDarkMode && styles.darkText]}>Receive</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="cash" size={30} color={isDarkMode ? '#fff' : '#000'} />
          <Text style={[styles.actionText, isDarkMode && styles.darkText]}>Loan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="cloud-upload" size={30} color={isDarkMode ? '#fff' : '#000'} />
          <Text style={[styles.actionText, isDarkMode && styles.darkText]}>Topup</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.transactionHeader}>
        <Text style={[styles.transactionTitle, isDarkMode && styles.darkText]}>Transaction</Text>
        <TouchableOpacity>
          <Text style={styles.sellAll}>Sell All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={transactions}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={[styles.transactionItem, isDarkMode && styles.darkTransactionItem]}>
            <MaterialIcon name={item.icon} size={30} color={isDarkMode ? '#fff' : '#000'} />
            <View style={styles.transactionDetails}>
              <Text style={[styles.transactionTitle, isDarkMode && styles.darkText]}>{item.title}</Text>
              <Text style={[styles.transactionCategory, isDarkMode && styles.darkText]}>{item.category}</Text>
            </View>
            <Text style={[styles.transactionAmount, isDarkMode && styles.darkText]}>{item.amount}</Text>
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
  darkContainer: {
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 18,
  },
  darkText: {
    color: '#fff',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  card: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#1e1e1e',
    marginBottom: 20,
  },
  darkCard: {
    backgroundColor: '#333',
  },
  cardNumber: {
    fontSize: 18,
    marginBottom: 10,
  },
  cardHolder: {
    fontSize: 16,
    marginBottom: 5,
  },
  cardDetails: {
    fontSize: 14,
    marginBottom: 5,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  actionButton: {
    alignItems: 'center',
  },
  actionText: {
    marginTop: 5,
  },
  transactionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  darkTransactionItem: {
    borderBottomColor: '#555',
  },
  transactionDetails: {
    flex: 1,
    marginLeft: 10,
  },
  transactionCategory: {
    color: 'gray',
  },
  transactionAmount: {
    fontWeight: 'bold',
  },
});

export default HomeScreen;
