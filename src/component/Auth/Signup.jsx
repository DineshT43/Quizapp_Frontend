import "./Auth.css";
import { useAuth } from "../../context";
import { loginHandler } from "../../services/auth-service";
import { useNavigate } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";

export const AuthLogin = () => {

    const navigate = useNavigate();

    const { username, password, authDispatch } = useAuth();

    const handleUserNameChange = (e) => {
        authDispatch({
            type: "USERNAME",
            payload: e.target.value
        })
    }

    const handlePasswordChange = (e) => {
        authDispatch({
            type: "PASSWORD",
            payload: e.target.value
        })
    }

    const handleEmailChange = (e) => {
        authDispatch({
            type: "EMAIL",
            payload: e.target.value
        })
    }

    const handleLoginClick = (e) => {
        e.preventDefault();
        const token = loginHandler(username, password);
        if (token){
            navigate("/");
        }
        authDispatch({
            type: "TOKEN",
            payload: token
        })
        authDispatch({
            type: "CLEAR_CREDENTIALS"
        })
    }

    const handleTestCredentialsClick = () => {
        const token = loginHandler("krishna", "krsna12345");
        authDispatch({
            type: "TOKEN",
            payload: token
        })
        if(token){
            navigate("/");
        }
    }

    return (
        <div className="d-grid">
            <div className="login-auth d-flex direction-column justify-center">
                <h2 className="auth-title">Login</h2>
                <form onSubmit={handleLoginClick}>
                    <div className="form-container">
                        <label className="form-label">Username</label>
                        <input value={username} className="form-input lh-ls" placeholder="Your Name" onChange={handleUserNameChange}/>
                    </div>
                    <div className="form-container">
                        <label className="form-label">Password</label>
                        <input value={password} className="form-input lh-ls" placeholder="Your Password" onChange={handlePasswordChange}/>
                    </div>
                    <div className="form-container">
                        <label className="form-label">Password</label>
                        <input value={email} className="form-input lh-ls" placeholder="Your Email" onChange={handleEmailChange}/>
                    </div>
                    <div className="cta">
                        <button className="button login-btn btn-margin cursor sign-up-btn">Signup</button>
                    </div>
                </form>
                <div>
                    <button className="button login-btn btn-outline-primary btn-margin sign-up-btn" onClick={handleTestCredentialsClick}>
                        Login with Test Credentials
                    </button>
                </div>
            </div>
        </div>

    )
}