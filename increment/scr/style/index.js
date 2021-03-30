import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#0C0C0C',
  },
  container: {
    width: '100%',
    minHeight: '97%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 65,
  },
  slogan: {
    color: '#3456',
    fontSize: 18,
  },
  button: {
    backgroundColor: 'white',
    fontSize: 25,
    height: 55,
    width: 200,
    borderRadius: 50,
    marginTop: 30,
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: 15,
  },
  message: {
    color: 'white',
    fontSize: 14,
    marginTop: 40,
  },

  footerText1: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  footer: {
    textAlign: 'center',
    flexDirection: 'row',
    backgroundColor: '#fa21',
    minHeight: '3%',
  },
  globalButton: {
    backgroundColor: 'red',
    fontSize: 25,
    height: 35,
    width: 100,
    borderRadius: 10,
    marginTop: 30,
    
  },
  globalButtonText: {
    color:'white',
    fontWeight:'bold',
    textAlign:'center',
    marginTop:5
     
    },
});

export default styles;
