const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			species: [],
			people: {},
			planet: {},
			kind: {},
			favorites: []

		},
		actions: {

			getCharacters: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/people/")
					if (!response.ok) {
						console.log("No se hizo la solicitud de caracteres", response.status)
					}
					const data = await response.json()
					console.log("Esta es la data caracteres", data.results)
					setStore({ characters: data.results })

				} catch (error) {
					console.log(error)
				}
			},

			getPlanets: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/planets/")
					if (!response.ok) {
						console.log("No se obtuvieron los planetas", response.status)
					}
					const data = await response.json()
					console.log("Esta es la data de planetas", data.results)
					setStore({ planets: data.results })

				} catch (error) {
					console.log(error)
				}
			},

			getSpecies: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/species/")
					if (!response.ok) {
						console.log("No se obtuvieron las especies", response.status)
					}
					const data = await response.json()
					console.log("Esta es la data de especies", data.results)
					setStore({ species: data.results })

				} catch (error) {
					console.log(error)
				}
			},

			getCharacterDetails: async (id) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/people/${id}`)
					if (!response.ok) {
						console.log("Error, no se obtuvo detalles del personaje", response.status)
					}
					const data = await response.json()
					console.log("Estos son los detalles del personaje", data.result)
					setStore({ people: data.result })
				} catch (error) {
					console.log(error)

				}
			},

			getPlanetDetails: async (id) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/planets/${id}`)
					if (!response.ok) {
						console.log("Error, no se obtuvo detalles del planeta", response.status)
					}
					const data = await response.json()
					console.log("Estos son los detalles del planeta", data.result)
					setStore({ planet: data.result })
				} catch (error) {
					console.log(error)

				}
			},

			getSpeciesDetails: async (id) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/species/${id}`)
					if (!response.ok) {
						console.log("Error, no se obtuvo detalles de especie", response.status)
					}
					const data = await response.json()
					console.log("Estos son los detalles de la especie", data.result)
					setStore({ kind: data.result })
				} catch (error) {
					console.log(error)

				}
			},

			favorites: (name) => {
				const store = getStore();
				const favoriteExists = store.favorites.includes(name);
				if (favoriteExists) {
					setStore({ favorites: store.favorites.filter(fav => fav !== name) });
				} else {
					setStore({ favorites: [...store.favorites, name] })
				}
			}
		}
	}
}
export default getState;
