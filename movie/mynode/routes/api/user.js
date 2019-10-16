var express = require('express');
var router = express.Router();
let mgdb = require('../../utils/mongodb')

/* GET users listing. */
router.get('/', function(req, res, next) {
  //拿到浏览器携带的cookie
  //对比服务器上的session
  let _id = req.session['1907_session']
  console.log("_id",_id)
  if(_id){
    //都库去user&&send(userdata)
    mgdb({
      collectionName:"user",
      success:({collection,client,ObjectID})=>{
        collection.find({//搜索
          _id:ObjectID(_id)
        },{        
        }).toArray((err,result)=>{
          if(err){
            res.send({err:1,msg:'user集合操作失误'})
          }else{
            if(result.length>0){
              delete result[0].password
              delete result[0].username
              res.send({err:0,data:result[0]})
            }else{
              res.send({err:1,msg:"未查询到"})
              
            }
            
          }
          client.close();
        })
      },
      error:(err)=>{console.log(err)}
    })
  }else{
    res.send({err:1,msg:"未登录"})
  }
  
});

module.exports = router; 
