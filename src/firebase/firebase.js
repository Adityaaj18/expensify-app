import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,   
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    // appId: "1:945312948282:web:c7a15331b3fef451e6d503",
    // measurementId: "G-0XGG82WCM6"
};

firebase.initializeApp(firebaseConfig)

const database = firebase.database()


export { firebase, database as default }

// database.ref('expenses')
//     .on('value',(snapshot) => {
//         const expenses = []

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(expenses);
//     })
    


// database.ref('expenses').push({
//     description: 'Stocks',
//     note: '',
//     amount: 500,
//     createdAt: 4
// })



// database.ref('notes/-MYPZ1MIRcpas7Iysil0').remove()

// const notes = [{
//     id: '12',
//     title: 'First note',
//     body: 'This is my note'
// },{
    
//     id: '69',
//     title: 'second note',
//     body: 'This is my note'
    
// }]

// database.ref('notes').set(notes)

// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// })

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val)
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     })

// database.ref('isSingle').remove().then(() =>{
//     console.log('removed successfully');
// }).catch((e) => {
//     console.log('remove failed', e);
// })

// database.ref().set({
//     name: 'Aditya Jadhav',
//     age: 21,
//     isSingle: true,
//     stressLevel: 6,
//     job: {
//         title: 'Softwear developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Mumbai',
//         country: 'India'
//     }
// }).then(() => {
//     console.log('Data is saved!')
// }).catch((e) => {
//     console.log('this faild', e)
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Hyderabad'
    
// })

