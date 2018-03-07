import React from 'react';

const char = props => {
	const style = {
		display: 'inline-block',
		padding: '15px',
		margin: '15px',
		border: '1px solid green',
		textAlign: 'center'
	};
	return (
		<div style={style} onClick={props.clicked}>
			{props.character}
		</div>
	);
};

export default char;
