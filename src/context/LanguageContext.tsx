'use client'

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react'

type Locale = 'fr' | 'en'
type Messages = Record<string, unknown>

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (path: string) => string
  tm: (path: string) => string
}

const LanguageContext = createContext<LanguageContextType | null>(null)

function getNestedValue(obj: unknown, path: string): unknown {
  return path.split('.').reduce<unknown>((acc, key) => {
    if (acc && typeof acc === 'object' && key in acc) {
      return (acc as Record<string, unknown>)[key]
    }
    return undefined
  }, obj)
}

async function loadMessages(locale: Locale): Promise<Messages> {
  try {
    const mod = await import(`../messages/${locale}.json`)
    return mod.default || mod
  } catch {
    return {}
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('fr')
  const [messages, setMessages] = useState<Messages>({})
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('atlas-locale') as Locale | null
    if (saved === 'fr' || saved === 'en') {
      setLocaleState(saved)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('atlas-locale', locale)
    loadMessages(locale).then(setMessages)
  }, [locale])

  useEffect(() => {
    if (Object.keys(messages).length > 0) {
      setReady(true)
    }
  }, [messages])

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l)
  }, [])

  const resolve = useCallback(
    (path: string): string => {
      const value = getNestedValue(messages, path)
      return typeof value === 'string' ? value : path
    },
    [messages]
  )

  const t = useCallback((path: string): string => resolve(path), [resolve])
  const tm = useCallback((path: string): string => resolve(path), [resolve])

  if (!ready) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a]">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-orange-500 border-t-transparent" />
      </div>
    )
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, tm }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextType {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
