import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  content: {
    position: 'relative',
    width: '90%',
  },

  inputContent: {
    height: 58,
    width: '100%',
    margin: 16,
    marginBottom: 0,
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

  input: {
    height: 36,
    borderColor: '#D9E5EB',
    borderWidth: 1,
    marginTop: 4,
    borderRadius: 10,
    padding: 10,
    color: '#82AABE',
    fontSize: 16,
    fontWeight: 'bold',
  },

  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    position: 'absolute',
    bottom: 0,
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
