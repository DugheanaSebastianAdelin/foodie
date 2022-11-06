import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    marginHorizontal: 10,
  },
  pt5: {
    paddingTop: 5,
  },
  itemContainer: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderRadius: 16,
    maxHeight: 65,
  },
  itemImageContainer: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 70,
    marginRight: 15,
  },
  itemImageStyle: {
    height: 64,
    width: 75,
    borderRadius: 16,
  },
  itemNameContainer: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 250,
  },
  itemNameStyle: {
    fontSize: 13.44,
    color: '#241C1C',
    fontWeight: '400',
    fontFamily: 'DM Sans',
  },
  itemQuantity: {
    fontSize: 12,
    color: '#979797',
    fontWeight: '400',
    fontFamily: 'DM Sans',
  },
  itemPriceContainer: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
  },
});

export default styles;
