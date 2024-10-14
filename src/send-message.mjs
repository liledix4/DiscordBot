import { client } from "./connect.mjs";

let channelID;
export let channel;

export function updateChannel(chID) {
    if (chID) {
        channelID = chID;
        channel = client.channels.cache.get(channelID);
    }
    else {
        channelID = undefined;
        channel = undefined;
    }
}

export function sendMessage(text, chID) {
    updateChannel(chID);
    channel.send(text);
}