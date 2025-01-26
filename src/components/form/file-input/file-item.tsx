import { CheckCircle2Icon, Trash2Icon, UploadCloudIcon } from 'lucide-react'
import { tv, VariantProps } from 'tailwind-variants'

import { Button } from '@/components/button'
import { formatBytes } from '@/utils/format-bytes'

const fileItem = tv({
  slots: {
    container:
      'group flex items-start gap-4 rounded-lg border border-zinc-200 p-4',
    icon: 'rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600',
    deleteButton: '',
  },
  variants: {
    state: {
      progress: {
        container: '',
      },
      complete: {
        container: 'border-violet-500',
      },
      error: {
        container: 'bg-error-25 border-error-300',
        icon: 'border-error-50 bg-error-100 text-error-600',
        deleteButton: 'text-error-700 hover:text-error-900',
      },
    },
  },
  defaultVariants: {
    state: 'progress',
  },
})

interface FileItemProps extends VariantProps<typeof fileItem> {
  name: string
  size: number
}

export function FileItem({ name, size, state }: FileItemProps) {
  const { container, icon, deleteButton } = fileItem({ state })

  return (
    <div key={name} className={container()}>
      <div className={icon()}>
        <UploadCloudIcon className="size-4" />
      </div>

      {state === 'error' ? (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-error-700 text-sm font-medium">
              Upload failed, please try again
            </span>

            <span className="text-error-600 text-sm">{name}</span>
          </div>

          <button
            type="button"
            className="text-error-700 hover:text-error-900 text-sm font-semibold"
          >
            Try again
          </button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-zinc-700">{name}</span>

            <span className="text-sm text-zinc-500">{formatBytes(size)}</span>
          </div>

          <div className="flex w-full items-center gap-3">
            <div className="h-2 flex-1 rounded-full bg-zinc-100">
              <div
                className="h-2 rounded-full bg-violet-600"
                style={{ width: state === 'complete' ? '100%' : '80%' }}
              />
            </div>
            <span className="text-sm font-medium text-zinc-700">
              {state === 'complete' ? '100%' : '80%'}
            </span>
          </div>
        </div>
      )}

      {state === 'complete' ? (
        <CheckCircle2Icon className="size-5 fill-violet-700 text-white" />
      ) : (
        <Button type="button" variant="ghost" className={deleteButton()}>
          <Trash2Icon className="size-5" />
        </Button>
      )}
    </div>
  )
}
