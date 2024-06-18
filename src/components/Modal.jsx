export default function Modal() {
    return <div className="modal">
            <div className="modal__popup">
			  <div className="input">
				<input className="input_txt" type ="text" placeholder="ID를 입력하세요" />
				<input className="input_txt" type="text" placeholder="PW를 입력하세요" />
		      </div>
			  <div className="button">
				<button className="button_default">로그인</button>
				<button className="button_active"><a href="#">회원가입</a></button>
			  </div>
			</div>  
	       </div>
}
<script>
window.onload = function() { 
	function offClick(){
		 document.querySelector('.modal__popup').style.display='none';
	     document.querySelector('.modal').style.display='none';
		 }
		 /*document.querySelector('button_active').addEventListner('click', offClick);   
};*/
}
</script>