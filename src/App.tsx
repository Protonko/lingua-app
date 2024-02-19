import { FC } from 'react'
import {
  SafeAreaView,
  StatusBar,
} from 'react-native'
import {AppStack} from '@app/routes'

const App: FC = () => {
  return (
    <SafeAreaView>
      <StatusBar
        barStyle={'dark-content'}
      />
      <AppStack />
    </SafeAreaView>
  )
}

export default App
