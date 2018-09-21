import React, { Component } from 'react';
import './signup.css'

class SignUp extends Component {
    render() {
        return (
            <div>
                	<div className="main-content-agile">
		<div className="sub-main-w3">
			<form action="#" method="post">
				<div className="form-style-agile">
				<h1>Formulaire d'inscription</h1>
					<label>Nom :</label>
					<div className="pom-agile">
						<input placeholder="Entrer votre nom" name="Name" type="text" required=""/>
						<span className="glyphicons glyphicons-user" aria-hidden="true"></span>
					</div>
				</div>
                <div className="form-style-agile">
					<label>Prénom :</label>
					<div className="pom-agile">
						<input placeholder="Entrer votre prénom" name="Name" type="text" required=""/>
						<span className="glyphicons glyphicons-user" aria-hidden="true"></span>
					</div>
				</div>
                <div className="form-style-agile">
					<label>CIN :</label>
					<div className="pom-agile">
						<input placeholder="Entrer votre numéro de carte d'identité nationale" name="Name" type="text" required=""/>
						<span className="glyphicons glyphicons-user" aria-hidden="true"></span>
					</div>
				</div>
                <div className="form-style-agile">
					<label>Age :</label>
					<div className="pom-agile">
						<input placeholder="Entrer votre age" name="Name" type="text" required=""/>
						<span className="glyphicons glyphicons-user" aria-hidden="true"></span>
					</div>
					</div>
           			<div>
					   <label>Sexe :</label>
						
						<select className="option">
  <option value="homme">Homme</option>
  <option value="femme">Femme</option>
 
</select>
					</div>
				<div className="form-style-agile">
					<label>Email</label>
					<div className="pom-agile">
						<input placeholder="Entrer votre email..." name="Email" type="email" required=""/>
						<span className="glyphicons glyphicons-user" aria-hidden="true"></span>
					</div>
				</div>
				<div className="form-style-agile">
					<label>Password</label>
					<div className="pom-agile">
						<input placeholder="Mot de passe ..." name="Password" type="password" id="password1" required=""/>
						<span className="glyphicons glyphicons-user" aria-hidden="true"></span>
					</div>
				</div>
				<div className="form-style-agile">
					<label>Confirmation mot de passe :</label>
					<div className="pom-agile">
						<input placeholder="Confirmer votre mot de passe ..." name="Confirm Password" type="password" id="password2" required=""/>
						<span className="glyphicons glyphicons-user" aria-hidden="true"></span>
					</div>
				</div>
				<div className="sub-agile">
					<input type="checkbox" id="brand1" value=""/>
					<label for="brand1">
						<span></span>J'accepte les termes & Conditions</label>
				</div>
				<div className="clear"></div>
				<input type="submit" value="Inscription"/>
			</form>
		</div>
	</div>
            </div>
        );
    }
}

export default SignUp;