(()=>{var t={195:(t,r,e)=>{t.exports=e(236)},236:t=>{var r=function(t){"use strict";var r,e=Object.prototype,a=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},i=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(t){u=function(t,r,e){return t[r]=e}}function l(t,r,e,a){var n=r&&r.prototype instanceof f?r:f,i=Object.create(n.prototype),o=new V(a||[]);return i._invoke=function(t,r,e){var a=h;return function(n,i){if(a===m)throw new Error("Generator is already running");if(a===v){if("throw"===n)throw i;return T()}for(e.method=n,e.arg=i;;){var o=e.delegate;if(o){var s=N(o,e);if(s){if(s===p)continue;return s}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(a===h)throw a=v,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);a=m;var u=c(t,r,e);if("normal"===u.type){if(a=e.done?v:d,u.arg===p)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(a=v,e.method="throw",e.arg=u.arg)}}}(t,e,o),i}function c(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var h="suspendedStart",d="suspendedYield",m="executing",v="completed",p={};function f(){}function g(){}function y(){}var w={};u(w,i,(function(){return this}));var b=Object.getPrototypeOf,A=b&&b(b(E([])));A&&A!==e&&a.call(A,i)&&(w=A);var _=y.prototype=f.prototype=Object.create(w);function x(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function S(t,r){function e(n,i,o,s){var u=c(t[n],t,i);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==typeof h&&a.call(h,"__await")?r.resolve(h.__await).then((function(t){e("next",t,o,s)}),(function(t){e("throw",t,o,s)})):r.resolve(h).then((function(t){l.value=t,o(l)}),(function(t){return e("throw",t,o,s)}))}s(u.arg)}var n;this._invoke=function(t,a){function i(){return new r((function(r,n){e(t,a,r,n)}))}return n=n?n.then(i,i):i()}}function N(t,e){var a=t.iterator[e.method];if(a===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,N(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=c(a,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,p;var i=n.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function P(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function L(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function V(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function E(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(a.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return o.next=o}}return{next:T}}function T(){return{value:r,done:!0}}return g.prototype=y,u(_,"constructor",y),u(y,"constructor",g),g.displayName=u(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,s,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},x(S.prototype),u(S.prototype,o,(function(){return this})),t.AsyncIterator=S,t.async=function(r,e,a,n,i){void 0===i&&(i=Promise);var o=new S(l(r,e,a,n),i);return t.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},x(_),u(_,s,"Generator"),u(_,i,(function(){return this})),u(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var a=r.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},t.values=E,V.prototype={constructor:V,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(a,n){return s.type="throw",s.arg=t,e.next=a,n&&(e.method="next",e.arg=r),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],s=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var u=a.call(o,"catchLoc"),l=a.call(o,"finallyLoc");if(u&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=r,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(o)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),p},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),L(e),p}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var a=e.completion;if("throw"===a.type){var n=a.arg;L(e)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,a){return this.delegate={iterator:E(t),resultName:e,nextLoc:a},"next"===this.method&&(this.arg=r),p}},t}(t.exports);try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}},r={};function e(a){var n=r[a];if(void 0!==n)return n.exports;var i=r[a]={exports:{}};return t[a](i,i.exports,e),i.exports}e.n=t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},e.d=(t,r)=>{for(var a in r)e.o(r,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:r[a]})},e.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),e.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var a={};(()=>{"use strict";e.r(a);const t=flarum.core.compat["admin/app"];var r=e.n(t);const n=flarum.core.compat["common/app"];var i=e.n(n);function o(t,r){return o=Object.setPrototypeOf||function(t,r){return t.__proto__=r,t},o(t,r)}function s(t,r){t.prototype=Object.create(r.prototype),t.prototype.constructor=t,o(t,r)}const u=flarum.core.compat["common/Model"];var l=e.n(u),c=function(t){function r(){for(var r,e=arguments.length,a=new Array(e),n=0;n<e;n++)a[n]=arguments[n];return(r=t.call.apply(t,[this].concat(a))||this).displayName=l().attribute("displayName"),r.description=l().attribute("description"),r.credit=l().attribute("credit"),r.discussionCount=l().attribute("discussionCount"),r.creditedDiscussions=l().hasMany("discussions"),r}return s(r,t),r}(l());const h=flarum.core.compat["common/models/Discussion"];var d=e.n(h);const v=flarum.core.compat["common/extend"],p=flarum.core.compat["common/components/Badge"];var f=e.n(p);function g(t,r,e,a,n,i,o){try{var s=t[i](o),u=s.value}catch(t){return void e(t)}s.done?r(u):Promise.resolve(u).then(a,n)}function y(t){return function(){var r=this,e=arguments;return new Promise((function(a,n){var i=t.apply(r,e);function o(t){g(i,a,n,o,s,"next",t)}function s(t){g(i,a,n,o,s,"throw",t)}o(void 0)}))}}var w=e(195),b=e.n(w);const A=flarum.core.compat["admin/components/ExtensionPage"];var _=e.n(A);const x=flarum.core.compat["common/components/Button"];var S=e.n(x);const N=flarum.core.compat["common/components/LoadingIndicator"];var P=e.n(N);const L=flarum.core.compat["common/utils/withAttr"];var V=e.n(L);const E=flarum.core.compat["common/components/Modal"];var T=e.n(E);const k=flarum.core.compat["common/utils/ItemList"];var O=e.n(k),j=function(t){function e(){for(var r,e=arguments.length,a=new Array(e),n=0;n<e;n++)a[n]=arguments[n];return(r=t.call.apply(t,[this].concat(a))||this).modelState=void 0,r}s(e,t);var a=e.prototype;return a.oninit=function(r){t.prototype.oninit.call(this,r);var e=this.attrs.virtualAuthor;this.modelState={displayName:e.displayName(),description:e.description()}},a.title=function(){return r().translator.trans("davwheat-virtual-authors.lib.edit_modal.title_"+this.attrs.type)},a.content=function(){return m("div",{class:"Modal-body"},this.fields().toArray())},a.fields=function(){var t=this,e=new(O());return e.add("displayName",m("div",{class:"Form-group"},m("label",null,r().translator.trans("davwheat-virtual-authors.lib.edit_modal.fields.name")),m("input",{disabled:this.loading,class:"FormControl",type:"text",value:this.modelState.displayName,oninput:function(r){return t.modelState.displayName=r.currentTarget.value}})),100),e.add("description",m("div",{class:"Form-group"},m("label",null,r().translator.trans("davwheat-virtual-authors.lib.edit_modal.fields.description")),m("textarea",{disabled:this.loading,class:"FormControl",value:this.modelState.description,oninput:function(r){return t.modelState.description=r.currentTarget.value}})),90),e.add("submit",m(S(),{class:"Button Button--primary",type:"submit",disabled:this.loading},r().translator.trans("davwheat-virtual-authors.lib.edit_modal.submit_"+this.attrs.type),this.loading&&m(P(),{display:"inline",size:"small"})),-10),e},a.onsubmit=function(t){t.preventDefault(),this.save()},a.save=function(){var t=y(b().mark((function t(){return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,m.redraw(),t.prev=2,t.next=5,this.attrs.virtualAuthor.save(this.modelState);case 5:this.attrs.onhide(),this.hide(),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(2),this.onerror(t.t0),console.error(t.t0);case 13:case"end":return t.stop()}}),t,this,[[2,9]])})));return function(){return t.apply(this,arguments)}}(),e}(T());const F=flarum.core.compat["common/Component"];var B=e.n(F);const I=flarum.core.compat["common/helpers/icon"];var C=e.n(I);const D=flarum.core.compat["common/utils/extractText"];var G=e.n(D),M=function(t){function e(){return t.apply(this,arguments)||this}s(e,t);var a=e.prototype;return a.view=function(){var t=this;return m("div",{className:"VirtualAuthorItem"},m("div",{className:"VirtualAuthorItem-attribute"},m("span",{id:"virtualAuthor-"+this.attrs.virtualAuthor.id()+"--id"},r().translator.trans("davwheat-virtual-authors.admin.virtual_author_item.id")),m("span",{"aria-describedby":"virtualAuthor-"+this.attrs.virtualAuthor.id()+"--id"},this.attrs.virtualAuthor.id())),m("div",{className:"VirtualAuthorItem-attribute"},m("span",{id:"virtualAuthor-"+this.attrs.virtualAuthor.id()+"--name"},r().translator.trans("davwheat-virtual-authors.admin.virtual_author_item.name")),m("span",{"aria-describedby":"virtualAuthor-"+this.attrs.virtualAuthor.id()+"--name"},this.attrs.virtualAuthor.displayName())),m("div",{className:"VirtualAuthorItem-attribute"},m("span",{id:"virtualAuthor-"+this.attrs.virtualAuthor.id()+"--description"},r().translator.trans("davwheat-virtual-authors.admin.virtual_author_item.description")),m("span",{"aria-describedby":"virtualAuthor-"+this.attrs.virtualAuthor.id()+"--description"},this.attrs.virtualAuthor.description()||m("i",null,r().translator.trans("davwheat-virtual-authors.admin.virtual_author_item.no_description")))),m(S(),{class:"Button VirtualAuthorItem-editButton",onclick:function(){return t.edit()}},r().translator.trans("davwheat-virtual-authors.admin.virtual_author_item.edit")),m(S(),{"aria-label":r().translator.trans("davwheat-virtual-authors.admin.virtual_author_item.delete_a11y_label"),class:"Button Button--danger VirtualAuthorItem-deleteButton",onclick:y(b().mark((function e(){return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!confirm(G()(r().translator.trans("davwheat-virtual-authors.admin.virtual_author_item.delete_confirmation")))){e.next=4;break}return e.next=3,t.attrs.virtualAuthor.delete({});case 3:t.attrs.invalidateData();case 4:case"end":return e.stop()}}),e)})))},C()("fas fa-trash-alt")))},a.edit=function(){var t=this;r().modal.show(j,{type:"edit",virtualAuthor:this.attrs.virtualAuthor,onhide:function(){return t.attrs.invalidateData()}})},e}(B()),R=function(t){function e(){for(var r,e=arguments.length,a=new Array(e),n=0;n<e;n++)a[n]=arguments[n];return(r=t.call.apply(t,[this].concat(a))||this).virtualAuthors=null,r.loading=!0,r.errored=!1,r.sort="id",r.search="",r.pageState={pageNumber:1,isNextPage:!1,isPrevPage:!1},r.updateSearchTimeout=null,r}s(e,t);var a=e.prototype;return a.content=function(t){var e=this,a=r().extensionData.getSettings(this.extension.id);return this.errored?m("div",{className:"ExtensionPage-settings"},m("div",{className:"container"},m("p",null,r().translator.trans("davwheat-virtual-authors.admin.settings.errored")))):this.loading||!this.virtualAuthors?m("div",{className:"ExtensionPage-settings"},m("div",{className:"container"},a&&m("div",{className:"Form VirtualAuthorSettings"},a.map(this.buildSettingComponent.bind(this)),m("div",{className:"Form-group"},this.submitButton(t),m("p",{className:"helpText"},r().translator.trans("davwheat-virtual-authors.admin.settings.auto_save_message")))),m("hr",null),m("input",{type:"text",className:"FormControl VirtualAuthorSearch",placeholder:G()(r().translator.trans("davwheat-virtual-authors.admin.settings.search_placeholder")),oninput:V()("value",(function(t){e.search=t,e.search?e.sort="displayName":e.sort="id",e.updateSearchTimeout&&clearTimeout(e.updateSearchTimeout),e.updateSearchTimeout=setTimeout((function(){return e.loadAllVirtualAuthors()}),400)})),value:this.search}),m(P(),null))):m("div",{className:"ExtensionPage-settings"},m("div",{className:"container"},a&&m("div",{className:"Form VirtualAuthorSettings"},a.map(this.buildSettingComponent.bind(this)),m("div",{className:"Form-group"},this.submitButton(t),m("p",{className:"helpText"},r().translator.trans("davwheat-virtual-authors.admin.settings.auto_save_message")))),m("hr",null),m("input",{type:"text",className:"FormControl VirtualAuthorSearch",placeholder:G()(r().translator.trans("davwheat-virtual-authors.admin.settings.search_placeholder")),oninput:V()("value",(function(t){e.search=t,e.pageState.pageNumber=1,e.updateSearchTimeout&&clearTimeout(e.updateSearchTimeout),e.updateSearchTimeout=setTimeout((function(){return e.loadAllVirtualAuthors()}),400)})),value:this.search}),m("div",{className:"VirtualAuthors"},this.virtualAuthors.map((function(t){return m(M,{virtualAuthor:t,invalidateData:function(){return e.loadAllVirtualAuthors()}})}))),m("div",{class:"VirtualAuthors-pagination"},this.pageState.isPrevPage&&m(S(),{class:"Button prevPage",onclick:function(){e.pageState.pageNumber--,e.loadAllVirtualAuthors()}},r().translator.trans("davwheat-virtual-authors.admin.settings.prev")),this.pageState.isNextPage&&m(S(),{class:"Button nextPage",onclick:function(){e.pageState.pageNumber++,e.loadAllVirtualAuthors()}},r().translator.trans("davwheat-virtual-authors.admin.settings.next"))),m("div",{className:"VirtualAuthor-new"},m(S(),{class:"Button Button--primary",onclick:function(){return e.createVirtualAuthor()}},r().translator.trans("davwheat-virtual-authors.admin.settings.create_new")))))},a.oncreate=function(r){t.prototype.oncreate.call(this,r),this.loadAllVirtualAuthors()},a.updateSearch=function(t){this.search=t,this.loadAllVirtualAuthors()},a.loadAllVirtualAuthors=function(){var t=y(b().mark((function t(){var e,a;return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,m.redraw(),t.prev=3,t.next=6,r().store.find("virtualAuthors",{sort:this.sort,page:{limit:30,offset:30*(this.pageState.pageNumber-1)},filter:{displayName:this.search}});case 6:this.virtualAuthors=t.sent,a=null==(e=this.virtualAuthors.payload)?void 0:e.links,this.pageState.isNextPage=!(null==a||!a.next),this.pageState.isPrevPage=!(null==a||!a.prev),this.loading=!1,m.redraw(),t.next=19;break;case 14:t.prev=14,t.t0=t.catch(3),this.errored=!0,this.loading=!1,m.redraw();case 19:case"end":return t.stop()}}),t,this,[[3,14]])})));return function(){return t.apply(this,arguments)}}(),a.createVirtualAuthor=function(){var t=this;r().modal.show(j,{type:"new",virtualAuthor:r().store.createRecord("virtualAuthors"),onhide:function(){return t.loadAllVirtualAuthors()}})},e}(_());r().initializers.add("davwheat/manual-blog-authors",(function(){i().store.models.virtualAuthors=c,d().prototype.virtualAuthors=l().hasMany("virtualAuthors"),d().prototype.canSetVirtualAuthors=l().attribute("canSetVirtualAuthors"),(0,v.extend)(d().prototype,"badges",(function(t){var r;if(i().forum.attribute("davwheat-virtual-authors.discussion-badge")&&null!=(r=this.virtualAuthors())&&r.length){var e=this.virtualAuthors().length>1;t.add("hasVirtualAuthor",m(f(),{type:"hasVirtualAuthor",icon:e?"fas fa-users":"fas fa-user",label:i().translator.trans("davwheat-virtual-authors.lib.discussion-badge",{count:this.virtualAuthors().length})}))}})),r().extensionData.for("davwheat-virtual-authors").registerSetting({setting:"davwheat-virtual-authors.link-to-virtual-authors-from-discussion",type:"switch",label:r().translator.trans("davwheat-virtual-authors.admin.settings.link_to_va_from_discussion")}).registerSetting({setting:"davwheat-virtual-authors.authors-in-sidebar",type:"switch",label:r().translator.trans("davwheat-virtual-authors.admin.settings.authors_in_sidebar"),help:r().translator.trans("davwheat-virtual-authors.admin.settings.authors_in_sidebar_help")}).registerSetting({setting:"davwheat-virtual-authors.discussion-badge",type:"switch",label:r().translator.trans("davwheat-virtual-authors.admin.settings.discussion_badge")}).registerSetting({setting:"davwheat-virtual-authors.virtual-authors-page-disabled",type:"switch",label:r().translator.trans("davwheat-virtual-authors.admin.settings.virtual_authors_page_disabled"),help:r().translator.trans("davwheat-virtual-authors.admin.settings.virtual_authors_page_disabled_help")}).registerPage(R).registerPermission({icon:"fas fa-ghost",label:r().translator.trans("davwheat-virtual-authors.admin.permissions.set_virtual_authors"),permission:"discussion.setVirtualAuthors",tagScoped:!0},"moderate",94).registerPermission({icon:"far fa-address-card",label:r().translator.trans("davwheat-virtual-authors.admin.permissions.view_virtual_authors_page"),permission:"viewVirtualAuthorsPage"},"view")}))})(),module.exports=a})();