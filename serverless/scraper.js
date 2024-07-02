import cheerio from "cheerio"
import fetch from "node-fetch"

// 'Access-Control-Allow-Credentials': "true"

export const handler = async () => {
	const params = JSON.parse(event.body)
	const { url } = params

	try {
		const response = await fetch(url)
		const data = await response.text()
		const $ = cheerio.load(data)
		// De la etiqueta head, necesito extraer los metadatos del protocolo open graph
		const metadata = {}

		// Buscar todas las etiquetas <meta> en el elemento <head>
		$("head meta").each(function () {
			const property = $(this).attr("property")
			const name = $(this).attr("name")
			const content = $(this).attr("content")

			if (property && property.startsWith("og:")) {
				// Reemplazar el : por _
				const key = property.replace(":", "_")
				metadata[key] = content
			} else if (name && name.startsWith("twitter:")) {
				const key = name.replace(":", "_")
				metadata[key] = content
			}
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