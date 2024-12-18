module.exports = {
    project: {
      ios: {},
      android: {},
    },
    dependencies: {
      'react-native-vector-icons': {
        platforms: {
          ios: null, // Disable auto-linking for iOS to avoid font duplication issues
          android:null
        },
      },
    },
    // assets: ['./src/assets/fonts/'], // Custom font path
  };