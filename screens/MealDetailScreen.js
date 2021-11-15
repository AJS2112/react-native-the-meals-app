import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';

const MealDetailScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Meal Detail Screen!</Text>
            <Button title="Go back to categories" onPress={() => { props.navigation.popToTop() }}></Button>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
});

export default MealDetailScreen;