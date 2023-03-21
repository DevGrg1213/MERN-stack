import React from 'react'
import UserList from '../components/UserList'

function Users() {
    const ITEMS = [
        {
            id:'10001',
            name:'Alexa',
            image:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
            places:3

        }
    ]
  return (
    <UserList items={ITEMS}/>
  )
}

export default Users