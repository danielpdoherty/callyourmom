import React, { Component } from 'react';
import Sound from 'react-sound';

import OceanWaves from '../sounds/OceanWaves.mp3';
import Beach from '../img/beach.jpg';

class SoothingHelp extends Component{
	constructor(props){
		super(props);

		this.state = {
			oceanWaves: false
		};

		this._onOWClick = this._onOWClick.bind(this);
	}

	  _onOWClick() {
    this.setState({
      oceanWaves: true
    });
  }

	render(){

		return(
			<div className="help-children soothing-help-page col-md-4">
				<button 
					onClick={this._onOWClick} 
					className="sound-button button blue text-blanco text-shadow-negra">
						Soothing Ocean Sounds
					{this.state.oceanWaves ?
          			<Sound
				      url={OceanWaves}
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
			);
	}
}

export default SoothingHelp;