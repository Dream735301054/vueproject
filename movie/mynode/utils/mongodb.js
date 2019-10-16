let mongodb = require('mongodb'); //引入模块  第三方模块
let mongoCt = mongodb.MongoClient		//创建客户端
let ObjectID = mongodb.ObjectID	
//创建链接
module.exports = ({url='mongodb://127.0.0.1:27017',dbName='newsapp',collectionName="name",success,error})=>{
    //mongoCt.connect('mongodb://127.0.0.1:27017',(err,client)=>{
    mongoCt.connect(url,{ useNewUrlParser: true,useUnifiedTopology: true },(err,client)=>{
        if(err){
            error && error('链接库错误')
        }else{
            // client==客户端
            let db = client.db(dbName) //链库 
            let collection = db.collection(collectionName);//链接集合（表)
            success && success({collection,client,ObjectID})
        }
    })
}