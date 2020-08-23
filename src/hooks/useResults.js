import { useState, useEffect } from 'react'
import yelp from '../services/yelp'

const defaultSearchItem = 'Pasta'
const useResults = () => {
    const [results, setResults] = useState(null)
    const [errorMessage, setErrorMessage] = useState('')

    const fetchResults = async searchTerm => {
        try {
            if (!searchTerm) return
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm.trim(),
                    location: 'san jose'
                }
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