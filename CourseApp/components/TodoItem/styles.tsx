import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderColor: '#afaeae',
    borderWidth: 1,
    borderRadius: 15,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 6,
  },
  description: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: 16,
  },
});

export default styles;
