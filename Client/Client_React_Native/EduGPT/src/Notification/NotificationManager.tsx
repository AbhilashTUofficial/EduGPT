import {
  sendNotification,
} from './NotificationHelper';

export const NotificationManager = async (
  {notification}
) => {

  sendNotification({
    channelId: "edu_gpt_channel",
    title: "notification.title",
    message: "notification.message",
    invokeApp: false,
    importance: 'high',
    playSound: true,
    tag: "edugpt",
    id: "notification.id",
    showWhen: true,
    color: '#89c040',
    smallIcon: 'notificationsmicon',
    actions: ['Open'],
    group: "Leasons",
    when: Date.now(),
  });

};
