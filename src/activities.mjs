import { ActivityType } from "discord.js";
import { client } from "./connect.mjs";

let currentActivity = -1;

export function setPresence(obj) {
    if (!obj.options) {obj.options = {};}
    if (!obj.status) {obj.status = "online";}
    if (!obj.type) {obj.type = "Custom";}
    if (obj.name) {
        obj.options.name = obj.name;
        obj.options.state = obj.state;
        obj.options.type = ActivityType[obj.type];
        client.user.setPresence({
            activities: [obj.options],
            status: obj.status
        });
    }
}
export function groupOfActivities(arr, mode = "straight", interval) {
    function run() {
        switch (mode) {
            case "straight":
                currentActivity++;
                setPresence(arr[currentActivity % arr.length]);
                break;
            case "random":
                const randomNumber = Math.floor(Math.random() * arr.length);
                setPresence(arr[randomNumber]);
                break;
        }
    }
    if (interval) {setInterval(run, interval * 1000);}
    else {run();}
}