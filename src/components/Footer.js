import React, { Component } from 'react';
import firebase, { database, firebaseListToArray } from '../firebase';

import Email from '../img/email.png';

class Footer extends Component{
	constructor(props){
		super(props);
		
		this.ref = firebase.database().ref();
		this.state = {
			id : Date.now(),
			currentApology: '',
			apologies: [],
			showDiv: false
		};
		this._onApologyClick = this._onApologyClick.bind(this);
	}

	_onApologyRender(){
		database.ref('/momstuff/apologies')
 		.on('value', snapshot=>{
 			const snap = firebaseListToArray(snapshot.val());
 			// console.log('should be array ', snap)
 			this.setState({
 				//apology: snap[Math.floor(Math.random() * snap.length)]
 				apologies: snap
 			}, function setRandomApology(){
 				this.setState({
 					currentApology: this.state.apologies[Math.floor(Math.random() * this.state.apologies.length)]
 				});
 			})
 			});
	}

	_onApologyClick(){
		// console.log(this.state.currentApology)
		database.ref('/momstuff/apologies')
 		.on('value', snapshot=>{
 			const snap = firebaseListToArray(snapshot.val());
 			// console.log('should be array ', snap)
 			this.setState({
 				//apology: snap[Math.floor(Math.random() * snap.length)]
 				apologies: snap
 			}, function setRandomApology(){
 				this.setState({
 					currentApology: this.state.apologies[Math.floor(Math.random() * this.state.apologies.length)]
 				});
 			})
 			});
		this.setState({
			showDiv : true
		})
	}

		 componentWillMount(){
		 	this._onApologyRender();
 	}


	render(){
		return(
			<footer className="row navbar navbar-inverse navbar-fixed-bottom">
				<div className="col-md-offset-3 footer-info">
					<h1>Daniel Doherty 2017.</h1>
					<img src={Email} alt="Email Icon" className="email-icon" />
				</div>

				{this.state.showDiv ?
          			<div className="apology-result">
						<p>{this.state.currentApology.sorry}</p>
					</div> 
					:
				  	null
   				 }
				

				<div className="apol-gen">
					<h3 className="apology">Apology Generator</h3>
					<button 
						id="apology-button" 
						className="apol-button button red text-blanco text-shadow-negra"
						onClick={this._onApologyClick}>
							Whoops!!
					</button>
				</div>
			</footer>

			);
	}
}

export default Footer;