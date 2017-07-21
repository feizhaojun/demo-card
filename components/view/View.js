/*
    Author: Mukti
    Date: 2017-07-21
    Version: 1.0
 */

// ES6 借用Symbol实现私有方法
const render = Symbol('render');

class View {
    constructor(opt){
        // 获取element
        this.el = document.getElementById(opt.el);
        // title属性
        this.title = opt.title;
        // content属性
        this.content = opt.content;
        // 自定义根的class
        this.className = opt.className;
        // 初始化的时候是否立即显示
        this.isShow == opt.isShow;
        // 默认初始化的时候立即显示
        this.isShow !== false ? this.show() : '';
        this.onRender = opt.onRender;
        // 渲染到页面
        this[render]();
    }
    // 这里将render设为私有方法，不允许外部直接调用。自己用的时候暴露属性和接口会让组件更灵活，如果是团队开发应该将暴露的API严格的写入文档
    [render](){
        let _title = this.title ? `<div class="view-title">${this.title}</div>` : '';
        let _content = this.content ? `<div class="view-content">${this.content}</div>` : '';
        let _html = `<div class="view ${this.className}">${_title}${_content}</div>`;
        this.el.innerHTML = _html;
        // 如果存在回调函数
        if(this.onRender){this.onRender();}
    }
    show(){
        this.el.style.display = '';
        this.isShow = true;
    }
    hide(){
        this.el.style.display = 'none';
        this.isShow = false;
    }
}

// export View;