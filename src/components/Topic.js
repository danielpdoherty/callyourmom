import React, { Component } from 'react';

import RandomTopic from './RandomTopic';


class Topic extends Component{
	render(){
		return(
			<div className="topic-page row">
    			<RandomTopic />
	    	</div>	
			);
	}
}

export default Topic;