import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../../shared/UIEelements/Avatar'
import Card from '../../shared/UIEelements/Card'
import './UserItem.css'
function UserItem({id,name,placeCount,image}) {
  return (
    <li className='user-item'>
      <Card className='user-item__content'>
          <Link to={`/${id}/places`}>
          
            <div className='user-item__image'>
                <Avatar iamge={image} alt={name}/>
            </div>
            <div className='user-item__info'>
                <h2>{name}</h2>
                <h3>{placeCount} {placeCount === 1 ? 'place' : 'places'}</h3>
            </div>
          </Link>
      </Card>
            
            
    </li>
  )
}

export default UserItem