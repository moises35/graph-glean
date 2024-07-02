<script lang="ts">
	import Discord from "@/components/Atom/SocialNetwork/Discord.svelte"
	import Facebook from "@/components/Atom/SocialNetwork/Facebook.svelte"
	import Instagram from "@/components/Atom/SocialNetwork/Instagram.svelte"
	import Linkedin from "@/components/Atom/SocialNetwork/Linkedin.svelte"
	import Twitter from "@/components/Atom/SocialNetwork/Twitter.svelte"
	import Whatsapp from "@/components/Atom/SocialNetwork/Whatsapp.svelte"
	import type { OpenGraphData } from "@/types"

	export let data: OpenGraphData = {}
</script>

<div>
	{#if Object.keys(data).length > 0}
		<div class="container mx-auto px-8 py-4 pb-10">
			<!-- Social Network Container -->
			<div
				class="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0 lg:grid-cols-3"
			>
				<Facebook {data} />
				<Whatsapp {data} />
				<Instagram {data} />
				<Discord {data} />
				<Twitter {data} />
				<Linkedin {data} />
			</div>
		</div>
	{/if}
</div>
