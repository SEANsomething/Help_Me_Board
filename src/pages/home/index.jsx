import Modal from "components/Modal";
import Header from "components/Header";


export default function Home() {
	return <>
		<Header />
		<Modal />
		<div id="login_popup">
			<input type="ID를 입력하세요" />
			<input type="PW를 입력하세요" />

			<button>로그인</button>
			<button>회원가입</button>
		</div>
	</>
}