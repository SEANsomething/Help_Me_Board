
import shape from 'assets/images/shape.png'

    
export default function List() {
    const arr = [
        {
            title: '1번 게시물',
            writer: '1번 작성자',
            category: '프론트 엔드'
        },
        {
            title: '2번 게시물',
            writer: '2번 작성자',
            category: '백 엔드'
        },
        {
            title: '3번 게시물',
            writer: '3번 작성자',
            category: '디자인'
        },
        {
            title: '4번 게시물',
            writer: '4번 작성자',
            category: '기획'
        },
    ]
    return <div className="list-block">
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
                return (<div className="list-block__post-list">
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
        <div className="search">
                <input id='search-input'>검색어를 입력하세요</input>
            </div>
    </div>
}



