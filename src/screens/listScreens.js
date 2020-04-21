import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const listScreens = () => {
    const friends = [
        { name : 'Friend 1 - Age 20'},
        { name : 'Friend 2 - Age 45'},
        { name : 'Friend 3 - Age 32'},
        { name : 'Friend 4 - Age 27'},
        { name : 'Friend 5 - Age 53'},
        { name : 'Friend 6 - Age 30'}
    ];
    return (
        <FlatList
            showsVerticalScrollIndicator = {false}
            keyExtractor = {(friend) => friend.name}
            data = {friends}
            renderItem = {({item}) => {
            return <Text style={styles.textStyle}>{item.name}</Text>;
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical : 40
    }
});

export default listScreens;
