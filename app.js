const mongodb = require ('mongodb') 

const mongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb://127.0.0.1:27017'

const dbname = 'Task4'

mongoClient.connect(connectionUrl , (error , res1)=>{
    if(error){
        return console.log('error has occured')
    }
    console.log('All Perf')

    const db = res1.db(dbname)

 // add 2 documents by use insertOne

    db.collection('users').insertOne({
        name : 'Mariam' ,
        age : 21
    },(error , data) =>{
        if(error){
            console.log('Unable to insert data')
        }
        console.log(data.insertedId)
    })
    db.collection('users').insertOne({
        name : 'Ahmed' ,
        age : 21
    },(error , data) =>{
        if(error){
            console.log('Unable to insert data')
        }
        console.log(data.insertedId)
    })

 // add 10 documents by use insertMany  and 5 of them have an age field set to 27

    db.collection('users').insertMany(
        [
            {
                name : 'Ranin' ,
                age : 27
            },
            {
                name : 'Reem' ,
                age : 22
            },
            {
                name : 'Ramy' ,
                age : 25
            },
            {
                name : 'Mohamed' ,
                age : 27
            },
            {
                name : 'Ahmed' ,
                age : 27
            },
            {
                name : 'Shahd' ,
                age : 27
            },
            {
                name : 'Hossam' ,
                age : 33
            },
            {
                name : 'Khaled' ,
                age : 20
            },
            {
                name : 'Hisham' ,
                age : 27
            },
            {
                name : 'Ash' ,
                age : 33
            }
        ] , (error , data)=>{
            if(error){
                console.log('Unable to insert data')
            }
            console.log(data)
        }
    )

  // display all documents where the age is 27 and count of these documents

    db.collection('users').find({age:27}).count((error , users)=>{
        if(error){
            return console.log('Error has occured')
        }
        console.log('Count of documents where age is 27 : ' , users)
    })

  // limit first 3 documents with age 27

    db.collection('users').find({age:27}).limit(3).toArray((error , users)=>{
        if(error){
            return console.log('Error has occured')
        }
        console.log('First 3 documents with age 27 : ' , users)
    })


})