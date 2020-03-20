import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height / 2,
    backgroundColor: '#003366',
    paddingLeft: 15,
    borderBottomEndRadius: 250,
    elevation: 8,
  },
  header: {
    margin: 15,
    fontSize: 30,
    textAlign: 'center',
    color: '#e6e6fa',
    fontFamily: 'sans-serif-thin',
  },
  instruction: {
    fontSize: 20,
    color: 'white',
    opacity: 0.6,
  },
  grossSalary: {
    marginTop: 6,
    paddingLeft: 15,
    color: '#dbe6e5',
    fontSize: 20,
  },
  input: {
    fontSize: 31,
    color: '#fff',
  },
  salary: {
    color: '#dbe6e5',
    opacity: 0.6,
    fontSize: 18,
  },
  fgtsPercent: {
    marginTop: 30,
    color: '#dbe6e5',
    opacity: 0.6,
    fontSize: 15,
  },
  valuePercent: {
    paddingLeft: 15,
    color: '#dbe6e5',
    fontSize: 100,
  },

  withdrawTitle: {
    textAlign: 'center',
    color: '#CCC',
    fontSize: 26,
    marginTop: 30,
  },
  withdrawValue: {
    fontFamily: 'sans-serif-thin',
    marginTop: 3,
    paddingLeft: 15,
    color: 'green',
    fontSize: 48,
  },
});
export default styles;
