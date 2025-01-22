'use client'

import type { ChangeEvent, ComponentProps } from 'react'

import { useFileInput } from './root'

type ControlProps = ComponentProps<'input'>

export function Control(props: ControlProps) {
  const { id, onFilesSelected } = useFileInput()

  function handleFileSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) return

    const files = Array.from(event.target.files)

    onFilesSelected(files)
  }

  return (
    <input
      type="file"
      id={id}
      className="sr-only"
      {...props}
      onChange={handleFileSelected}
    />
  )
}
