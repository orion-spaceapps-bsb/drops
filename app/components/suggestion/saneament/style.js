import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  screen: {
    flex: 1,
    backgroundColor: 'white',
  },

  content: {
    margin: 16,
  },

  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 24,
    color: '#00B5BF',
    fontWeight: 'bold',
  },

  value: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
  },

  row: {
    flexDirection: 'row',
  },
});
