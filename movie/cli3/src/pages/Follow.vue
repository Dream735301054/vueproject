<template>
    <div class="follow">
        <div class="ttt">VIP播放列表</div>
        <List :list-data="listData" :data-name="'follow'"></List>
    </div>
</template>

<script>
import List from '@/components/List'
export default {
    data(){
        return {
            listData:[]
        }
    },
    components:{List},
    activated(){
         axios({
            url:'http://localhost:3000/api/follow',
            params:{_page:1,_limit:10}
            }).then(
            res=>this.listData=res.data.data
        )
    } 
}
</script>
<style>
    .ttt{width:100%;height:0.8rem; position:fixed;top:0;left:0; background:#108ee9; border-bottom:1px solid #e8eaec; font:.45rem/.9rem "";text-align: center;color:#fff;}
</style>