import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoryMealsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Category Meals Screen!</Text>
            <Button title="Go to Details" onPress={() => props.navigation.navigate({ routeName: 'MealDetail' })}></Button>
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

export default CategoryMealsScreen;