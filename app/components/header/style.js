import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  header: {
    backgroundColor: 'white',
  },

  logo: {
    width: 63,
    height: 29,
  },

  back: {
    width: 20,
    height: 15,
    marginTop: 25,
    marginLeft: 16,
    tintColor: '#57CFF7',
    position: 'absolute',
  },

  content: {
    width: '100%',
    height: 61,
  },

  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  horizontalLine: {
    height: 1,
    width: '100%',
    backgroundColor: '#D9E5EB',
  },

  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25
  },
});
