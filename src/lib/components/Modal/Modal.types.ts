import type { ScrollLockTarget } from '$lib/actions/scrollLock/scrollLock.types.js'

export interface ModalProps {
  open: boolean
  width: number | string | 'full'
  translucent?: boolean
  scrollTarget?: ScrollLockTarget
}
