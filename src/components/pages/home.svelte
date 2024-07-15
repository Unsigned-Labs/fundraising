<script lang="ts">
	import LOGO from '$lib/assets/Clone.png';
	import CrowdfundingIMG from '$lib/assets/Crowdfunding.png';
	import AccessToExclusiveIMG from '$lib/assets/access-to-exclusive.svg';
	import CommunityEngagementIMG from '$lib/assets/community-engagement.svg';
	import EmpoweringInnovationIMG from '$lib/assets/empowering-innovation.svg';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import InputField from '$lib/components/ui/inputField/inputField.svelte';

	const Categories = [
		{ name: 'Gaming' },
		{ name: 'Design' },
		{ name: 'Education' },
		{ name: 'Music' },
		{ name: 'Photography' },
		{ name: 'Technology' },
		{ name: 'Community' },
		{ name: 'Culture' },
		{ name: 'Orange-pilling' },
		{ name: 'Discover', variant: 'outline' }
	];
</script>

<section>
	<div
		class="w-[1140px] h-[324.347px] rotate-[-28.356deg] shrink-0 blur-[400px] bg-[#48ad6a] absolute -z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
	></div>
	<div class="px-32 py-8 flex items-center">
		<img src={LOGO} alt="logo" />
		<!-- <input
			type="text"
			class="border border-[#CACACA] bg-[#F3F3F3] h-12 ml-6 rounded-md w-full px-7 py-3"
			placeholder="Search by category"
		/> -->
		<InputField placeholder="Search by category"  />
		<div class="flex gap-5 ml-20">
			<Button variant="outline">Nostr login</Button>
			<Button>Create your project</Button>
		</div>
	</div>

	<div class="py-6 px-32 w-full">
		<span class="text-black text-sm">Categories</span>
		<div class="w-full flex gap-1.5">
			{#each Categories as Category}
				<Badge
					size="lg"
					class={!Category.variant ? 'bg-[#48AD6A1A]/[.1] text-[#0B752F]' : ''}
					variant={Category.variant ? 'outline' : 'default'}>{Category.name}</Badge
				>
			{/each}
		</div>
	</div>

	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="37"
		height="37"
		viewBox="0 0 37 37"
		fill="none"
		class="my-4 ml-20"
	>
		<path
			d="M0 18.0295C0 18.0295 7.00557 16.3129 10.4581 13.5055C15.1492 9.69072 18.0294 0.000106779 18.0294 0.000106779C18.0294 0.000106779 20.0987 9.22004 24.2608 13.0235C27.9555 16.3998 36.0589 18.0295 36.0589 18.0295C36.0589 18.0295 28.252 20.0392 24.6223 23.3755C20.5123 27.1532 18.0294 36.059 18.0294 36.059C18.0294 36.059 14.8851 27.6131 10.8196 23.8575C7.2942 20.601 0 18.0295 0 18.0295Z"
			fill="#054B1D"
		/>
	</svg>

	<div class="flex justify-between gap-12 px-40 py-5">
		<div class="flex flex-col gap-10">
			<span class="text-[#054B1D] font-bold text-6xl">From Concept to <br />Reality</span>

			<span class="text-[#6E7C73] text-xl font-semibold"
				>Join Us in Crowdfunding Projects that Shape the <br />Future! <br />Let the Stats Flow</span
			>
			<div class="w-full flex gap-10 justify-between">
				<div class="flex flex-col gap-2.5">
					<span class="text-[#0B752F] text-3xl font-bold">10k+</span>
					<span class="text-[#6E7C73] text-xl font-medium">Projects</span>
				</div>
				<div class="flex flex-col gap-2.5">
					<span class="text-[#0B752F] text-3xl font-bold">12.7</span>
					<span class="text-[#6E7C73] text-xl font-medium">Bitcoin raised</span>
				</div>
				<div class="flex flex-col gap-2.5">
					<span class="text-[#0B752F] text-3xl font-bold">40k</span>
					<span class="text-[#6E7C73] text-xl font-medium">Contributors</span>
				</div>
			</div>
		</div>
		<img src={CrowdfundingIMG} alt="Crowdfunding" />
	</div>

	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="37"
		height="37"
		viewBox="0 0 37 37"
		fill="none"
		class="float-right mr-32"
	>
		<path
			d="M0 18.0294C0 18.0294 7.00557 16.3128 10.458 13.5053C15.1492 9.6906 18.0294 -1.52913e-05 18.0294 -1.52913e-05C18.0294 -1.52913e-05 20.0987 9.21992 24.2608 13.0233C27.9555 16.3997 36.0589 18.0294 36.0589 18.0294C36.0589 18.0294 28.252 20.039 24.6223 23.3754C20.5123 27.1531 18.0294 36.0589 18.0294 36.0589C18.0294 36.0589 14.8851 27.6129 10.8196 23.8574C7.2942 20.6008 0 18.0294 0 18.0294Z"
			fill="#054B1D"
		/>
	</svg>

	<div class="mt-10 text-center text-5xl px-48 font-medium">
		<span class="text-[#021B0C]"
			>Your contributions fuel the development of <br /> transformative
		</span>
		<span class="text-[#17863C]"
			>technologies and solutions within the <br /> Bitcoin ecosystem</span
		>
	</div>

	<div class="mt-40 flex w-full h-[37.5rem]">
		<div class="flex-1 flex flex-col justify-between px-12 py-8 border border-black">
			<div class="flex flex-col">
				<span class="text-[#48AD6A] text-4xl mb-2 font-medium">01</span>
				<span class="text-[#0D5727] text-4xl mb-4 font-semibold">Empowering Innovation:</span>
				<p class="text-[#0D5727] text-lg font-medium">
					Crowdfunding allows individuals to directly support projects and ideas they believe in,
					bypassing traditional gatekeepers like banks or venture capitalists.
				</p>
			</div>
			<div class="flex justify-center items-center">
				<img src={EmpoweringInnovationIMG} alt="Empowering Innovation" />
			</div>
		</div>

		<div
			class="flex-1 flex flex-col justify-between px-12 py-8 border border-black bg-[#17863C] text-white"
		>
			<div class="flex flex-col">
				<span class="text-4xl mb-2 font-medium">02</span>
				<span class="text-4xl mb-4 font-semibold">Community Engagement</span>
				<p class="text-lg font-medium">
					Crowdfunding allows individuals to directly support projects and ideas they believe in,
					bypassing traditional gatekeepers like banks or venture capitalists.
				</p>
			</div>
			<div class="flex justify-center items-center">
				<img src={CommunityEngagementIMG} alt="Community Engagement" />
			</div>
		</div>

		<div class="flex-1 flex flex-col justify-between px-12 py-8 border border-black">
			<div class="flex flex-col">
				<span class="text-[#48AD6A] text-4xl mb-2 font-medium">03</span>
				<span class="text-[#0D5727] text-4xl mb-4 font-semibold"
					>Access to Exclusive Opportunities:</span
				>
				<p class="text-[#0D5727] text-lg font-medium">
					Projects and ideas they believe in, bypassing traditional gatekeepers like banks or
					venture capitalists.
				</p>
			</div>
			<div class="flex justify-center items-center">
				<img src={AccessToExclusiveIMG} alt="AAccess To Exclusive" />
			</div>
		</div>
	</div>
</section>
