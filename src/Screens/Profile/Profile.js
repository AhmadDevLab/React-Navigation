import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import HeaderComp from '../../Components/HeaderComp';
import navigationStrings from '../../constants/navigationStrings';

const Profile = ({navigation, route}) => {
  const name = route.params.name;
  return (
    <View>
      <HeaderComp
        goBack={() => navigation.navigate(navigationStrings.HOME)}
        title="Profile Header"
      />
      <Text>{name}</Text>
    </View>
  );
};

export default Profile;
