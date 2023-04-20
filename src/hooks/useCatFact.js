import { getRandomFact } from '../services/facts'
import { useEffect, useState } from 'react'

export const useCatFact = () => {
  const [fact, setFact] = useState(null)

  const refreshRandomFact = () => {
    getRandomFact()
      .then(newFact => setFact(newFact))
  }

  useEffect(refreshRandomFact, [])

  return { fact, refreshRandomFact }
}
