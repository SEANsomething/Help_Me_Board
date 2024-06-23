import Modal from "components/Modal";

export default function BasicModal() {
	return <>
		<div className="basic-modal">
			<div className="basic-modal-overlay"></div>
			<div className="modal__content">
			<Modal />
			</div>
		</div>
	</>
}