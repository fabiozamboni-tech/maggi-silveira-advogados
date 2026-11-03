'use client'

import { useSyncExternalStore, useState } from 'react'

const KEY = 'ms-cookie-consent'

const subscribe = () => () => {}
const getSnapshot = () => window.localStorage.getItem(KEY)
const getServerSnapshot = () => 'pending-ssr'

export function CookieNotice() {
  const stored = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const [dismissed, setDismissed] = useState(false)

  if (dismissed || stored !== null) return null

  const accept = () => {
    window.localStorage.setItem(KEY, 'accepted')
    setDismissed(true)
  }

  return (
    <div
      role="region"
      aria-label="Aviso de cookies"
      className="fixed inset-x-4 bottom-24 z-50 mx-auto flex max-w-xl flex-col gap-4 rounded-2xl border bg-card p-5 text-sm shadow-2xl shadow-basalt/20 sm:flex-row sm:items-center md:bottom-8 md:left-8 md:mx-0"
    >
      <p className="leading-relaxed text-muted-foreground">
        Usamos apenas cookies essenciais e de medição anônima de audiência. Saiba mais no{' '}
        <a href="#privacidade" className="font-medium text-foreground underline underline-offset-4">
          aviso de privacidade
        </a>
        .
      </p>
      <button
        type="button"
        onClick={accept}
        className="shrink-0 rounded-full bg-primary px-5 py-2.5 font-semibold text-primary-foreground"
      >
        Entendi
      </button>
    </div>
  )
}
