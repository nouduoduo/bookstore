<template>
	<transition name="slide-fade">
		<div class="setIn-setUp fa fa-angle-left" v-if="SetInAndUpStatus">
			<HeaderComp
				:returnicon="returnicon"
				:titles="titles"
				:optionicon="optionicon"
			/>
			<section class="choose-item">
				<ul class="nav nav-tabs">
					<li role="presentation" :class="{'active':isActiveIn}">
						<a href="#" @click="setIn">登陆</a>
					</li>
					<li role="presentation" :class="{'active':isActiveUp}">
						<a href="#" @click="setUp">注册</a>
					</li>
				</ul>
			</section>
			<div class="setIn-setUp-page">
				<section class="setIn-fill-content" v-if="setInState">
					<form class="form-horizontal" name="loginForm">
						<div class="form-group">
							<label class="col-sm-2 control-label">手机号:</label>
							<div class="col-sm-10">
								<input type="email" class="form-control" placeholder="请输入您的手机号" id="loginAct" v-model="loginPhone">
							</div>
						</div>
						<div class="form-group">
							<label class="col-sm-2 control-label">密码:</label>
							<div class="col-sm-10">
								<input type="password" class="form-control" placeholder="请输入您的密码" id="loginPsd" v-model="loginPsd">
							</div>
						</div>
						<div class="form-group">
							<div class="col-sm-offset-2 col-sm-10">
								<button type="submit" class="btn btn-success" id="loginBtn" @click="register">
									确认登陆
								</button>
							</div>
						</div>
					</form>
				</section>
				<section class="setUp-fill-content" v-if="setUpState">
					<form class="form-horizontal" name="registerForm">
						<div class="form-group">
							<label class="col-sm-2 control-label">手机号:</label>
							<div class="col-sm-10">
								<input type="text" class="form-control" placeholder="请输入您的手机号" name="regAccount" required v-model="registerPhone" @blur="mouseLeavePhone">
								<p v-if="errorMsgPhone">{{errorMsgPhoneTxt}}</p>
							</div>
						</div>
						<div class="form-group">
							<label class="col-sm-2 control-label">昵称:</label>
							<div class="col-sm-10">
								<input type="text" class="form-control" placeholder="请输入您的昵称" v-model="registerName" @blur="mouseLeaveName">
								<p v-if="errorMsgName">{{errorMsgNameTxt}}</p>
							</div>
						</div>
						<div class="form-group">
							<label class="col-sm-2 control-label">密码:</label>
							<div class="col-sm-10">
								<input type="password" class="form-control" placeholder="请输入您的密码" id="registerPsd" name="regPassword" required v-model="registerPsd" @blur="mouseLeavePsd">
								<p v-if="errorMsgPsd">{{errorMsgPsdTxt}}</p>
							</div>
						</div>
						<div class="form-group">
							<label class="col-sm-2 control-label">确认密码:</label>
							<div class="col-sm-10">
								<input type="password" class="form-control" placeholder="请确认您的密码" id="affirmPsd" required name="affPassword" v-model="affirmPsd" @blur="mouseLeaveAffirm">
								<p v-if="errorMsgAffirmPsd">{{errorMsgAffirmTxt}}</p>
							</div>
						</div>
						<div class="form-group">
							<div class="col-sm-offset-2 col-sm-10">
								<button type="button" class="btn btn-success" id="register-btn" @click="register">
									确认注册
								</button>
							</div>
						</div>
					</form>
				</section>
			</div>

		</div>
	</transition>
</template>

<script>
	/**** 函数功能定义部分 ****/

	/**
	 * 功能：登录按钮验证事件
	 * 参数：
	 * 1、表单的name属性值（String）
	 * 2、注册按钮标识符（String）
	 **/
	/*function loginValid(ident) {
		$(ident).on("click", function() {
			var thisActVal = $("#loginAct").val(),
				thisPsdVal = $("#loginPsd").val();
			login("users", {
				"username":thisActVal,
				"password":thisPsdVal
			}, function (status) {
				switch(status) {
					case 0:
						if($("#loginBtn").next().is(".erroMesg_login")) {
							$("#loginBtn").next().remove(".erroMesg_login");
						} else {
							$("#loginBtn").closest("div")
								.append("<p class='erroMesg_login'>用户不存在！</p>");
						}
						break;
					case 1:
						if($("#loginBtn").next().is(".erroMesg_login")) {
							$("#loginBtn").next().remove(".erroMesg_login");
						} else {
							$("#loginBtn").closest("div")
								.append("<p class='erroMesg_login'>账号或密码错误！</p>");
						}
						break;
					case 2:
						if($("#loginBtn").next().is(".erroMesg_login")) {
							$("#loginBtn").next().remove(".erroMesg_login");
						} else {
							$("#loginBtn").closest("div")
								.append("<p class='erroMesg_login'>账号或密码为空！</p>");
						}
						break;
					case 200:
						setTimeout(function () {
							location.href = "index.html";
							//页面传值
							var name = $("#loginAct").val();
							localStorage.setItem("nameInfo",name);
						},1500);
						break;
				}
			});
		});
	}*/

	/**
	 * 功能          ：验证输入值是否是正确的手机格式
	 * @param mail          输入的邮箱
	 * @return {boolean}    如果格式正确返回true，否则返回false
	 * @constructor
	 */
	function CheckMail(mail) {
		var filter  = /^1[34578]\d{9}$/;
		if (filter.test(mail)) return true;
		else {return false;}
	}

	/**
	 * 功能   ：验证输入的密码是否是6-16位的字符（除换行、空格、Tab键）
	 * @param password      输入的密码
	 * @return {boolean}    如果格式正确返回true，否则返回false
	 * @constructor
	 */
	function CheckPassword(password) {
		var filter  = /.{6,16}/;
		if (filter.test(password)) return true;
		else {return false;}
	}

	// 封装功能函数
	/**
	 * 本地存储：添加用户
	 * @param key      存储用户信息的key
	 * @param user     用户信息
	 * @param callBack 存储成功回调函数
	 */
	function addUser(key, user, callBack) {
		// 定义存储用户信息的集合
		var users = null;
		// 判断本地是否已经存在该用户数据集合
		if(localStorage[key]) {
			// 存在，根据本地用户数据集合来初始化users
			users = JSON.parse(localStorage[key]);
		}else {
			// 不存在，创建一个空数组
			users = [];
		}

		// 添加用户
		//判断用户是否输入了注册账号与密码
		console.log();
		if(user[Object.keys(user)[0]] && user[Object.keys(user)[1]]){
			users.push(user);
			// 更新本地数据
			localStorage[key] = JSON.stringify(users);
			// 数据存储成功之后调用回调函数
			if(callBack) {
				callBack();
			}
		} else {
			alert("账号或密码不能为空");
			return;
		}

	}

	/**
	 * 判断用户是否存在
	 * @param key      存储用户信息在本地的key
	 * @param gist     判断用户是否存在的依据
	 * @param value    用户输入的值
	 * @param response 响应结果（0用户存在 1用户不存在）
	 */
	function determineUserIsExists(key, gist, value) {
		if(!localStorage[key]) {
			return;
		}
		// 获取本地用户数据集合
		var users = JSON.parse(localStorage[key]);
		// 遍历本地用户数据集合，判断用户是否存在
		var tag = true;
		for(var i = 0; i < users.length; i++) {
			if(users[i][gist] === value) {
				// 用户存在
				tag = false;
				return tag;
			}
		}
		return tag;
	}

	import HeaderComp from "./HeaderComp"
	export default {
		name: "setIn-setUp",
		props: ["SetInAndUpStatus"],
		components:{HeaderComp},
		data(){
			return {
				setInState:true,
				setUpState:false,
				isActiveIn:'',
				isActiveUp:'',
				loginPhone:'',
				loginPsd:'',
				registerPhone:'',
				registerName:'',
				registerPsd:'',
				affirmPsd:'',
				errorMsgPhone:false,
				errorMsgPhoneTxt:'',
				errorMsgPsd:false,
				errorMsgPsdTxt:'',
				errorMsgName:false,
				errorMsgNameTxt:'',
				errorMsgAffirmPsd:false,
				errorMsgAffirmTxt:'',
				errorMsg:{
					errorPhoneTxt:["注册手机号不能为空","请输入正确的手机号码格式","该手机号已被注册"],
					errorPsdTxt:["注册密码不能为空","请输入正确的密码格式"],
					errorNameTxt:["注册昵称不能为空","请输入正确的昵称格式","该昵称已被注册"],
					errorAffirmTxt:["确认密码不能为空","两次密码输入不一致"],
				},
				registerStatus:[false,false,false,false],
			//header
				returnicon: false,
				titles: '登录注册',
				optionicon: false,
			}
		},
		methods: {
			setIn() {
				this.setInState = true;
				this.setUpState = false;
				this.isActiveIn = true;
				this.isActiveUp = false;
			},
			setUp() {
				this.setInState = false;
				this.setUpState = true;
				this.isActiveUp = true;
				this.isActiveIn = false;
			},
			mouseLeavePhone() {
				if (this.registerPhone === '') {
					this.errorMsgPhone = true;
					this.errorMsgPhoneTxt = this.errorMsg.errorPhoneTxt[0];
					this.registerStatus[0] = false;
				} else if (CheckMail(this.registerPhone) === false) {
					this.errorMsgPhone = true;
					this.errorMsgPhoneTxt = this.errorMsg.errorPhoneTxt[1];
					this.registerStatus[0] = false;
				} else if (determineUserIsExists("users","username",this.registerPhone)) {
					this.errorMsgPhone = true;
					this.errorMsgPhoneTxt = this.errorMsg.errorPhoneTxt[2];
					this.registerStatus[0] = false;

				} else {
					this.errorMsgPhone = false;
					this.registerStatus[0] = true;
				}
			},
			mouseLeaveName() {
				if (this.registerName === '') {
					this.errorMsgName = true;
					this.errorMsgNameTxt = this.errorMsg.errorNameTxt[0];
					this.registerStatus[1] = false;
				} else if (CheckPassword(this.registerName) === false) {
					this.errorMsgName = true;
					this.errorMsgNameTxt = this.errorMsg.errorNameTxt[1];
					this.registerStatus[1] = false;
				} else if (determineUserIsExists("users","registerName",this.registerName)) {
					this.errorMsgName = true;
					this.errorMsgNameTxt = this.errorMsg.errorNameTxt[2];
					this.registerStatus[1] = false;
				} else {
					this.errorMsgName = false;
					this.registerStatus[1] = true;
				}
			},
			mouseLeavePsd() {
				if (this.registerPsd === '') {
					this.errorMsgPsd = true;
					this.errorMsgPsdTxt = this.errorMsg.errorPsdTxt[0];
					this.registerStatus[2] = false;
				} else if (CheckPassword(this.registerPsd) === false) {
					this.errorMsgPsd = true;
					this.errorMsgPsdTxt = this.errorMsg.errorPsdTxt[1];
					this.registerStatus[2] = false;
				} else {
					this.errorMsgPsd = false;
					this.registerStatus[2] = true;
				}
			},
			mouseLeaveAffirm() {
				if (this.affirmPsd === '') {
					this.errorMsgAffirmPsd = true;
					this.errorMsgAffirmTxt = this.errorMsg.errorAffirmTxt[0];
					this.registerStatus[3] = false;
				} else if (!(this.affirmPsd === this.registerPsd)) {
					this.errorMsgAffirmPsd = true;
					this.errorMsgAffirmTxt = this.errorMsg.errorAffirmTxt[1];
					this.registerStatus[3] = false;
				} else {
					this.errorMsgAffirmPsd = false;
					this.registerStatus[3] = true;
				}
			},
			register() {
				let user = {
					"username": this.registerPhone,
					"registerName": this.registerName,
					"password": this.registerPsd,
				};
				if (!(this.registerStatus[0] === true && this.registerStatus[1] === true && this.registerStatus[2] === true && this.registerStatus[3] === true)) {
					alert("请完善注册信息！")
				} else {
					addUser("users", user, function () {
						//页面传值
						var name = $("[name='regAccount']").val();
						localStorage.setItem("nameInfo", name);
					});
				}
			},
			login() {
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	@import "../styles/setIn-setUp";
</style>
