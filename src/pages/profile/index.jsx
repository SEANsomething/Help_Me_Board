import Header from "components/Header";
import ModalSean from "components/modal/ModalSean";
import { useState } from 'react';

export default function Profile() {
	const [isModalOn, setIsModalOn] = useState(false);

	const modalHandler = () => {
		setIsModalOn(!isModalOn);
	}

	const func1 = () => {
		console.log('func1');
		console.log(1+1);
	}

	return <>
		<Header />
		<h1>Profile Page</h1>
		<button className="button button_default" onClick={modalHandler}>모달</button>
		<button className="button button_default" onClick={func1}>func1실행</button>
		{isModalOn && <ModalSean onEvent={modalHandler}/>}
	</>;
}