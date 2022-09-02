import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  welcomeText: {
    fontFamily: 'DM Sans',
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 26,
    color: '#FF3D00',
    letterSpacing: -1,
    marginLeft: 10,
  },
  itemView: {
    margin: 10,
    backgroundColor: 'white',

    borderRadius: 16,
    marginTop: 20,
    shadowColor: 'rgba(32, 32, 32, 0.05)',
  },
  itemImage: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    height: 116,
    width: 142,
    resizeMode: 'stretch',
  },
  itemTitle: {
    fontFamily: 'DM Sans',
    fontSize: 16.91,
    fontWeight: '400',
    lineHeight: 22,
    color: '#241C1C',
    letterSpacing: -1,
    paddingLeft: 4,
  },
});

export default style;
