import {StyleSheet} from 'react-native'
import {THEME_COLORS} from './colors'
import {FONTS} from './fonts'

export const NAVIGATION_STYLES = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: THEME_COLORS.MAIN_BACKGROUND,
    borderTopWidth: 0,
    paddingVertical: 4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 0,
  },
  tabBarLabelStyle: {
    ...FONTS.LC_R_10,
    paddingBottom: 4,
  },
})
