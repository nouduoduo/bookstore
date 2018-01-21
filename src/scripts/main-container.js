import SlideShow from '@/components/SlideShow'
import IndexReco from '@/components/IndexReco'
import BookDetailsPage from '@/components/BookDetailsPage'
import HeaderComp from '@/components/HeaderComp'
import DetailsPage from '@/components/DetailsPage'



export default {
  name: "MainContainer",
  components: {
  	// header部分
	  HeaderComp,
    // header轮播图部分
    SlideShow,
    // 首页书籍推荐部分
	  IndexReco,
    // 书籍查看部分
	  BookDetailsPage,
	  // 详情页组件部分
	  DetailsPage
  },
  data() {
    return {
		slideImgs:["./src/assets/slide-01.png","./src/assets/slide-02.png","./src/assets/slide-03.png"],
		bookDetails:{},
		detailsPageObj:{},
		recoBook:[{
			topTitle:'新书上架',
			bookList:[
				{
					"img":"./src/assets/book-01.png",
					"name": "JavaScript高级程序设计",
					"price": "9.9",
					"author": "Nicholas C. Zakas",
					"describe": "《JavaScript高级程序设计(第3版)》是JavaScript超级畅销书的最新版。ECMAScript 5和HTML5在标准之争中双双胜出，使大量专有实现和客户端扩展正式进入规范，同时也为JavaScript增添了很多适应未来发展的新特性。《JavaScript高级程序设计(第3版)》这一版除增加5章全新内容外，其他章节也有较大幅度的增补和修订，新内容篇幅约占三分之一。全书从JavaScript语言实现的各个组成部分——语言核心、DOM、BOM、事件模型讲起，深入浅出地探讨了面向对象编程、Ajax与Comet服务器端通信，HTML5表单、媒体、Canvas（包括WebGL）及Web Workers、地理定位、跨文档传递消息、客户端存储（包括IndexedDB）等新API，还介绍了离线应用和与维护、性能、部署相关的开发实践。《JavaScript高级程序设计(第3版)》附录展望了未来的API和ECMAScript Harmony规范。",
					"page":730,
					"ISBN":'B00CBBJS5Y',
					"DateOfPublication":'2012年3月1日'
				},
				{
					"img":"./src/assets/book-02.jpg",
					"name": "深入理解Java虚拟机：JVM高级特性与最佳实践（第2版）",
					"price": "9.9",
					"author": "Nicholas C. Zakas",
					"describe": "《JavaScript高级程序设计(第3版)》是JavaScript超级畅销书的最新版。ECMAScript 5和HTML5在标准之争中双双胜出，使大量专有实现和客户端扩展正式进入规范，同时也为JavaScript增添了很多适应未来发展的新特性。《JavaScript高级程序设计(第3版)》这一版除增加5章全新内容外，其他章节也有较大幅度的增补和修订，新内容篇幅约占三分之一。全书从JavaScript语言实现的各个组成部分——语言核心、DOM、BOM、事件模型讲起，深入浅出地探讨了面向对象编程、Ajax与Comet服务器端通信，HTML5表单、媒体、Canvas（包括WebGL）及Web Workers、地理定位、跨文档传递消息、客户端存储（包括IndexedDB）等新API，还介绍了离线应用和与维护、性能、部署相关的开发实践。《JavaScript高级程序设计(第3版)》附录展望了未来的API和ECMAScript Harmony规范。",
					"page":730,
					"number":'B00CBBJS5Y',
					"DateOfPublication":'2012年3月1日'
				},
				{
					"img":"./src/assets/book-03.jpg",
					"name": "JavaScript权威指南（第6版）",
					"price": "9.9",
					"author": "Nicholas C. Zakas",
					"describe": "《JavaScript高级程序设计(第3版)》是JavaScript超级畅销书的最新版。ECMAScript 5和HTML5在标准之争中双双胜出，使大量专有实现和客户端扩展正式进入规范，同时也为JavaScript增添了很多适应未来发展的新特性。《JavaScript高级程序设计(第3版)》这一版除增加5章全新内容外，其他章节也有较大幅度的增补和修订，新内容篇幅约占三分之一。全书从JavaScript语言实现的各个组成部分——语言核心、DOM、BOM、事件模型讲起，深入浅出地探讨了面向对象编程、Ajax与Comet服务器端通信，HTML5表单、媒体、Canvas（包括WebGL）及Web Workers、地理定位、跨文档传递消息、客户端存储（包括IndexedDB）等新API，还介绍了离线应用和与维护、性能、部署相关的开发实践。《JavaScript高级程序设计(第3版)》附录展望了未来的API和ECMAScript Harmony规范。",
					"page":730,
					"ISBN":'B00CBBJS5Y',
					"day":'2012年3月1日'
				},
				{
					"img":"./src/assets/book-04.jpg",
					"name": "编写高质量代码：改善Java程序的151个建议",
					"price": "9.9",
					"author": "Nicholas C. Zakas",
					"describe": "《JavaScript高级程序设计(第3版)》是JavaScript超级畅销书的最新版。ECMAScript 5和HTML5在标准之争中双双胜出，使大量专有实现和客户端扩展正式进入规范，同时也为JavaScript增添了很多适应未来发展的新特性。《JavaScript高级程序设计(第3版)》这一版除增加5章全新内容外，其他章节也有较大幅度的增补和修订，新内容篇幅约占三分之一。全书从JavaScript语言实现的各个组成部分——语言核心、DOM、BOM、事件模型讲起，深入浅出地探讨了面向对象编程、Ajax与Comet服务器端通信，HTML5表单、媒体、Canvas（包括WebGL）及Web Workers、地理定位、跨文档传递消息、客户端存储（包括IndexedDB）等新API，还介绍了离线应用和与维护、性能、部署相关的开发实践。《JavaScript高级程序设计(第3版)》附录展望了未来的API和ECMAScript Harmony规范。",
					"page":730,
					"ISBN":'B00CBBJS5Y',
					"day":'2012年3月1日'
				}]
		},
			{
				topTitle:'编辑推荐',
				bookList:[
					{
						"img":"./src/assets/book-01.png",
						"name": "JavaScript高级程序设计",
						"price": "9.9",
						"author": "Nicholas C. Zakas",
						"describe": "《JavaScript高级程序设计(第3版)》是JavaScript超级畅销书的最新版。ECMAScript 5和HTML5在标准之争中双双胜出，使大量专有实现和客户端扩展正式进入规范，同时也为JavaScript增添了很多适应未来发展的新特性。《JavaScript高级程序设计(第3版)》这一版除增加5章全新内容外，其他章节也有较大幅度的增补和修订，新内容篇幅约占三分之一。全书从JavaScript语言实现的各个组成部分——语言核心、DOM、BOM、事件模型讲起，深入浅出地探讨了面向对象编程、Ajax与Comet服务器端通信，HTML5表单、媒体、Canvas（包括WebGL）及Web Workers、地理定位、跨文档传递消息、客户端存储（包括IndexedDB）等新API，还介绍了离线应用和与维护、性能、部署相关的开发实践。《JavaScript高级程序设计(第3版)》附录展望了未来的API和ECMAScript Harmony规范。",
						"page":730,
						"ISBN":'B00CBBJS5Y',
						"day":'2012年3月1日'
					},
					{
						"img":"./src/assets/book-02.jpg",
						"name": "深入理解Java虚拟机：JVM高级特性与最佳实践（第2版）",
						"price": "9.9",
						"author": "Nicholas C. Zakas",
						"describe": "《JavaScript高级程序设计(第3版)》是JavaScript超级畅销书的最新版。ECMAScript 5和HTML5在标准之争中双双胜出，使大量专有实现和客户端扩展正式进入规范，同时也为JavaScript增添了很多适应未来发展的新特性。《JavaScript高级程序设计(第3版)》这一版除增加5章全新内容外，其他章节也有较大幅度的增补和修订，新内容篇幅约占三分之一。全书从JavaScript语言实现的各个组成部分——语言核心、DOM、BOM、事件模型讲起，深入浅出地探讨了面向对象编程、Ajax与Comet服务器端通信，HTML5表单、媒体、Canvas（包括WebGL）及Web Workers、地理定位、跨文档传递消息、客户端存储（包括IndexedDB）等新API，还介绍了离线应用和与维护、性能、部署相关的开发实践。《JavaScript高级程序设计(第3版)》附录展望了未来的API和ECMAScript Harmony规范。",
						"page":730,
						"ISBN":'B00CBBJS5Y',
						"day":'2012年3月1日'
					},
					{
						"img":"./src/assets/book-03.jpg",
						"name": "JavaScript权威指南（第6版）",
						"price": "9.9",
						"author": "Nicholas C. Zakas",
						"describe": "《JavaScript高级程序设计(第3版)》是JavaScript超级畅销书的最新版。ECMAScript 5和HTML5在标准之争中双双胜出，使大量专有实现和客户端扩展正式进入规范，同时也为JavaScript增添了很多适应未来发展的新特性。《JavaScript高级程序设计(第3版)》这一版除增加5章全新内容外，其他章节也有较大幅度的增补和修订，新内容篇幅约占三分之一。全书从JavaScript语言实现的各个组成部分——语言核心、DOM、BOM、事件模型讲起，深入浅出地探讨了面向对象编程、Ajax与Comet服务器端通信，HTML5表单、媒体、Canvas（包括WebGL）及Web Workers、地理定位、跨文档传递消息、客户端存储（包括IndexedDB）等新API，还介绍了离线应用和与维护、性能、部署相关的开发实践。《JavaScript高级程序设计(第3版)》附录展望了未来的API和ECMAScript Harmony规范。",
						"page":730,
						"ISBN":'B00CBBJS5Y',
						"day":'2012年3月1日'
					},
					{
						"img":"./src/assets/book-04.jpg",
						"name": "编写高质量代码：改善Java程序的151个建议",
						"price": "9.9",
						"author": "Nicholas C. Zakas",
						"describe": "《JavaScript高级程序设计(第3版)》是JavaScript超级畅销书的最新版。ECMAScript 5和HTML5在标准之争中双双胜出，使大量专有实现和客户端扩展正式进入规范，同时也为JavaScript增添了很多适应未来发展的新特性。《JavaScript高级程序设计(第3版)》这一版除增加5章全新内容外，其他章节也有较大幅度的增补和修订，新内容篇幅约占三分之一。全书从JavaScript语言实现的各个组成部分——语言核心、DOM、BOM、事件模型讲起，深入浅出地探讨了面向对象编程、Ajax与Comet服务器端通信，HTML5表单、媒体、Canvas（包括WebGL）及Web Workers、地理定位、跨文档传递消息、客户端存储（包括IndexedDB）等新API，还介绍了离线应用和与维护、性能、部署相关的开发实践。《JavaScript高级程序设计(第3版)》附录展望了未来的API和ECMAScript Harmony规范。",
						"page":730,
						"ISBN":'B00CBBJS5Y',
						"day":'2012年3月1日'
					}]
			},
			{
				topTitle:'热门新书',
				bookList:[
					{
						"img":"./src/assets/book-01.png",
						"name": "JavaScript高级程序设计",
						"price": "9.9",
						"author": "Nicholas C. Zakas",
						"describe": "《JavaScript高级程序设计(第3版)》是JavaScript超级畅销书的最新版。ECMAScript 5和HTML5在标准之争中双双胜出，使大量专有实现和客户端扩展正式进入规范，同时也为JavaScript增添了很多适应未来发展的新特性。《JavaScript高级程序设计(第3版)》这一版除增加5章全新内容外，其他章节也有较大幅度的增补和修订，新内容篇幅约占三分之一。全书从JavaScript语言实现的各个组成部分——语言核心、DOM、BOM、事件模型讲起，深入浅出地探讨了面向对象编程、Ajax与Comet服务器端通信，HTML5表单、媒体、Canvas（包括WebGL）及Web Workers、地理定位、跨文档传递消息、客户端存储（包括IndexedDB）等新API，还介绍了离线应用和与维护、性能、部署相关的开发实践。《JavaScript高级程序设计(第3版)》附录展望了未来的API和ECMAScript Harmony规范。",
						"page":730,
						"ISBN":'B00CBBJS5Y',
						"day":'2012年3月1日'
					},
					{
						"img":"./src/assets/book-02.jpg",
						"name": "深入理解Java虚拟机：JVM高级特性与最佳实践（第2版）",
						"price": "9.9",
						"author": "Nicholas C. Zakas",
						"describe": "《JavaScript高级程序设计(第3版)》是JavaScript超级畅销书的最新版。ECMAScript 5和HTML5在标准之争中双双胜出，使大量专有实现和客户端扩展正式进入规范，同时也为JavaScript增添了很多适应未来发展的新特性。《JavaScript高级程序设计(第3版)》这一版除增加5章全新内容外，其他章节也有较大幅度的增补和修订，新内容篇幅约占三分之一。全书从JavaScript语言实现的各个组成部分——语言核心、DOM、BOM、事件模型讲起，深入浅出地探讨了面向对象编程、Ajax与Comet服务器端通信，HTML5表单、媒体、Canvas（包括WebGL）及Web Workers、地理定位、跨文档传递消息、客户端存储（包括IndexedDB）等新API，还介绍了离线应用和与维护、性能、部署相关的开发实践。《JavaScript高级程序设计(第3版)》附录展望了未来的API和ECMAScript Harmony规范。",
						"page":730,
						"ISBN":'B00CBBJS5Y',
						"day":'2012年3月1日'
					},
					{
						"img":"./src/assets/book-03.jpg",
						"name": "JavaScript权威指南（第6版）",
						"price": "9.9",
						"author": "Nicholas C. Zakas",
						"describe": "《JavaScript高级程序设计(第3版)》是JavaScript超级畅销书的最新版。ECMAScript 5和HTML5在标准之争中双双胜出，使大量专有实现和客户端扩展正式进入规范，同时也为JavaScript增添了很多适应未来发展的新特性。《JavaScript高级程序设计(第3版)》这一版除增加5章全新内容外，其他章节也有较大幅度的增补和修订，新内容篇幅约占三分之一。全书从JavaScript语言实现的各个组成部分——语言核心、DOM、BOM、事件模型讲起，深入浅出地探讨了面向对象编程、Ajax与Comet服务器端通信，HTML5表单、媒体、Canvas（包括WebGL）及Web Workers、地理定位、跨文档传递消息、客户端存储（包括IndexedDB）等新API，还介绍了离线应用和与维护、性能、部署相关的开发实践。《JavaScript高级程序设计(第3版)》附录展望了未来的API和ECMAScript Harmony规范。",
						"page":730,
						"ISBN":'B00CBBJS5Y',
						"day":'2012年3月1日'
					},
					{
						"img":"./src/assets/book-04.jpg",
						"name": "编写高质量代码：改善Java程序的151个建议",
						"price": "9.9",
						"author": "Nicholas C. Zakas",
						"describe": "《JavaScript高级程序设计(第3版)》是JavaScript超级畅销书的最新版。ECMAScript 5和HTML5在标准之争中双双胜出，使大量专有实现和客户端扩展正式进入规范，同时也为JavaScript增添了很多适应未来发展的新特性。《JavaScript高级程序设计(第3版)》这一版除增加5章全新内容外，其他章节也有较大幅度的增补和修订，新内容篇幅约占三分之一。全书从JavaScript语言实现的各个组成部分——语言核心、DOM、BOM、事件模型讲起，深入浅出地探讨了面向对象编程、Ajax与Comet服务器端通信，HTML5表单、媒体、Canvas（包括WebGL）及Web Workers、地理定位、跨文档传递消息、客户端存储（包括IndexedDB）等新API，还介绍了离线应用和与维护、性能、部署相关的开发实践。《JavaScript高级程序设计(第3版)》附录展望了未来的API和ECMAScript Harmony规范。",
						"page":730,
						"ISBN":'B00CBBJS5Y',
						"day":'2012年3月1日'
					}]
			},
		],
		isDetails:false,
		bookCount:1,
		//header
		returnicon: false,
		titles: '掌上书城',
		optionicon: false,
		//存值对象
		objData:[],
		isShowDetails:false
    };
  },
	methods:{
		loadBookInfo(){
			// 使用axios进行数据请求
		},
		enterPage(obj) {
			this.bookDetails = obj;
			//alert(index);
			this.isDetails = true;
			$("body,html").css({"overflow":"hidden"});
		},
		hiddenPage(){
			this.isDetails=false;
			$("body,html").css({'overflow':'hidden'});
		},
		addOneBook(){
			this.bookCount++;
		},
		subtractOneBook(){
			if(this.bookCount === 1 ) {
				return this.bookCount;
			} else {
				this.bookCount--;
			}
		},

		/*将购车数据存入本地*/
		addToCart(book){
			book.price = book.price * this.bookCount;
			book.num = this.bookCount;
			this.objData.push(book);
			const locaShop = JSON.stringify(this.objData);
			localStorage.setItem('locaShop',locaShop);
		},
		toDetailsPage(){
			this.detailsPageObj = this.bookDetails;
			this.isShowDetails = true;
			this.leftSetting.left = 0;
		},
		closeDelPage(){
			this.isShowDetails = false;
			this.isDetails = false;
		}
  },
	mounted(){
  		this.closeDelPage();
	}
};
