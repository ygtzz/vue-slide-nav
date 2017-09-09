const vueSlideNav = VueSlideNav.slideNav;

new Vue({
  name:'c-app',
  el: '#container',
  created() {
      // setTimeout(() => {
      //     this.list = [];
      // },3000);
  },
  data() {
    return {
      list:[
        {text:'bing'},
        {text:'sougou搜索'},
        {text:'360',callback:function(){alert('360')}},
        {text:'百度一下'}
      ]
    }
  },
  components: {
    'c-slide-nav': vueSlideNav
  }
});