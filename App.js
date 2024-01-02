import React, {useEffect, useState} from 'react';
import {View, Text, Button, ActivityIndicator, ScrollView} from 'react-native';
import {useGuardSecure} from '@abtguard/guard';

const App = () => {
  const {
    store: {
      initGuard,
      createPin,
      login,
      changePin,
      approveTransaction,
      getMobileNotificationTransaction,
      generateTOTP,
      logout,
      calcGuardScore,
      verifyPin,
    },
  } = useGuardSecure();

  const [loading, setLoading] = useState(false);
  const [responseText, setResponseText] = useState('');

  const handleButtonPress = async (method, data) => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    try {
      const response = await method(data);
      setResponseText(JSON.stringify(response));
    } catch (error) {
      setResponseText('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const createPinRequest = {
    pin: '232323',
    customerId: '4233',
  };
  const loginRequest = {
    pin: '232323',
    customerId: '4233',
    rememberPinActive: true,
  };

  const changeCustomerPin = {
    isRememberPinActive: false,
    customerId: '4233',
    pin: '232323',
    newPin: '252525',
  };
  const approvetrans = {
    customerId: '4233',
    transactionId: '320536',
    pin: '232323',
    summaryData: '{amount:60,recipientCustomerNo:4233,senderCustomerNo:4233}',
    canceled: false,
    isPinless: false,
  };
  const mobileTransactionInfo = {
    customerId: '4233',
    type: 'LOGIN',
  };

  const generateTOTPInfo = {
    pin: '232323',
    tranData: {},
    pinLength: 8,
  };

  const logoutRequest = {
    customerId: '4233',
  };

  const pinVerification = {
    guardSdkVersion: '0.9.44',
    customerId: '4233',
    pin: '232323',
  };
  // customerId: 'ƒ',

  return (
    <View>
      <Text>Your React Native Page</Text>
      <Button title="Initialize Guard" onPress={initGuard} />
      <Button
        title="Create Pin"
        onPress={() => handleButtonPress(createPin, createPinRequest)}
      />
      <Button title="login" onPress={() => login(loginRequest)} />
      <Button
        title="ChangePin"
        onPress={() => handleButtonPress(changePin, changeCustomerPin)}
      />
      <Button
        title="Approve Transaction"
        onPress={() => handleButtonPress(approveTransaction, approvetrans)}
      />
      <Button
        title="mobileTransaction"
        onPress={() =>
          handleButtonPress(
            getMobileNotificationTransaction,
            mobileTransactionInfo,
          )
        }
      />
      <Button
        title="generateTOTP"
        onPress={() => handleButtonPress(generateTOTP, generateTOTPInfo)}
      />
      <Button
        title="logout"
        onPress={() => handleButtonPress(logout, logoutRequest)}
      />
      <Button
        title="calculateguardscore"
        onPress={() => handleButtonPress(calcGuardScore)}
      />
      <Button
        title="pinVerification"
        onPress={() => handleButtonPress(verifyPin, pinVerification)}
      />
      <ActivityIndicator animating={loading} size="large" color="#0000ff" />
      <Text>{responseText}</Text>
    </View>
  );
};

export default App;
