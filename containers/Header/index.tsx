import { useRouter } from 'next/router'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

export interface Props {}
interface State {}

const Header: FC<Props> = () => {
  const { i18n } = useTranslation('common')
  const { push, reload, asPath, pathname, query, locale } = useRouter()
  return (
    <header className="container mx-auto px-2 sm:px-0">
      <div className="flex h-16 items-center justify-between">
        <img src="/logo.svg" alt="Logo" className="h-5" />
        <button
          onClick={() =>
            push({ pathname, query }, asPath, {
              locale: i18n.language === 'en' ? 'ko' : 'en'
            }).then(reload)
          }
        >
          {locale === 'en' ? 'English' : '한국어'}
        </button>
      </div>
    </header>
  )
}

export default Header
