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
            <label htmlFor="email"></label>
            <input type="email" id="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <div className="email error"></div>
            <label htmlFor="password"></label>
            <input type="password" id="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <div className="password error"></div>
            <button type="submit">Se connecter</button>
        </form>
    );
};
