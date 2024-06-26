import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen';
import SettingsScreen from './components/SettingsScreen';
import MyCardsScreen from './components/MyCardsScreen';
import StatisticsScreen from './components/StatisticsScreen';
import { ThemeProvider, useTheme } from './theme-context';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const { isDarkMode } = useTheme();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
            switch (route.name) {
              case 'Home':
                iconName = focused
                  ? require('./assets/home.png')
                  : require('./assets/home.png');
                break;
              case 'My Cards':
                iconName = focused
                  ? require('./assets/myCards.png')
                  : require('./assets/myCards.png');
                break;
              case 'Statistics':
                iconName = focused
                  ? require('./assets/statistics.png')
                  : require('./assets/statistics.png');
                break;
              case 'Settings':
                iconName = focused
                  ? require('./assets/settings.png')
                  : require('./assets/settings.png');
                break;
            }

            return <Image source={iconName} style={{ width: 20, height: 20 }} />;
          },
          tabBarStyle: {
            backgroundColor: isDarkMode ? '#000' : '#fff',
            borderTopWidth: 0,
          },
          tabBarActiveTintColor: isDarkMode ? '#fff' : 'tomato',
          tabBarInactiveTintColor: isDarkMode ? '#888' : 'gray',
          headerStyle: {
            backgroundColor: isDarkMode ? '#000' : '#fff',
          },
          headerTintColor: isDarkMode ? '#fff' : '#000',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="My Cards" component={MyCardsScreen} />
        <Tab.Screen name="Statistics" component={StatisticsScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
};

export default App;
