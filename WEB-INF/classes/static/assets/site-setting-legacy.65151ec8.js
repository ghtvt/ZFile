!function(){var n=document.createElement("style");n.innerHTML=".el-button[data-v-acfd7832],.el-input[data-v-acfd7832] input{height:35px}\n",document.head.appendChild(n),System.register(["./base-legacy.300d11a2.js","./loading-legacy.fc9141ee.js","./ZFormItem-legacy.f8fcd1d1.js","./button-legacy.de6f77a5.js","./input-number-legacy.00628d13.js","./input-legacy.1469b40d.js","./index-legacy.5c2a5b9a.js","./admin-setting-legacy.04cb307e.js","./request-legacy.d578b778.js","./route-block-legacy.2d113b05.js","./plugin-vue_export-helper-legacy.7bb61c33.js","./index-legacy.33440654.js","./BadgeCheckIcon-legacy.787e3c9a.js","./index-legacy.bff7f3c4.js","./directive-legacy.26090332.js","./index-legacy.61ab75a6.js","./event-legacy.39ad8904.js","./index-legacy.4e6c4971.js","./index-legacy.886e1b44.js","./event-legacy.0bfbd831.js","./index-legacy.dcaeaefc.js","./scroll-legacy.37269264.js","./focus-trap-legacy.6b3273d9.js","./validator-legacy.82441049.js"],(function(n){"use strict";var e,t,a,o,i,u,l,c,r,f,d,s,m,p,g,v,y,b,x,j,V,_,h,w,U,k,D,C;return{setters:[function(n){e=n.aO,t=n.x,a=n.aP,o=n.r},function(){},function(n){i=n.Z,u=n.a},function(){},function(n){l=n.E},function(){},function(n){c=n.a,r=n.b,f=n.h,d=n.aA,s=n.$,m=n.r,p=n.w,g=n.u,v=n.Q,y=n.e,b=n.k,x=n.J},function(n){j=n.l,V=n.u},function(n){_=n.E},function(n){h=n.b},function(n){w=n._},function(n){U=n.E},function(n){k=n.r},function(n){D=n.E},function(n){C=n.v},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){function B(n,e){return c(),r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[f("path",{"fill-rule":"evenodd",d:"M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"})])}var L=x(" 站点信息 "),z=x(" 请填写您的站点信息 "),E=x("此地址用于生成直链及本次存储下载使用，请务必保持和服务端地址一样 (需写 http(s):// 协议头)"),F=x("前后端分离后，需配置此地址，会影响 401、403、404 页面的跳转 (需写 http(s):// 协议头，未前后端分离请保持为空)"),N=x("用于管理员页面右上角头像地址，推荐尺寸为 35 * 35."),T=x("保存设置"),q={__name:"site-setting",setup:function(n){var x=s(),h=function(){var n=d(j,{formatResult:function(n){return n.data}}),e=n.data,t=n.loading,a=n.reload,o=d(V,{manual:!0,onSuccess:function(){_({message:"保存成功",type:"success"})}}),i=o.loading,u=o.run;return{data:e,dataLoading:t,reload:a,saveData:function(){u(e.value)},saveLoading:i}}(),w=h.data,q=h.dataLoading,I=h.saveData,S=h.saveLoading,A=m({siteName:[{required:!0,message:"请输入站点名称"}],domain:[{required:!0,message:"请输入后端站点域名"}],frontDomain:[],avatar:[{type:"url",message:"请输入正确的头像地址，需以 http 或 https 开头"}]}),M=m(),Z=function(){M.value.validate((function(n){n&&I()}))};return p((function(){return q.value}),(function(n,e){if(!0===e){var t=x.zfileConfig.baseUrl||window.location.origin,a=w.value.domain;if(t!==a)U.confirm("检测到服务端地址为 ".concat(t,"，当前配置站点域名为 ").concat(a,"，是否自动进行修正？（不修正可能会影响下载、文件夹加密和文档预览功能）"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",callback:function(n){"confirm"===n&&(w.value.domain=t,Z())}});else{var o=w.value.frontDomain,i=window.location.origin;""!==x.zfileConfig.baseUrl&&o!==i&&U.confirm("检测到当前为前后端分离模式，访问域名为 ".concat(i,"，当前配置前端站点域名为 ").concat(o,"，是否自动进行修正？（不修正可能会防盗链功能）"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",callback:function(n){"confirm"===n&&(w.value.frontDomain=i,Z())}})}}})),function(n,d){var s=D,m=i,p=l,x=o,j=u,V=C;return g(w)?v((c(),r(j,{key:0,model:g(w),rules:g(A),ref_key:"siteSettingForm",ref:M},{"form-title":y((function(){return[L]})),"form-sub-title":y((function(){return[z]})),footer:y((function(){return[f(x,{type:"primary",size:"default",icon:g(k),onClick:Z},{default:y((function(){return[T]})),_:1},8,["icon"])]})),default:y((function(){return[f(m,{prop:"siteName",label:"站点名称"},{default:y((function(){return[f(s,{id:"siteName","prefix-icon":g(e),modelValue:g(w).siteName,"onUpdate:modelValue":d[0]||(d[0]=function(n){return g(w).siteName=n})},null,8,["prefix-icon","modelValue"])]})),_:1}),f(m,{prop:"domain",label:"后端站点域名"},{tips:y((function(){return[E]})),default:y((function(){return[f(s,{id:"domain","prefix-icon":g(t),modelValue:g(w).domain,"onUpdate:modelValue":d[1]||(d[1]=function(n){return g(w).domain=n})},null,8,["prefix-icon","modelValue"])]})),_:1}),f(m,{prop:"frontDomain",label:"前端站点域名"},{tips:y((function(){return[F]})),default:y((function(){return[f(s,{"prefix-icon":g(t),modelValue:g(w).frontDomain,"onUpdate:modelValue":d[2]||(d[2]=function(n){return g(w).frontDomain=n})},null,8,["prefix-icon","modelValue"])]})),_:1}),f(m,{prop:"avatar",label:"头像地址"},{tips:y((function(){return[N]})),default:y((function(){return[f(s,{id:"avatar","prefix-icon":g(a),modelValue:g(w).avatar,"onUpdate:modelValue":d[3]||(d[3]=function(n){return g(w).avatar=n})},null,8,["prefix-icon","modelValue"])]})),_:1}),f(m,{label:"备案号"},{default:y((function(){return[f(s,{id:"icp","prefix-icon":g(B),modelValue:g(w).icp,"onUpdate:modelValue":d[4]||(d[4]=function(n){return g(w).icp=n})},null,8,["prefix-icon","modelValue"])]})),_:1}),f(m,{label:"最大同时上传文件数"},{default:y((function(){return[f(p,{id:"maxFileUploads",modelValue:g(w).maxFileUploads,"onUpdate:modelValue":d[5]||(d[5]=function(n){return g(w).maxFileUploads=n}),min:1,max:99},null,8,["modelValue"])]})),_:1})]})),_:1},8,["model","rules"])),[[V,g(S)]]):b("",!0)}}};"function"==typeof h&&h(q);n("default",w(q,[["__scopeId","data-v-acfd7832"]]))}}}))}();
