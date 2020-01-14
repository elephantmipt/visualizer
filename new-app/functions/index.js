const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase)

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//


const createNotification = (note) => {
    return admin.firestore().collection('notifications')
    .add(note)
    .then(console.log('notification added'))
}

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Backend!");
});

exports.modelCreated = functions.firestore
    .document('models/{modelId}')
    .onCreate(doc => {
        const model = doc.data();
        const notification = {
            content: 'added new model',
            user: `${model.authorName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        };
        return createNotification(notification);
        

})


