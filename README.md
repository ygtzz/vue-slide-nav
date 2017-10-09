## vue-slide-nav

### QuickStart
```javascript
import {slideNav} from 'VueSlideNav';
Vue.component('c-slide-nav',slideNav);
```
```html
<!-- in vue template -->
<!--list:[
    {text:'bing'},
    {text:'sougou搜索'},
    {text:'360',callback:funcion(){}},
    {text:'百度一下'}
]-->
<c-slide-nav :items="list" back-class="backLine"></c-slide-nav>
```

### Params

- `items`: a list contains {text:'',link:''} object,text respents item's text,if callback,it will be call after click
- `offset`: the back item's left and right padding to normal item
- `backClass`: the back item's class, defalut is backBar, other build-in class is backLine

### Preview

![slide nav image](./doc/slide-nav.png)