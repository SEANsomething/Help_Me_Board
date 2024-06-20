// import Modal from "components/Modal";
import Header from "components/Header";
import List from "components/List";
import Comment from "components/Comment";
import ModalGyu from "components/modal/ModalGyu";
// import ModalSean from "components/modal/ModalSean";


export default function Home() {
	return <>
		<Header />
		<List />
		{/* <Modal /> */}
		<ModalGyu />
		{/* <ModalSean /> */}
		<Comment />
	</>
}