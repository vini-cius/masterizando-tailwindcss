import type { ComponentProps } from 'react'

export function Textarea(props: ComponentProps<'textarea'>) {
  return (
    <textarea
      className="min-h-32 w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100"
      {...props}
    />
  )
}
