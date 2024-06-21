import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SpeciesDetails = () => {
    const { store, actions } = useContext(Context);
    const params = useParams()
    useEffect(() => {
        actions.getSpeciesDetails(params.id)
    }, [])

    return (
        <React.Fragment>
            <div className="container">
                <div className="row bg-dark text-light">
                    < img className="col-6 mr-3" style={{ height: "500px", width: "auto" }}
                        src={"https://starwars-visualguide.com/assets/img/species/" + (params.id) + ".jpg"}
                        alt={store.kind.properties?.name} />
                    <div className="col-6">
                        <h3 className="mt-3">{store.kind.properties?.name}</h3>
                        <p>{store.kind.description}.</p>
                    </div>
                </div>
                <hr className="line" />
                <div className="bg-dark">
                    <ul className="row list-group-horizontal mt-3">
                        <li className="col-2 list-group-item bg-dark text-light">
                            <div>
                                Classification:
                            </div>
                            {store.kind.properties?.classification}
                        </li>
                        <li className="col-2 list-group-item bg-dark text-light">
                            <div>
                                Designation:
                            </div>
                            {store.kind.properties?.designation}
                        </li>
                        <li className="col-2 list-group-item bg-dark text-light">
                            <div>
                                Eye Colors:
                            </div>
                            {store.kind.properties?.eye_colors}
                        </li>
                        <li className="col-2 list-group-item bg-dark text-light">
                            <div>
                                Hair Colors:
                            </div>
                            {store.kind.properties?.hair_colors}
                        </li>
                        <li className="col-2 list-group-item bg-dark text-light">
                            <div>
                                Skin Colors:
                            </div>
                            {store.kind.properties?.skin_colors}
                        </li>
                        <li className="col-2 list-group-item bg-dark text-light">
                            <div>
                                Language:
                            </div>
                            {store.kind.properties?.language}
                        </li>
                    </ul>
                </div>
            </div >
        </React.Fragment>
    )
};