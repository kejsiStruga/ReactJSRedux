import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';

function average(data) {
	return _.round(_.sum(data)/data.length);
}
//only some props come in; thats it 
///=>not container, no need state
export default(props) => {
	return (
	<div>	
		<Sparklines height={50} width={70} data={props.data}>
			<SparklinesLine color={props.color} />
			<SparklinesReferenceLine tyepe="avg"/>
		</Sparklines>
		<div>{average(props.data)}  {props.units}</div>
	</div>
	);
}