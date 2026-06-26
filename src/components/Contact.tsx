'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="bg-[#0a0a0a] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            {t('contact.title')}
          </h2>
          <p className="text-white/50">{t('contact.subtitle')}</p>
        </div>

        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-3">
          <a
            href="https://instagram.com/3iik.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-500/5"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500/10 transition-colors group-hover:bg-orange-500/20">
              <svg className="h-7 w-7 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </div>
            <h3 className="mb-1 text-lg font-bold text-white">{t('contact.messenger')}</h3>
            <p className="text-center text-sm text-white/50">{t('contact.messengerText')}</p>
          </a>

          <a
            href="mailto:3iikStudio@proton.me"
            className="group flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-500/5"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500/10 transition-colors group-hover:bg-orange-500/20">
              <svg className="h-7 w-7 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="mb-1 text-lg font-bold text-white">{t('contact.email')}</h3>
            <p className="text-center text-sm text-white/50">{t('contact.emailText')}</p>
          </a>

          <div className="group flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-500/5">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500/10 transition-colors group-hover:bg-orange-500/20">
              <svg className="h-7 w-7 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="mb-1 text-lg font-bold text-white">{t('contact.location')}</h3>
            <p className="text-center text-sm text-white/50">{t('contact.locationText')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
