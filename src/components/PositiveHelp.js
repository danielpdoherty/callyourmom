import React, { Component } from 'react';
import firebase, { database, firebaseListToArray } from '../firebase';


class PositiveHelp extends Component{
		constructor(props){
		super(props);

		this.ref = firebase.database().ref();
		this.state = {
			id : Date.now(),
			positive: '',
            affirmations: []
		}
	}

    initPosi(){
        database.ref('/momstuff/positive')
        .on('value', snapshot=>{
            const snap = firebaseListToArray(snapshot.val());
            console.log('should be array ', snap)
            this.setState({
                affirmations: snap
            }, function setRandomTopic(){
                this.setState({
                    positive: this.state.affirmations[Math.floor(Math.random() * this.state.affirmations.length)]
                });
            })
            });
    }

	componentDidMount(){
 	  this.initPosi();
        this.setState({
            showDiv: true
            })
            
        setInterval(function(){             
            this.initPosi()
        }.bind(this), 8000);
        
    }
    

	render(){
		return(
			<div className="help-children positive-help-page">
				<h1 id="positive">"{this.state.positive.affirmation}"</h1>
	    	</div>	
			);
	}
}

export default PositiveHelp;