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
            href="https://m.me/3iik.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-500/5"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500/10 transition-colors group-hover:bg-orange-500/20">
              <svg className="h-7 w-7 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 4.975 0 11.111c0 3.497 1.745 6.616 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111C24 4.975 18.627 0 12 0zm1.193 14.963l-3.056-3.259-5.963 3.259L11.25 7.5l6.131 3.926-3.057 3.537z" />
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
