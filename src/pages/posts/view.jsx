// import Header from "components/Header";

// export default function PostView() {
// 	return <>
// 		<Header />
// 		<h1>Post View</h1>
// 	</>;
// }


import shape from 'assets/images/shape.png'

    
export default function List() {
    const arr = [
        // {
        //     id: 's_ad_1',
        //     title: '1번 게시물',
        //     writer: '1번 작성자',
        //     category: '프론트 엔드'
        // },
        // {
        //     id: 's_ad_2',
        //     title: '2번 게시물',
        //     writer: '2번 작성자',
        //     category: '백 엔드'
        // },
        // {
        //     id: 's_ad_3',
        //     title: '3번 게시물',
        //     writer: '3번 작성자',
        //     category: '디자인'
        // },
        // {
        //     id: 's_ad_4',
        //     title: '4번 게시물',
        //     writer: '4번 작성자',
        //     category: '기획'
        // },
    ]
    return (
    <div className="list-block">
        <div className="list-block__tab">
            <button className="list-block__tab__item list-block__tab__item--active">프론트엔드</button>
            <button className="list-block__tab__item">디자인</button>
        </div>
        <div className="list-block__post-list">
            <div className="list-block__post-list_up">
                 <div className="title">리액트 초기 설정</div>
                 <div className="comment_num">12</div>
                 <div className='picture'><img src={shape} alt="사진" /></div>
            </div>
            <div className="list-block__post-list_down">
                 <div className="tab">프론트엔드</div>
                 <div className="name">코딩어려워</div>
                 <div className="time">2분전</div>
            </div>
        </div> 
        {
            arr.map(el => {
                return (<div className="list-block__post-list" key={el.id}>
                    <div className="list-block__post-list_up">
                         <div className="title">{el.title}</div>
                         <div className="comment_num">12</div>
                         <div className='picture'><img src={shape} alt="사진" /></div>
                    </div>
                    <div className="list-block__post-list_down">
                         <div className="tab">{el.category}</div>
                         <div className="name">{el.writer}</div>
                         <div className="time">2분전</div>
                    </div>
                </div> )
            })
        }
    <div className='posts_typing'>
         {/* <input id='post-typing' type='' placeholder='내용 (10~1000글자)'/> */}
         <textarea placeholder='내용 (10~1000글자)'></textarea>
        <div className='count'>
            <div className='typing_num'>
                10
            </div>
            <div className='all_num'>
                / 1000
            </div>
        </div>
    </div>
<div className='list-btm-container'>
    <div className='list-btm-item'>
        <div className='list-btm__title'>리액트 초기 설정</div>
        <div className='list-btm__comment'>12</div>
        <div className='list-btm__id'>코딩어려워</div>
        <div className='list-btm__time'>2분전</div>
    </div>
    
    <div className='list-btm-item dark'>
        <div className='list-btm__title'>리액트 초기 설정</div>
        <div className='list-btm__comment'>12</div>
        <div className='list-btm__id'>코딩어려워</div>
        <div className='list-btm__time'>2분전</div>
    </div>
</div>

        <div className='pagenation'>
            <ul className='pagenation-num'>
                <li> <a href="#" className='first'>1</a> </li>
                <li> <a href="#" className='arrow left'></a> </li>
                <li> <a href="#" className='num'>2</a> </li>
                <li> <a href="#" className='num'>3</a> </li>
                <li> <a href="#" className='num'>4</a> </li>
                <li> <a href="#" className='num'>5</a> </li>
                <li> <a href="#" className='num'>6</a> </li>
                <li> <a href="#" className='num'>7</a> </li>
                <li> <a href="#" className='num'>8</a> </li>
                <li> <a href="#" className='num'>9</a> </li>
                <li> <a href="#" className='arrow right'></a> </li>
            </ul>
        </div>
    </div>
    )
}



