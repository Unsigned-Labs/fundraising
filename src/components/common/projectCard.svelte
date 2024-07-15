<script lang="ts">
	import Product1IMG from '$lib/assets/product1.png';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import RadialProgessBar from './radialProgessBar.svelte';
</script>

<div class="p-4 bg-[#F3F3F3] rounded-3xl w-fit flex flex-col gap-4 max-w-[23rem] max-h-[29.25]">
	<div class="relative w-full">
		<svg width="336" height="233" viewBox="0 0 336 233" fill="none">
			<path
				d="M320 0H16C7.16344 0 0 7.16345 0 16V217C0 225.837 7.16344 233 16 233H168H211C233.644 233 252 214.644 252 192V186.5C252 166.065 268.565 149.5 289 149.5H303C321.225 149.5 336 134.725 336 116.5V16C336 7.16344 328.837 0 320 0Z"
				fill="url(#productPattern)"
			/>
			<defs>
				<pattern id="productPattern" patternContentUnits="objectBoundingBox" width="1" height="1">
					<use
						xlink:href="#productImage"
						transform="matrix(0.00338269 0 0 0.00487805 -0.120724 0)"
					/>
				</pattern>
				<image id="productImage" width="367" height="205" xlink:href={Product1IMG} />
			</defs>
		</svg>
		<div class="absolute p-2.5 -bottom-1 -right-1">
			<RadialProgessBar percentage={68} />
		</div>
	</div>
	<Badge>Days left : 19</Badge>

	<div class="grid gap-2">
		<span class="text-2xl font-normal">Nostr Booth at BTC Prague</span>
		<span class="line-clamp-2 text-[#716D6D] text-sm font-light"
			>3 days of Purple Pilling Bitcoiners, showcasing the Other Stuff, providing Tech Support, and
			answering all questions about Nostr at the BTC Prague Expo!</span
		>
	</div>
	<div class="flex justify-between items-center">
		<Badge>42 contributors</Badge>
		<Button>Contribute</Button>
	</div>
</div>
