import {Platform} from 'react-native'
import {ms} from 'react-native-size-matters'

const stylesByPlatform = Platform.select({
  ios: {fontFamily: 'System'},
});

export const FONTS = {
  LC_R_10: {
    ...stylesByPlatform,
    fontSize: ms(10),
    lineHeight: ms(13),
  },
}
