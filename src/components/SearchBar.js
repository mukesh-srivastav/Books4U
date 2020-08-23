import React, { useState } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import PropTypes from 'prop-types'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {

    return (
        <View style={styles.background}>
            <FontAwesome5 name={'search'} style={styles.iconStyles} />
            <TextInput
                autoCapitalize="none"
                autoFocus={true}
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        flexDirection: "row",
        margin: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyles: {
        fontSize: 25,
        alignSelf: 'center',
        marginHorizontal: 15,
    }
})

SearchBar.propTypes = {
    term: PropTypes.string.isRequired,
    onTermChange: PropTypes.func,
}

SearchBar.defaultProps = {
    term: '',
    onTermChange: () => { },
}


export default SearchBar