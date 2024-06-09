export default function List() {
	return <div className="list-block">
		<div className="list-block__tab">
			<button className="list-block__tab__item list-block__tab__item--active">프론트엔드</button>
			<button className="list-block__tab__item">디자인</button>
		</div>
		<div className="list-block__post-list"></div>
	</div>
}