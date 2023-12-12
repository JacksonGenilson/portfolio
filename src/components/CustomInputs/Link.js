import React from "react";
import NextLink from "next/link";

const Link = ({ id, label, href, onClick, tooltip, ...rest }) => {
	return (
		<div className="custom-button">
			<NextLink href={href} id={id} onClick={onClick} tooltip={tooltip}>
				{label}
			</NextLink>
		</div>
	);
}

export default Link;