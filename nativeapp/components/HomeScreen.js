import React from "react";
import { View, Text, TextInput, Button, StyleSheet, Image, FlatList, TouchableOpacity, ImageBackground } from "react-native";

const Homepage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerTextContainer}>
                    <Text style={styles.welcome}>Welcome back</Text>
                    <Text style={styles.name}>Kwame Bakor</Text>
                </View>
                <Image
                    source={require("../assets/profilepic.jpeg")}
                    style={styles.profilePic}
                />    

            </View>
        
        </View>
    );
    }

const styles = StyleSheet.create({   
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
        marginTop: 32,
      },
      header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
      },
      profilePic: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginLeft: 10,
      },
      headerTextContainer: {
        flex: 1,
        marginRight: 10,
      },

      name: {
        fontSize: 18,
        fontWeight: "bold",
      },
      welcome: {
        color: "#666",
      },
});

export default Homepage;