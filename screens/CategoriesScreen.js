import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';

const CategoriesScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Categories Screen!</Text>
            <Button title="Go to Meals!" onPress={() => {
                props.navigation.navigate('CategoryMeals');
            }} />
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        //padding: 10
    }
});

export default CategoriesScreen;