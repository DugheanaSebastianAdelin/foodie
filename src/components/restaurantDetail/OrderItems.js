import React from 'react';
import {Image, Text, View} from 'react-native';

export default function OrderItem({item}) {
  const {name, price, category, img} = item;
  return (
    <View style={{marginLeft: 10, marginRight: 10}}>
      <View style={{paddingTop: 5}}>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            flexDirection: 'row',
            borderRadius: 16,
            maxHeight: 65,
          }}>
          <View
            style={{
              flexGrow: 0,
              flexShrink: 1,
              flexBasis: 70,
              marginRight: 15,
            }}>
            <Image
              source={require('../../../assets/img/restaurant1.png')}
              style={{height: 64, width: 75, borderRadius: 16}}
            />
          </View>
          <View
            style={{
              // flex: 1,
              flexGrow: 0,
              flexShrink: 1,
              flexBasis: 250,
            }}>
            <Text
              style={{
                fontSize: 13.44,
                color: '#241C1C',
                fontWeight: '400',
                fontFamily: 'DM Sans',
              }}>
              {name}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text>+</Text>
              <Text
                style={{
                  fontSize: 12,
                  color: '#979797',
                  fontWeight: '400',
                  fontFamily: 'DM Sans',
                }}>
                1
              </Text>
              <Text>-</Text>
            </View>
          </View>
          <View style={{flexGrow: 1, flexShrink: 0, flexBasis: 0}}>
            <Text>{price} $</Text>
          </View>
        </View>
      </View>
      {/* <Text>{category}</Text>
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontWeight: '600', fontSize: 16}}>{name}</Text>
          <Text style={{opacity: 0.7, fontSize: 16}}>{price}</Text>
        </View>
      </View> */}
    </View>
  );
}
