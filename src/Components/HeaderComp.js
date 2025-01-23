import {
  StyleSheet,
  Text,
  TextComponent,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const HeaderComp = ({goBack = () => {}, title = ''}) => {
  return (
    <View
      style={{
        backgroundColor: '#bbb',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <TouchableOpacity onPress={goBack}>
        <Text>Go Back</Text>
      </TouchableOpacity>
      <Text>{title}</Text>
    </View>
  );
};

export default HeaderComp;

const styles = StyleSheet.create({});
