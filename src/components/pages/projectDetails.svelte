<script lang="ts">
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import LocationIcon from '$lib/assets/icons/location.svg';
	import QRIcon from '$lib/assets/icons/qrCode.svg';
	import RadialProgessBar from '../common/radialProgessBar.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import RightArrowIcon from '$lib/assets/icons/rightArrow.svg';
	import ProjectCard from '../common/projectCard.svelte';
</script>

<section class="px-40 pt-20">
	<div class="flex gap-24 justify-between h-[502px]">
		<div class="flex flex-col gap-6 w-[380px]">
			<div class="w-[380px] h-[261px] bg-[#D9D9D9] rounded-lg flex justify-center items-center">
				<!-- TODO -->
			</div>

			<h1 class="text-xl font-semibold text-[#3B3A3A]">
				HEADING : OLEADA Anywear: the Multi-functional Waterproof Everyday Bag
			</h1>

			<div class="flex gap-4">
				<Badge class="bg-[#48AD6A1A]/[.1] text-[#0B752F] text-xs" size="lg">Tags</Badge>
				<Badge class="text-xs flex gap-1" size="lg" variant="outline"
					><img src={LocationIcon} alt="Location Icon" />Location</Badge
				>
			</div>

			<div class="py-3 px-4 flex items-center justify-between gap-4 bg-[#D9D9D933]/[.2] rounded-xl">
				<div class="flex items-center">
					<div class="rounded-full size-9 bg-[#D9D9D9] flex items-center justify-center">
						<!-- TODO -->
					</div>
					<div class="ml-3 flex flex-col gap-1">
						<span>name</span>
						<span class="text-xs">lightning address@something</span>
					</div>
				</div>
				<div class="flex items-center">
					<span>nPub</span>
					<div class="ml-8 p-1.5 rounded-md border border-[#0B752F]">
						<img src={QRIcon} alt="QR Icon" />
					</div>
				</div>
			</div>
		</div>

		<div class="flex flex-col justify-between">
			<div class="flex flex-col gap-4">
				<div class="flex flex-col gap-2">
					<span class="text-sm font-semibold text-[#322E2E]">Purpose of the project:</span>
					<span class="text-[#8C8282]"
						>To promote wider understanding and adoption of Bitcoin and Financial Education through
						art.
					</span>
				</div>
				<div class="flex flex-col gap-2.5">
					<div class="flex gap-4">
						<RadialProgessBar percentage="68" strokeColor="#C1C1C047" barColor="#746F6A" />
						<div class="flex items-center justify-center gap-1">
							<span class="text-2xl font-medium">$ 22,000</span>
							<span>left</span>
						</div>
					</div>
					<div class="flex flex-col gap-5">
						<div class="flex justify-between items-center">
							<span class="text-lg text-[#595959]">Funding needed</span><span
								class="text-2xl font-semibold">$ 76,800</span
							>
						</div>
						<div class="flex justify-between items-center">
							<span class="text-lg text-[#595959]">Contributors</span><span
								class="text-lg font-medium">234</span
							>
						</div>
						<div class="flex justify-between items-center">
							<span class="text-lg text-[#595959]">Time</span><span class="text-lg font-medium"
								>10 days to go</span
							>
						</div>
					</div>
				</div>
			</div>
			<div class="flex flex-col gap-7">
				<div class="flex justify-between">
					<Button>Contribute to this progect</Button>
					<Button variant="outline">Save for later</Button>
				</div>
				<div class="flex justify-between items-center">
					<span class="px-6 py-3 text-[#FB700A] font-medium">Share on social media</span>
					<div class="flex gap-3">
						<div class="size-8 rounded-full bg-[#D9D9D9]"><!-- TODO --></div>
						<div class="size-8 rounded-full bg-[#D9D9D9]"><!-- TODO --></div>
						<div class="size-8 rounded-full bg-[#D9D9D9]"><!-- TODO --></div>
						<div class="size-8 rounded-full bg-[#D9D9D9]"><!-- TODO --></div>
					</div>
				</div>
			</div>
		</div>
		<div class="flex gap-8">
			<div class="border-r border-[#B9ADAD]" />
			<div class="flex flex-col gap-10">
				<div class="flex flex-col gap-5 overflow-y-auto px-2.5">
					{#each new Array(5) as _, i}
						<div class="bg-[#D9D9D940]/[.25] rounded-3xl p-6 pt-3 flex flex-col gap-3">
							<span class="text-xl font-medium">Goal {i + 1}:</span>
							<div class="flex flex-col gap-2">
								<span class="text-[#3B3A3A] font-medium"
									>AquaRover Wheeled Water Resistant Duffel Bag</span
								>
								<span class="text-xs text-[#7F7F7F]"
									>Long-lasting, ultra-durable water resistant polyester | Dedicated garment pocket
									| 4.6L big capacity</span
								>
							</div>
						</div>{/each}
				</div>
				<Button
					variant="outline"
					class="flex items-center gap-5 justify-center border-[#0B752F] text-[#0B752F] mx-2.5"
					>Completed goals <img src={RightArrowIcon} alt="Right Arrow" /></Button
				>
			</div>
		</div>
	</div>

	<div class="flex flex-col mt-20">
		<div class="flex gap-28">
			<span class="text-xl font-medium">Story</span><!-- TODO -->
			<span class="text-xl font-medium">Comments</span><!-- TODO -->
			<span class="text-xl font-medium">Contributions</span><!-- TODO -->
		</div>
		<div class="border-b border-[#D8D8D8] mt-9" />

		<div class="mt-14 flex w-[68rem]">
			<div class="flex flex-col gap-6 overflow-y-scroll pr-12 shrink-0">
				<div class="flex gap-2 items-center">
					<div class="size-2.5 rounded-full bg-[#48AD6A]" />
					<span class="font-semibold text-sm">Story</span>
				</div>
				<div class="flex gap-2 items-center">
					<div class="size-2.5 rounded-full bg-[#48AD6A] invisible" />
					<span class="font-semibold text-sm">Campaign</span>
				</div>
				<div class="flex gap-2 items-center">
					<div class="size-2.5 rounded-full bg-[#48AD6A] invisible" />
					<span class="font-semibold text-sm">Risks</span>
				</div>
			</div>

			<div class="pl-14 text-[#958B8B] flex flex-col gap-12">
				<p>
					The Bitcoin Squad Sticker Project is here to ignite a revolution at the intersection of
					art and financial technology. We're ditching the legacy finance scene and bringing
					you mini masterpieces that teach about the Bitcoin Network and the groundbreaking
					technology behind it. These palm-sized ( 10 cm hight ) works of art are the perfect
					statement piece for your laptop, phone, notebook, or anywhere you want to make a bold
					declaration. But this sticker pre-sale is about more than just getting your hands on cool
					art. Your contribution will fuel the creation of these stickers and propel future
					Bitcoin-themed street art around the globe!
				</p>
				<div class="bg-[#F7F7F7] rounded-lg h-64 w-full" />
				<p>
					The Bitcoin Squad Sticker Project is here to ignite a revolution at the intersection of
					art and financial technology. We're ditching the legacy finance scene and bringing
					you mini masterpieces that teach about the Bitcoin Network and the groundbreaking
					technology behind it. These palm-sized ( 10 cm hight ) works of art are the perfect
					statement piece for your laptop, phone, notebook, or anywhere you want to make a bold
					declaration. But this sticker pre-sale is about more than just getting your hands on cool
					art. Your contribution will fuel the creation of these stickers and propel future
					Bitcoin-themed street art around the globe!
				</p>
				<div class="bg-[#F7F7F7] rounded-lg h-64 w-full" />
			</div>
		</div>
	</div>

	<div class="flex flex-col gap-9 mt-32">
		<span class="font-Roboto text-[40px] capitalize">Recommended for you</span>
		<div class="flex flex-wrap gap-6">
			{#each new Array(4) as _, i}
				<ProjectCard />
			{/each}
		</div>
	</div>
</section>
