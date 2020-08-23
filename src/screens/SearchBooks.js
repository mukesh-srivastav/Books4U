import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import SearchBar from '../components/SearchBar'
import yelp from '../services/yelp'

const SearchBooks = ({ data }) => {
    const defaultSearchItem = 'Pasta'
    const [searchTerm, setSearchTerm] = useState('')
    const [results, setResults] = useState(null)
    const [errorMessage, setErrorMessage] = useState('')

    const fetchResults = async searchTerm => {
        try {
            if(!searchTerm) return 
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm.trim(),
                    location: 'san jose'
                }
            })
            // console.log('response.data.businesses'); console.log(response.data.businesses)
            setResults(response.data.businesses)
        } catch(err) {
            console.log('err'); console.log(err)
            setErrorMessage('Something went wrong: ' + err)
        }
    }

    useEffect(() => {
        fetchResults(defaultSearchItem)
    }, [])

    return (
        <View>
            <SearchBar term={searchTerm} onTermChange={term => setSearchTerm(term)} onTermSubmit={fetchResults} />
            <Text>Found {results.length} restaurants</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

SearchBooks.propTypes = {
    data: PropTypes.array.isRequired
}

SearchBooks.defaultProps = {
    data: []
}


export default SearchBooks