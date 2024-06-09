import logo from 'assets/images/logo.png';

export default function Header() {
	return <header className='header'>
		<div className='header__links'>
			<button className='btn-text'>
				내 정보
			</button>
			<button className='btn-text'>
				로그인
			</button>
		</div>
		<div className='header__logo'>
			<img src={logo} alt="로고" />
		</div>
	</header>;
}