export default function Modal() {
    return <div className="modal">
			<div className="modal__input">
				<input className="modal__input--id" type ="text" placeholder="ID를 입력하세요" />
				<input className="modal__input--pw" type="text" placeholder="PW를 입력하세요" />
		    </div>
			<div className="modal__button">
				<button className="modal__button--login">로그인</button>
				<button className="modal__button--join">회원가입</button>
				</div>
		</div>
}