import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

export default function Login({setPage, data }) {
    const navigate = useNavigate()
    const [message, setMessage] = useState()
    const register = () => {
        setPage('register')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.elements.email.value
        const password = e.target.elements.password.value
        if(email !== data.email){
            const alert = (
                <Alert variant="success" className='rounded-pill'>Email tidak terdaftar</Alert>
              );
          
              return setMessage(alert);
        }

        if(password !== data.password){
            const alert = (
                <Alert variant="success" className='rounded-pill'>Password salah</Alert>
              );
          
              return setMessage(alert);
        } else {
            navigate('/home')
        }
        console.log(password);
        }
  return (
    <Form onSubmit={handleSubmit} >
        <h3 className='text-center mb-3' >SIGN IN</h3>
        {message&&message}
      <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Control className='py-2 rounded-pill' name='email' type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-4 " controlId="formBasicPassword">
        
        <Form.Control className='py-2 rounded-pill' name='password' type="password" placeholder="Password" />
      </Form.Group>
      <Button className='w-100 rounded-pill mb-4' variant="primary" type="submit">
       Submit
      </Button>
      <p>Dont Have an Account? <span style={{cursor:'pointer'}} className='fw-bold' onClick={register}>Register Here</span> </p>
    </Form>
  )
}
