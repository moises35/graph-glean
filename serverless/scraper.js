const fetch = require("node-fetch")
const cheerio = require("cheerio")

exports.handler = async (event, context) => {
	const params = JSON.parse(event.body)
	const { url } = params

	try {
		const response = await fetch(url)
		const data = await response.text()
		const $ = cheerio.load(data)
		// De la etiqueta head, necesito extraer los metadatos del protocolo open graph
		const metadata = {}

		// Buscar todas las etiquetas <meta> en el elemento <head>
		$("head meta").each(function() {
			const property = $(this).attr("property")
			const name = $(this).attr("name")
			const content = $(this).attr("content")

			// Si el atributo "property" comienza con "og:" o el atributo "name" comienza con "twitter:", agregarlo a los metadatos
			if (property && property.startsWith("og:")) {
				metadata[property] = content // Quita el prefijo "og:" del nombre de propiedad
			} else if (name && name.startsWith("twitter:")) {
				metadata[name] = content
			}
		})

		// Imprimir los metadatos
		Object.keys(metadata).forEach(key => {
			console.log(`${key}: ${metadata[key]}`)
		})

		return {
			statusCode: 200,
			body: JSON.stringify(metadata),
		}
	} catch (error) {
		return {
			statusCode: 500,
			body: JSON.stringify(error),
		}
	}
}