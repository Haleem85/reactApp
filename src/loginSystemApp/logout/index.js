import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../userSlice';
import "./logout.css";

export const Logout = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout({ loggedIn: false }));
    };
    return (
        <div className="logout_container">
            <h1 id="heading1">Welcome
                <span className="user__name">
                    { " " + user.name }
                </span>
                <br />
                <button className="logout__button" onClick={ (e) => handleLogout(e) }>
                    Logout
                </button>
            </h1>
        </div >
    );
};
