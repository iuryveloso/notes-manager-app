'use client'
import { useState } from 'react'
import Input from '@/components/input'
import Button from '@/components/button'

export default function Login() {
  const [mode, setMode] = useState<'login' | 'register'>('login')

  const emptyUser = {
    name: '',
    email: '',
    avatar: '',
  }

  const emptyCredentials = {
    old_password: '',
    password: '',
    password_confirmation: '',
  }

  const [user, setUser] = useState<{
    name: string
    email: string
    avatar: string
  }>(emptyUser)
  const [credentials, setCredentials] = useState(emptyCredentials)
  const [showPassword, setShowPassword] = useState({
    old_password: false,
    password: false,
    password_confirmation: false,
  })

  function onCLickPasswordIcon() {
    setShowPassword({
      ...showPassword,
      password: !showPassword.password,
    })
  }

  function onCLickPasswordConfirmationIcon() {
    setShowPassword({
      ...showPassword,
      password_confirmation: !showPassword.password_confirmation,
    })
  }

  function loginSubmit() {
    console.log('login')
  }

  function registerSubmit() {
    console.log('register')
  }

  return (
    <div className={'flex h-full flex-col justify-center'}>
      <div className={'relative z-0'}>
        <div className={'fixed inset-y-0 right-0 z-10 mr-2'}>
          <div className={'flex flex-col'}>
            <div
              className={`mt-1 flex flex-col items-center rounded-sm bg-red-300 px-3 py-2 shadow-md`}
            >
              Errors
            </div>
            <div
              className={`mt-1 flex flex-col items-center rounded-sm bg-green-300 px-3 py-2 shadow-md`}
            >
              Messages
            </div>
          </div>
        </div>
      </div>

      <div className={'flex flex-col items-center'}>
        <div className={'container flex justify-center'}>
          <div
            className={
              'mb-2 w-11/12 rounded-xl py-2 px-5 bg-white text-center shadow-md lg:w-4/5'
            }
          >
            <h1 className={'mt-3 pb-3 text-3xl'}>
              NOTES MANAGER
            </h1>
            <hr className={'border border-gray-400'} />
            <h2 className={'my-1 text-2xl'}>
              {mode === 'login' ? 'Login' : 'Cadastro'}
            </h2>
          </div>
        </div>
        {mode === 'login' ? (
          <div className={'container flex flex-wrap justify-center'}>
            <div
              className={
                'w-11/12 rounded-xl bg-white px-5 py-3 shadow-md lg:w-4/5'
              }
            >
              <div className={'mb-5'}>
                <label htmlFor={'emailInput'}>Email</label>
                <Input
                  value={user.email}
                  id={'emailInput'}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  placeholder={'Seu email válido...'}
                />
              </div>
              <div className={'mb-5'}>
                <label htmlFor={'passwordInput'}>Senha</label>
                <Input
                  type={showPassword.password ? 'text' : 'password'}
                  value={credentials.password}
                  id={'passwordInput'}
                  onChange={(e) =>
                    setCredentials({ ...credentials, password: e.target.value })
                  }
                  icon={
                    showPassword.password
                      ? '/icons/eye_slash.svg'
                      : '/icons/eye.svg'
                  }
                  iconSize={28}
                  onCLickIcon={onCLickPasswordIcon}
                  placeholder={'Sua senha...'}
                />
              </div>
              <div>
                <Button
                  text={'Entrar'}
                  color={'bg-sky-300'}
                  onClick={loginSubmit}
                />
              </div>
              <div className={'mt-1 flex'}>
                <label className={'mr-2'}>Não é cadastrado?</label>
                <button
                  className={
                    'cursor-pointer font-semibold text-blue-500 underline'
                  }
                  onClick={() => {
                    setMode(mode === 'login' ? 'register' : 'login')
                    setUser(emptyUser)
                    setCredentials(emptyCredentials)
                  }}
                >
                  Cadastre-se
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className={'container flex flex-wrap justify-center'}>
            <div
              className={
                'w-11/12 rounded-xl bg-white px-5 py-3 shadow-md lg:w-4/5'
              }
            >
              <div className={'mb-5'}>
                <label htmlFor={'nameInput'}>Nome</label>
                <Input
                  value={user.name}
                  id={'nameInput'}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  placeholder={'Seu nome completo...'}
                />
              </div>
              <div className={'mb-5'}>
                <label htmlFor={'emailInput'}>Email</label>
                <Input
                  value={user.email}
                  id={'emailInput'}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  placeholder={'Seu email válido...'}
                />
              </div>
              <div className={'mb-5'}>
                <label htmlFor={'passwordInput'}>Senha</label>
                <Input
                  type={showPassword.password ? 'text' : 'password'}
                  value={credentials.password}
                  id={'passwordInput'}
                  onChange={(e) =>
                    setCredentials({ ...credentials, password: e.target.value })
                  }
                  icon={
                    showPassword.password
                      ? '/icons/eye_slash.svg'
                      : '/icons/eye.svg'
                  }
                  iconSize={28}
                  onCLickIcon={onCLickPasswordIcon}
                  placeholder={'Sua senha...'}
                />
              </div>
              <div className={'mb-5'}>
                <label htmlFor={'password_confirmationInput'}>
                  Confirmar Senha
                </label>
                <Input
                  type={
                    showPassword.password_confirmation ? 'text' : 'password'
                  }
                  value={credentials.password_confirmation}
                  id={'password_confirmationInput'}
                  onChange={(e) =>
                    setCredentials({
                      ...credentials,
                      password_confirmation: e.target.value,
                    })
                  }
                  icon={
                    showPassword.password_confirmation
                      ? '/icons/eye_slash.svg'
                      : '/icons/eye.svg'
                  }
                  iconSize={28}
                  onCLickIcon={onCLickPasswordConfirmationIcon}
                  placeholder={'Confirmação de senha...'}
                />
              </div>
              <div>
                <Button
                  text={'Cadastrar'}
                  color={'bg-green-300'}
                  onClick={registerSubmit}
                />
              </div>
              <div className={'mt-1 flex'}>
                <label className={'mr-2'}>Já é cadastrado?</label>
                <button
                  className={
                    'cursor-pointer font-semibold text-blue-500 underline'
                  }
                  onClick={() => {
                    setMode(mode === 'register' ? 'login' : 'register')
                    setUser(emptyUser)
                    setCredentials(emptyCredentials)
                  }}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
