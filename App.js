import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useGuardSecure } from '@abtguard/guard';

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

  const createPinRequest = {
    pin: "121212",
    customerId: "4233",
  };
  const loginRequest = {
    pin: "121212",
    customerId: "4233",
    rememberPinActive: true  
  };

  const changeCustomerPin={
    isRememberPinActive: false,
    customerId:"4233",
    pin:"121212",
    newPin:"232323",

 };
 const approvetrans={
  customerId:"4233",
  pin:"121212",
  canceled:true,

};
const mobileTransactionInfo = {
  customerId: "4233",
};

const generateTOTPInfo = {
  pin: "121212",
  tranData: { },
  pinLength: 8,
};

const logoutRequest ={
  customerId: "4233",
};

const pinVerification ={
  customerId: "4233",
  pin: "121212",

};






  return (
    <View>
      <Text>Your React Native Page</Text>
      <Button title="Initialize Guard" onPress={initGuard} />
      <Button title="Create Pin" onPress={() => createPin(createPinRequest)} />
      <Button title="login" onPress={() => login(loginRequest)} />
      <Button title="ChangePin" onPress={() => changePin(changeCustomerPin)} />
      <Button title="Transaction pin verify" onPress={() => approveTransaction(approvetrans)} />
      <Button title="mobileTransaction" onPress={() => getMobileNotificationTransaction(mobileTransactionInfo)} />
      <Button title="generateTOTP" onPress={() => generateTOTP(generateTOTPInfo)} />
      <Button title="logout" onPress={() => logout(logoutRequest)} />
      <Button title="calculateguardscore" onPress={calcGuardScore} />
      <Button title="pinVerification" onPress={() => verifyPin(pinVerification)} />
    </View>
  );
};

export default App;
