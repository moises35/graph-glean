<script lang="ts">
	import Badge from "@/components/Atom/Badge.svelte"
	import { DEFAULT__OPENGRAPH_VALUES } from "@/consts/defaultValues"
	import type { OpenGraphData } from "@/types"
	
	export let data: OpenGraphData = {}
</script>

<div>
	<div class="border border-gray-300 rounded-sm shadow-md overflow-hidden bg-white">
		<img src={ data.og_image?? DEFAULT__OPENGRAPH_VALUES.og_image } alt={ "og-image de la página web de: " + data.og_title } class="w-full object-cover">
		<div class="px-4 py-4">
			<div class="font-bold text-sm">
				{ data.og_title ?? DEFAULT__OPENGRAPH_VALUES.og_title}
			</div>
			<div class="font-light text-xs truncate text-gray-500 uppercase">
				{ data.og_url ?? DEFAULT__OPENGRAPH_VALUES.og_url}
			</div>
		</div>
	</div>
	<div class="px-6 pt-4 pb-2 text-center"><Badge text="LinkedIn" bgClass="bg-blue-800" /></div>
</div>