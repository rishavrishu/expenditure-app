import {
  SafeAreaView,
  View,
  Text,
  NativeModules,
  PermissionsAndroid,
  Alert,
  DeviceEventEmitter,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import CustomButton from "../../components/CustomButton";

const Home = () => {
  const [receiveSmsPermission, setReceiveSmsPermission] = useState("");
  const [smsList, setSmsList] = useState([]);

  const requestSmsPermission = async () => {
    try {
      const permission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECEIVE_SMS
      );
      setReceiveSmsPermission(permission);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    requestSmsPermission();
  }, []);

  useEffect(() => {
    if (receiveSmsPermission === PermissionsAndroid.RESULTS.GRANTED) {
      let subscriber = DeviceEventEmitter.addListener(
        "onSMSReceived",
        (message) => {
          const { messageBody, senderPhoneNumber } = JSON.parse(message);
          setSmsList([...smsList, { messageBody, senderPhoneNumber }]);
          Alert.alert(
            "SMS received",
            `Message Body: ${messageBody} & sender number: ${senderPhoneNumber}`
          );
        }
      );

      return () => {
        subscriber.remove();
      };
    }
  }, [receiveSmsPermission]);

  // Check and request SMS permission on button press
  return (
    <View>
      <CustomButton title="Sync Sms" handelPress={() => requestPermission()} />
      <FlatList
        data={smsList}
        renderItem={({ item }) => (
          <View>
            <Text>{item.senderPhoneNumber}</Text>
            <Text>{item.messageBody}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Home;
