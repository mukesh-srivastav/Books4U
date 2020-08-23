import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import SearchBar from '../components/SearchBar'

const SearchBooks = ({ data }) => {

    const [state, setState] = useState({})

    return (
        <View>
            <SearchBar />
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