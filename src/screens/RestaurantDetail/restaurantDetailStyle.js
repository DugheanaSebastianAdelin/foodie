import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  restaurantImage: {
    width: '100%',
    height: '22%',
  },
  restaurantName: {
    fontFamily: 'DM Sans',
    fontSize: 27,
    lineHeight: 40,
    color: '#241C1C',
    paddingLeft: 10,
  },

  rowSpaceBetwin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  adress: {
    color: '#FBB816',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 20,
  },

  colorRed: {
    color: '#FD4D05',
    fontFamily: 'DM Sans',
    fontSize: 16.9,
    lineHeight: 20.33,
    fontWeight: '400',
  },
  lightGrey: {
    color: '#979797',
    fontFamily: 'DM Sans',
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '400',
  },
  firstMenuView: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderRadius: 16,
    maxHeight: 65,
  },
  secondMenuView: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 70,
    marginRight: 15,
  },
  menuImage: {
    height: 64,
    width: 75,
    borderRadius: 16,
  },
  titleView: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 250,
  },
  itemTitle: {
    fontSize: 13.44,
    color: '#241C1C',
    fontWeight: '400',
    fontFamily: 'DM Sans',
  },
  itemIgredients: {
    fontSize: 8.57,
    color: '#979797',
    fontWeight: '400',
    fontFamily: 'DM Sans',
  },
});

export default styles;
