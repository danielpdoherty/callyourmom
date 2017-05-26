import React, { Component } from 'react';

class Welcome extends Component{
  render(){
    return(
    	<div className="welcome-page row">
    		<div className="col-md-offset-3 col-md-6">
	    		<p className="welcome-text">
	    			Welcome,
	    			<br/>
	    			Everybody should call their mom, she did give you life after all.
	 				It's not always easy but we've got your back. We can generate topics, apologies, and even
	 				positive reinforcement for those really tough moms.
	 				<br/>
	 				There's also a handy abort feature for when you need to end the call quickly.
	 			</p>
	    	</div>
    	</div>
      );
  }
}

export default Welcome;