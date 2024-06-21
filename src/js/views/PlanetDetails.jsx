import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetDetails = () => {
    const { store, actions } = useContext(Context);
    const params = useParams()
    useEffect(() => {
        actions.getPlanetDetails(params.id)
    }, [])

    return (
        <React.Fragment>
            <div className="container">
                <div className="row bg-dark text-light">
                    < img className="col-6 mr-3" style={{ height: "500px", width: "auto" }}
                        src={"https://starwars-visualguide.com/assets/img/planets/" + (params.id) + ".jpg"}
                        alt={store.planet.properties?.name} />
                    <div className="col-6">
                        <h3 className="mt-3">{store.planet.properties?.name}</h3>
                        <p>{store.planet.description}.</p>
                    </div>
                </div>
                <hr className="line" />
                <div className="bg-dark">
                    <ul className="row list-group-horizontal mt-3">
                        <li className="col-2 list-group-item bg-dark text-light">
                            <div>
                                Climate:
                            </div>
                            {store.planet.properties?.climate}
                        </li>
                        <li className="col-2 list-group-item bg-dark text-light">
                            <div>
                                Diameter:
                            </div>
                            {store.planet.properties?.diameter}
                        </li>
                        <li className="col-2 list-group-item bg-dark text-light">
                            <div>
                                Gravity:
                            </div>
                            {store.planet.properties?.gravity}
                        </li>
                        <li className="col-2 list-group-item bg-dark text-light">
                            <div>
                                Terrain:
                            </div>
                            {store.planet.properties?.terrain}
                        </li>
                        <li className="col-2 list-group-item bg-dark text-light">
                            <div>
                                Population:
                            </div>
                            {store.planet.properties?.population}
                        </li>
                        <li className="col-2 list-group-item bg-dark text-light">
                            <div>
                                Orbital Period:
                            </div>
                            {store.planet.properties?.orbital_period}
                        </li>
                    </ul>
                </div>
            </div >
        </React.Fragment>
    )
};
