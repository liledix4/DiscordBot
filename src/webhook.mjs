import hookcord from 'hookcord';
export function hookSendMessage(message, hookID, hookSecret) {
    const Hook = new hookcord.Hook()
        .login(hookID, hookSecret)
        .setPayload(message)
        .fire();
};