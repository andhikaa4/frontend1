import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function Create({ show, setShow, users, setUsers }) {
    const handleClose = () => setShow(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        const image = e.target.elements.image.files[0]
        const imageUrl = URL.createObjectURL(image)
        const data = {
            address: {
                city: e.target.elements.city.value
            },
            image: imageUrl,
            username: e.target.elements.username.value,
            firstName: e.target.elements.first.value,
            lastName: e.target.elements.last.value,
            gender: e.target.elements.gender.value,
            password: e.target.elements.password.value
        }
        const updatedObjects = [...users];
        updatedObjects.splice(0, 0, data);
        setUsers(updatedObjects);
        handleClose()
    }


    return (
        <>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Body>
                    <Form onSubmit={handleSubmit} >
                        <h2 className='mb-3 text-center' >Create User</h2>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Control type="file" name='image' />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="ControlInput1">
                            <Form.Control
                                name='username'
                                type="text"
                                placeholder="Username"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="ControlInput2">
                            <Form.Control
                                name='password'
                                type="password"
                                placeholder="Password"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="ControlInput3">
                            <Form.Control
                                name='first'
                                type="text"
                                placeholder="First Name"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="ControlInput4">
                            <Form.Control
                                name='last'
                                type="text"
                                placeholder="Last Name"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="ControlInput5">
                            <Form.Control
                                name='city'
                                type="text"
                                placeholder="City"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="ControlInput6">
                            <Form.Select name='gender' >
                                <option>Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </Form.Select>
                        </Form.Group>

                        <Button className='w-100 rounded-pill mb-4' variant="success" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}