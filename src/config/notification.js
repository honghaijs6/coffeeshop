import {  Notifications, Permissions,Constants } from 'expo';


const notification = {

    getExpoToken: async function(){
        // Remote notifications do not work in simulators, only on device
        if (!Constants.isDevice) {
            return;
        }
        let { status } = await Permissions.askAsync(
            Permissions.NOTIFICATIONS,
        );
        if (status !== 'granted') {
            return;
        }
        let value = await Notifications.getExpoPushTokenAsync();
        console.log('Our token', value);
        /// Send this to a server
        
        return value ; 
        

        
    },

    getiOSNotificationPermission:async function(){
        const { status } = await Permissions.getAsync(
            Permissions.NOTIFICATIONS
        );
        if (status !== 'granted') {
           await Permissions.askAsync(Permissions.NOTIFICATIONS);
        }
    },

    listenForNotifications:function(){
        Notifications.addListener(notification => {

            console.log(notification);
            switch(notification.origin){
                case 'received':
        
                break ;
            }
        
        });
    },

    sendLocalNotification:function(json){
        const localnotification = {
            title: json.title,
            body: json.body,
            android: {
              sound: true,
            },
            ios: {
              sound: true,
            },
        };
        
        let afterOneSecond = Date.now();
        afterOneSecond += 1000;
        
        const schedulingOptions = { time: afterOneSecond };
        Notifications.scheduleLocalNotificationAsync(
            localnotification,
            schedulingOptions
        );
    }
}

notification.getiOSNotificationPermission();
notification.listenForNotifications();


export default notification;