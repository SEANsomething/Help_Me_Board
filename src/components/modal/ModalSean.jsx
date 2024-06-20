export default function ModalSean({ onEvent }) {

	const close = () => {
		onEvent();
	}
	
	return (
		<div className="modal-sean">
			<div className="modal-sean__box">
				<div className="modal-sean__close">
					<button className="button button_default" onClick={close}>닫기</button>
				</div>
				<div className="modal-sean__title">
				</div>
				<div className="modal-sean__content">
				</div>
			</div>
			<div className="gray__overlay"/>
		</div>);
}