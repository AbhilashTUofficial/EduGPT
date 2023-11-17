import {
  sendNotification,
} from './NotificationHelper';

export const NotificationManager = async (
  notification,
) => {
  const tag = notification.tag;
  const data = notification.data;

  switch (tag) {
    case 'tag':
        sendNotification({
            channelId: "edu_gpt_channel",
            title: notification.title,
            message: notification.message,
            invokeApp: false,
            importance: 'high',
            playSound: true,
            tag: tag,
            id: notification.id,
            showWhen: true,
            color: '#89c040',
            smallIcon: 'notificationsmicon',
            actions: ['Open'],
            group: "Leasons",
            when: Date.now(),
          });

      break;

    default:
      break;
  }

};
