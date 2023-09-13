!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ToggleBlock=e():t.ToggleBlock=e()}(self,(()=>(()=>{var t={424:(t,e,o)=>{"use strict";o.d(e,{Z:()=>l});var s=o(81),i=o.n(s),r=o(645),n=o.n(r)()(i());n.push([t.id,".toggle-block__selector > div {\n  vertical-align: middle;\n  display: inline-block;\n  padding: 1% 0 1% 0;\n  outline: none;\n  border: none;\n  width: 90%;\n}\n\n.toggle-block__selector br {\n  display: none;\n}\n\n.toggle-block__icon > svg {\n  vertical-align: middle;\n  width: 15px;\n  height: auto;\n}\n\n.toggle-block__icon:hover {\n  color: #388ae5;\n  cursor: pointer;\n}\n\n.bi-play-fill {\n  width: 34px;\n  height: 34px;\n}\n\n.toggle-block__input {\n  margin-left: 5px;\n}\n\n.toggle-block__input:empty:before {\n  content: attr(placeholder);\n  color: gray;\n  background-color: transparent;\n}\n\n.toggle-block__content-default {\n  margin-left: 20px;\n}\n\n.toggle-block__item {\n  margin-left: 39px;\n}\n\n.toggle-block__content-default {\n  color: gray;\n  border-radius: 5px;\n}\n\n.toggle-block__content-default:hover {\n  cursor: pointer;\n  background: rgba(55, 53, 47, 0.08);\n}\n\ndiv.toggle-block__hidden {\n  display: none;\n}\n",""]);const l=n},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o="",s=void 0!==e[5];return e[4]&&(o+="@supports (".concat(e[4],") {")),e[2]&&(o+="@media ".concat(e[2]," {")),s&&(o+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),o+=t(e),s&&(o+="}"),e[2]&&(o+="}"),e[4]&&(o+="}"),o})).join("")},e.i=function(t,o,s,i,r){"string"==typeof t&&(t=[[null,t,void 0]]);var n={};if(s)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(n[c]=!0)}for(var d=0;d<t.length;d++){var a=[].concat(t[d]);s&&n[a[0]]||(void 0!==r&&(void 0===a[5]||(a[1]="@layer".concat(a[5].length>0?" ".concat(a[5]):""," {").concat(a[1],"}")),a[5]=r),o&&(a[2]?(a[1]="@media ".concat(a[2]," {").concat(a[1],"}"),a[2]=o):a[2]=o),i&&(a[4]?(a[1]="@supports (".concat(a[4],") {").concat(a[1],"}"),a[4]=i):a[4]="".concat(i)),e.push(a))}},e}},81:t=>{"use strict";t.exports=function(t){return t[1]}},379:t=>{"use strict";var e=[];function o(t){for(var o=-1,s=0;s<e.length;s++)if(e[s].identifier===t){o=s;break}return o}function s(t,s){for(var r={},n=[],l=0;l<t.length;l++){var c=t[l],d=s.base?c[0]+s.base:c[0],a=r[d]||0,h="".concat(d," ").concat(a);r[d]=a+1;var g=o(h),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==g)e[g].references++,e[g].updater(u);else{var p=i(u,s);s.byIndex=l,e.splice(l,0,{identifier:h,updater:p,references:1})}n.push(h)}return n}function i(t,e){var o=e.domAPI(e);return o.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;o.update(t=e)}else o.remove()}}t.exports=function(t,i){var r=s(t=t||[],i=i||{});return function(t){t=t||[];for(var n=0;n<r.length;n++){var l=o(r[n]);e[l].references--}for(var c=s(t,i),d=0;d<r.length;d++){var a=o(r[d]);0===e[a].references&&(e[a].updater(),e.splice(a,1))}r=c}}},569:t=>{"use strict";var e={};t.exports=function(t,o){var s=function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}e[t]=o}return e[t]}(t);if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(o)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,o)=>{"use strict";t.exports=function(t){var e=o.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(o){!function(t,e,o){var s="";o.supports&&(s+="@supports (".concat(o.supports,") {")),o.media&&(s+="@media ".concat(o.media," {"));var i=void 0!==o.layer;i&&(s+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),s+=o.css,i&&(s+="}"),o.media&&(s+="}"),o.supports&&(s+="}");var r=o.sourceMap;r&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(s,t,e.options)}(e,t,o)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},370:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path></svg>'}},e={};function o(s){var i=e[s];if(void 0!==i)return i.exports;var r=e[s]={id:s,exports:{}};return t[s](r,r.exports,o),r.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var s in e)o.o(e,s)&&!o.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.nc=void 0;var s={};return(()=>{"use strict";o.d(s,{default:()=>I});var t=o(379),e=o.n(t),i=o(795),r=o.n(i),n=o(569),l=o.n(n),c=o(565),d=o.n(c),a=o(216),h=o.n(a),g=o(589),u=o.n(g),p=o(424),f={};f.styleTagTransform=u(),f.setAttributes=d(),f.insert=l().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=h(),e()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;const b={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let m;const k=new Uint8Array(16);function y(){if(!m&&(m="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!m))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return m(k)}const v=[];for(let t=0;t<256;++t)v.push((t+256).toString(16).slice(1));const B=function(t,e,o){if(b.randomUUID&&!e&&!t)return b.randomUUID();const s=(t=t||{}).random||(t.rng||y)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,e){o=o||0;for(let t=0;t<16;++t)e[o+t]=s[t];return e}return function(t,e=0){return(v[t[e+0]]+v[t[e+1]]+v[t[e+2]]+v[t[e+3]]+"-"+v[t[e+4]]+v[t[e+5]]+"-"+v[t[e+6]]+v[t[e+7]]+"-"+v[t[e+8]]+v[t[e+9]]+"-"+v[t[e+10]]+v[t[e+11]]+v[t[e+12]]+v[t[e+13]]+v[t[e+14]]+v[t[e+15]]).toLowerCase()}(s)};var A=o(370),x=o.n(A);class I{static get toolbox(){return{title:"Toggle",icon:x()}}static get enableLineBreaks(){return!0}static get isReadOnlySupported(){return!0}constructor({data:t,api:e,readOnly:o,config:s}){this.data={text:t.text||"",status:t.status||"open",fk:t.fk||`fk-${B()}`,items:t.items||0},this.itemsId=[],this.api=e;const{toolbar:{close:i},blocks:{getCurrentBlockIndex:r,getBlockByIndex:n,getBlocksCount:l,move:c}}=this.api;this.close=i,this.getCurrentBlockIndex=r,this.getBlocksCount=l,this.getBlockByIndex=n,this.move=c,this.wrapper=void 0,this.readOnly=o||!1,this.placeholder=s?.placeholder??"Toggle",this.defaultContent=s?.defaultContent??"Empty toggle. Click or drop blocks inside.",this.addListeners(),this.addSupportForUndoAndRedoActions(),this.addSupportForDragAndDropActions(),this.addSupportForCopyAndPasteAction()}isAToggleItem(t){return t.classList.contains("toggle-block__item")}isAToggleRoot(t){return t.classList.contains("toggle-block__selector")||Boolean(t.querySelector(".toggle-block__selector"))}createParagraphFromToggleRoot(t){if("Enter"===t.code){const t=document.getSelection().focusOffset,e=this.api.blocks.getCurrentBlockIndex(),o=this.api.blocks.getBlockByIndex(e),{holder:s}=o,i=s.firstChild.firstChild,r=i.children[1].innerHTML,n=r.indexOf("<br>"),l=-1===n?r.length:n;"closed"===this.data.status&&(this.resolveToggleAction(),this.hideAndShowBlocks());const c=r.slice(l+4,t.focusOffset);i.children[1].innerHTML=r.slice(t.focusOffset,l),this.api.blocks.insert("paragraph",{text:c},{},e+1,1),this.setAttributesToNewBlock()}}createParagraphFromIt(){this.setAttributesToNewBlock()}setAttributesToNewBlock(t=null,e=this.wrapper.id){const o=null===t?this.api.blocks.getCurrentBlockIndex():t,s=B(),i=this.api.blocks.getBlockByIndex(o);this.itemsId.includes(i.id)||this.itemsId.splice(o-1,0,i.id);const{holder:r}=i,n=r.firstChild.firstChild;r.setAttribute("foreignKey",e),r.setAttribute("id",s),r.classList.add("toggle-block__item"),this.readOnly||(r.onkeydown=this.setEventsToNestedBlock.bind(this),n.focus())}setEventsToNestedBlock(t){if("Enter"===t.code)this.createParagraphFromIt();else{const e=this.getCurrentBlockIndex(),o=this.getBlockByIndex(e),{holder:s}=o;if("Tab"===t.code&&t.shiftKey&&this.extractBlock(e),"Backspace"===t.code){const t=document.getSelection().focusOffset;this.removeBlock(s,o.id,t)}}}removeBlock(t,e,o){if(0===o){const o=t.nextSibling.firstChild.firstChild.innerHTML;t.firstChild.firstChild.children[1].innerHTML+=o;const s=this.itemsId.indexOf(e);this.itemsId.splice(s,1);const i=this.api.blocks.getCurrentBlockIndex();this.api.blocks.delete(i+1)}}removeAttributesFromNewBlock(t){const e=this.api.blocks.getBlockByIndex(t),{holder:o}=e;if(!this.itemsId.includes(e.id)){const t=this.itemsId.indexOf(e.id);this.itemsId.splice(t,1)}o.removeAttribute("foreignKey"),o.removeAttribute("id"),o.onkeydown={},o.onkeyup={},o.classList.remove("toggle-block__item")}createToggle(){this.wrapper=document.createElement("div"),this.wrapper.classList.add("toggle-block__selector"),this.wrapper.id=this.data.fk;const t=document.createElement("span"),e=document.createElement("div"),o=document.createElement("div");t.classList.add("toggle-block__icon"),t.innerHTML=x(),e.classList.add("toggle-block__input"),e.setAttribute("contentEditable",!this.readOnly),e.innerHTML=this.data.text||"",this.readOnly||(e.addEventListener("keyup",this.createParagraphFromToggleRoot.bind(this)),e.addEventListener("keydown",this.removeToggle.bind(this)),e.addEventListener("focusin",(()=>this.setFocusToggleRootAtTheEnd())),e.addEventListener("keyup",this.setPlaceHolder.bind(this)),e.setAttribute("placeholder",this.placeholder),e.addEventListener("focus",this.setDefaultContent.bind(this)),e.addEventListener("focusout",this.setDefaultContent.bind(this)),o.addEventListener("click",this.clickInDefaultContent.bind(this)),e.addEventListener("focus",this.setNestedBlockAttributes.bind(this))),o.classList.add("toggle-block__content-default","toggle-block__hidden"),o.innerHTML=this.defaultContent,this.wrapper.appendChild(t),this.wrapper.appendChild(e),this.wrapper.appendChild(o)}setFocusToggleRootAtTheEnd(){const t=document.activeElement,e=window.getSelection(),o=document.createRange();e.removeAllRanges(),o.selectNodeContents(t),o.collapse(!1),e.addRange(o),t.focus()}clickInDefaultContent(){this.api.blocks.insert(),this.setAttributesToNewBlock(),this.setDefaultContent()}setDefaultContent(){const t=document.querySelectorAll(`div[foreignKey="${this.wrapper.id}"]`),{firstChild:e,lastChild:o}=this.wrapper,{status:s}=this.data,i=t.length>0||"closed"===s;o.classList.toggle("toggle-block__hidden",i),e.style.color=0===t.length?"gray":"black"}removeToggle(t){if("Backspace"===t.code){const{children:t}=this.wrapper,e=t[1].innerHTML;if(0===document.getSelection().focusOffset){const t=this.api.blocks.getCurrentBlockIndex(),o=e.indexOf("<br>"),s=-1===o?e.length:o,i=document.querySelectorAll(`div[foreignKey="${this.wrapper.id}"]`);for(let e=1;e<i.length+1;e+=1)this.removeAttributesFromNewBlock(t+e);this.api.blocks.delete(t),this.api.blocks.insert("paragraph",{text:e.slice(0,s)},{},t,1),this.api.caret.setToBlock(t)}}}findToogleRootIndex(t,e){const o=this.getBlockByIndex(t),{holder:s}=o;return this.isAToggleRoot(s)&&e===s.querySelector(".toggle-block__selector").getAttribute("id")?t:t-1>=0?this.findToogleRootIndex(t-1,e):-1}extractBlock(t){const e=this.getBlockByIndex(t),{holder:o}=e;if(this.isAToggleItem(o)){const e=o.getAttribute("foreignKey"),s=this.findToogleRootIndex(t,e);if(s>=0){const o=this.getDescendantsNumber(e),i=s+o;o>1&&this.api.blocks.move(i,t),setTimeout((()=>this.removeAttributesFromNewBlock(i)),200)}}this.api.caret.setToBlock(t),this.api.toolbar.close()}setPlaceHolder(t){if("Backspace"===t.code||"Enter"===t.code){const{children:t}=this.wrapper,{length:e}=t[1].textContent;0===e&&(t[1].textContent="")}}render(){return this.createToggle(),setTimeout((()=>this.renderItems())),setTimeout((()=>this.setInitialTransition())),this.wrapper}setInitialTransition(){const{status:t}=this.data,e=this.wrapper.firstChild.firstChild;e.style.transition="0.1s",e.style.transform=`rotate(${"closed"===t?0:90}deg)`}renderItems(){const t=this.api.blocks.getBlocksCount(),e=this.wrapper.firstChild;let o;if(this.readOnly){const t=document.getElementsByClassName("codex-editor__redactor")[0],{children:e}=t,{length:s}=e;for(let t=0;t<s;t+=1){const s=e[t].firstChild.firstChild,{id:i}=s;if(i===this.wrapper.id){o=t;break}}}else{const e=this.wrapper.children[1];let s={},i=this.api.blocks.getCurrentBlockIndex();for(console.log("index",i),console.log("blocksInEditor",t);s[1]!==e;){o=i;const t=this.api.blocks.getBlockByIndex(o),{holder:e}=t;s=e.firstChild.firstChild.children,console.log("index",i),console.log("currentBlock",s[1]),i-=1}}if(o+this.data.items<t)for(let t=o+1,e=0;t<=o+this.data.items;t+=1){const o=this.api.blocks.getBlockByIndex(t),{holder:s}=o,i=s.firstChild.firstChild;if(this.isPartOfAToggle(i)){this.data.items=e;break}this.setAttributesToNewBlock(t),e+=1}else this.data.items=0;e.addEventListener("click",(()=>{this.resolveToggleAction(),setTimeout((()=>{this.hideAndShowBlocks()}))})),this.hideAndShowBlocks()}resolveToggleAction(){const t=this.wrapper.firstChild.firstChild;"closed"===this.data.status?(this.data.status="open",t.style.transform="rotate(90deg)"):(this.data.status="closed",t.style.transform="rotate(0deg)"),this.api.blocks.getBlockByIndex(this.api.blocks.getCurrentBlockIndex()).holder.setAttribute("status",this.data.status)}hideAndShowBlocks(t=this.wrapper.id,e=this.data.status){const o=document.querySelectorAll(`div[foreignKey="${t}"]`),{length:s}=o;if(s>0)o.forEach((t=>{t.hidden="closed"===e;const o=t.querySelectorAll(".toggle-block__selector");if(o.length>0){const s="closed"===e?e:t.getAttribute("status");this.hideAndShowBlocks(o[0].getAttribute("id"),s)}}));else if(t===this.wrapper.id){const{lastChild:t}=this.wrapper;t.classList.toggle("toggle-block__hidden",e)}}save(t){const e=t.getAttribute("id"),{children:o}=t,s=o[1].innerHTML,i=document.querySelectorAll(`div[foreignKey="${e}"]`);return this.data.fk=e,Object.assign(this.data,{text:s,items:i.length})}getDescendantsNumber(t){let e=0;return document.querySelectorAll(`div[foreignKey="${t}"]`).forEach((t=>{if(t.hasAttribute("status")){const o=t.querySelector(".toggle-block__selector").getAttribute("id");e+=this.getDescendantsNumber(o)}e+=1})),e}highlightToggleItems(t){document.querySelectorAll(`div[foreignKey="${t}"]`).forEach((t=>{if(t.classList.add("ce-block--selected"),t.hasAttribute("status")){const e=t.querySelector(".toggle-block__selector").getAttribute("id");this.highlightToggleItems(e)}}))}renderSettings(){const t=document.getElementsByClassName("ce-settings--opened")[0].lastChild,e=this.api.blocks.getCurrentBlockIndex();this.highlightToggleItems(this.wrapper.id),setTimeout((()=>{this.addEventsMoveButtons("ce-tune-move-down",0,t,e),this.addEventsMoveButtons("ce-tune-move-up",1,t,e);const o=t.getElementsByClassName("ce-settings__button--delete")[0];o&&o.addEventListener("click",(()=>{const t=o.classList;-1===Object.values(t).indexOf("clicked-to-destroy-toggle")?o.classList.add("clicked-to-destroy-toggle"):this.removeFullToggle(e)}))}))}addEventsMoveButtons(t,e,o,s){const i=o.getElementsByClassName(t);if(!i.length)return;const r=i[0];r&&r.addEventListener("click",(()=>{this.moveToggle(s,e)}))}moveToggle(t,e){if(!this.readOnly){this.close();const o=this.getCurrentBlockIndex(),s=this.getDescendantsNumber(this.wrapper.id),i=this.getBlocksCount(),r=t+s;this.move(t,o),t>=0&&r<=i-1&&(0===e?this.moveDown(t,r):this.moveUp(t,r))}}moveDown(t,e){const o=e+1,s=this.getBlockByIndex(o),{holder:i}=s;if(this.move(t,o),"toggle"===s.name){const e=i.querySelector(".toggle-block__selector").getAttribute("id"),s=this.getDescendantsNumber(e);this.moveDescendants(s,t+1,o+1,0)}}moveUp(t,e){const o=t-1,s=this.getBlockByIndex(o);if("toggle"===s.name)return;const{holder:i}=s;if(i.hasAttribute("foreignKey")){const o=this.getBlockByIndex(t).holder.getAttribute("foreignKey"),s=i.getAttribute("foreignKey");if(s!==o){const i=this.findIndexOfParentBlock(o,s,t),r=this.getBlockByIndex(i).holder.querySelector(".toggle-block__selector").getAttribute("id"),n=this.getDescendantsNumber(r);return this.move(e,i),void this.moveDescendants(n,e,i,1)}}this.move(e,o)}findIndexOfParentBlock(t,e,o){const s=o-(this.getDescendantsNumber(e)+1),i=this.getBlockByIndex(s).holder;if(i.hasAttribute("foreignKey")){const e=i.getAttribute("foreignKey");if(e!==t){const o=this.getBlockByIndex(s-1).holder;if(o.hasAttribute("foreignKey")){const i=o.getAttribute("foreignKey");if(i!==e)return this.findIndexOfParentBlock(t,i,s)}}}return s}moveDescendants(t,e,o,s){let i=o,r=e;for(;t;)this.move(r,i),0===s&&(i+=1,r+=1),t-=1}removeFullToggle(t){const e=document.querySelectorAll(`div[foreignKey="${this.wrapper.id}"]`),{length:o}=e;for(let e=t;e<t+o;e+=1)this.api.blocks.delete(t)}addListeners(){this.readOnly||document.activeElement.addEventListener("keyup",(t=>{const e=document.activeElement,o=this.api.blocks.getCurrentBlockIndex(),s=e.parentElement.parentElement;"Space"===t.code?this.createToggleWithShortcut(e):o>0&&!this.isPartOfAToggle(e)&&!this.isPartOfAToggle(s)&&"Tab"===t.code&&this.nestBlock(e)}))}addSupportForUndoAndRedoActions(){if(!this.readOnly){const t=document.querySelector("div.codex-editor__redactor"),e={attributes:!0,childList:!0,characterData:!0};new MutationObserver((t=>{t.forEach((t=>{"childList"===t.type&&setTimeout(this.restoreItemAttributes.bind(this,t))}))})).observe(t,e)}}getIndex=t=>Array.from(t.parentNode.children).indexOf(t);isChild=(t,e)=>!(!t||!e)&&(t===e||[...document.querySelectorAll(`div[foreignKey="${t}"]`)].some((t=>{const o=t.querySelector(".toggle-block__selector");return!!o&&this.isChild(o.getAttribute("id"),e)})));addSupportForDragAndDropActions(){if(!this.readOnly){if(void 0===this.wrapper)return void setTimeout((()=>this.addSupportForDragAndDropActions()),250);document.querySelector(`#${this.wrapper.id}`).parentNode.parentNode.setAttribute("status",this.data.status);const t=document.querySelector(".ce-toolbar__settings-btn");t.setAttribute("draggable","true"),t.addEventListener("dragstart",(()=>{this.startBlock=this.api.blocks.getCurrentBlockIndex(),this.nameDragged=this.api.blocks.getBlockByIndex(this.startBlock).name,this.holderDragged=this.api.blocks.getBlockByIndex(this.startBlock).holder})),document.addEventListener("drop",(t=>{const{target:e}=t;if(document.contains(e)){const t=e.classList.contains("ce-block")?e:e.closest(".ce-block");if(t&&t!==this.holderDragged){let e=this.getIndex(t);e=this.startBlock<e?e+1:e;const o=t.querySelectorAll(".toggle-block__selector").length>0||null!==t.getAttribute("foreignKey");setTimeout((()=>{if("toggle"===this.nameDragged){const s=this.holderDragged.querySelector(`#${this.wrapper.id}`);if(s)if(this.isChild(s.getAttribute("id"),t.getAttribute("foreignKey"))){if(this.startBlock===e?this.api.blocks.move(this.startBlock+1,e):this.api.blocks.move(this.startBlock,e),!o){const t=this.getIndex(this.holderDragged);this.removeAttributesFromNewBlock(t)}}else{if(o){const e=t.getAttribute("foreignKey")??t.querySelector(".toggle-block__selector").getAttribute("id"),o=this.getIndex(this.holderDragged);this.setAttributesToNewBlock(o,e)}this.moveChildren(e)}}if(!o){const t=this.getIndex(this.holderDragged);this.removeAttributesFromNewBlock(t)}}))}}}))}}moveChildren(t,e=this.wrapper.id){let o=document.querySelectorAll(`div[foreignKey="${e}"]`);o=this.startBlock>=t?[...o].reverse():o,o.forEach((e=>{const o=this.getIndex(e);this.api.blocks.move(t,o);const s=e.querySelectorAll(".toggle-block__selector");if(s.length>0){const o=this.getIndex(e),i=this.startBlock<t?0:1;s.forEach((t=>this.moveChildren(o+i,t.getAttribute("id"))));const r=Math.abs(t-o);t=this.startBlock<t?t+r:t-r}}))}restoreItemAttributes(t){if(void 0!==this.wrapper){const e=this.api.blocks.getCurrentBlockIndex(),o=this.api.blocks.getBlockByIndex(e),{holder:s}=o,i=!this.isPartOfAToggle(s),r=t.removedNodes[0];if(this.itemsId.includes(o.id)&&i)this.setAttributesToNewBlock(e);else if(r&&this.isPartOfAToggle(r)&&i){const t=s.firstChild.firstChild;this.isPartOfAToggle(t)||(this.setAttributesToNewBlock(e),this.itemsId[e]=o.id)}}}createToggleWithShortcut(t){const e=t.textContent;if(">"===e[0]&&!this.isPartOfAToggle(t)){const t=this.api.blocks.getCurrentBlockIndex();this.api.blocks.insert("toggle",{text:e.slice(2)},this.api,t,!0),this.api.blocks.delete(t+1),this.api.caret.setToBlock(t)}}nestBlock(t){const e=t.parentElement.parentElement,o=e.previousElementSibling,s=o.firstChild.firstChild;if(this.isPartOfAToggle(s)||this.isPartOfAToggle(o)){const t=o.getAttribute("foreignKey"),i=s.getAttribute("id"),r=t||i;e.setAttribute("will-be-a-nested-block",!0),document.getElementById(r).children[1].focus()}}setNestedBlockAttributes(){const t=this.api.blocks.getCurrentBlockIndex(),e=this.api.blocks.getBlockByIndex(t),{holder:o}=e;o.getAttribute("will-be-a-nested-block")&&(o.removeAttribute("will-be-a-nested-block"),this.setAttributesToNewBlock(t),this.api.toolbar.close())}isPartOfAToggle(t){const e=Array.from(t.classList);return e.includes("toggle-block__item")||e.includes("toggle-block__input")||e.includes("toggle-block__selector")}addSupportForCopyAndPasteAction(){if(!this.readOnly){const t=document.querySelector("div.codex-editor__redactor"),e={attributes:!0,childList:!0,characterData:!0};new MutationObserver((t=>{t.forEach((t=>{"childList"===t.type&&setTimeout(this.resetIdToCopiedBlock.bind(this,t))}))})).observe(t,e)}}resetIdToCopiedBlock(){if(void 0!==this.wrapper){const t=this.api.blocks.getCurrentBlockIndex(),{holder:e}=this.api.blocks.getBlockByIndex(t);if(this.isPartOfAToggle(e)){const o=e.getAttribute("foreignKey");if(document.querySelectorAll(`#${o}`).length>1){const e=this.findToogleRootIndex(t,o),s=B();for(let o=e;o<=t;o+=1){const t=this.api.blocks.getBlockByIndex(o),{holder:i}=t;o===e?i.firstChild.firstChild.setAttribute("id",`fk-${s}`):i.setAttribute("foreignKey",`fk-${s}`)}}}}}}})(),s.default})()));