import React, { useContext, useEffect } from "react"
import { Characters } from "../views/Characters.jsx"
import { Planets } from "../views/Planets.jsx"
import { Species } from "../views/Species.jsx"

export const Blog = () => {

    useEffect(() => {

    }, [])
    return (

        <div className="container text-light" style={{ minHeight: "100vh", background: "black" }}>
            <Characters />
            <Planets />
            <Species />
        </div>


    )
}