<script lang="ts">
	import ProjectLeaderboardIMG from '$lib/assets/project-leaderboard.svg';
	import ProjectCard from '../common/projectCard.svelte';
	import RadialProgessBar from '../common/radialProgessBar.svelte';
	import StartProjectIMG from '$lib/assets/young-woman-busy-with-her-work.svg';
	import ContributorIMG from '$lib/assets/young-woman-working-on-a-computer.svg';
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<section class="px-40 py-32">
	<div class="flex flex-col justify-between gap-6">
		<span class="text-[#054B1D] font-semibold text-6xl">Project Leaderboard</span>
		<div class="flex gap-32">
			<div class="flex flex-col gap-14 pt-7">
				<div class="flex gap-6">
					<Button size="lg">This week</Button>
					<Button size="lg" variant="outline">All time</Button>
				</div>
				<div class="flex flex-col gap-3 mt-2">
					<span class="text-[#0D5727] text-4xl font-semibold">Nostr Booth at BTC Prague</span>
					<span class="text-[#6A8272] text-2xl font-normal"
						>3 days of Purple Pilling Bitcoiners, showcasing the Other Stuff, providing Tech
						Support, and answering all questions about Nostr at the BTC Prague Expo!</span
					>
				</div>
				<div class="flex gap-8 items-center">
					<RadialProgessBar percentage={68} />
					<div class="flex gap-4 font-Roboto">
						<div class="p-1.5 rounded-md bg-[#D5ECDE] text-[#0C7630] text-xs font-normal">
							Days left : 19
						</div>
						<div class="p-1.5 rounded-md bg-[#D5ECDE] text-[#0C7630] text-xs font-normal">
							42 contributors
						</div>
					</div>
				</div>
			</div>
			<img src={ProjectLeaderboardIMG} alt="Project Leaderboard" />
		</div>
	</div>
	<div class="mt-40 flex flex-col gap-9">
		<span class="text-4xl font-medium">Recommended for you</span>
		<div class="flex flex-col gap-6">
			<div class="flex gap-6 flex-wrap">
				{#each new Array(15) as _, i}
					<ProjectCard />
				{/each}
			</div>
		</div>
		<div class="flex justify-center items-center mt-14">
			<Button variant="outline" class="border-2">View more</Button>
		</div>
	</div>
	<div class="mt-32 flex justify-center items-center gap-5">
		<div class="w-[34.75rem] h-[32rem] bg-[#0B752F] rounded-3xl flex flex-col justify-between">
			<div class="text-5xl py-12 px-10 text-white font-semibold">Start Your <br />Project Now</div>
			<div class="flex justify-between items-center mt-36 gap-16">
				<img src={StartProjectIMG} alt="Start your project now" />
				<div
					class="relative py-16 px-14 bg-[#D5ECDE33] bg-opacity-20 rounded-3xl -top-8 right-11 text-white text-2xl font-medium"
				>
					Create
				</div>
			</div>
		</div>

		<div class="w-[34.75rem] h-[32rem] bg-[#0B752F] rounded-3xl flex flex-col justify-between">
			<div class="text-5xl py-12 px-10 text-white font-semibold">Become A <br />Contributor</div>
			<div class="flex items-center mt-36 gap-16 justify-end">
				<img
					src={ContributorIMG}
					alt="Become a Contributor"
					class="relative -top-44 -right-[14.5rem] z-10"
				/>
				<div
					class="relative py-16 px-14 bg-[#D5ECDE33] bg-opacity-20 rounded-3xl -top-16 right-20 text-white text-2xl font-medium"
				>
					Donate
				</div>
			</div>
		</div>
	</div>
</section>
