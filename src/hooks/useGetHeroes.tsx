import { useEffect, useState } from 'react'
import { Hero } from '../types/hero'
import Fetcher, { BASE_URL } from '../api/fetcher'

const useGetHeroes = (selectedLetter: string) => {
  const [heroes, setHeroes] = useState<Hero[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    console.log('Rendu initial du composant Heroes')
    const controller = new AbortController()
    setIsLoading(true)
    setIsError(false)
    setErrorMessage('')
    // Recuperer de l'API tout les heroes commençant par la lettre A
    Fetcher.get(`${BASE_URL}/heroes?name_like=^${selectedLetter}`, {
      method: 'GET',
      signal: controller.signal,
    })
      .then((data) => {
        if (Array.isArray(data)) {
          setHeroes(data)
        } else {
          setIsError(true)
          setErrorMessage('Not a valid array')
        }
      })
      .catch((error) => {
        console.log({ error })
        if (error.name !== 'AbortError') {
          setIsError(true)
          setErrorMessage('Server Error')
        }
      })
      .finally(() => {
        setIsLoading(false)
      })
    return () => {
      console.log('Destruction du composant Heroes')
      controller.abort()
    }
  }, [selectedLetter])

  return {
    heroes,
    isLoading,
    isError,
    errorMessage,
  }
}

export { useGetHeroes }
