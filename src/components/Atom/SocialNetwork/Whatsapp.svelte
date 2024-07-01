<script lang="ts">
	import Badge from "@/components/Atom/Badge.svelte"
	import { DEFAULT__OPENGRAPH_VALUES } from "@/consts/defaultValues"
	import type { OpenGraphData } from "@/types"
	
	export let data: OpenGraphData = {}
</script>

<div>
	<div class="border border-gray-300 rounded-xl overflow-hidden" style="background-color: rgb(214, 241, 200);">
		<img src={ data.og_image?? DEFAULT__OPENGRAPH_VALUES.og_image } alt={ "og-image de la página web de: " + data.og_title } class="w-full object-cover">
		<div class="px-4 py-4">
			<div class="font-medium text-sm truncate">
				{ data.og_title ?? DEFAULT__OPENGRAPH_VALUES.og_title}
			</div>
			<p class="text-gray-600 text-sm truncate">
				{ data.og_description ?? DEFAULT__OPENGRAPH_VALUES.og_description}
			</p>
			<div class="font-light text-sm truncate text-gray-400">
				{ data.og_url ?? DEFAULT__OPENGRAPH_VALUES.og_url}
			</div>
		</div>
	</div>
	<div class="px-6 pt-4 pb-2 text-center"><Badge text="WhatsApp" bgClass="bg-green-500" /></div>
</div>