import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {HomeScreen, SettingsScreen} from 'screens'
import {NAVIGATION_STYLES, THEME_COLORS} from 'shared'

const Tab = createBottomTabNavigator()

export const AppStack = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: THEME_COLORS.MAIN_COLOR,
          tabBarInactiveTintColor: THEME_COLORS.INACTIVE_COLOR,
          tabBarLabelStyle: NAVIGATION_STYLES.tabBarLabelStyle,
          tabBarStyle: NAVIGATION_STYLES.tabBarStyle,
      }}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    )
}
