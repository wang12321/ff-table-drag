!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("ff-table-drag",[],t):"object"==typeof exports?exports["ff-table-drag"]=t():e["ff-table-drag"]=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=16)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(s=r,l=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(a," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot).concat(e," */")}));return[n].concat(o).concat([i]).join("\n")}var s,l,a;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(var s=0;s<e.length;s++){var l=e[s];null!=l[0]&&r[l[0]]||(n&&!l[2]?l[2]=n:n&&(l[2]="(".concat(l[2],") and (").concat(n,")")),t.push(l))}},t}},function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],s=o[0],l={id:e+":"+i,css:o[1],media:o[2],sourceMap:o[3]};r[s]?r[s].parts.push(l):n.push(r[s]={id:s,parts:[l]})}return n}n.r(t),n.d(t,"default",(function(){return p}));var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},s=i&&(document.head||document.getElementsByTagName("head")[0]),l=null,a=0,d=!1,c=function(){},u=null,h="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(e,t,n,i){d=n,u=i||{};var s=r(e,t);return g(s),function(t){for(var n=[],i=0;i<s.length;i++){var l=s[i];(a=o[l.id]).refs--,n.push(a)}t?g(s=r(e,t)):s=[];for(i=0;i<n.length;i++){var a;if(0===(a=n[i]).refs){for(var d=0;d<a.parts.length;d++)a.parts[d]();delete o[a.id]}}}}function g(e){for(var t=0;t<e.length;t++){var n=e[t],r=o[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(v(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var s=[];for(i=0;i<n.parts.length;i++)s.push(v(n.parts[i]));o[n.id]={id:n.id,refs:1,parts:s}}}}function m(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function v(e){var t,n,r=document.querySelector("style["+h+'~="'+e.id+'"]');if(r){if(d)return c;r.parentNode.removeChild(r)}if(f){var i=a++;r=l||(l=m()),t=_.bind(null,r,i,!1),n=_.bind(null,r,i,!0)}else r=m(),t=w.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var b,y=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function _(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function w(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),u.ssrId&&e.setAttribute(h,t.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},function(e,t,n){var r=n(9);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(1).default)("5d89b4ee",r,!1,{})},function(e,t,n){var r=n(11);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(1).default)("962a344c",r,!1,{})},function(e,t,n){var r=n(13);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(1).default)("5583fe66",r,!1,{})},function(e,t,n){var r=n(15);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(1).default)("16937dac",r,!1,{})},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=r=function(e){return n(e)}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(t)}e.exports=r},function(e,t,n){"use strict";var r=n(2);n.n(r).a},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,".tree-column{font-size:14px;color:#909399;position:relative;padding:0px 12px;min-width:60px;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;box-sizing:border-box;height:50px;line-height:50px}.tree-column.border{border-right:1px solid #EBEEF5}.resize-line{position:absolute;top:0;right:-3px;width:6px;height:100%;cursor:col-resize}\n",""])},function(e,t,n){"use strict";var r=n(3);n.n(r).a},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,"\n.space{\n  display: inline-block;\n  width: 15px;\n}\n",""])},function(e,t,n){"use strict";var r=n(4);n.n(r).a},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,'.tree-block{width:100%;background:rgba(255,255,255,0.8)}.tree-row{position:relative;display:flex;border-bottom:1px solid #eee;line-height:32px}.tree-row:hover{background:#ecf5ff}.tree-row.highlight-row{background:#ffe88c}.tree-row .align-left{text-align:left}.tree-row .align-right{text-align:right}.tree-row .align-center{text-align:center}.hover-model{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(255,255,255,0.6)}.hover-block{display:flex;opacity:0.1;transition:opacity 0.5s;justify-content:center;align-items:center}.hover-block i{color:#FFF}.prev-block{height:25%;background:#a0c8f7}.center-block{height:50%;background:#a0c8f7}.next-block{height:25%;background:#a0c8f7}.action-item{color:#409eff;cursor:pointer}.action-item i{font-style:normal}.zip-icon{display:inline-block;width:8px;height:8px;vertical-align:middle;background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAf0lEQVQ4T7XT0Q2AMAhF0dvNdALdSEdzBB3BDXQD85LGRNMCauS7nAKBxMdIhfwemIAtYpeAEeiANoLUgAGYI4gFqAMX8QAXiQBCNFDNRBVdIgpUkSfADjT3KqLACmg/XrWw5J+Li+VVYCZrMBbgJluA+tXA3Hv45ZgiR3i+OQBeSyYRPEyeUAAAAABJRU5ErkJggg==") no-repeat center;background-size:cover}.arrow-transparent{visibility:hidden}.arrow-bottom{transform:rotate(90deg)}[draggable=true]{-khtml-user-drag:element}\n',""])},function(e,t,n){"use strict";var r=n(5);n.n(r).a},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,".drag-tree-table{position:relative;margin:20px 0;color:#606266;font-size:12px}.drag-tree-table.border{border-right:none}.drag-line{position:absolute;top:0;left:-1000px;height:100%;width:1px;background:#ccc}.drag-tree-table-header{display:flex;border:1px solid #EBEEF5;height:60px;line-height:36px;box-sizing:border-box;font-weight:600}.drag-tree-table-header .align-left{text-align:left}.drag-tree-table-header .align-right{text-align:right}.drag-tree-table-header .align-center{text-align:center}.drag-tree-table-header .tree-column{user-select:none}.tree-icon-hidden{visibility:hidden}.is-draging .tree-row:hover{background:transparent !important}.tree-row{background-color:rgba(64,158,255,0);transition:background-color 0.5s linear}.drag-tree-table-body{border:1px solid #EBEEF5;border-top:none}\n",""])},function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"table",staticClass:"drag-tree-table",class:{border:void 0!==e.border},style:{minWidth:e.widthSum,overflow:"auto"}},[n("div",{staticClass:"drag-tree-table-header"},e._l(e.data.columns,(function(t,r){return n("column",{key:r,class:["align-"+t.titleAlign,"colIndex"+r],attrs:{width:t.width,flex:t.flex,border:void 0===e.border?e.resize:e.border}},["checkbox"==t.type?n("input",{staticClass:"checkbox",attrs:{type:"checkbox"},on:{click:function(n){return e.onCheckAll(n,t.onChange)}}}):n("span",{domProps:{innerHTML:e._s(t.title)}}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:void 0!==e.resize,expression:"resize!== undefined"}],staticClass:"resize-line",on:{mousedown:function(t){return e.mousedown(r,t)}}})])})),1),e._v(" "),n("div",{staticClass:"drag-tree-table-body",class:e.isDraing?"is-draging":"",style:e.bodyStyle,on:{dragover:e.draging,dragend:e.drop}},e._l(e.data.lists,(function(t,r){return n("row",{key:r,attrs:{depth:"0",columns:e.data.columns,isdraggable:e.isdraggable,model:t,custom_field:e.custom_field,onCheck:e.onSingleCheckChange,border:void 0===e.border?e.resize:e.border,isContainChildren:e.isContainChildren},scopedSlots:e._u([{key:"selection",fn:function(t){var n=t.row;return[e._t("selection",null,{row:n})]}},e._l(e.data.columns,(function(t,n){return{key:t.type,fn:function(n){var r=n.row;return[e._t(t.type,null,{row:r})]}}}))],null,!0)})})),1),e._v(" "),n("div",{staticClass:"drag-line"})])};r._withStripped=!0;var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tree-block",attrs:{draggable:!!e.isdraggable},on:{dragstart:function(t){return e.dragstart(t)},dragend:function(t){return e.dragend(t)}}},[n("div",{staticClass:"tree-row",class:{"highlight-row":1==e.model.highlight},style:{backgroundColor:e.model.backgroundColor},attrs:{"data-level":e.depth,"tree-id":e.model[e.custom_field.id],"tree-p-id":e.model[e.custom_field.parent_id]},on:{click:e.toggle}},[e._l(e.columns,(function(t,r){return n("column",{key:r,class:["align-"+t.align,"colIndex"+r],attrs:{field:t.field,width:t.width,flex:t.flex,border:e.border}},["selection"===t.type?n("span",[n("space",{attrs:{depth:e.depth}}),e._v(" "),e.model[e.custom_field.lists]&&e.model[e.custom_field.lists].length?n("span",{staticClass:"zip-icon",class:[e.model[e.custom_field.open]?"arrow-bottom":"arrow-right"]}):n("span",{staticClass:"zip-icon arrow-transparent"}),e._v(" "),t.formatter?n("span",{domProps:{innerHTML:e._s(t.formatter(e.model))}}):t.field?n("span",{domProps:{innerHTML:e._s(e.model[t.field])}}):e._t("selection",null,{row:e.model})],2):"checkbox"===t.type?n("span",[!1!==e.model.isShowCheckbox?n("input",{directives:[{name:"model",rawName:"v-model",value:e.model[e.custom_field.checked],expression:"model[custom_field.checked]"}],staticClass:"checkbox action-item",attrs:{type:"checkbox",name:e.model[e.custom_field.id]},domProps:{checked:Array.isArray(e.model[e.custom_field.checked])?e._i(e.model[e.custom_field.checked],null)>-1:e.model[e.custom_field.checked]},on:{click:function(t){return t.stopPropagation(),e.onCheckboxClick(t,e.model)},change:function(t){var n=e.model[e.custom_field.checked],r=t.target,i=!!r.checked;if(Array.isArray(n)){var o=e._i(n,null);r.checked?o<0&&e.$set(e.model,e.custom_field.checked,n.concat([null])):o>-1&&e.$set(e.model,e.custom_field.checked,n.slice(0,o).concat(n.slice(o+1)))}else e.$set(e.model,e.custom_field.checked,i)}}}):e._e()]):"action"===t.type?n("span",[t.actions?n("span",e._l(t.actions,(function(t,r){return n("a",{key:r,staticClass:"action-item",attrs:{type:"text",size:"small"},on:{click:function(n){return n.stopPropagation(),n.preventDefault(),t.onclick(e.model)}}},[n("i",{class:t.icon,domProps:{innerHTML:e._s(t.formatter(e.model))}})])})),0):n("span",[e._t("action",null,{row:e.model})],2)]):t.type?n("span",[e._t(t.type,null,{row:e.model})],2):n("span",[t.formatter?n("span",{domProps:{innerHTML:e._s(t.formatter(e.model))}}):n("span",[e._v(e._s(e.model[t.field]))])])])})),e._v(" "),e._m(0)],2),e._v(" "),e._l(e.model[e.custom_field.lists],(function(t,r){return e.isFolder?n("row",{directives:[{name:"show",rawName:"v-show",value:e.model[e.custom_field.open],expression:"model[custom_field.open]"}],key:r,attrs:{model:t,columns:e.columns,isdraggable:e.isdraggable,border:e.border,depth:1*e.depth+1,custom_field:e.custom_field,onCheck:e.onCheck,isContainChildren:e.isContainChildren},scopedSlots:e._u([{key:"selection",fn:function(t){var n=t.row;return[e._t("selection",null,{row:n})]}},e._l(e.columns,(function(t,n){return{key:t.type,fn:function(n){var r=n.row;return[e._t(t.type,null,{row:r})]}}}))],null,!0)}):e._e()}))],2)};i._withStripped=!0;var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.flex?n("div",{staticClass:"tree-column",class:{border:void 0!==e.border},style:{width:e.width+"px","min-width":e.width+"px",flex:e.flex}},[e._t("default")],2):n("div",{staticClass:"tree-column",class:{border:void 0!==e.border},style:{width:e.width+"px","min-width":e.width+"px"}},[e._t("default")],2)};o._withStripped=!0;var s={name:"column",props:{width:Number,field:String,label:String,flex:Number,border:String},data:function(){return{open:!1}},mounted:function(){}};n(8);function l(e,t,n,r,i,o,s,l){var a,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=n,d._compiled=!0),r&&(d.functional=!0),o&&(d._scopeId="data-v-"+o),s?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},d._ssrRegister=a):i&&(a=l?function(){i.call(this,this.$root.$options.shadowRoot)}:i),a)if(d.functional){d._injectStyles=a;var c=d.render;d.render=function(e,t){return a.call(t),c(e,t)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,a):[a]}return{exports:e,options:d}}var a=l(s,o,[],!1,null,null,null);a.options.__file="src/lib/column.vue";var d=a.exports,c=function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"space-container"},this._l(this.spaces,(function(e,n){return t("span",{key:n,staticClass:"space"})})),0)};c._withStripped=!0;var u={name:"space",props:["depth"],computed:{spaces:function(){for(var e=[],t=0;t<this.depth;t++)e.push("");return e}}},h=(n(10),l(u,c,[],!1,null,null,null));h.options.__file="src/lib/space.vue";var f=h.exports,p={name:"row",props:["model","depth","columns","isdraggable","border","custom_field","onCheck","isContainChildren"],data:function(){return{open:!1,visibility:"visible"}},components:{column:d,space:f},computed:{isFolder:function(){return this.model[this.custom_field.lists]&&this.model[this.custom_field.lists].length}},methods:{toggle:function(){this.isFolder&&(this.model[this.custom_field.open]=!this.model[this.custom_field.open],this.$forceUpdate())},dragstart:function(e){navigator.userAgent.indexOf("Firefox")>=0&&e.dataTransfer.setData("Text",this.id),window.dragId=e.target.children[0].getAttribute("tree-id"),window.dragPId=e.target.children[0].getAttribute("tree-p-id"),window.dragParentNode=e.target,e.target.style.opacity=.2},dragend:function(e){e.target.style.opacity=1},setAllCheckData:function(e,t){for(var n=this.custom_field.lists,r=0;r<e.length;r++){var i=e[r];this.$set(i,"checked",t),i[n]&&i[n].length&&this.setAllCheckData(i[n],t)}},onCheckboxClick:function(e,t){t[this.custom_field.lists]&&this.isContainChildren?this.setAllCheckData([t]||!1,!!e.target.checked):this.$set(t,"checked",!!e.target.checked),this.onCheck&&this.onCheck()}}},g=(n(12),l(p,i,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"hover-model",staticStyle:{display:"none"}},[t("div",{staticClass:"hover-block prev-block"},[t("i",{staticClass:"el-icon-caret-top"})]),this._v(" "),t("div",{staticClass:"hover-block center-block"},[t("i",{staticClass:"el-icon-caret-right"})]),this._v(" "),t("div",{staticClass:"hover-block next-block"},[t("i",{staticClass:"el-icon-caret-bottom"})])])}],!1,null,null,null));g.options.__file="src/lib/row.vue";var m=g.exports,v=n(6),b=n.n(v),y=n(7),_=n.n(y),w=b()({clearHoverStatus:function(){for(var e=document.querySelectorAll(".tree-row"),t=0;t<e.length;t++){var n=e[t],r=n.children[n.children.length-1];r.style.display="none",r.children[0].style.opacity=.1,r.children[1].style.opacity=.1,r.children[2].style.opacity=.1}},getElementTop:function(e,t){for(var n=t.querySelector(".drag-tree-table-body").scrollTop,r=e.offsetTop-n,i=e.offsetParent;null!==i;)r+=i.offsetTop,i=i.offsetParent;return r},getElementLeft:function(e){for(var t=e.offsetLeft,n=e.offsetParent;null!==n;)t+=n.offsetLeft,n=n.offsetParent;return t},deepClone:function(e){if(!e)return e;var t,n,r;for(r in t=Array.isArray(e)?[]:{},e)n=e[r],t[r]="object"===_()(n)?w.deepClone(n):n;return t}},"clearHoverStatus",(function(){for(var e=document.querySelectorAll(".tree-row"),t=0;t<e.length;t++){var n=e[t],r=n.children[n.children.length-1];r.style.display="none",r.children[0].style.opacity=.1,r.children[1].style.opacity=.1,r.children[2].style.opacity=.1}})),C=w;document.body.ondrop=function(e){e.preventDefault(),e.stopPropagation()};var x={name:"dragTreeTable",components:{row:m,column:d,space:f},computed:{widthSum:function(){var e=0;return this.data.columns.forEach((function(t){e+=t.width&&0!==Number(t.width)?Number(t.width):160,e+=1})),e+"px"},bodyStyle:function(){return{overflow:void 0!==this.fixed&&!1!==this.fixed?"auto":"hidden",height:void 0!==this.fixed&&!1!==this.fixed?(this.height||400)+"px":"auto","overflow-x":"hidden"}}},props:{isdraggable:{type:Boolean,default:!0},data:Object,onDrag:{type:Function,default:function(){}},fixed:String|Boolean,height:String|Number,border:String,onlySameLevelCanDrag:String,hightRowChange:String,resize:String,beforeDragOver:Function},data:function(){return{dragX:0,dragY:0,dragId:"",targetId:"",whereInsert:"",isDraing:!1,custom_field:{id:"id",parent_id:"parent_id",order:"order",lists:"lists",open:"open",checked:"checked",highlight:"highlight"},onCheckChange:null,isContainChildren:!1,mouse:{status:0,startX:0,curColWidth:0,curIndex:0}}},methods:{draging:function(e){console.log(5555555),e.preventDefault(),e.dataTransfer.dropEffect="move",this.isDraing=!0,e.pageX==this.dragX&&e.pageY==this.dragY||(this.dragX=e.pageX,this.dragY=e.clientY,this.filter(e.pageX,e.clientY),e.clientY<100?window.scrollTo(0,scrollY-6):e.clientY>document.body.clientHeight-160&&window.scrollTo(0,scrollY+6))},drop:function(e){C.clearHoverStatus(),this.resetTreeData(),this.isDraing=!1,void 0!==this.targetId&&void 0!==this.hightRowChange&&this.$nextTick((function(){var e=document.querySelector("[tree-id='"+window.dragId+"']");e.style.backgroundColor="rgba(64,158,255,0.5)",setTimeout((function(){e.style.backgroundColor="rgba(64,158,255,0)"}),2e3)}))},filter:function(e,t){var n=document.querySelectorAll(".tree-row");this.targetId=void 0;var r=window.dragParentNode.getBoundingClientRect(),i=r.left+window.dragParentNode.clientWidth,o=r.top+window.dragParentNode.clientHeight;if(!(e>=r.left&&e<=i&&t>=r.top&&t<=o)){for(var s=void 0,l=void 0,a="",d=0;d<n.length;d++){var c=n[d],u=c.getBoundingClientRect(),h=u.left,f=u.top,p=c.clientWidth,g=c.clientHeight;if(e>h&&e<h+p&&t>f&&t<f+g){var v=t-f,b=c.getAttribute("tree-p-id");if(void 0!==this.onlySameLevelCanDrag&&b!==window.dragPId)return;if(l=c.getAttribute("tree-id"),s=c.children[c.children.length-1],v/(x=c.offsetHeight)>.75)a="bottom";else if(v/x>.25){if(void 0!==this.onlySameLevelCanDrag)return;a="center"}else a="top";break}}if(void 0!==l){var y=!0;if(this.beforeDragOver){var _=this.getItemById(this.data.lists,window.dragId),w=this.getItemById(this.data.lists,l);y=this.beforeDragOver(_,w,a)}if(0!=y){s.style.display="block";var x=m.offsetHeight;"bottom"==a?"0.5"!==s.children[2].style.opacity&&(C.clearHoverStatus(),s.children[2].style.opacity=.5):"center"==a?"0.5"!==s.children[1].style.opacity&&(C.clearHoverStatus(),s.children[1].style.opacity=.5):"0.5"!==s.children[0].style.opacity&&(C.clearHoverStatus(),s.children[0].style.opacity=.5),this.targetId=l,this.whereInsert=a}}else{C.clearHoverStatus()}}},resetTreeData:function(){if(void 0!==this.targetId){var e=this.custom_field.lists,t=this.custom_field.parent_id,n=this.custom_field.id,r=[],i=this.data.lists,o=this,s=null,l=null;!function r(i,a){for(var d=0;d<i.length;d++){var c=i[d],u=C.deepClone(c);u[e]=[],o.targetId==c[n]?(s=o.getItemById(o.data.lists,window.dragId),l=o.getItemById(o.data.lists,o.targetId),"top"===o.whereInsert?(s[t]=c[t],a.push(s),a.push(u)):"center"===o.whereInsert?(s[t]=c[n],u.open=!0,u[e].push(s),a.push(u)):(s[t]=c[t],a.push(u),a.push(s))):window.dragId!=c[n]&&a.push(u),c[e]&&c[e].length&&r(c[e],u[e])}}(i,r),console.log(22222,r),this.resetOrder(r),this.onDrag(r,s,l,o.whereInsert),this.$emit("drag",r,s,l,o.whereInsert)}},resetOrder:function(e){for(var t=this.custom_field.lists,n=0;n<e.length;n++)e[n][this.custom_field.order]=n,e[n][t]&&e[n][t].length&&this.resetOrder(e[n][t])},getItemById:function(e,t){var n=null,r=this.custom_field.lists,i=this.custom_field.id;return function e(o){for(var s=0;s<o.length;s++){var l=o[s];if(l[i]==t){n=JSON.parse(JSON.stringify(l));break}l[r]&&l[r].length&&e(l[r])}}(e),n},DelById:function(e){var t=this.custom_field.lists,n=this.custom_field.order,r=this.custom_field.id,i=[];return function i(o,s){for(var l=0,a=0;a<o.length;a++){var d=o[a];if(d[r]!=e){var c=C.deepClone(d);c[n]=l,c[t]=[],s.push(c),l++,d[t]&&d[t].length&&i(d[t],c[t])}}}(this.data.lists,i),i},deepSetAttr:function(e,t,n,r){for(var i=this.custom_field.lists,o=0;o<n.length;o++)void 0!==r?r.includes(n[o][this.custom_field.id])&&(n[o][this.custom_field[e]]=t):n[o][this.custom_field[e]]=t,n[o][i]&&n[o][i].length&&this.deepSetAttr(e,t,n[o][i],r)},ZipAll:function(e){!(arguments.length>1&&void 0!==arguments[1])||arguments[1];var t=C.deepClone(this.data.lists);this.deepSetAttr("open",!1,t),this.data.lists=t},OpenAll:function(e){!(arguments.length>1&&void 0!==arguments[1])||arguments[1];var t=C.deepClone(this.data.lists);this.deepSetAttr("open",!0,t),this.data.lists=t},GetLevelById:function(e){return 1*this.$refs.table.querySelector('[tree-id="'+e+'"]').getAttribute("data-level")},HighlightRow:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=C.deepClone(this.data.lists),i=[e];1==n&&(i=i.concat(this.GetChildIds(e,!0))),this.deepSetAttr("highlight",t,r,i),this.data.lists=r},AddRow:function(e,t){var n=C.deepClone(this.data.lists),r=this;!function n(i){for(var o=r.custom_field.lists,s=0;s<i.length;s++){if(i[s][r.custom_field.id]==e){i[s][r.custom_field.open]=!0;var l=Object.assign({},t);l[r.custom_field.parent_id]=e,i[s][o]?(l[r.custom_field.order]=i[s][o].length,i[s][o].push(l)):(i[s][o]=[],l[r.custom_field.order]=0,i[s][o].push(l))}i[s][o]&&i[s][o].length&&n(i[s][o])}}(n),this.data.lists=n},EditRow:function(e,t){var n=C.deepClone(this.data.lists),r=this;!function n(i){for(var o=r.custom_field.lists,s=0;s<i.length;s++){if(i[s][r.custom_field.id]==e){var l=Object.assign({},i[s],t);i[s]=l}i[s][o]&&i[s][o].length&&n(i[s][o])}}(n),console.log(n),this.data.lists=n},GetChildIds:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=[],r=this;function i(e,o){for(var s=r.custom_field.lists,l=0;l<e.length;l++){var a="";o==e[l][r.custom_field.parent_id]?(a=e[l][r.custom_field.id],n.push(a)):a=o,1!=t&&o!=a||e[l][s]&&e[l][s].length&&i(e[l][s],a)}}return i(this.data.lists,e),n},onCheckAll:function(e,t){this.setAllCheckData(this.data.lists,!!e.target.checked);var n=this.getCheckedList(this.data.lists);t&&t(n)},onSingleCheckChange:function(){var e=this.getCheckedList(this.data.lists);this.onCheckChange&&this.onCheckChange(e)},setAllCheckData:function(e,t){for(var n=this.custom_field.lists,r=0;r<e.length;r++){var i=e[r];this.$set(i,"checked",t),i[n]&&i[n].length&&this.setAllCheckData(i[n],t)}},getCheckedList:function(e){var t=this.custom_field.lists,n=[];return function e(r){for(var i=0;i<r.length;i++){var o=r[i];o.checked&&0!=o.isShowCheckbox&&n.push(o),o[t]&&o[t].length&&e(o[t])}}(C.deepClone(e)),n},mousedown:function(e,t){var n=t.target.getBoundingClientRect().x,r=t.target.parentElement.offsetWidth;this.mouse={status:1,startX:n,curIndex:e,curColWidth:r}}},mounted:function(){var e=this;this.data.custom_field&&(this.custom_field=Object.assign({},this.custom_field,this.data.custom_field)),setTimeout((function(){e.data.columns.map((function(t){"checkbox"==t.type&&(e.onCheckChange=t.onChange,e.isContainChildren=t.isContainChildren)}))}),100),window.addEventListener("mouseup",(function(t){if(e.mouse.status){var n=t.clientX;document.querySelector(".drag-line").style.left="-10000px",e.mouse.status=0;for(var r=e.mouse.curColWidth+(n-e.mouse.startX),i=document.querySelectorAll(".colIndex"+e.mouse.curIndex),o=0;o<i.length;o++){i[o].style.width=r+"px"}e.data.columns[e.mouse.curIndex].width=r}})),window.addEventListener("mousemove",(function(t){if(e.mouse.status){var n=t.clientX,r=document.querySelector(".drag-tree-table").getBoundingClientRect().left;document.querySelector(".drag-line").style.left=n-r+"px"}}))}},k=(n(14),l(x,r,[],!1,null,null,null));k.options.__file="src/lib/dragTreeTable.vue";var S=k.exports;S.install=function(e){return e.component(S.name,S)};t.default=S}])}));