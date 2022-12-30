
import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

export default function Register({setPage,setData}) {
    const login = () => {
        setPage('login')
    }

    const [message, setMessage] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        setData({
            name:e.target.elements.name.value,
            email:e.target.elements.email.value,
            password:e.target.elements.password.value,
        })

        const alert = (
            <Alert variant="success" className='rounded-pill'>Register Success</Alert>
          );
      
          setMessage(alert);
        login()
    }
  return (
    <Form onSubmit={handleSubmit}>
        <h3 className='text-center mb-3' >SIGN UP</h3>
        {message&&message}
      <Form.Group className="mb-4" controlId="formBasicName">
        <Form.Control className='py-2 rounded-pill' name='name' type="text" placeholder="Enter Name" />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Control className='py-2 rounded-pill' name='email' type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-4 " controlId="formBasicPassword">
        
        <Form.Control className='py-2 rounded-pill' name='password'  type="password" placeholder="Password" />
      </Form.Group>
      <Button className='w-100 rounded-pill mb-4' variant="primary" type="submit">
       Submit
      </Button>
      <p>Already Have an Account? <span style={{cursor:'pointer'}} className='fw-bold' onClick={login}>Login Here</span> </p>
    </Form>
  )
}
