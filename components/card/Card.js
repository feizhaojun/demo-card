/*
    Author: Mukti
    Date: 2017-07-21
    Version: 1.0
 */
// import { View } from './view/View'

// 内部使用的一个将 card 的 item 转换为 view 的 content 的处理函数
const item2Content = Symbol('item2Content');

class Card extends View {
    constructor(opt){
        opt.className = 'card ' + opt.className;
        super(opt);
        this.isCollapse = true;
        this.load(opt.item,opt.onLoad);
        this.trigger = document.getElementById(opt.trigger || opt.el);
        this.trigger.addEventListener('click',()=>{
            if(this.isCollapse){
                this.expand();
            }else{
                this.collapse();
            }
        },false);
    }
    load(data,callback){
        // 如果存在回调函数
        this.item = data;
        // Card 的 item配置会替代 View 的 content
        this.content = data ? this[item2Content](data) : this.content;
        // content 替换为 item 重新渲染
        this.el.childNodes[0].childNodes[1].innerHTML = this.content;
        if(callback){callback();}
    }
    collapse(){
        this.el.className = this.el.className.replace(/\s*expand\s*/g,'');
        this.isCollapse = true;
    }
    expand(){
        this.el.className = (this.el.className && this.el.className.indexOf('expand') < 0 ) ? this.el.className + ' expand' : 'expand';
        this.isCollapse = false;
    }
    [item2Content](item){
        let itemContent = [];
        for(let key in item){
            itemContent.push(`<div class="item-${key}">${item[key]}</div>`);
        }
        return itemContent.join('');
    }

}

// export Card;