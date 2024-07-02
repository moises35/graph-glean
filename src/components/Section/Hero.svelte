<script lang="ts">
	import Form from "@/components/Atom/Form.svelte"
	import OpenGraph from "@/components/Section/OpenGraph.svelte"
	import type { OpenGraphData } from "@/types"

	let dataOpenGraph: OpenGraphData = {}

	const handleUpdateData = (event: CustomEvent<OpenGraphData>) => {
		dataOpenGraph = event.detail
	}
</script>

<div class="relative mb-8">
	<div
		aria-hidden="true"
		class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
	>
		<div
			class="h-56 bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700"
		>
		</div>
		<div class="h-32 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600">
		</div>
	</div>
	<div class="mx-auto max-w-7xl px-6 md:px-12 xl:px-6">
		<div class="relative ml-auto pt-20">
			<div class="mx-auto text-center lg:w-2/3">
				<div
					class="gradient-text to-danger bg-gradient-to-r from-primary to-purple-400 bg-clip-text pb-4 text-center text-8xl font-extrabold tracking-tighter text-transparent"
				>
					GraphGlean
				</div>
				<p class="mt-5 text-gray-700 dark:text-gray-300">
					Optimiza tus publicaciones en redes sociales con el Protocolo Open Graph.
				</p>
				<p class="mb-6 mt-1 text-gray-700 dark:text-gray-300">
					Implementar etiquetas Open Graph asegura que tus enlaces se compartan con imágenes,
					títulos y descripciones precisas, mejorando la visibilidad y el atractivo de tu
					contenido en línea.
				</p>
				<Form on:update={handleUpdateData} />
			</div>
		</div>
	</div>
</div>

<OpenGraph data={dataOpenGraph} />

<style>

</style>
