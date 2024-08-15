
import shape from 'assets/images/shape.png'
import search from 'assets/images/search.png';

    
export default function List() {
    const arr = [
        {
            id: 's_ad_1',
            title: '1번 게시물',
            writer: '1번 작성자',
            category: '프론트 엔드'
        },
        {
            id: 's_ad_2',
            title: '2번 게시물',
            writer: '2번 작성자',
            category: '백 엔드'
        },
        {
            id: 's_ad_3',
            title: '3번 게시물',
            writer: '3번 작성자',
            category: '디자인'
        },
        {
            id: 's_ad_4',
            title: '4번 게시물',
            writer: '4번 작성자',
            category: '기획'
        },
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
    <div className='btm_content'>
        <div className="search">
            <input id='search-input' type="search" placeholder="검색어를 입력해주세요"/>
            <img src={search} alt="search" className='search-icon'/>
            {/* 여기는 찾아봤는데 방법을 모르겠네요ㅜㅜ input창에 아이콘 넣기 */}
						{/* img src를 상대좌표로 넣을때는 import를 사용하면 됩니다*/}
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
    </div>)
}



