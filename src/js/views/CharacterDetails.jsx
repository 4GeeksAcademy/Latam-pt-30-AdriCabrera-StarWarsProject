import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterDetails = () => {
	const { store, actions } = useContext(Context);
	const params = useParams()
	useEffect(() => {
		actions.getCharacterDetails(params.id)
	}, [])

	return (
		<React.Fragment>
			<div className="container">
				<div className="row bg-dark text-light">
					< img className="col-6 mr-3" style={{ height: "500px", width: "auto" }}
						src={"https://starwars-visualguide.com/assets/img/characters/" + (params.id) + ".jpg"}
						alt={store.people.properties?.name} />
					<div className="col-6">
						<h3 className="mt-3">{store.people.properties?.name}</h3>
						<p>{store.people.description}.</p>
					</div>
				</div>
				<hr className="line" />
				<div className="bg-dark">
					<ul className="row list-group-horizontal mt-3">
						<li className="col-2 list-group-item bg-dark text-light">
							<div>
								Gender:
							</div>
							{store.people.properties?.gender}
						</li>
						<li className="col-2 list-group-item bg-dark text-light">
							<div>
								Eye Color:
							</div>
							{store.people.properties?.eye_color}
						</li>
						<li className="col-2 list-group-item bg-dark text-light">
							<div>
								Hair Color:
							</div>
							{store.people.properties?.hair_color}
						</li>
						<li className="col-2 list-group-item bg-dark text-light">
							<div>
								Skin Color:
							</div>
							{store.people.properties?.skin_color}
						</li>
						<li className="col-2 list-group-item bg-dark text-light">
							<div>
								Height:
							</div>
							{store.people.properties?.height}
						</li>
						<li className="col-2 list-group-item bg-dark text-light">
							<div>
								Mass:
							</div>
							{store.people.properties?.mass}
						</li>
					</ul>
				</div>
			</div >
		</React.Fragment>
	)
};
