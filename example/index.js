// import { Card } from '../components/card/Card';

// 创建 view 实例
let view1 = new View({
    el: 'view1', // 渲染容器
    title: 'view title',    // 初始化 title
    content: 'view content',  // 初始化 content
    className: 'custom',    // 自定义 class
    isShow: true,    // 是否显示，默认值 true
    onRender:()=>{
        // render 结束后回调
        console.log('view1 completed');
    },
});

// 使用一个按钮测试 View 组件的显示/隐藏
document.getElementById('view1-trigger').addEventListener('click',function(){
    if(view1.isShow){
        view1.hide();
        this.value = '显示';
    }else{
        view1.show();
        this.value = '隐藏';
    }
},false);

// 创建 card1 实例
let card1 = new Card({
    el: 'card1', // 渲染容器
    title:'Card 1',
    content:'this is content',
    className:'custom like',
    isShow: true,  
    item:{
        title:'Item Title',
        description: 'Item Description: You can add more infomation here.'
    },
    trigger:'', // 展开和折叠的触发器，默认自身
    onRender:()=>{
        // render 结束后回调
        console.log('card1 completed');
    }
});

// 创建 card2 实例
let card2 = new Card({
    el: 'card2', // 渲染容器
    title:'Card 2',
    content:'this is content',
    className:'custom like',
    isShow: true,  
    item:{
        title:'Item Title',
        description: 'Item Description: You can add more infomation here.'
    },
    trigger:'card2-trigger',
    onRender:()=>{
        // render 结束后回调
        console.log('card2 completed');
    }
});

// 创建 card3 实例
let card3 = new Card({
    el: 'card3', // 渲染容器
    title:'Card 3',
    content:'this is content',
    className:'custom like',
    isShow: true,  
    item:{
        title:'Item Title',
        description: 'Item Description: You can add more infomation here.'
    },
    onRender:()=>{
        // render 结束后回调
        console.log('card3 completed');
    },
    onLoad:()=>{
        // load 结束后回调
        console.log('Load completed.');
    }
});

// 加载数据
let data = {
    title:'change title',
    description:''
}
document.getElementById('card3-load').addEventListener('click',()=>{
    data.description = 'current time:' + new Date();
    card3.load(data,function(){
        console.log('load success');
        document.getElementById('tips').innerHTML = '加载完毕，可以展开查看结果。';
    });
},false);