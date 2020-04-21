import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';


const COLOR_CHANGE = 15;

const reducer = (state, action) => {
    // state === {red: Number, blue:Number, gree:number};
    // action === {colorTochnage : red || green || blue, amount: 15 || -15};

    switch(action.coloToChange) {
        case 'red':
            return state.red + action.amount > 255 || state.red + action.amount < 0 ? state : {...state , red: state.red + action.amount}; 
        case 'green':
            return state.green + action.amount > 255 || state.green + action.amount < 0 ? state : {...state , green: state.green + action.amount}; 
        case 'blue':
            return state.blue + action.amount > 255 || state.blue + action.amount < 0 ? state : {...state , blue: state.blue + action.amount}; 
        default:
            return state;
    }
};

const squareScreen = () => {

    const [state, dispatch] = useReducer(reducer, {red:0, green:0, blue:0});
    const {red , green, blue} = state;

    return (
        <View>
        <ColorCounter 
        color="Red" 
        onIncrease = {() => dispatch({ coloToChange : 'red', amount : COLOR_CHANGE})}
        onDecrease = {() => dispatch({ coloToChange : 'red', amount : -1 * COLOR_CHANGE})}
        />
        <ColorCounter 
        color="Green" 
        onIncrease = {() => dispatch({ coloToChange : 'green', amount : COLOR_CHANGE})}
        onDecrease = {() => dispatch({ coloToChange : 'green', amount : -1 * COLOR_CHANGE})}
        />
        <ColorCounter 
        color="Blue" 
        onIncrease = {() => dispatch({ coloToChange : 'blue', amount : COLOR_CHANGE})}
        onDecrease = {() => dispatch({ coloToChange : 'blue', amount : -1 * COLOR_CHANGE})}
        />
        <View 
        style = {{
            height: 150,
            width: 150,
            backgroundColor: `rgb(${red}, ${green}, ${blue})`
        }}
        />
        </View>
    );
};

const styles = StyleSheet.create({});

export default squareScreen;