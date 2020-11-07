import {useEffect, useState} from 'react'
import getRandomQuote from '../services/getRandomQuote'
import loadLocally from '../lib/loadLocally'

export default function useQuote() {

    const [quote, setQuote] = useState({})
    const [savedQuotes, setSavedQuotes] = useState(loadLocally('quotes') ?? [])

  
    useEffect(updateQuote, [])
    
    return({quote, updateQuote, saveQuote, savedQuotes})
  
      function updateQuote() {
        getRandomQuote()
        .then((data) => setQuote({text: data.value, date: data.appeared_at, id: data.quote_id}))
        .catch((error) => console.log(error))
      }

      function saveQuote() {
        setSavedQuotes(
            [...savedQuotes, quote]
        )
      }
}

// const dateLong = quote.appeared_at.split('T')
    // const dateTrimmed = dateLong[0]

    