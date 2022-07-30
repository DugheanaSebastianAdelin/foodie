import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  welcomeText: {
    color: '#FF3D00',
    fontFamily: 'DM Sans',
    fontSize: 20,
    lineHeight: 26.04,
    letterSpacing: -1,
    paddingLeft:10,
  },
  location: {
    color: '#FD4D05',
    fontFamily: 'DM Sans',
    fontSize: 13.66,
    lineHeight: 17.78,
    letterSpacing: -1,
    paddingLeft:10,
  },
  titlesView: {
    flexDirection: 'row',
  
  },
  titles:{
    color:'#979797',
    fontFamily:'DM Sans',
    fontSize:16,
  },

  item: {
    flexBasis: '50%',
    backgroundColor: 'green',
  },
  restaurantImage: {
    width: 142,
    height: 116,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  restaurantTitle: {
    fontFamily: 'DM Sans',
    fontWeight: '400',
    color: '#241C1C',
    fontSize: 16.91,
    lineHeight: 22,
  },
  recommandedDishes:{
   
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    flex:0.8,


  }
});

export default style;
