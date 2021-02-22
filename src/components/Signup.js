import  {useRef} from 'react'

import {Form,Button, Card} from 'react-bootstrap'
import  { useAuth } from '../context/AuthContext'


export default function Signup ( ) {

const emailRef =  useRef()
const passwordRef = useRef()
const passwordConfirmRef = useRef()
const { signup } = useAuth()
    return (
//  <>
//  <Card>
//      <Card.Body>
//          <h2 className = "text-center mb4"></h2>
//          <Form>
//              <Form.Group id= "email">
//                  <Form.Email>Email</Form.Email>
//                  <Form.Control type = "email" ref = {emailRef} required />

//              </Form.Group>
//              <Form.Group id= "pasword">
//                  <Form.Email>Password</Form.Email>
//                  <Form.Control type = "password" ref = {passwordRef} required />

//              </Form.Group>
//              <Form.Group id= "confirm-password">
//                  <Form.Email>Confirm Password</Form.Email>
//                  <Form.Control type = "password" ref = {passwordConfirmRef} required />

//              </Form.Group>
//              <Button className = "w-100" type = "submit" >Sign Up</Button>
//          </Form>
//      </Card.Body>

//  </Card>
//  <div className = "w-100 text-center mt-2">
//  Already have an account ? Log In 
//  </div>
//  </>
//     )
// }

<>
<Card>
  <Card.Body>
    <h2 className="text-center mb-4">Sign Up</h2>
    <Form>
      <Form.Group id="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" ref={emailRef} required />
      </Form.Group>
      <Form.Group id="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" ref={passwordRef} required />
      </Form.Group>
      <Form.Group id="password-confirm">
        <Form.Label>Password Confirmation</Form.Label>
        <Form.Control type="password" ref={passwordConfirmRef} required />
      </Form.Group>
      <Button  className="w-100" type="submit">
        Sign Up
      </Button>
    </Form>
  </Card.Body>
</Card>
<div className="w-100 text-center mt-2">
  Already have an account? Log In
</div>
</>
    )
}

