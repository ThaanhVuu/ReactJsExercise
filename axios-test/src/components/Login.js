import './Login.css'
import {useState} from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function Login() {
    const [loginForm, setLoginForm] = useState({
        username: "",
        password: ""
    });

    const navigate = useNavigate();

    function onchangeHandler(e){
        setLoginForm(prevState => ({
            ...prevState,
            [e.target.name] : e.target.value
        }));
    }

    function loginBtnHandler(){
            axios.post("http://localhost:8080/identity/auth/login",{
                username: loginForm.username,
                password: loginForm.password
            })
                .then(response => {
                    console.log(response.data);
                    sessionStorage.setItem("token", response.data.result);
                    alert(response.data.message);
                    navigate("/profile")
                })
                .catch(error => {
                    console.log(error);
                    alert("Lỗi khi đăng nhập")
                })
    }

    return (
        <div className={"Login"}>
            <h1>Login</h1>
            <div className={`loginForm`}>
                <div>
                    <span>Username</span>
                    <input
                        placeholder={"Username"}
                        name={"username"}
                        value={loginForm.username}
                        onChange={onchangeHandler}
                    />
                </div>
                <div>
                    <span>Password</span>
                    <input
                        placeholder={"Password"}
                        name={"password"}
                        type={"password"}
                        value={loginForm.password}
                        onChange={onchangeHandler}
                    />
                </div>
                <button onClick={loginBtnHandler}>Login</button>
            </div>
        </div>
    );
}

export default Login;