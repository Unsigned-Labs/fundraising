<script lang="ts">
	import { type Size, type Variant, InputFieldVariants } from './index.js';
	import { cn } from '$lib/utils.js';
	import SearchIcon from '../../../assets/icons/search.svg';

	let className: string | undefined | null = undefined;
	export let variant: Variant = 'default';
	export let size: Size = 'default';
	export { className as class };
</script>

<div class="relative w-full">
	<div class="absolute inset-y-0 start-0 ps-12 flex items-center pointer-events-none">
		<img
			src={SearchIcon}
			alt="Search Icon"
		/>
	</div>
	<input class={cn(InputFieldVariants({ variant, className, size }))} {...$$restProps} />
	<div class="absolute inset-y-0 end-0 pe-6 flex items-center pointer-events-none">
		<span class="text-[#857F7B]">Sort by</span>
	</div>
</div>
