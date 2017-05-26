import React, { Component } from 'react';

class Translate extends Component{
	constructor(props){
		super(props);

		this.setState = {
			translat : 'h'
		}

	}
// 
	 //  _onChangeTranslate(e){
  // 	e.preventDefault();
  // 	this.setState({
  // 		translat : 'hello'
  // 	});
  // }
  	theLog(){
  		console.log("hello")
  	}

	render(){
		return(
			<div className="topic-children search-page col-md-offset-3">
				<form>
					<input 
						type="text"
						name="type"
						placeholder="Enter your thoughts..."
						onSubmit={(e)=>this.setState({translat: e.target.value})} 
						 />

					<input type="submit" value="Submit" />
				</form>
				<div className="type-results">
					<h3>I'm Broken fix me</h3>
				</div>

	    	</div>	
			);
	}
}

export default Translate;