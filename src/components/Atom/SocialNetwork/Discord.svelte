<script lang="ts">
	import Badge from "@/components/Atom/Badge.svelte"
	import { DEFAULT__OPENGRAPH_VALUES } from "@/consts/defaultValues"
	import type { OpenGraphData } from "@/types"
	
	export let data: OpenGraphData = {}
</script>

<div>
	<div class="rounded-sm overflow-hidden bg-gray-800 px-4 py-4">
		<div class="font-regular text-xs pb-3 text-white">
			{ data.og_url ?? DEFAULT__OPENGRAPH_VALUES.og_url}
		</div>
		<div class="font-bold text-md pb-3" style="color: rgb(0, 176, 244);">
			{ data.og_title ?? DEFAULT__OPENGRAPH_VALUES.og_title}
		</div>
		<p class="text-gray-200 text-sm leading-4 pb-3">
			{ data.og_description ?? DEFAULT__OPENGRAPH_VALUES.og_description}
		</p>
		<img src={ data.og_image?? DEFAULT__OPENGRAPH_VALUES.og_image } alt={ "og-image de la página web de: " + data.og_title } class="w-full object-cover rounded-lg">
	</div>
	<div class="px-6 pt-4 pb-2 text-center">
		<Badge 
			text="Discord" 
			bgClass="bg-violet-800" 
		/>
	</div>
</div>