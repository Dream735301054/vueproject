var express = require('express');
var router = express.Router();
var mgdb = require('../../utils/mongodb')

/* GET users listing. */
router.get('/', function(req, res, next) {
  let {_id,_page,_limit,_sort,q} = req.query//解构出请求携带的所有参数
  //整理搜索条件
  q = q ? {$or:[{title:eval('/'+q+'/')},{des:eval('/'+q+'/')}]} :{}          
  if(_id){
    //详情
    findDetail({_id,req,res,next})
  }else{
    //列表
    mgdb({
      collectionName:"banner",
      success:({collection,client})=>{
        collection.find(//搜索
        q,
        {
          sort:{[_sort]:-1},//排序
          skip:_page*_limit,//跳过的条数
          limit:_limit//页数
        }).toArray((err,result)=>{
          if(err){
            res.send({err:1,msg:'banner集合操作失误'})
          }else{
            res.send({err:0,data:result})
          }
          client.close();
        })
      },
      error:(err)=>{console.log(err)}
    })
  }
});

router.get('/:id',function(req,res,next){
  //详情
  findDetail({_id:req.params.id,req,res,next})
});
function findDetail({_id,req,res,next}){
  mgdb({
    collectionName:"banner",
    success:({collection,client,ObjectID})=>{
      collection.find({//搜索
        _id:ObjectID(_id)
      },{        
      }).toArray((err,result)=>{
        if(err){
          res.send({err:1,msg:'banner集合操作失误'})
        }else{
          if(result.length>0){
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
}

module.exports = router;
