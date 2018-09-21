import React, { Component } from 'react';
import './LogIn.css'
class LogIn extends Component {
    render() {
        return (
        
            <div className="main-content-agile">
                	<div className="sub-main-w3">
		<form id="demo" novalidate action="#" method="post">
			<h2>Créer votre Compte</h2>
			<div className="form-group">
				<input type="email" className="form-control textbox email" name="email" placeholder="Email" required=""/>
			</div>
			<div className="form-group">
				<input type="password" className="form-control textbox psw" name="password" placeholder="Mot de passe" required=""/>
			</div>
			<div className="form-group-2">
				<button className="btn" type="submit">
				Connecter
				</button>
			</div>
			<div className="alert alert-success hidden" role="alert">You Have Successfully Logged In</div>
		</form>
	
	</div>
    
            </div>
        );
    }
}

export default LogIn;