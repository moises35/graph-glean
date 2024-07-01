export const validateURL = (urlWebsite) => {
	const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/
	return urlRegex.test(urlWebsite)
}