import React from 'react'
import './Navbar.css'
import { useDispatch } from 'react-redux'
import { SignOutApp } from '../../actions/UserActions'

export default function Navbar() {
    const dispatch = useDispatch()
    const SignOut = () => {
        dispatch(SignOutApp())
    }
    return (
        <div className="navbar">
            <div className="navbar__search">
                <img src={`${process.env.PUBLIC_URL}/Icon/Vector.png`} class="rounded mx-auto d-block" alt="..." />
                <input type="text" placeholder="Search for any training you want"></input>
            </div>
            <div className="navbar__userinfo">
                <img className="navbar__userinfo--notify" src={`${process.env.PUBLIC_URL}/Icon/notifications.png`} alt="..." />
                <div className="navbar_userinfo__info">
                    <div className="navbar_userinfo__info--img">
                        <img src="http://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg" class="rounded mx-auto d-block" alt="..." />
                    </div>
                    <div onClick={SignOut} className="navbar_userinfo__info--signout">
                        <p>Sign Out</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
