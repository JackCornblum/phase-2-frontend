import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function Login({setCurrentUser}) {

    document.title = 'Meal Planner App | Login'

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isErrors, setIsErrors] = useState(false)
    const [errors, setErrors] = useState([])

    const history = useHistory()

    function handleLogin(e) {
        e.preventDefault()
        
        let user = {
            email,
            password
        }

        fetch('/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if (data.id) {
                setCurrentUser(data)
                history.push('/')
            }
        })
    }




    return (
        <>
        <h3 style={{textAlign: 'center'}}>Login</h3>
        <div className="login">
            <Form onSubmit={handleLogin}>
                <Form.Group  id="name" >
                    <Form.Label >Email</Form.Label>
                    <Form.Control onChange={e => {
                        setEmail(e.target.value)
                        setIsErrors(false)
                        }} type="text" placeholder="example@mail.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="" >Password</Form.Label>
                    <Form.Control onChange={e => {
                        setPassword(e.target.value)
                        setIsErrors(false)
                    }} type="password" placeholder="Password" />
                </Form.Group>

                {isErrors ? <p>{errors[0]}</p> : null}
                
                <p className=" ">Don't have an account? <Link className="signup" to='/signup'>Sign up</Link></p>
                <Button className=" " variant="dark" type="submit">
                    Login
                </Button>
                
            </Form>
        </div>
        </>
    )
}

export default Login