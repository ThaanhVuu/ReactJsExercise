import {useState} from "react";
import './Login.css'

function Login(){
    const [user, setUser] = useState({
        name : "",
        email: "",
        password: ""
    });
    const [status, setStatus] = useState(true);

    const onchangeInputHandler = (e) => {
        let nameField = e.target.name;
        let valueField = e.target.value;

        setStatus(true);

        setUser(prevState => ({
            ...prevState,
            [nameField]: valueField
        }));
    };

    const loginBtnHandler = () => {
        if (user.name === "vu" && user.email === "vu" && user.password === "vu"){
            alert("Dang nhap thanh cong");
        }else{
            setStatus(false);
        }
    }

    return(
        <div className={"Login"}>
            <h2>Login</h2>
            {!status && <span style={{color: "red"}}>Sai thông tin đăng nhập</span>}
            <div className={"form"}>
                <label>Name</label>
                <input
                    placeholder={"Name"}
                    name={"name"}
                    onChange={onchangeInputHandler}
                    className={"input-group-text"}
                />
            </div>
            <div className={"form"}>
                <label>Email</label>
                <input
                    placeholder={"Email"}
                    onChange={onchangeInputHandler}
                    className={"input-group-text"}
                    name={"email"}
                />
            </div>
            <div className={"form"}>
                <label>Password</label>
                <input
                    placeholder={"Password"}
                    onChange={onchangeInputHandler}
                    className={"input-group-text"}
                    name={"password"}
                    type={"password"}
                />
            </div>
            <button className={"btn btn-primary"} onClick={loginBtnHandler}>Login</button>
        </div>
    );
}

export default Login;