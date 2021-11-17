import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { MEALS } from '../data/dummy-data';

const MealDetailScreen = props => {
    const mealId = props.navigation.getParam('mealId');

    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Button title="Go back to categories" onPress={() => { props.navigation.popToTop() }}></Button>
        </View>
    );
};

MealDetailScreen.navigationOptions = navigationData => {
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return {
        headerTitle: selectedMeal.title,
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Favorite' iconName='ios-star' onPress={() => {
                console.log('MArk as favorite')
            }} />
        </HeaderButtons>
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
});

export default MealDetailScreen;