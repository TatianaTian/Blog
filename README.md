# Mobile App - Blog Management
## Stack: React Native, fake backend JSON Server
A mobile app that enables users to create, edit, read, and delete blogs. I mainly worked on React Native advanced state management with context. 
## Features:
### Create Blogs:
Once the user saves the blog title and the blog content, an id will be automatically generated and saved along with the blog content as an object of a state. The state is kept in a Context and works with a Reducer. The implementation required useContext and useReducer.

{
Id: <blog id>,
Title: <blog title>,
Content: <blog content>
}

### Read Blogs:
I used useContext to read state, and find the blog by id.

### Edit Blogs:
I displayed the initialValues as the previous title and content by reading the state with useContext. The user can edit the blog based on his/her previous inputs. 

### Delete Blogs:
Remove the blog by filtering the current state.
state.filter(blogPost => blogPost.id !== action.payload)

### State Management:
The key of this app is to use useContext and useReducer to manage state. useReducer can ‘centralize’ all your state transitions to a reducer function by including a dispatch function in each state transition. It’s a powerful combination to manage nested components with complex state transitions. 
