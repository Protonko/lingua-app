import { FC } from 'react'
import {
  SafeAreaView,
  StatusBar,
} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {AppStack} from 'app/routes'

const App: FC = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle={'dark-content'}
      />
      <AppStack />
    </NavigationContainer>
  )
}

export default App
