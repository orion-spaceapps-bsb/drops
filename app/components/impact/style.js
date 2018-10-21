import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  content: {
    flex: 1,
    backgroundColor: 'white',
  },

  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  horizontalLine: {
    marginTop: 16,
    height: 1,
    alignSelf: 'center',
    width: '95%',
    backgroundColor: '#D9E5EB',
  },

  button: {
    marginTop: 30,
    width: 200,
    height: 36,
    borderRadius: 100,
    backgroundColor: '#57CFF7',
    alignSelf: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },

});
