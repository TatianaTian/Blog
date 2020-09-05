import React, {useReducer} from 'react';
import createDataContext from './createDataContext'



const blogReducer = (state, action) => {
    switch(action.type){
        case 'edit_post':
            return state.map(blogPost=>{
                return blogPost.id === action.payload.id ? action.payload : blogPost
            })
        case 'delete_post':
            return state.filter(blogPost => blogPost.id !== action.payload)
        case 'add_post':
            return [...state, 
                {   
                    id: Math.floor(Math.random()*99999),
                    title: action.payload.title,
                    content: action.payload.content
                }
            ]
        default:
            return state
    }
}

const addBlogPost = dispatch =>{
    return (title, content, callback) => {
        dispatch({type: 'add_post', payload: {title, content}});
        if (callback){
            callback();
        }
    }
}

const deleteBlogPost = dispatch => {
    return id => {
        dispatch({type: 'delete_post', payload: id})
    }
}

const editBlogPost = dispatch => {
    return (id, title, content, callback) => {
        dispatch({type:'edit_post', payload: {id, title, content}})
        if (callback){
            callback();
        }
    }
}

export const {Context, Provider} = createDataContext(
    blogReducer,
    {addBlogPost, deleteBlogPost, editBlogPost},
    [{title: 'How to eat healthy?', content: 'Eating a healthy, balanced diet is one of the most important things you can do to protect your health. In fact, up to 80% of premature heart disease and stroke can be prevented through your life choices and habits, such as eating a healthy diet and being physically active.', id: '12345'}]
)