import React, { useState } from 'react'
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { auth } from '../../config/firebase'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth'
import './signin.styles.css'

import Image from "../../assets/images/pets_care_3.png";


const Signin = () => {
    const [authError, setAuthError] = useState('')
    const onFinish = (values) => {
        signInWithEmailAndPassword(auth, values.username, values.password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user
                console.log(user)
                // ? Need to send user to the dashboard sreens.
            })
            .catch((error) => {
                setAuthError(error.message)
            })
    }
    return (
        <div className="formContainer">
            <div className="titleFormContainer">
                <div className="titleContainer">
                    <img class="logo-horizontal" src={Image}/>
                </div>
                {authError && authError !== '' && (
                    <div className="error">{authError}</div>
                )}
                <Form   
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input
                            prefix={
                                <UserOutlined className="site-form-item-icon" />
                            }
                            placeholder="Username"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            prefix={
                                <LockOutlined className="site-form-item-icon" />
                            }
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    {/* <Form.Item> */}
                    {/* //! not adding functionality to reset password. */}
                    {/* <a className="login-form-forgot" href="">
                            Forgot password?
                        </a> */}
                    {/* </Form.Item> */}

                    <div className="buttonsContainer">
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                        >
                            Log in
                        </Button>
                        Or 
                        
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                        >
                        <Link to="/signup">Register</Link>
                        </Button>
                    </div>
                    {/* </Form.Item> */}
                </Form>
            </div>
        </div>
    )
}

export default Signin
