import type { OpenGraphData } from "@/types"

export const responseToObject = (response: Record<string, string>): OpenGraphData => {
	return {
		og_title: response.og_title,
		og_description: response.og_description,
		og_image: response.og_image,
		og_url: response.og_url.replace(/(^\w+:|^)\/\//, ""),
		twitter_description: response.twitter_description,
		twitter_title: response.twitter_title,
	}
}