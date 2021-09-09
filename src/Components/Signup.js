import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap'

function Signup({setCurrentUser}) {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [isErrors, setIsErrors] = useState(false)
    const [errors, setErrors] = useState([])

    const history = useHistory()

    function handleSignup(e) {
        e.preventDefault()
        let user = {
            name,
            email,
            password
        }

        fetch('/users', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if (data.id) {
                setCurrentUser(data)
                history.push('/')
            } else {
                setIsErrors(true)
                setErrors(data.error)
            }
        })
    }

    let renderErrors = errors.map(e => <p style={{color: 'red'}}>{e}</p>)

    return (
        <>
        <div className="signup">
        <h3 className="font-face-eft ">Create an account</h3>
            <Form onSubmit={handleSignup}>
                <Form.Group id="username" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={e => setName(e.target.value)} type="text" placeholder="Enter name" />
                </Form.Group>

                <Form.Group id="email" controlId="formBasicEmail" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={e => setEmail(e.target.value)} type="email" placeholder="example@mail.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
                </Form.Group>
                
                <Button variant="success" type="submit">
                    Signup
                </Button>
                
            </Form>
            {isErrors ? 
                renderErrors
             : null }
        </div>
        </>
    )
}

export default Signup