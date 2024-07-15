import { type VariantProps, tv } from 'tailwind-variants';
export { default as Badge } from './badge.svelte';

export const badgeVariants = tv({
	base: 'inline-flex select-none items-center rounded-md w-fit',
	variants: {
		variant: {
			default: 'bg-[#D5ECDE] text-[#0C7630]',
			outline: 'border border-[#0B752F] text-[#0B752F]'
		},
		size: {
			default: 'p-1.5 text-xs font-normal',
			lg: 'py-2.5 px-5 rounded-xl font-semibold'
		}
	},
	defaultVariants: {
		variant: 'default',
		size: 'default'
	}
});

export type Variant = VariantProps<typeof badgeVariants>['variant'];
export type Size = VariantProps<typeof badgeVariants>['size'];
