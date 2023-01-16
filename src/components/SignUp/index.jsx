import React from "react";
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
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
        createUserWithEmailAndPassword(auth, formValue.email, formValue.password)
            .then((userCredential) => {
                console.log(userCredential)
            }).catch((error) => {
                alert(error);
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Зарегистрируйтесь</h1>
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
                <button type="submit" onSubmit={handleSubmit}>Зарегистрироваться</button>
            </form>
        </div>
    )
}

export default SignUp;