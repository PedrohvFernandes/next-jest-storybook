import Cookies from 'js-cookie'

export const getToken = (): string | undefined => {
  return Cookies.get('token')
}

export const setToken = (valueToken: string, expires: number): void => {
  Cookies.set('token', valueToken, {
    expires,
  })
}

export const removeToken = (): void => {
  Cookies.remove('token')
}
