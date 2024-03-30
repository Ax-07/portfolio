import { useState } from "react";
import { login } from "../api/authApi";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setIsConnected } from "../app/authSlice";

export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = { email, password };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await login(user);
            console.log(res);
            dispatch(setIsConnected(res.token))
            alert('Vous êtes connecté');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="email" id="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} aria-label="Email"/>
            <div className="email error"></div>
            <input type="password" id="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} aria-label="Password"/>
            <div className="password error"></div>
            <button type="submit">Se connecter</button>
        </form>
    );
};
