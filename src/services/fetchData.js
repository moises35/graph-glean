export const fetchData = (urlWebsite) => {
	return fetch("./.netlify/functions/scraper", {
		method: "POST",
		body: JSON.stringify({
				url: urlWebsite,
		}),
	})
	.then((response) => {
		if (response.ok) {
			return response.json()
		}
		return Promise.reject(response)
	})
	.then((data) => {
		if (Object.keys(data).length === 0) {
			return {
				status: "error",
				error: "No se encontraron datos de la URL ingresada",
			}
		}

		return {
			data,
			status: "success",
		}
	})
	.catch(() => {
		return {
			status: "error",
			error: "Error al obtener los datos",
		}
	})
}