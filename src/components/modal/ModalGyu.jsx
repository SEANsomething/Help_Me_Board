export default function ModalGyu() {
	return <>
	     <div className="modal">
			{
				<div className="popup">
					<div className="txt">로그인 하시겠습니까?</div>
					<div className="btn">
						<button className="btn_Ok">로그인</button>
						<button className="btn_No">취소</button>
					</div>
				</div>
			}
		    {/* <div className="popup">
			     <div className="input_box">
				     <input className="input_txt" type="text" placeholder="ID를 입력하세요"/>
				     <input className="input_txt" type="text" placeholder="PW를 입력하세요"/>
			     </div>
		    </div> */}
		 </div>
	</>
}