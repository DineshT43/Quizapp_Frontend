import "./Auth.css";
import { useAuth } from "../../context";
import { loginHandler } from "../../services/auth-service";
import { useNavigate } from "react-router-dom";

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

    const handleLoginClick = async (e) => {
        e.preventDefault();
        const token = await loginHandler(username, password);
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

    const handleTestCredentialsClick = async () => {
        const token = await loginHandler("krishna", "krsna12345");
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
                        <input value={username} className="form-input lh-ls" placeholder="dinesh" onChange={handleUserNameChange}/>
                    </div>
                    <div className="form-container">
                        <label className="form-label">Password</label>
                        <input value={password} className="form-input lh-ls" placeholder="dsh12345" onChange={handlePasswordChange}/>
                    </div>
                    <div className="cta">
                        <button className="button login-btn btn-margin cursor sign-up-btn">Login</button>
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