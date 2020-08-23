import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import SearchBooks from './src/screens/SearchBooks'

const navigator = createSwitchNavigator({
  Search: SearchBooks
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Search Books'
  }
})

export default createAppContainer(navigator)