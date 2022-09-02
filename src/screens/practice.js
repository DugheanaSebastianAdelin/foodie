import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Practice = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'purple',

        flex: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          flex: 0.2,
        }}>
        <View style={{backgroundColor: 'yellow', flex: 0.6, margin: 5}}>
          <Text>yellow</Text>
        </View>
        <View style={{flex: 0.4}}>
          <View style={{backgroundColor: 'red', flex: 1, margin: 5}}>
            <Text>red</Text>
          </View>
          <View style={{backgroundColor: 'pink', flex: 1, margin: 5}}>
            <Text>pink</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          flex: 0.1,
        }}>
        <View style={{backgroundColor: 'red', flex: 0.4, margin: 5}}>
          <Text>red</Text>
        </View>
        <View style={{backgroundColor: 'blue', flex: 0.6, margin: 5}}>
          <Text>blue</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          flex: 0.1,
        }}>
        <View style={{backgroundColor: 'green', flex: 0.6, margin: 5}}>
          <Text>green</Text>
        </View>
        <View style={{alignSelf: 'flex-end', flex: 0.4, margin: 5}}>
          <View style={{backgroundColor: 'red', flex: 0.6}}>
            <Text>red</Text>
          </View>
        </View>
      </View>
      <View style={{flex: 0.1, backgroundColor: 'green', margin: 5}}>
        <Text>green</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          flex: 0.1,

          justifyContent: 'space-between',
        }}>
        <View
          style={{
            backgroundColor: 'red',
            flex: 0.5,
            justifyContent: 'space-between',
            margin: 5,
          }}>
          <Text>red</Text>
        </View>
        <View style={{flex: 0.2}}>
          <View
            style={{
              backgroundColor: 'blue',
              flex: 1,
              justifyContent: 'space-between',
              margin: 5,
            }}>
            <Text>blue</Text>
          </View>
          <View style={{backgroundColor: 'red', flex: 1, margin: 5}}>
            <Text>red</Text>
          </View>
        </View>

        <View style={{flex: 0.3, alignSelf: 'center'}}>
          <View
            style={{
              backgroundColor: 'red',
              flex: 0.5,
              margin: 5,
            }}></View>
        </View>
      </View>
    </View>
  );
};

export default Practice;

const styles = StyleSheet.create({});
