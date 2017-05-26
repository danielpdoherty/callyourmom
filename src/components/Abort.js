import React, { Component } from 'react';
import Sound from 'react-sound';

import DoorBell from '../sounds/DoorBell.mp3';
import GlassBreaking from '../sounds/GlassBreaking.mp3';
import BabyCrying from '../sounds/BabyCrying.mp3';
import HornHonk from '../sounds/HornHonk.mp3';

class Abort extends Component{
	constructor(props){
		super(props);
	     
		this.state = {	
	     doorbell: false,
	     carHorn: false,
	     glassBreak: false,
	     babyCry: false
	    };
	    
	    this._onDBClick = this._onDBClick.bind(this);
	    this._onCHClick = this._onCHClick.bind(this);
	    this._onGBClick = this._onGBClick.bind(this);
	    this._onBCClick = this._onBCClick.bind(this);

  }

  _onDBClick() {
    this.setState({
      doorbell: true
    });
  }

  _onCHClick() {
    this.setState({
      carHorn: true
    });
  }
   
  _onGBClick() {
    this.setState({
      glassBreak: true
    });
  }

   _onBCClick() {
    this.setState({
		babyCry: true
    });
  }
	render(){
		return(
	    	<div className="col-md-offset-3">
	    		<p className="abort-text">
					Looking for a way out?
				</p>
	    	<div className="abort-page">
				<button onClick={this._onDBClick} id="door" className="button blue text-blanco text-shadow-negra">
					Loud Doorbell
					{this.state.doorbell ?
          			<Sound
				      url={DoorBell}
				      playStatus={Sound.status.PLAYING}
				      playFromPosition={300 /* in milliseconds */}
				      onLoading={this.handleSongLoading}
				      onPlaying={this.handleSongPlaying}
				      onFinishedPlaying={this.handleSongFinishedPlaying} 
   					 /> :
           			null
       				 }
				</button>
				<button onClick={this._onCHClick} id="car" className="button blue text-blanco text-shadow-negra">
					Car Horn
					{this.state.carHorn ?
          			<Sound
				      url={HornHonk}
				      playStatus={Sound.status.PLAYING}
				      playFromPosition={300 /* in milliseconds */}
				      onLoading={this.handleSongLoading}
				      onPlaying={this.handleSongPlaying}
				      onFinishedPlaying={this.handleSongFinishedPlaying} 
   					 /> :
           			null
       				 }
				</button>
				<button onClick={this._onGBClick} id="glass" className="button blue text-blanco text-shadow-negra">
					Broken Glass
					{this.state.glassBreak ?
          			<Sound
				      url={GlassBreaking}
				      playStatus={Sound.status.PLAYING}
				      playFromPosition={300 /* in milliseconds */}
				      onLoading={this.handleSongLoading}
				      onPlaying={this.handleSongPlaying}
				      onFinishedPlaying={this.handleSongFinishedPlaying} 
   					 /> :
           			null
       				 }
				</button>
				<button onClick={this._onBCClick} id="baby" className="button blue text-blanco text-shadow-negra">
					Baby Crying
					{this.state.babyCry ?
          			<Sound
				      url={BabyCrying}
				      playStatus={Sound.status.PLAYING}
				      playFromPosition={300 /* in milliseconds */}
				      onLoading={this.handleSongLoading}
				      onPlaying={this.handleSongPlaying}
				      onFinishedPlaying={this.handleSongFinishedPlaying} 
   					 /> :
           			null
       				 }
				</button>
			</div>
				<p className="abort-text">
					Oh wow, how could you?
				</p>	    	
			</div>			
			);
	}
}

export default Abort;