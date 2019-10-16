module.exports = ()=>{
     let arr = [
    '阙造','广锡一','席寺','扶驾','郑萱黄','林樊牵','孟登元','鱼彰','皮忧暑','左稗','宦醇','糜弋招','席准','方抑','乌泔','苗鲁','孟候依','龙珠饯','洪打鹰','缪负铎'
    ];
    for(var i=0;i<arr.length;i++){};        
    function randomNum(minNum,maxNum){ 
        switch(arguments.length){ 
            case 1: 
                return parseInt(Math.random()*minNum+1,10); 
            break; 
            case 2: 
                return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
            break; 
                default: 
                    return 0; 
                break; 
        } 
    }; 
    let aaa = arr[randomNum(0,arr.length)];
    return aaa     
   }
