
import './Login.css';

function Login() {
    return (
        <div className="login-container">
            <img src="/src/assets/images/logo-background.png" alt="logo" id="logo-background"/>
            <div id="form-container">
                <h1>Se connecter</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className="input" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Mot de passe</label>
                        <input type="password" id="password" className="input" name="password" required />
                        <p className="forgot-password">Mot de passe oublié ?</p>
                    </div>
                    <button type="submit">Se connecter</button>
                    <div className="signup-container">
                        <p className="signup-text" id="signup-text-1">Nouveau client ?</p>
                        <p className="signup-text" id="signup-text-2">Créer un compte</p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;