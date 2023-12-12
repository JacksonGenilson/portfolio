"use client"

import { useState } from 'react';
import { useRouter } from "next/navigation";
import Durinsdoor from '@/components/Durinsdoor';
import Button from '@/components/CustomInputs/Button';

export default function Door() {
	const [active, setActive] = useState(false);
	const router = useRouter();

	const handleClick = () => {
		setActive(true);
		setTimeout(() => {
			// router.push(`/teste`);
			console.log('ESTOY AQUI:::: ', );
		}, 4000);
	}

	return (
		<div className="door">
			<div className="box">
				<Durinsdoor className={active ? 'active' : ''}/>
				<Button className={!active ? 'active' : ''} onClick={handleClick} label="Click here friend, and enter!"/>
			</div>
		</div>
	);
}