(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[39],{kk75:function(t,e,n){"use strict";n.r(e),n.d(e,"amplify_s3_text_picker",(function(){return p}));var r=n("BidF"),i=n("bBWg"),c=n("+q38"),a=n("zjmv"),o=n("sgvX"),l=(n("c/RQ"),n("EN+p"),n("hpR9")),u=function(t,e,n,r){return new(n||(n=Promise))((function(i,c){function a(t){try{l(r.next(t))}catch(e){c(e)}}function o(t){try{l(r.throw(t))}catch(e){c(e)}}function l(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,o)}l((r=r.apply(t,e||[])).next())}))},s=function(t,e){var n,r,i,c,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return c={next:o(0),throw:o(1),return:o(2)},"function"===typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function o(c){return function(o){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&c[0]?r.return:c[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,c[1])).done)return i;switch(r=0,i&&(c=[2&c[0],i.value]),c[0]){case 0:case 1:i=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,r=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===c[0]||2===c[0])){a=0;continue}if(3===c[0]&&(!i||c[1]>i[0]&&c[1]<i[3])){a.label=c[1];break}if(6===c[0]&&a.label<i[1]){a.label=i[1],i=c;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(c);break}i[2]&&a.ops.pop(),a.trys.pop();continue}c=e.call(t,a)}catch(o){c=[6,o],r=0}finally{n=i=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,o])}}},f=new i.a("S3TextPicker"),p=function(){function t(t){Object(r.k)(this,t),this.contentType="text/*",this.level=a.a.Public,this.fallbackText=o.a.PICKER_TEXT}return t.prototype.handleInput=function(t){return u(this,void 0,void 0,(function(){var e,n,r,i,c,a,o,u,p;return s(this,(function(s){switch(s.label){case 0:if(e=t.target.files[0],r=(n=this).path,i=void 0===r?"":r,c=n.level,a=n.fileToKey,o=n.track,u=i+Object(l.b)(e,a),!e)throw new Error("No file was selected");s.label=1;case 1:return s.trys.push([1,3,,4]),[4,Object(l.e)(u,e,c,o,e.type,f)];case 2:return s.sent(),this.src=u,[3,4];case 3:throw p=s.sent(),f.debug(p),new Error(p);case 4:return[2]}}))}))},t.prototype.render=function(){var t=this;return Object(r.i)(r.b,null,Object(r.i)("amplify-s3-text",{textKey:this.src,path:this.path,level:this.level,track:this.track,identityId:this.identityId,contentType:this.contentType,fallbackText:c.a.get(this.fallbackText)}),Object(r.i)("amplify-picker",{inputHandler:function(e){return t.handleInput(e)},acceptValue:"text/*"}))},t}()}}]);