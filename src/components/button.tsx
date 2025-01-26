import type { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: [
    'rounded-lg border px-4 py-2 text-sm font-semibold shadow-sm',
    'focus-visible:ring-violet-500 focus-visible:ring-2 focus-visible:outline-offset-2',
    'active:opacity-80',
  ],
  variants: {
    variant: {
      primary: 'bg-violet-600 text-white hover:bg-violet-700',
      ghost:
        'rounded-md px-2 hover:bg-zinc-50 shadow-none border-none text-zinc-500',
      outline: 'border border-zinc-300 text-zinc-700 hover:bg-zinc-50',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({ variant, className, ...props }: ButtonProps) {
  return <button className={button({ variant, className })} {...props} />
}
