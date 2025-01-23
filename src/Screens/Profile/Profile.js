import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';


const Profile = ({ navigation, route }) => {
  

  const {name} = route.params
  

  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export default Profile;
