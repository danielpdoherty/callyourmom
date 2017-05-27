import React, { Component } from 'react';

class Contact extends Component{
  render(){
    return(
    	<div className="page-page row">
    		<div className="col-md-offset-3 col-md-6">
	    		<form
	    			method="POST" 
	    			action="https://formspree.io/danielpdoherty@gmail.com">
	    		<div className="form-group">
		    		<label>Name</label>
		    		<input 
		    			type="text"
		    			name="name"
		    			className="form-control"
		    			placeholder="Enter Name..." />
	    		</div>
	    		<div className="form-group">
	    			<label>Email</label>
		    		<input 
		    			type="text"
		    			name="email"
		    			className="form-control"
		    			placeholder="Enter Email..." />
		    	</div>
		    	<div className="form-group">
		    		<label>Message</label>
		    		<textarea
		    			rows="7"
		    			name="message"
		    			className="form-control"
		    			placeholder="Enter Message...">
		    		</textarea>
		    	</div>
		    	<input type="text" name="_gotcha" className="gotcha" />
		    	<div className="form-group">
		    		<input 
		    			type="submit"
		    			name="submit"
		    			className="form-button button blue text-blanco text-shadow-negra"
		    			value="Submit" />
		    	</div>
	    		</form>
	    	</div>
    	</div>
      );
  }
}

export default Contact;