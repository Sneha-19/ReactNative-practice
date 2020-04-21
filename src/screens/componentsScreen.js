import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const componentsScreen = () => {
    const myName = 'Sneha';
    return (
        <View>
            <Text style={styles.textStyle}>Getting started with react native 
            !</Text>
            <Text style={styles.textStyle1}>My name is {myName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    textStyle1: {
        fontSize: 20
    }
});

export default componentsScreen;