// // const mongodb = require("mongodb");
// const { MongoClient, ObjectId } = require('mongodb')

// const connectionURL = "mongodb://127.0.0.1:27017";
// const databaseName = "task-manager";

// MongoClient.connect(
//   connectionURL,
//   { useNewUrlParser: true },
//   (error, client) => {
//     if (error) {
//       return console.log("Unable to connect to database");
//     }
//     // console.log('Connected correctly!')

//     const db = client.db(databaseName);

//   //  const updatePromise = db.collection('users').updateOne({ 
//   //     _id: new ObjectId("624d721ea91db271db4b28cc")
//   //    },{
//   //      $inc: {
//   //       age: -3
//   //      }
//   //    }).then((result) => {
//   //     console.log(result)
//   //    }).catch((error) => {
//   //      console.log(error)
//   //    })


//   // db.collection('tasks').updateMany(
//   //   {
//   //     complited: false
//   //   }, {$set: {
//   //     complited: true
//   //   }
//   //   }).then((result) => {
//   //     console.log(result)
//   // }).catch((error) => {
//   //   console.log(error)
//   // })


//     // db.collection('users').deleteMany({
//     //   name: 'Rafał'
//     // }).then((result) => {
//     //   console.log(result)
//     // }).catch((error) => {
//     //   console.log(error)
//     // })

//     db.collection('tasks').deleteOne({
//       _id: new ObjectId("624d789832abf84a18bc483f")
//     }).then((result) => {
//       console.log(result)
//     }).catch((error) => {
//       console.log(error)
//     })
// })
//  m