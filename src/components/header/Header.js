import "./style.css";

const Header = () => {
    return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						Hi, my name is <em>Abdulla</em>
					</strong>
					<br />a frontend developer
				</h1>
				<div className="header__text">
					<p>with passion for learning and creating.</p>
				</div>
				<a href="./CV_Abdulla_Mashayev.docx" className="btn">
					Download CV
				</a>
			</div>
		</header>
	);
}

export default Header;