import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

const BlogPostForm = ({onSubmit, initialValues}) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View style={styles.card}>
            <Text style={styles.label}>Edit Title: </Text>
            <TextInput value={title} onChangeText={newTitle => setTitle(newTitle)} style={styles.input}/>
            <Text style={styles.label}>Edit Content: </Text>
            <TextInput value={content} onChangeText={newContent => setContent(newContent)} style={styles.input}/>
            
            <Button title="Save Blog Post" onPress={()=>onSubmit(title, content)}/>
        </View>
    )
}

BlogPostForm.defaultProps = {
    initialValues:{
        title: '',
        content: ''
    }
}

const styles = StyleSheet.create({
    input:{
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'grey',
        marginBottom: 15,
        padding: 5,
        margin: 5,
        paddingVertical: 10
    },
    label:{
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5,
        paddingVertical: 10,
        fontWeight: 'bold',
        color:'#d57149'
    },
    card:{
        marginHorizontal: 20,
        marginVertical: 20
    }
})

export default BlogPostForm;