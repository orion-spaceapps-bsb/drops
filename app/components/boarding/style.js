import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  content: {
    flex: 1,
    backgroundColor: '#fff',
  },

  loading: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    flex: 1,
  },

  load: {
    color: '#82AABE',
    marginBottom: 16,
    fontSize: 22,
  },

  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  img: {
    width: 220,
    height: 220,
  },

  viewImg: {
    marginTop: 60,
  },

  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25
  },

  title: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#57CFF7',
  },

  body: {
    textAlign: 'center',
    fontSize: 14,
    color: '#82AABE',
  },

  bodyView: {
    marginTop: 10,
    width: '95%',
  },

  button: {
    marginTop: 50,
    width: 290,
    height: 36,
    borderRadius: 100,
    backgroundColor: '#57CFF7',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
