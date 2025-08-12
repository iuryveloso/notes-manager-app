'use client'
import Image from 'next/image'
import { useState } from 'react'

interface NavProfile {
  onClickLogout: () => void
}

export default function NavProfile({ onClickLogout }: NavProfile) {
  const [showMenu, setShowMenu] = useState(false)

  const label = 'UserNameee'
  const profileHeight = label.length > 10 ? 'h-35' : 'h-30'

  return (
    <div className={'flex flex-col items-center'}>
      <div className={'flex items-center'}>
        <div
          className={'cursor-pointer'}
          onClick={() => setShowMenu(!showMenu)}
        >
          <Image
            loader={({ src }) => src}
            unoptimized={true}
            src={'/user.svg'}
            width={100}
            height={100}
            alt={'Main logo'}
            priority={true}
            className={
              'h-10 w-10 rounded-full border border-gray-300 shadow-md'
            }
          />
        </div>
      </div>
      {showMenu ? (
        <div className={'relative'}>
          <div
            className={`fixed inset-y-0 top-14 right-6 ${profileHeight} w-40 rounded-sm bg-white shadow-md`}
          >
            <div className={'flex h-full flex-col justify-center p-2'}>
              <div
                className={
                  'flex flex-wrap items-center justify-center border-b border-gray-400 pb-1 font-semibold'
                }
              >
                <Image
                  loader={({ src }) => src}
                  unoptimized={true}
                  src={'/user.svg'}
                  width={100}
                  height={100}
                  alt={'Main logo'}
                  priority={true}
                  className={
                    'mr-1 h-10 w-10 rounded-full border border-gray-300'
                  }
                />
                <label>{label}</label>
              </div>
              <div className={`border-b border-gray-400 pb-1 text-center`}>
                <a href={'/profile'} className={''}>
                  Perfil de Usuário
                </a>
              </div>
              <div className={`pt-1 text-center`}>
                <button
                  onClick={() => {
                    setShowMenu(!showMenu)
                    onClickLogout()
                  }}
                  className={'cursor-pointer'}
                >
                  Sair do Sistema
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        false
      )}
    </div>
  )
}
