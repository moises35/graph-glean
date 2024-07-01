<script>
	import Loading from "./../Icons/Loading.svelte"
	export let text = 'Obtener información'
	export let textLoading = 'Cargando...'
	export let loading = false
</script>

{#if !loading}
	<button
		class="relative flex font-medium text-white items-center justify-center px-5 py-2.5 before:absolute before:inset-0 before:rounded-lg before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
	>
		<span class="relative text-base">{text}</span>
	</button>
{:else}
	<button disabled type="button" class="text-white relative bg-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 inline-flex items-center before:absolute">
		<Loading />
		{ textLoading }
	</button>	
{/if}


	