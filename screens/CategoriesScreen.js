import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTitle from "../components/CategoryGridTitle";

const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return <CategoryGridTitle
            title={itemData.item.title}
            color={itemData.item.color}
            onSelect={() => {
                props.navigation.navigate({
                    routeName: 'CategoryMeals',
                    params: { categoryId: itemData.item.id }
                })
            }} />;

    }

    return (
        <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
    )
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories'
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        //padding: 10
    },

});

export default CategoriesScreen;