<script lang="ts">
	import ButtonSubmit from "@/components/Atom/ButtonSubmit.svelte"
	import Link from "@/components/Icons/Link.svelte"
	import { fetchData } from '@/services/fetchData'
	import type { OpenGraphData } from "@/types"
	import { responseToObject } from '@/utils/responseToObject'
	import { validateURL } from '@/utils/validateUrl'
	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher()
	// export let dataOpenGraph: OpenGraphData = {}

	let url: string = ""
	let errorMessage: string = "";
	let loading: boolean = false;
	
	const updateData = (newData: OpenGraphData) => {
		dispatch("update", newData)
	}

	const handleForm = async (e: SubmitEvent) => {
		if(url.trim() === "") {
			errorMessage = "El campo no puede estar vacio."
			return
		}

		if(validateURL(url)) {
			loading = true;
			errorMessage = "";

			try {
				const data = await fetchData(url)
				console.log(data)
				
				if(data.status != "error")  {
					const auxData: OpenGraphData = responseToObject(data.data)
					updateData(auxData)
					
				} else {
					errorMessage = data.error!
				}

			} catch (error) {
				errorMessage = "Ocurrió un error al obtener la información."
			} finally {
				loading = false;
			}

			return
		} 

		errorMessage = "La URL no es válida. Asegurese de utilizar una URL que tenga el protocolo https."
	}
</script>


<form on:submit|preventDefault={handleForm}>
	<div class="relative mb-8">
		<div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
			<Link />
		</div>
		<input
			type="url"
			id="input-group-1"
			bind:value={url}
			class="block w-full rounded-lg border border-gray-300 p-2.5 ps-10 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
			placeholder="https://moises35.vercel.app/"
		/>
	</div>
	<div class="mt-1 flex flex-wrap justify-center gap-x-6 gap-y-4">
		<ButtonSubmit 
			{ loading }
		/>
	</div>
	<p 
		class="mt-2 text-sm text-red-500 {errorMessage ? "" : "hidden"}"
	>
		{ errorMessage }
	</p>
</form>

