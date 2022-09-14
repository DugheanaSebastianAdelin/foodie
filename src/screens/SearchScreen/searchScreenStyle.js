import {StyleSheet} from 'react-native';
const style = StyleSheet.create({
  mainView: {
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 10,
    marginLeft: 10,
    flex: 1,
  },

  welcomeText: {
    fontFamily: 'DM Sans',
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 26,
    color: '#FF3D00',
    letterSpacing: -1,
    marginLeft: 10,
  },
  inputView: {
    backgroundColor: '#F3F4F9',
    width: '80%',
    marginLeft: 20,
    borderRadius: 16,
  },
  searchIconTextView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },
  filtersView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  restaurantsView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 16,
    marginTop: 20,
    shadowColor: 'rgba(32, 32, 32, 0.05)',
  },
  restaurantsImage: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    height: 116,
    width: 142,
    resizeMode: 'stretch',
  },
  restaurantsTitle: {
    fontFamily: 'DM Sans',
    fontSize: 16.91,
    fontWeight: '400',
    lineHeight: 22,
    color: '#241C1C',
    letterSpacing: -1,
    paddingLeft: 4,
  },
  restaurantsRatingsHeart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  recommandedDishesHeader: {
    color: '#FD4D05',
    fontFamily: 'DM Sans',
    fontWeight: '400',
    fontSize: 20,
  },
  rdView: {
    backgroundColor: 'white',
    borderRadius: 16,
    margin: 5,
    shadowColor: 'rgba(32, 32, 32, 0.05)',
  },
  rdImage: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    height: 60,
    width: 74,
  },
  rdText: {
    fontSize: 8,
    fontFamily: 'DM Sans',
  },
  rdPriceHeartView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  rdPrice: {
    fontSize: 8,
    color: '#FFD863',
  },
  row: {
    flexDirection: 'row',
  },
  textInput: {
    paddingLeft: 20,
  },
  filterTouchable: {
    alignSelf: 'center',
    marginLeft: 10,
  },

  ratings: {
    width: 68,
    height: 12,
  },
  heart: {
    width: 24,
    height: 24,
  },

  restaurantsFlatListView: {
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  flatlistContainerStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  flex1: {flex: 1},
  backgroundImageStyle: {opacity: 0.1},
});

export default style;
