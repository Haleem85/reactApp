import React from 'react';
import { useSelector } from 'react-redux';
import Login from '../login';
import { Logout } from '../logout';
import { selectUser } from '../userSlice';


const App = () => {
    const user = useSelector(selectUser);
    return (
        <div>{ user ? <Logout /> : <Login /> }</div>
    );
};


export default App;