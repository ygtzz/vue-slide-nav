<template>
    <div class="slide-nav">
        <ul ref="list" class="list">
            <li @click="fItemClick($event,item)" v-for="item in items" :key="'item' + $index" class="item">
                <a href="javascript:;" class="item-link">{{item.text}}</a>
            </li>
            <div ref="back" class="back" :class="[backClass]" :style="backStyle"></div>
        </ul>
    </div>
</template>
<style lang="sass" scoped>
   ul{list-style:none;padding:0;margin:0;}
    .list{position:relative;background-color:#FF8300;overflow:hidden;
    border-radius:10px;padding:15px 20px;color:#fff;}
    .item{float:left;margin-right:15px;}
    .item-link{position:relative;z-index:3;text-decoration:none;}
    .item-link:link,.item-link:visited,.item-link:hover,.item-link:visited{color:#fff;}
    .back{width:2em;left:12px;position: absolute;
        -webkit-transition: all 400ms cubic-bezier(.45,1.92,.9,1.54);
        -moz-transition: all 400ms cubic-bezier(.45,1.92,.9,1.54);
        -o-transition: all 400ms cubic-bezier(.45,1.92,.9,1.54);
        -ms-transition: all 400ms cubic-bezier(.45,1.92,.9,1.54);
        transition: all 400ms cubic-bezier(.16,1.23,.87,1.18);
    }
    .backBar{background-color:#E56D07;height:30px;border-radius:8px;
        top:50%;transform:translate(0,-50%);-webkit-transform:translate(0,-50%);}
    .backLine{background-color:#E56D07;height:2px;bottom:8px;}
</style>
<script>
export default {
    name:'we-slide-nav',
    created(){
        
    },
    mounted(){
        this.$nextTick(() => {
            var firstChild = this.$refs.list.firstChild;
            if(firstChild){
                firstChild.click();
            }
        });
    },
    destroyed(){
        
    },
    props:{
        items:{
            type:Array,
            default:[]
        },
        offset:{
            type:Number,
            default:8
        },
        backClass:{
            type:String,
            default:'backBar'
        }
    },
    data(){
        return {
            backStyle:{}
        }
    },
    computed:{
        
    },
    methods:{
        fItemClick(event,item){
            event && event.preventDefault();
            var target = event.target,
                left = target.offsetLeft,
                width = target.offsetWidth;
            //move back item
            var offset = this.offset;
            this.backStyle = {left:(left-offset)+'px',width:(width+2*offset)+'px'};
            //call callback
            if(item.callback){
                item.callback();
            }
        }
    },
    components:{
        
    }
}
</script>
