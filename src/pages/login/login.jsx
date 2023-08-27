import React, { useState } from "react"
import './login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Login() {

    var api_url = 'http://localhost:8077';


    const navigate = useNavigate();

    // Error Notification state and Function Start here 

    const [notification_text, setnotification_text] = useState('');
    const [error_notification_text, seterror_notification_text] = useState('');

    const [visible, setVisible] = useState(false);
    const [error_visible, seterror_Visible] = useState(false);


    const handleShowNotification = () => {
        setVisible(true);

        setTimeout(() => {
            setVisible(false);
        }, 3000); // Adjust the timeout value to match the notification duration
    };

    const errorhandleShowNotification = () => {
        seterror_Visible(true);

        setTimeout(() => {
            seterror_Visible(false);
        }, 3000); // Adjust the timeout value to match the notification duration
    };

    // Error Notification state and Function End here 

    const [Email, setEmail] = useState('')
    const [password, setpassword] = useState('')

    const login_button = async () => {
        if (Email === '') {
            seterror_notification_text("Please enter a Email ")
            errorhandleShowNotification();
        } else if (password === '') {
            seterror_notification_text("Please enter a Password ")
            errorhandleShowNotification();
        } else {
            let api = api_url + '/admin/auth/login';

            let data = {
                id: Email,
                password: password
            };

            axios.post(api, data)
                .then((response) => {
                    if (response.data.status === "200") {
                        navigate('/Dashboard');
                    }
                }).catch(error => {
                    seterror_notification_text(error.response.data.msg);
                    errorhandleShowNotification();
                })
        }
    }

    return (
        <>

            {/* notification popup box Start here */}
            <div className={`modal ${visible ? 'show' : 'hide'}`} id="notification_popup_box">
                <div className="modal-content">

                    <div className="notification_box">
                        <p>
                            {notification_text}
                        </p>
                    </div>

                </div>
            </div>
            {/* notification popup box End here */}

            {/* Error notification popup box Start here */}
            <div className={`modal ${error_visible ? 'show' : 'hide'}`} id="notification_popup_box">
                <div className="modal-content">

                    <div className="notification_box" style={{ backgroundColor: '#C81E25' }}>
                        <p>
                            {error_notification_text}
                        </p>
                    </div>

                </div>
            </div>
            {/* Error notification popup box End here */}

            <div class="container">
                <div className="form">
                    <h1>ADMIN LOGIN</h1>
                    <input type="email"
                        name=""
                        placeholder="Email"
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input type="password"
                        name=""
                        placeholder="password"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                    />
                    <button onClick={login_button}>Login</button>
                </div>
            </div>
        </>
    );
}

export default Login;