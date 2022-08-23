import React, { useState, useEffect } from 'react'
import './SignIn.css'
import { SignInApp } from '../../actions/UserActions'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { useForm } from 'react-hook-form';

export default function SignIn() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm();
    const userSignIn = useSelector(state => state.userSignIn)
    const { userInfo } = userSignIn
    const history = useHistory()
    const dispatch = useDispatch()
    useEffect(() => {
        if (userInfo) {
            history.push('/Todolist')
        }
    }, [userInfo])
    const handelSubmitSignin = (data) => {
        if (data.username == 'admin' || data.password == 'admin') {
            dispatch(SignInApp(data))
        } else {
            alert('username hoặc mật khẩu không đúng')
        }
    }
    return (
        <div className="signin_Page">
            <div className="signin_Page__Title">
                <p>
                    Organize <br></br>
                    it all <br></br>
                    with Todo
                </p>
            </div>
            <div className="signin_Page__Form">
                <p className="signin_Page__Form--Title">SIGN IN NOW</p>
                <form onSubmit={handleSubmit(handelSubmitSignin)} className="signin_Page__Form--Detail">
                    <input {...register("username", { required: true, maxLength: 20 })}
                        placeholder={errors.username ? "This field is required" : "username"}
                        className={`signin_Page__Form--Detail--input ${errors.username && 'errorlogin'}`} type="text">
                    </input>

                    <input {...register("password", { required: true, maxLength: 20 })}
                        placeholder={errors.password ? "This field is required" : "password"}
                        className={`signin_Page__Form--Detail--input ${errors.username && 'errorlogin'}`}>
                    </input>
                    <button type="submit" className="signin_Page__Form--Detail--button">Sign In</button>
                </form>
            </div>
        </div>
    )
}
