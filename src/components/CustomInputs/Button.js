import React from 'react';
import Curve2 from '@/components/Curve2';

const Button = ({ id, label, onClick, tooltip, className, ...rest }) => {
	return (
		<div className={`custom-button ${className}`}>
			<button id={id} onClick={onClick} tooltip={tooltip}>
				{label}
				<Curve2 className="curve curve1"/>
				<Curve2 className="curve curve2"/>
			</button>
		</div>
	);
}

export default Button;