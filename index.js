﻿

const check = () => {
    if (!('serviceWorker' in navigator)) {
        throw new Error('Service Worker not Supported!')
    }

    if (!('PushManager' in window)) {
        throw new Error('Service Worker not Supported!')
    }
}

const main =  () => {
    check();
    const swRegistration =  registerServiceWorker();
    const permission =   requestNotificationPermission();
}

const registerServiceWorker =  () => {
    const swRegistration = 
    navigator.serviceWorker.register('service.js')

    return swRegistration;
}

const requestNotificationPermission =  () => {
    const permission =  window.Notification.requestPermission();
    // value of permission can be 'granted', 'default', 'denied'
    // granted: user has accepted the request
    // default: user has dismissed the notification permission popup by clicking on x
    // denied: user has denied the request.
    if(permission != 'granted'){
        throw new Error('Permission not granted for Notification');
    }
}

main()