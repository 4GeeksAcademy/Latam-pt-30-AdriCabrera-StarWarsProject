import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context)

	return (
		<nav className="navbar navbar-expand-lg sticky-top" style={{ background: "black" }}>
			<div className="container-fluid">
				<Link to="/" className="navbar-brand text-warning">
					<h1>
						Star Wars
					</h1>
				</Link>
				<div className="collapse navbar-collapse">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link to="/" className="nav-link active text-warning" aria-current="page">Home</Link>
						</li>
					</ul>
				</div>
				<li className="nav-item dropdown mx-5">
					<a className="nav-link dropdown-toggle text-warning" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites {store.favorites.length}
					</a>

					<ul className="dropdown-menu bg-dark">
						{store.favorites.map((item, id) => (
							<li key={id}>
								<a className="dropdown-item text-light"
									onClick={() => { actions.favorites(item) }}>
									{item}
									<i className="fa-solid fa-trash-can float-end text-warning"></i>
								</a>
							</li>
						)
						)}
					</ul>
				</li>
			</div>
		</nav >
	);
};
