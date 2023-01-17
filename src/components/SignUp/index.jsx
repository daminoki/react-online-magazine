import React from "react";
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import styles from './SignUp.module.scss';

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
        <div className={styles.wrapper}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1 className={styles['form-title']}>Зарегистрируйтесь, чтобы продолжить покупки</h1>
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
                <button className={styles['button-submit']} type="submit" onSubmit={handleSubmit}>Зарегистрироваться</button>
            </form>
        </div>
    )
}

export default SignUp;