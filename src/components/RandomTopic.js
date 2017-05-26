import React, { Component } from 'react';
import firebase, { database, firebaseListToArray } from '../firebase';

class RandomTopic extends Component{
	constructor(props){
		super(props);

		this.ref = firebase.database().ref();
		this.state = {
			id : Date.now(),
			topic: '',
			topicArray: [],
			showDiv: false
		}
	}

	initTopic(){
		database.ref('/momstuff/topics')
 		.on('value', snapshot=>{
 			const snap = firebaseListToArray(snapshot.val());
 			console.log('should be array ', snap)
 			this.setState({
 				topicArray: snap
 			}, function setRandomTopic(){
 				this.setState({
 					topic: this.state.topicArray[Math.floor(Math.random() * this.state.topicArray.length)]
 				});
 			})
 			});
	}

	 componentDidMount(){
	 		this.initTopic();
	 		this.setState({
	 			showDiv: true
	 		})
	 		
	 		setInterval(function(){	 			
				this.initTopic()
			}.bind(this), 8000);
		
	}

	// componentWillUnmount(){
	// 	this.initTopic()
	// }

	render(){

		consoleLog()
		function consoleLog(){
			console.log('Hello!')
		}

		return(
			<div className="topic-children random-topic-page col-md-offset-3">
				
				{this.state.showDiv ?
					<h1 id="topicCopy" className="fadeOutIn">{this.state.topic.copy}</h1>
					:
				  	null
   				 }
	    	</div>	
			);
	}
}

export default RandomTopic;