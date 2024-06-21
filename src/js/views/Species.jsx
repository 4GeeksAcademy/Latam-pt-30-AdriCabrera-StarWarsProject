import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { Context } from "../store/appContext.js"
import rigoImage from "../../img/rigo-baby.jpg";


export const Species = () => {
    const { store, actions } = useContext(Context)
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        actions.getSpecies()
    }, [])

    const handleFavorites = (name) => {
        if (favorites.includes(name)) {
            setFavorites(favorites.filter(fav => fav !== name))
        } else {
            setFavorites([...favorites, name])
        }
        actions.favorites(name)
    }

    return (

        < div className="my-3">
            <div className="pt-3">
                <h2>Species</h2>
                <div className="d-flex flex-row overflow-auto">
                    {store.species.map((item, id) => (
                        <div className="card bg-dark text-light"
                            style={{ width: "18rem", flex: "none", margin: "10px" }}
                            key={id}
                        >
                            <img src={"https://starwars-visualguide.com/assets/img/species/" + (id + 1) + ".jpg"} className="card-img-top"
                                alt={item.name} />
                            <div className="card-body mt-3">
                                <h5 className="card-title">{item.name}</h5>
                                <div className="container d-flex justify-content-between mt-5">
                                    <Link to={"/SpeciesDetails/" + (id + 1)} className="btn btn-primary">Details</Link>
                                    <div className="btn btn float-end"
                                        onClick={() => handleFavorites(item.name)}
                                    >
                                        <i className={"fa-solid fa-heart " + (favorites.includes(item.name) ? "text-danger" : "text-warning")}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div >
    )
}
