import React, { useState, useEffect } from 'react'
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../config/firebase'

import { signInWithEmailAndPassword } from 'firebase/auth'
import './signin.styles.css'
const isLoggedIn = (user) => {
    return user && user.email ? true : false
}
const Signin = () => {
    const [authError, setAuthError] = useState('')
    const [user, loading, error] = useAuthState(auth)

    const navigate = useNavigate()
    const onFinish = (values) => {
        signInWithEmailAndPassword(auth, values.username, values.password)
            .then((userCredential) => {
                const user = userCredential.user
                if (user) navigate('/dashboard', { replace: true })
            })
            .catch((error) => {
                setAuthError(error.message)
            })
    }

    useEffect(() => {
        if (isLoggedIn(user)) navigate('/dashboard', { replace: true })
    }, [user, navigate])

    return (
        <div className="formContainer">
            <div className="titleFormContainer">
                <div className="titleContainer">
                    <h1 className="title">Pets Care</h1>
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
                        Or <Link to="/signup">Register Now!</Link>
                    </div>
                    {/* </Form.Item> */}
                </Form>
            </div>
        </div>
    )
}

export default Signin
