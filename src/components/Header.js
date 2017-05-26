import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

import Beach from '../img/beach.jpg';
import Fire from '../img/fire.jpg';
import Yoga from '../img/yoga.jpg';
import Logo from '../img/logo.png';

class Header extends Component{
	constructor(props){
		super(props);

		this.state = {
			beach: false,
			yoga: false,
			fire: false
		};
		this._onBeachClick = this._onBeachClick.bind(this);
		this._onYogaClick = this._onYogaClick.bind(this);
		this._onFireClick = this._onFireClick.bind(this);
	}

	_onBeachClick(){
		this.setState({
			beach: true
		});
		if(this.state.beach === true){
			this.setState({
				beach : false,
				yoga : false,
				fire : false
			});
		}
	}

	_onYogaClick(){
		this.setState({
			yoga: true
		});
		if(this.state.yoga === true){
			this.setState({
				beach : false,
				yoga : false,
				fire : false
			});
		}
	}

	_onFireClick(){
		this.setState({
			fire: true
		});		
		if(this.state.fire === true){
			this.setState({
				beach : false,
				yoga : false,
				fire : false
			});
		}
	}

	render(){
		
		return(
			<header className="container-fluid">
				<div className="logo-img">
					<IndexLink to="/"><img src={Logo} alt="When You Call Your Mom" /></IndexLink>
				</div>
				<div className="row">
					<ul className="theme-ul col-md-offset-3">
						<li>
							<Link to="/beach">
								<button 
									id="beach-mom" 
									className="button blue text-blanco text-shadow-negra"
									onClick={this._onBeachClick}>
										Beach Mom
								</button>
							</Link>
							{this.state.beach ?
          							<img
          							id="beach-img"
          							className="back-img"
          							src={Beach}
				    				alt="beach theme"
				   					 /> :
				           			null
				       				 }
						</li>
						<li>
							<Link to="/yoga">
								<button 
									id="yoga-mom" 
									className="button blue text-blanco text-shadow-negra"
									onClick={this._onYogaClick}>
										Yoga Mom
								</button>
							</Link>
								{this.state.yoga ?
          							<img
          							id="beach-img"
          							className="back-img"
          							src={Yoga}
				    				alt="beach theme"
				   					 /> :
				           			null
				       				 }
							</li>
						<li>
							<Link to="/fire">
								<button 
									id="bad-mom" 
									className="button blue text-blanco text-shadow-negra"
									onClick={this._onFireClick}>
										Badass Mom
								</button>
							</Link>
							{this.state.fire ?
          							<img
          							id="beach-img"
          							className="back-img"
          							src={Fire}
				    				alt="beach theme"
				   					 /> :
				           			null
				       				 }
						</li>
					</ul>
				</div>
				<div className="row droprow">
					<div className="col-md-3 col-sm-12 col-xs-12">
						<nav className="navbar navbar-default navbar-fixed-side">
							<ul className="nav-ul">
								<li>
									<Link to="/topic" activeClassName="active">
										<button 
											className="large-button button blue text-blanco text-shadow-negra">
												Topic Generator
										</button>
									</Link>
								</li>
								<li>
									<Link to="/help" activeClassName="active">
										<button 
											className="large-button button blue text-blanco text-shadow-negra">
												HELP
										</button>
									</Link>
								</li>
								<li>
									<Link to="/abort">
										<button 
											className="large-button button red text-blanco text-shadow-negra">
												Abort
										</button>
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
			);
	}
}

export default Header;