import React from "react";
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const SignIn = () => {
    const [formValue, setFormValue] = React.useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormValue({
            ...formValue,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, formValue.email, formValue.password)
            .then((userCredential) => {
                console.log(userCredential)
            }).catch((error) => {
                alert(error);
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Войти</h1>
                <input 
                    name="email" 
                    type="email" 
                    placeholder="Введите email" 
                    value={formValue.email} 
                    onChange={handleChange} 
                />
                <input 
                    name="password" 
                    type="password" 
                    placeholder="Введите пароль"
                    value={formValue.password} 
                    onChange={handleChange} 
                />
                <button type="submit" onSubmit={handleSubmit}>Войти</button>
            </form>
        </div>
    )
}

export default SignIn;