import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const UserList = ({user}) => {
    console.log('user',user)
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{width:"150px"}} src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png" />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
          {user.email}
        </Card.Text>
        
      </Card.Body>
    </Card>
      
    </div>
  )
}

export default UserList
