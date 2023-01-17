import React from "react";
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import styles from './SignIn.module.scss';

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
        <div className={styles.wrapper}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1 className={styles['form-title']}>Войдите в аккаунт</h1>
                <label htmlFor="email">
                    Email:
                </label>
                <input
                        className={styles.input}
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="Введите email" 
                        value={formValue.email} 
                        onChange={handleChange}
                        required 
                    />
                <label htmlFor="password">
                    Пароль:
                </label>
                <input 
                        className={styles.input}
                        id="password"
                        name="password" 
                        type="password" 
                        placeholder="Введите пароль"
                        value={formValue.password} 
                        onChange={handleChange} 
                        required
                    />
                <button className={styles['button-submit']} type="submit" onSubmit={handleSubmit}>Войти</button>
            </form>
        </div>
    )
}

export default SignIn;