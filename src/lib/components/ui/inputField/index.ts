import { type VariantProps, tv } from 'tailwind-variants';
export { default as InputField } from './inputField.svelte';

export const InputFieldVariants = tv({
	base: 'w-full outline-none ',
	variants: {
		variant: {
			default:
				'border border-[#CACACA] bg-[#F3F3F3] h-12 ml-6 rounded-md placeholder-[#857F7B] text-base font-medium',
		},
		size: {
			default: 'ps-16 pe-28 px-7 py-3'
		}
	},
	defaultVariants: {
		variant: 'default'
	}
});

export type Variant = VariantProps<typeof InputFieldVariants>['variant'];
export type Size = VariantProps<typeof InputFieldVariants>['size'];
