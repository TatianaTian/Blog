import React, { useContext } from 'react';
import {View, Text, FlatList, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import {Feather} from '@expo/vector-icons'

const IndexScreen = ({navigation}) => {
    const {state, deleteBlogPost} = useContext(Context)

    return (
        <View>
        <FlatList
            data = {state}
            keyExtractor = {blogPost => blogPost.title}
            renderItem = {({item}) => {
                return (
                    <TouchableOpacity onPress={()=>navigation.navigate('Show', {id: item.id})}>
                        <View style={styles.row}>
                            <Text style = {styles.title}>{item.title}</Text>
                            <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}>
                                <Feather name="trash" style = {styles.icon}/>
                            </TouchableOpacity>
                            
                        </View>
                    </TouchableOpacity>
                )
            }}
        />
    </View>
    )
};

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <Feather name="plus" size={30} />
            </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 30,
        paddingHorizontal: 10,
        backgroundColor: '#e89f71',
        borderRadius: 8,
        marginHorizontal: 10,
        marginVertical: 5,
        
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    icon: {
        fontSize: 24
    }

})

export default IndexScreen;