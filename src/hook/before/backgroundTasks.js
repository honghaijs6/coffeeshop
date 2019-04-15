
import socket from '../../config/socket'

const FETCH_TASKNAME = 'test_bg_fetch';
const INTERVAL = 60;


import {  BackgroundFetch, TaskManager } from 'expo';


export default async function backgroundTasks() {
    TaskManager.defineTask(FETCH_TASKNAME, ()=>{

      console.log('BackgroundFetch running');
      socket.emit('find','notifications',{
          is_read:0,
          belong_uid:15
        },(err,data)=>{

          console.log(data);

      });

    });

    const status = await BackgroundFetch.getStatusAsync();

    switch (status) {
        case BackgroundFetch.Status.Restricted:
        case BackgroundFetch.Status.Denied:
            console.log("Background execution is disabled");
            return;

        default: {
            console.log("Background execution allowed");

            let tasks = await TaskManager.getRegisteredTasksAsync();
            if (tasks.find(f => f.taskName === FETCH_TASKNAME) == null) {
                console.log("Registering task");
                await BackgroundFetch.registerTaskAsync(FETCH_TASKNAME);

                tasks = await TaskManager.getRegisteredTasksAsync();
                console.log("Registered tasks", tasks);
            } else {
                console.log(`Task ${FETCH_TASKNAME} already registered, skipping`);
            }

            console.log("Setting interval to", INTERVAL);
            await BackgroundFetch.setMinimumIntervalAsync(INTERVAL);
        }
    }
}
