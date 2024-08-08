import Header from "components/Header";
import List from "components/List";
import PostForm from "components/PostForm";
import ModalGyu from "components/modal/ModalGyu";

export default function PostEdit() {
	const isDone = true;
	return <>
		<Header />
		<List />
		<h1>PostEdit Page</h1>
		    {/* <div className="post__input">
			     <input className="post__input__title" type="text" placeholder="제목(3~20 글자)"/>
			    <div className="input__set">	
					<textarea className="post__input__content" placeholder="내용(10~1000 글자)"/>
					<div className="post__input__count">0/1000</div>
			    </div>
		        <div className="post__btn">
			        <button className="post__btn__active">파일첨부</button>
			        <button className="post__btn__default">등록</button>
		        </div>
		   </div>/ */}
		   <div className="post__edit">
			     <input className="post__edit__title" type="text" placeholder="제목(3~20 글자)"/>
			    <div className="edit__set">	
					<textarea className="post__edit__content" placeholder="내용(10~1000 글자)" disabled={isDone}/>
					<div className="post__edit__count">{isDone ? <span className="txt-count">0</span> : 0}/1000</div>
			    </div>
		        <div className="post__btn">
			        <button className="post__btn__active">삭제하기</button>
			        <button className="post__btn__default">수정하기</button>
		        </div>
		   </div>
		{false && <ModalGyu />}
		<PostForm />
	</>;
}