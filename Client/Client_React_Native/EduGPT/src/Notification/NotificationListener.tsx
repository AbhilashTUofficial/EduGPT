import PushNotification from 'react-native-push-notification';
import { NotificationManager } from './NotificationManager';
export const NotificationListener = () => {

  
  PushNotification.configure({
    // (optional) Called when Token is generated (iOS and Android)
    onRegister: async function (res) {
    //   dispatch(setFCMToken(res.token));
    },

    // (required) Called when a remote is received or opened, or local notification is opened
    onNotification: async function (notification) {
      console.log('NOTIFICATION: ', notification);
      NotificationManager(
        {
          title: notification.data.TITLE,
          message: notification.data.MESSAGE,
          id: notification.data.MESSAGEID,
        }
      );

    },

    // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
    onRegistrationError: function (err) {
      console.error(err.message, err);
    },

    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
    popInitialNotification: false,
    requestPermissions: true,
  });
};
