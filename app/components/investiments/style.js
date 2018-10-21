import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  horizontalLine: {
    height: 1,
    width: '100%',
    backgroundColor: '#D9E5EB',
  },

  segue: {
    width: 7,
    height: 12,
  },

  card: {
    margin: 16,
    height: 135,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D9E5EB',
  },

  content: {
    margin: 16,
  },

  title: {
    fontSize: 24,
    color: '#57CFF7',
    fontWeight: 'bold',
  },

  cell: {
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 10,
    width: '100%',
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
  },

  borderBottom: {
    borderBottomColor: '#D9E5EB',
    borderBottomWidth: 1,
  },

  cellText: {
    color: '#185669',
  },
});
