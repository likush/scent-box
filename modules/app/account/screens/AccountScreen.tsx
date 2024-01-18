import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {changeName} from '../reducers/accountSlice';
import {RootState} from '../../../headless/store/store';
import {connect} from 'react-redux';
import {BaseInput} from '../../../components';

type Props = {};

const AccountScreen = (props: Props) => {
  const {changeName} = props;

  const [name, changeNameValue] = useState('');

  return (
    <View>
      <Text>Account</Text>

      <BaseInput onChangeText={changeNameValue} placeholder={'enter name'} />
      <TouchableOpacity onPress={() => changeName(name)}>
        <Text>Push</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state: RootState) => ({
  state,
});

const mapDispatchToProps = {
  changeName,
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountScreen);
