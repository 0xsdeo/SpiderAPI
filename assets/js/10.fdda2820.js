(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{337:function(t,e,n){},399:function(t,e,n){"use strict";n(337)},414:function(t,e,n){"use strict";n.r(e);var a={mounted(){const t=document.createElement("script");t.src="https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback",t.defer=!0,document.head.appendChild(t),window.onloadTurnstileCallback=function(){$("#cf-wait").html("无感模式加载完毕<br>Cloudflare Turnstile Invisible Challenge"),turnstile.render("#cf-captcha",{sitekey:"0x4AAAAAAARMkXOUcO6uqu14",callback:function(t){console.log("Challenge Success "+t),window.turnstileManagedToken=t}})},$("#submit").click((function(t){if(!window.turnstileManagedToken)return t.preventDefault(),alert("请先完成验证！");let e={};e.username=$("#username").val(),e.password=$("#password").val(),e["cf-turnstile-response"]=window.turnstileManagedToken,$.ajax({url:"https://captcha.api.spiderapi.cn/turnstile-invisible/login",type:"post",dataType:"json",data:e,success:function(t){"success"===t.status?alert("登录成功！"):alert("登录失败，请刷新页面重新验证！")}})}))}},s=(n(399),n(14)),i=Object(s.a)(a,(function(){var t=this,e=t._self._c;return e("div",{staticStyle:{"text-align":"center"}},[e("br"),t._v(" "),e("h1",[t._v("Cloudflare Turnstile Demo "),e("Badge",{attrs:{text:"Invisible Challenge",type:"tip",vertical:"top"}})],1),t._v(" "),e("br"),t._v(" "),e("div",[e("input",{staticClass:"iconfont cf-input",attrs:{type:"text",placeholder:" 请输入账号",id:"username",maxlength:""}})]),t._v(" "),e("br"),t._v(" "),e("div",[e("input",{staticClass:"iconfont cf-input",attrs:{type:"text",placeholder:" 请输入密码",id:"password",maxlength:""}})]),t._v(" "),e("br"),t._v(" "),t._m(0),t._v(" "),e("br"),t._v(" "),e("input",{staticClass:"cf-submit2",attrs:{id:"submit",type:"submit",value:"立即登录"}})])}),[function(){var t=this._self._c;return t("div",{attrs:{id:"cf-captcha"}},[t("p",{staticClass:"cf-show",attrs:{id:"cf-wait"}},[this._v("正在加载验证码......"),t("br"),this._v("（若长时间未加载，请刷新网页并科学访问）")])])}],!1,null,null,null);e.default=i.exports}}]);