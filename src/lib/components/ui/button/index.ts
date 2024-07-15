import { type VariantProps, tv } from 'tailwind-variants';
import type { Button as ButtonPrimitive } from 'bits-ui';
import Root from './button.svelte';

const buttonVariants = tv({
	base: 'whitespace-nowrap font-medium text-base rounded-lg',
	variants: {
		variant: {
			default: 'border-none text-white bg-[#FB700A]',
			outline: 'border border-[#FB700A] text-[#FB700A]'
		},
		size: {
			default: 'py-2.5 px-6',
			lg: 'py-5 px-10 rounded-xl font-medium text-lg'
		}
	},
	defaultVariants: {
		variant: 'default',
		size: 'default'
	}
});

type Variant = VariantProps<typeof buttonVariants>['variant'];
type Size = VariantProps<typeof buttonVariants>['size'];

type Props = ButtonPrimitive.Props & {
	variant?: Variant;
	size?: Size;
};

type Events = ButtonPrimitive.Events;

export {
	Root,
	type Props,
	type Events,
	//
	Root as Button,
	type Props as ButtonProps,
	type Events as ButtonEvents,
	buttonVariants
};
