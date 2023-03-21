import React from 'react'
import UserItem from './UserItem'
import './UserList.css'
function UserList({items}) {
    if(items.length === 0){
        return (
            <div className='center'>
                <h2>No users found!!!</h2>
            </div>
        )
    }
  return (
    <ul className='users-list'>
        {items.map(item => <UserItem key={item.id} name={item.name} placeCount={item.places} image={item.image}/>)}
    </ul>
  )
}

export default UserList