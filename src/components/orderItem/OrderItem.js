import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './orderItemStyle';

const OrderItem = ({price, name, style}) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.pt5}>
        <View style={styles.itemContainer}>
          <View style={styles.itemImageContainer}>
            <Image
              source={require('../../../assets/img/restaurant1.png')}
              style={styles.itemImageStyle}
            />
          </View>
          <View style={styles.itemNameContainer}>
            <Text style={styles.itemNameStyle}>{name}</Text>
            <View style={{flexDirection: 'row'}}>
              <Text>+</Text>
              <Text style={styles.itemQuantity}>1</Text>
              <Text>-</Text>
            </View>
          </View>
          <View style={styles.itemPriceContainer}>
            <Text>${price}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default OrderItem;
