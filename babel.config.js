module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.ios.jsx', '.android.jsx', '.js', '.jsx', '.json', '.ts', '.tsx'],
        root: ['./src/'],
        alias: {
          app: './src/app',
          screens: './src/screens',
          shared: './src/shared',
        },
      },
    ],
  ],
}
