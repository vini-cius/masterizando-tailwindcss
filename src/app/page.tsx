import {
  BoldIcon,
  ItalicIcon,
  LinkIcon,
  ListIcon,
  ListOrderedIcon,
  MailIcon,
} from 'lucide-react'

import { Button } from '@/components/button'
import * as FileInput from '@/components/form/file-input'
import { Select } from '@/components/form/select'
import { SelectItem } from '@/components/form/select/select-item'
import { Textarea } from '@/components/form/textarea'
import * as Input from '@/components/input'
import { SettingsTabs } from '@/components/settings-tabs'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button type="button" variant="outline">
              Cancel
            </Button>

            <Button type="submit" form="settings">
              Save
            </Button>
          </div>
        </div>

        <form
          id="settings"
          action=""
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Vinícius" />
              </Input.Root>

              <Input.Root>
                <Input.Control defaultValue="Souza" />
              </Input.Root>
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Email address
            </label>

            <Input.Root>
              <Input.Prefix>
                <MailIcon className="size-5 text-zinc-500" />
              </Input.Prefix>

              <Input.Control
                id="email"
                type="email"
                defaultValue="viniciuskt0@gmail"
              />
            </Input.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile
              </span>
            </label>

            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>

            <Input.Root>
              <Input.Control id="role" defaultValue="Admin" />
            </Input.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>

            <Select placeholder="Select a country...">
              <SelectItem text="Brazil" value="br" />
              <SelectItem text="United States" value="usa" />
            </Select>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>

            <Select placeholder="Select a timezone...">
              <SelectItem text="UTC-3" value="-03:00" />
              <SelectItem text="UTC-2" value="-02:00" />
            </Select>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction
              </span>
            </label>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem text="Normal" value="normal" />
                  <SelectItem text="Markdown" value="markdown" />
                </Select>

                <div className="flex items-center gap-1">
                  <Button type="button" variant="ghost">
                    <BoldIcon
                      className="size-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </Button>

                  <Button type="button" variant="ghost">
                    <ItalicIcon
                      className="size-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </Button>

                  <Button type="button" variant="ghost">
                    <LinkIcon
                      className="size-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </Button>

                  <Button type="button" variant="ghost">
                    <ListIcon
                      className="size-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </Button>

                  <Button type="button" variant="ghost">
                    <ListOrderedIcon
                      className="size-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </Button>
                </div>
              </div>

              <Textarea defaultValue="I am a full-stack developer, specialized in Node.js and React." />
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="projects"
              className="text-sm font-medium text-zinc-700"
            >
              Portfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work
              </span>
            </label>

            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <Button type="button" variant="outline">
              Cancel
            </Button>

            <Button type="submit" form="settings">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
