import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { useResults } from '../hooks/useResults'
import SearchBar from '../components/SearchBar'

const SearchBooks = ({ data }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [fetchResults, results, errorMessage] = useResults()

    return (
        <View>
            <SearchBar term={searchTerm} onTermChange={term => setSearchTerm(term)} onTermSubmit={() => fetchResults(searchTerm)} />
            {results && <Text>Found {results.length} restaurants.</Text>}
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