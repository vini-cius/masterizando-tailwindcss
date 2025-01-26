'use client'

import { UserIcon } from 'lucide-react'
import Image from 'next/image'
import { useMemo } from 'react'

import { useFileInput } from './root'

export function ImagePreview() {
  const { files } = useFileInput()

  const previewURL = useMemo(() => {
    if (files.length === 0) return null

    return URL.createObjectURL(files[0])
  }, [files])

  if (previewURL === null) {
    return (
      <div className="flex size-16 items-center justify-center rounded-full bg-violet-50 dark:bg-violet-500/10">
        <UserIcon className="size-8 text-violet-500 dark:text-violet-300" />
      </div>
    )
  } else {
    return (
      <Image
        src={previewURL}
        width={100}
        height={100}
        alt=""
        className="size-16 rounded-full object-cover"
      />
    )
  }
}
