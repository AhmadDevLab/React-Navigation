import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import navigationStrings from '../../constants/navigationStrings';

const Home = ({navigation }) => {
  const goToProfile = () => {
    navigation.navigate(navigationStrings.PROFILE, {
      name: 'Ahmad Ullah Sucessfully pass data',
    });
  };
  return (
    <View>
      <Text>Home Screen</Text>

      <Button title="Go to profile" onPress={goToProfile} />
    </View>
  );
};

export default Home;
