import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import {EvilIcons } from '@expo/vector-icons'

const ShowScreen = ({navigation}) => {
    //console.log(navigation.getParam('id'))
    // state should be the big chunk of blog list that we have created
    const {state} = useContext(Context)
    const blogPost = state.find(blogPost => blogPost.id === navigation.getParam('id'))

    return (
        <View>
            <View style={styles.title_card}>
                <Text style={styles.title}>
                    {blogPost.title}
                </Text>
            </View>
            <Text style={styles.content}>
                {blogPost.content}
             </Text>
        </View>
    )
}

ShowScreen.navigationOptions = ({navigation}) =>{
    return {
        headerRight: <TouchableOpacity onPress={()=>navigation.navigate('Edit',{id: navigation.getParam('id')})}>
        <EvilIcons name="pencil" size={35}/>
    </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    title_card:{
        borderBottomWidth: 1,
        borderColor:'#557571',
        marginHorizontal: 30
    },
    title:{
        fontSize: 30,
        color: '#d57149',
        fontWeight: 'bold',
        paddingTop: 25,
        paddingBottom: 15,
        textAlign: 'center',

    },
    content:{
        fontSize: 15,
        marginHorizontal: 30,
        paddingTop: 20,
        color: '#333333'
    }

})

export default ShowScreen;