import React, { Component } from 'react';

import SoothingHelp from './SoothingHelp';
import PositiveHelp from './PositiveHelp';

class Help extends Component{
	render(){
		return(
			<div className="help-page col-md-offset-3">
				<SoothingHelp />
				<PositiveHelp />
			</div>
			);
	}
}

export default Help;