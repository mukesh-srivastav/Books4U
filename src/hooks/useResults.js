import { useState, useEffect } from 'react'
import yelp from '../services/yelp'

const defaultAPI = '/search'
const defaultSearchItem = 'Pasta'

const useResults = (api = null, params = null) => {
    const [results, setResults] = useState(null)
    const [errorMessage, setErrorMessage] = useState('')

    const fetchResults = async searchTerm => {
        try {
            if (!searchTerm) return
            const defaultParams = {
                limit: 50,
                term: searchTerm.trim(),
                location: 'san jose'
            }
            const API = api ? api : defaultAPI
            const response = await yelp.get(API, {
                params: params ? params : defaultParams
            })
            // console.log('response.data.businesses'); console.log(response.data.businesses)
            setResults(response.data.businesses)
        } catch (err) {
            console.log('err'); console.log(err)
            setErrorMessage('Something went wrong: ' + err)
        }
    }

    useEffect(() => {
        fetchResults(defaultSearchItem)
    }, [])

    return [fetchResults, results, errorMessage]
}

export { useResults }