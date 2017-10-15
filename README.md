# waterfall
> 1.0.0

##HTML结构
```html
<any class="waterfall">
  <any class="waterfall-item"></any>
  <any class="waterfall-item"></any>
  <any class="waterfall-item"></any>
  <any class="waterfall-item"></any>
</any>
```

> 包裹元素采用flexbox布局
> 此外其他元素均不包含任何UI样式

##实例化
```javascript
new Waterfall(el, column)
```
###参数
- el:string：外层包裹元素，默认'.waterfall'
- column:number：列数，默认自动

##API
###arrange(doms[, animate])
把dom节点集合追加到瀑布流尾部
- doms:array：新的dom节点集合
- animate:string：插入时动画名称，默认zoomIn

##示例
```html
<section id="#waterfall-wrap">
  <div class="waterfall-item"></div>
  <div class="waterfall-item"></div>
</section>
```
```javascript
new Waterfall('#waterfall-wrap', 3)
```
