/*!
 * Une réalisation de Révolutionnez
 *     Rembrandt 360 inc
 *     Jean - Paul Robichaud
 *     856, boul.Bernard - Pilon
 *     McMasterville, Qc.J3G 5W8 Canada
 *     Téléphone 450 467 - 6932
 *     jean - paul@revolutionnez.ca
 *     www.revolutionnez.ca
 *     © TOUS DROITS RÉSERVÉS 2020 ©
 */!function(e){function t(t){for(var r,i,l=t[0],s=t[1],c=t[2],p=0,m=[];p<l.length;p++)i=l[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&m.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(u&&u(t);m.length;)m.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var s=n[l];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={0:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;o.push([129,1]),n()}({109:function(e,t,n){"use strict";(function(e){n(152),n(153),n(73),n(88),n(64),n(65),n(92),n(96),n(61),n(18),n(19),n(5),n(171),n(172);var r,a=n(0),o=n(110),i=n(111),l=n(112),s=n(113),c=n(114),u=n(115),p=n(14),m=n(116),d=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),f=function(){return(f=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},g=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{s(r.next(e))}catch(e){o(e)}}function l(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}s((r=r.apply(e,t||[])).next())}))},h=function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},v=0,b=function(t){function n(n,r){var a=t.call(this,n,r)||this;return a.onPrevClicked=function(){a.ssc&&(a.ssc.api.stopAnimation(),a.ssc.api.nextFrame())},a.onNextClicked=function(){a.ssc&&(a.ssc.api.stopAnimation(),a.ssc.api.prevFrame())},a.onUpClicked=function(){a.ssc&&(a.ssc.api.stopAnimation(),a.ssc.api.data.lane=Math.min(a.ssc.api.data.lanes,a.ssc.api.data.lane+1),a.ssc.api.prevFrame(),a.ssc.api.nextFrame())},a.onDownClicked=function(){a.ssc&&(a.ssc.api.stopAnimation(),a.ssc.api.data.lane=Math.max(0,a.ssc.api.data.lane-1),a.ssc.api.prevFrame(),a.ssc.api.nextFrame())},a.onToggleClicked=function(){a.ssc&&(v=0,a.ssc.api.toggleAnimation())},a.onToggleZoom=function(){a.ssc&&(e("a.js-zoom").toggleClass("zoomout"),a.ssc.api.toggleZoom())},a.onFullscreenClicked=function(){return g(a,void 0,void 0,(function(){var t,n,r,a,o,i=this;return h(this,(function(l){return this.ssc&&(this.props.fullScreen?(this.ssc.api&&this.ssc.api.replaceSourceFrame(),this.ssc.api.requestFullscreen()):(this.state.fullScreen?(e("#"+this.props.id).find("a#btnFullscreen").removeClass("backscreen"),e("#"+this.props.id).find("a#btnFullscreen").addClass("js-fullscreen")):(e("#"+this.props.id).find("a#btnFullscreen").removeClass("js-fullscreen"),e("#"+this.props.id).find("a#btnFullscreen").addClass("backscreen")),this.state.fullScreen?(e("#"+this.props.id).width(this.props.spriteSpinOptions.width),this.setState({fullScreen:!1})):(t=e(window).height(),n=e(window).width(),r=e("#"+this.props.id).height(),a=e("#"+this.props.id).width(),o=t/r*a,o=Math.min(n,o),o-=10,this.setState({fullScreen:!0},(function(){i.ssc.api&&i.ssc.api.replaceSourceFrame(),e("#"+i.props.id).width(o),e(window).resize()}))))),[2]}))}))},a.onThumbClick=function(e){p.c(a.ssc.data,e.target.id)},a.onFrame=function(t,n){0===n.frame&&++v>=a.props.countdown+1&&(v=0,a.ssc.api.stopAnimation()),setTimeout((function(){e("#"+a.props.id+" .plugin360-slider").val(n.frame)}),100),a.txt&&a.txt.setState({frame:n.frame}),a.lnk&&a.lnk.setState({frame:n.frame}),a.ctrl&&a.ctrl.setState({frame:n.frame})},a.onModalZoom=function(t){t.preventDefault(),a.ssc.api.stopAnimation();var n=a.ssc.data.frame,r=a.ssc.data.lane,o=a.props.imagePathLarge.replace("{lane}",String(r).padStart(a.props.digits,"0")).replace("{frame}",String(n).padStart(a.props.digits,"0"));e("#zoom").empty().append("<img class='zoom' src='"+o+"' data-magnify-src='"+o+"' >"),e(".zoom").magnify(),e("#zoom").modal()},a.onSpriteZoom=function(t){t.preventDefault();var n=t.target.src;e("#zoom").empty().append("<img class='zoom' src='"+n+"' data-magnify-src='"+n+"' >"),e(".zoom").magnify(),e("#zoom").modal()},a.onChangeLang=function(){var e=a.props.langs.findIndex((function(e){return e===a.state.currentLang}));++e>=a.props.langs.length&&(e=0),a.setState({currentLang:a.props.langs[e],lang:f(f({},a.state.translation[a.props.langs[e]]),{styles:a.state.translation.styles,controlBar:a.state.translation.controlBar})})},a.state={fullScreen:!1,licence:void 0},a.ssc=null,a.txt=null,a.lnk=null,a.ctrl=null,a}return d(n,t),n.prototype.componentDidMount=function(){return g(this,void 0,void 0,(function(){var t,n,r=this;return h(this,(function(a){switch(a.label){case 0:return e.get("./public/animation/config.json",(function(e){r.setState({translation:e,currentLang:r.props.lang,lang:f(f({},e[r.props.lang]),{styles:e.styles,controlBar:e.controlBar})})})).fail((function(){console.log("Pas de traduction pour "+r.props.id)})),t=this.props.spriteSpinOptions.hasOwnProperty("sourceSmall")?this.props.spriteSpinOptions.sourceSmall[0]:this.props.spriteSpinOptions.source[0],[4,Object(m.a)(t,this.props.licence)];case 1:return n=a.sent(),this.setState({licence:n}),window.onresize=function(){r.ssc&&r.ssc.api.reponsive()},[2]}}))}))},n.prototype.render=function(){var e=this,t=this.props,n=t.id,r=t.sections,p=t.spriteSpinOptions,m=t.thumbnails,d=r.spriteSpin.visible&&!r.controlBar.visible&&!r.lnkContainer.visible&&!r.textContainer.visible;return void 0===this.state.licence?a.createElement("div",null):a.createElement("div",{className:r.border?"plugin360Border":"",style:{margin:0,padding:"2px 2px 0 2px"}},a.createElement(u.a,f({},r.title,this.state)),a.createElement(c.a,f({},r.textContainer,this.state,{ref:function(t){e.txt=t}})),a.createElement(s.a,f({},r.spriteSpin,this.state,{globalId:n,isFullScreen:this.state.fullScreen,showControlOverlay:d,options:f({},p),ref:function(t){e.ssc=t},onToggleClicked:this.onToggleClicked,onFullscreenClicked:this.onFullscreenClicked,onFrame:this.onFrame})),a.createElement(o.a,f({},r.controlBar,this.state,{globalId:n,ref:function(t){e.ctrl=t},thumbnails:m,langButton:this.props.langButton,onChangeLang:this.onChangeLang,onPrevClicked:this.onPrevClicked,onNextClicked:this.onNextClicked,onToggleClicked:this.onToggleClicked,onToggleZoom:this.onToggleZoom,onFullscreenClicked:this.onFullscreenClicked,onThumbClick:this.onThumbClick,onModalZoom:this.onModalZoom,onSpriteZoom:this.onSpriteZoom,onUpClicked:this.onUpClicked,onDownClicked:this.onDownClicked})),r.flag_separator?a.createElement(l.a,f({},this.state)):void 0,a.createElement(i.a,f({},r.lnkContainer,this.state,{globalId:n,ref:function(t){e.lnk=t}})),this.state.licence?void 0:a.createElement("h3",{style:{color:"red"}},"Votre licence n'est pas valide. ",a.createElement("br",null),"Veuillez contacter M. Jean-Paul Robichaud",a.createElement("br",null),"Révolutionnez",a.createElement("br",null),"Tél : 450-467-6932",a.createElement("br",null),"jean-paul@rembrandt360.ca",a.createElement("br",null),"www.revolutionnez.ca",a.createElement("br",null)))},n}(a.Component);t.a=b}).call(this,n(5))},110:function(e,t,n){"use strict";n(64),n(65),n(85),n(173),n(58),n(18),n(19);var r=n(0);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o,i=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r.state={frame:2},r}return i(t,e),t.prototype.inRange=function(e,t){var n=t.split("-"),r=n[0],a=n[1];return e>=r&&e<=a},t.prototype.lnkGetData=function(e){if("string"==typeof e)return e;if(Array.isArray(e))for(var t=0;t<e.length;){if(this.inRange(this.state.frame,e[t].range))return e[t].data;t++}else if("object"===a(e)&&this.inRange(this.state.frame,e.range))return e.data},t.prototype.renderBar=function(){var e=this.props,t=e.border,n=e.onChangeLang,a=e.onPrevClicked,o=e.onNextClicked,i=e.onToggleClicked,l=e.langButton,s=e.currentLang,c=e.onModalZoom,u=e.onSpriteZoom,p=e.flag_thumbnail,m=e.flag_zoom,d=this.lnkGetData(this.props.lang.controlBar.lnkSpriteZoom);return r.createElement("div",{id:"controlBar",className:t?"plugin360Border":""},r.createElement("div",{className:"leftColumn"},l?r.createElement("a",{id:"btnLang",className:"button js-lang lang-"+s,href:"#",onClick:n}):void 0),r.createElement("div",{className:"centerColumn"},r.createElement("div",{className:"button_nav"},r.createElement("a",{className:"js-left",href:"#",onClick:o}),r.createElement("a",{id:"btnRotate",className:"button js-rotation",href:"#",title:"rotate",onClick:i}),r.createElement("a",{className:"js-right",href:"#",onClick:a}))),r.createElement("div",{className:"rightColumn"},m?r.createElement("a",{id:"lnkDtlZoom",className:"openModal lnkIcon lnkDtlZoom",href:"",onClick:c}):r.createElement("div",null),p&&d?r.createElement("a",{id:"lnkPreview",className:"openModal lnkIcon lnkPreview",href:d,onClick:u},r.createElement("img",{className:"lnkSpritePreview",src:d})):void 0))},t.prototype.renderSlider=function(){var e=this.props,t=e.border,n=e.onModalZoom,a=e.onSpriteZoom,o=e.flag_thumbnail,i=e.flag_zoom,l=this.lnkGetData(this.props.lang.controlBar.lnkSpriteZoom);return r.createElement("div",{id:"controlBarSlider",className:t?"plugin360Border":""},r.createElement("div",{className:"leftColumn"},r.createElement("div",{id:"plugin360Slider"},r.createElement("input",{className:"plugin360-slider",type:"range"}))),r.createElement("div",{className:"rightColumn"},i?r.createElement("a",{id:"lnkDtlZoom",className:"openModal lnkIcon lnkDtlZoom",href:"",onClick:n}):r.createElement("div",null),o&&l?r.createElement("a",{id:"lnkPreview",className:"openModal lnkIcon lnkPreview",href:l,onClick:a},r.createElement("img",{className:"lnkSpritePreview",src:l})):void 0))},t.prototype.renderSliderArrow=function(){var e=this.props,t=e.border,n=e.onPrevClicked,a=e.onNextClicked,o=e.onModalZoom,i=e.onSpriteZoom,l=e.flag_thumbnail,s=e.flag_zoom,c=this.lnkGetData(this.props.lang.controlBar.lnkSpriteZoom);return r.createElement("div",{id:"controlBarSliderArrow",className:t?"plugin360Border":""},r.createElement("div",{className:"leftColumn"},r.createElement("a",{className:"js-left",href:"#",onClick:a}),r.createElement("div",{id:"plugin360Slider",className:"sliderArrow"},r.createElement("input",{className:"plugin360-slider",type:"range"})),r.createElement("a",{className:"js-right",href:"#",onClick:n})),r.createElement("div",{className:"rightColumn"},s?r.createElement("a",{id:"lnkDtlZoom",className:"openModal lnkIcon lnkDtlZoom",href:"",onClick:o}):r.createElement("div",null),l&&c?r.createElement("a",{id:"lnkPreview",className:"openModal lnkIcon lnkPreview",href:c,onClick:i},r.createElement("img",{className:"lnkSpritePreview",src:c})):void 0))},t.prototype.renderBarMultiRow=function(){var e=this.props,t=e.border,n=e.onChangeLang,a=e.onPrevClicked,o=e.onNextClicked,i=e.onToggleClicked,l=e.langButton,s=e.currentLang,c=e.onModalZoom,u=e.onSpriteZoom,p=e.flag_thumbnail,m=e.onUpClicked,d=e.onDownClicked,f=e.flag_zoom,g=this.lnkGetData(this.props.lang.controlBar.lnkSpriteZoom);return r.createElement("div",{id:"controlBarMultiRow",className:t?"plugin360Border":""},r.createElement("div",{className:"leftColumn"},l?r.createElement("a",{id:"btnLang",className:"button js-lang lang-"+s,href:"#",onClick:n}):void 0,r.createElement("div",{className:"button_nav"},r.createElement("a",{className:"js-left",href:"#",onClick:o}),r.createElement("a",{className:"js-right",href:"#",onClick:a})),r.createElement("a",{id:"btnRotate",className:"button js-rotation",href:"#",title:"rotate",onClick:i}),r.createElement("div",{className:"button_nav_updown"},r.createElement("a",{className:"js-up",href:"#",onClick:m}),r.createElement("a",{className:"js-down",href:"#",onClick:d}))),r.createElement("div",{className:"rightColumn"},f?r.createElement("a",{id:"lnkDtlZoom",className:"openModal lnkIcon lnkDtlZoom",href:"",onClick:c}):r.createElement("div",null),p&&g?r.createElement("a",{id:"lnkPreview",className:"openModal lnkIcon lnkPreview",href:g,onClick:u},r.createElement("img",{className:"lnkSpritePreview",src:g})):void 0))},t.prototype.renderThumbnail=function(){var e=this.props,t=e.onThumbClick,n=e.thumbnails;return r.createElement("div",{id:"controlBarThumbnail",className:"plugin360Gallery"},r.createElement("div",{className:"thumbnail"},n.map((function(e){return r.createElement("a",{className:"thumb",key:e.app+"_"+e.id,href:"#",rel:"0"},r.createElement("img",{src:e.path,id:e.id,alt:"",onClick:t}))}))))},t.prototype.renderAudio=function(){var e=this.props,t=e.border,n=e.globalId;return r.createElement("div",{id:"controlBar",className:t?"plugin360Border":""},r.createElement("audio",{id:n+"-plyr-audio",controls:!0},r.createElement("source",{src:"./public/medias/music.mp3",type:"audio/mp3"}),r.createElement("source",{src:"./public/medias/music.ogg",type:"audio/ogg"})))},t.prototype.componentDidMount=function(){var e=this;setTimeout((function(){window.plyr.setup("#"+e.props.globalId+"-plyr-audio")}),400)},t.prototype.render=function(){var e=this.props,t=e.visible,n=e.lang,r=e.type;if(!t||!n)return null;switch(r){case"bar":return this.renderBar();case"slider":return this.renderSlider();case"slider-arrow":return this.renderSliderArrow();case"bar-multi-row":return this.renderBarMultiRow();case"thumbnail":return this.renderThumbnail();case"audio":return this.renderAudio();default:return this.renderBar()}},t}(r.Component);t.a=l},111:function(e,t,n){"use strict";(function(e){n(18),n(19);var r,a=n(0),o=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=function(t){function n(n,r){var a=t.call(this,n,r)||this;return a.modalVideo=function(t){t.preventDefault(),window.MediasRef.setState({type:"video",src:t.target.getAttribute("href")}),e("#ex1").modal({fadeDuration:500,fadeDelay:.5})},a.modalAudio=function(t){t.preventDefault(),window.MediasRef.setState({type:"audio",src:t.target.getAttribute("href")}),e("#ex1").modal({fadeDuration:500,fadeDelay:.5})},a.modalInfo=function(t){t.preventDefault(),e("#info").empty().html(t.target.getAttribute("data-text")),e("#info").modal({fadeDuration:250,fadeDelay:0})},a.state={frame:2},a}return o(n,t),n.prototype.render=function(){var e=this.props,t=e.lang,n=e.visible,r=e.border,o=e.flag_lnkDownload,i=e.flag_lnkVideo,l=e.flag_lnkAudio,s=e.flag_lnkDoc,c=e.flag_lnkInfo,u=e.flag_lnkContact,p=e.flag_lnkPhone,m=e.flag_lnkMail,d=e.flag_lnkLink,f=e.flag_lnkComVveeZaV,g=e.flag_lnkCart;return n&&t?a.createElement("div",{id:"lnkContainer",className:r?"plugin360Border":""},a.createElement("div",{className:"leftGroup"},o?a.createElement("a",{className:"lnkIcon lnkDownload",href:this.props.lang.lnkDownload,download:!0,target:"_blank"}):void 0,i?a.createElement("a",{className:"openModal lnkIcon lnkVideo",href:this.props.lang.lnkVideo,onClick:this.modalVideo}):void 0,l?a.createElement("a",{className:"openModal lnkIcon lnkAudio",href:this.props.lang.lnkAudio,onClick:this.modalAudio}):void 0,s?a.createElement("a",{className:"lnkIcon lnkDoc",href:this.props.lang.lnkDoc,target:"_blank"}):void 0),a.createElement("div",{className:"rightGroup"},u?a.createElement("a",{className:"lnkIcon lnkContact",href:this.props.lang.lnkContact,target:"_blank"}):void 0,p?a.createElement("a",{className:"lnkIcon lnkPhone",href:"tel:"+this.props.lang.lnkPhone}):void 0,m?a.createElement("a",{className:"lnkIcon lnkMail",href:"mailto:"+this.props.lang.lnkMail,target:"_blank"}):void 0,d?a.createElement("a",{className:"lnkIcon lnkLink",href:this.props.lang.lnkLink,target:"_blank"}):void 0,f?a.createElement("a",{className:"lnkIcon comVveeZaV",href:this.props.lang.lnkComVveeZaV,target:"_blank"}):void 0,c?a.createElement("a",{className:"openModal lnkIcon lnkInfo",href:"","data-text":this.props.lang.lnkInfo,onClick:this.modalInfo}):void 0,g?a.createElement("a",{className:"lnkIcon lnkCartRemove",href:this.props.lang.lnkCart,target:"_blank"}):void 0)):null},n}(a.Component);t.a=i}).call(this,n(5))},112:function(e,t,n){"use strict";n(18),n(19);var r,a=n(23),o=n.n(a),i=n(0),l=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.render=function(){var e=this.props.lang;return e?i.createElement(i.Fragment,null,i.createElement("div",{className:"horizontalSeparator"}),i.createElement("div",{className:"separatorTitles",style:e.styles.separator},i.createElement("div",{className:"left"},o()(e.lblCommunication)),i.createElement("div",{className:"right"},o()(e.lblTechSpecification)))):null},t}(i.Component);t.a=s},113:function(e,t,n){"use strict";n(61),n(88),n(18),n(19);var r,a=n(5),o=n(0),i=n(14),l=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r.onComplete=function(e,t){a("#"+r.props.globalId+" .plugin360-slider").attr("min",0).attr("max",t.source.length-1).attr("value",0).on("input",(function(e){i.c(t,e.target.value)}))},r.onMouseOut=function(){r.$el&&(a(r.$el).parent().find(".btnControlOverlay a#btnRotate360").css("display","none"),a(r.$el).parent().find(".btnControlOverlay a#btnFullscreen").css("display","none"))},r.onMouseOver=function(){r.$el&&(a(r.$el).parent().find(".btnControlOverlay a#btnRotate360").css("display","block"),a(r.$el).parent().find(".btnControlOverlay a#btnFullscreen").css("display","block"))},r.$el=null,r.api=null,r.data=null,r}return l(t,e),t.prototype.componentWillUnmount=function(){this.$el&&this.$el.spritespin("destroy")},t.prototype.initSpriteSpin=function(){var e=this.props,t=e.showControlOverlay,n=e.onToggleClicked,r=e.onFullscreenClicked;this.$el&&(this.$el.spritespin("destroy"),this.$el.spritespin(Object.assign({onFrame:this.props.onFrame,onComplete:this.onComplete},JSON.parse(JSON.stringify(this.props.options)))),this.api=this.$el.spritespin("api"),this.data=this.$el.spritespin("data"),t&&(a('<div class="btnControlOverlay"><a id="btnFullscreen" href="#" class="button js-fullscreen" /><a id="btnRotate360" href="#" class="button js-rotation"/></div>').appendTo(this.$el),this.$el.find(".btnControlOverlay a#btnRotate360").click(n),this.$el.find(".btnControlOverlay a#btnFullscreen").click(r),a(this.$el).parent().find(".btnControlOverlay a#btnRotate360").css("display","block"),a(this.$el).parent().find(".btnControlOverlay a#btnFullscreen").css("display","block"),this.props.isFullScreen?(this.$el.find("a#btnFullscreen").removeClass("js-fullscreen"),this.$el.find("a#btnFullscreen").addClass("backscreen")):(this.$el.find("a#btnFullscreen").removeClass("backscreen"),this.$el.find("a#btnFullscreen").addClass("js-fullscreen"))))},t.prototype.componentDidUpdate=function(){this.initSpriteSpin()},t.prototype.componentDidMount=function(){this.initSpriteSpin()},t.prototype.render=function(){var e=this,t=this.props,n=t.border,r=t.visible,i=t.lang,l=t.showControlOverlay;return r&&i?o.createElement("div",{ref:function(t){return e.$el=a(t)},className:n?"plugin360ImgContainer plugin360Border":"plugin360ImgContainer",onMouseOut:l?this.onMouseOut:void 0,onMouseOver:l?this.onMouseOver:void 0}):null},t}(o.Component);t.a=s},114:function(e,t,n){"use strict";n(58),n(18),n(19);var r,a=n(23),o=n.n(a),i=n(0),l=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r.state={frame:2},r}return l(t,e),t.prototype.inRange=function(e,t){var n=t.split("-"),r=n[0],a=n[1];return e>=r&&e<=a},t.prototype.render=function(){var e=this.props,t=e.border,n=e.visible,r=e.lang;if(!n||!r)return null;var a="";if(r.frames)for(var l in r.frames)r.frames.hasOwnProperty(l)&&this.inRange(this.state.frame,l)&&(a=r.frames[l]);return i.createElement("div",{className:t?"plugin360Border":"",style:r.styles.frames},o()(a))},t}(i.Component);t.a=s},115:function(e,t,n){"use strict";n(18),n(19);var r,a=n(23),o=n.n(a),i=n(0),l=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.render=function(){var e=this.props,t=e.border,n=e.visible,r=e.lang;return n&&r?i.createElement("h2",{id:"title",className:t?"plugin360Border":"",style:r.styles.titleText},o()(r.titleText)):null},t}(i.Component);t.a=s},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(186),n(188),n(64),n(65),n(92),n(96);var r=n(128),a=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{s(r.next(e))}catch(e){o(e)}}function l(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}s((r=r.apply(e,t||[])).next())}))},o=function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},i=function(e,t){return a(void 0,void 0,void 0,(function(){var n,a;return o(this,(function(o){switch(o.label){case 0:return[4,r.a.load(e)];case 1:return n=o.sent(),a=n.getHistogram({channel:0}),[2,t.toString()===a.toString()]}}))}))}},125:function(e,t,n){"use strict";(function(e){n(18),n(19);var r,a=n(0),o=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=function(t){function n(e,n){var r=t.call(this,e,n)||this;return r.play_aud=function(e){r.state.audioPlaying?(r.player.pause(),r.setState({audioPlaying:!1}),e.target.src="public/images/medias/play.png",clearInterval()):(r.player.play(),r.setState({audioPlaying:!0}),e.target.src="public/images/medias/pause.png",setInterval((function(){r.timeBar.value=r.player.currentTime/r.player.duration*100}),1e3))},r.volumeClicked=function(){r.state.volumeMute?(r.volImg.src="public/images/medias/volume.png",r.setState({volumeMute:!1}),r.player.volume=r.volumeScroll.value):(r.volImg.src="public/images/medias/muted.png",r.setState({volumeMute:!0}),r.player.volume=0)},r.timeBarChanged=function(e){r.player&&r.player.duration&&(r.player.currentTime=e.target.value/100*r.player.duration)},r.change_vol=function(e){r.player.volume=e.target.value,0===r.player.volume?r.volImg.src="public/images/medias/muted.png":r.volImg.src="public/images/medias/volume.png"},r.play_vid=function(){var e=document.getElementById("play_button");r.state.videoPlaying?(r.player.pause(),r.setState({videoPlaying:!1}),e.setAttribute("src","public/images/medias/play.png"),clearInterval()):(r.player.play(),r.setState({videoPlaying:!0}),e.setAttribute("src","public/images/medias/pause.png"),setInterval((function(){r.timeBar.value=r.player.currentTime/r.player.duration*100}),1e3))},r.fullScreen=function(){r.player.requestFullscreen?r.player.requestFullscreen():r.player.mozRequestFullScreen?r.player.mozRequestFullScreen():r.player.webkitRequestFullscreen?r.player.webkitRequestFullscreen():r.player.msRequestFullscreen&&r.player.msRequestFullscreen()},r.state={type:"video",src:"",audioPlaying:!1,videoPlaying:!1,volumeMute:!1},r}return o(n,t),n.prototype.startplayer=function(){var t=this;this.player=document.getElementById("video"===this.state.type?"video_player":"music_player"),this.player.controls=!1,this.player.currentTime=0,this.volImg=document.getElementById("vol_img"),this.timeBar=document.getElementById("time-bar"),this.volumeScroll=document.getElementById("change_vol"),e(".modal a.close-modal").click((function(){t.player.pause(),t.setState({videoPlaying:!1}),document.getElementById("play_button").setAttribute("src","public/images/medias/play.png"),clearInterval()}))},n.prototype.componentDidMount=function(){this.startplayer()},n.prototype.componentDidUpdate=function(){this.startplayer()},n.prototype.renderAudio=function(){return a.createElement("div",{id:"ex1",className:"modal"},a.createElement("div",{id:"wrapper"},a.createElement("div",{id:"player"},a.createElement("audio",{id:"music_player",preload:"none",src:this.state.src}),a.createElement("div",{id:"player_controls"},a.createElement("img",{src:"public/images/medias/play.png",onClick:this.play_aud,id:"play_button",style:{paddingLeft:"unset"}}),a.createElement("input",{id:"time-bar",type:"range",min:"0",step:"0.05",max:"100",defaultValue:"0",onInput:this.timeBarChanged}),a.createElement("img",{src:"public/images/medias/volume.png",onClick:this.volumeClicked,id:"vol_img"}),a.createElement("input",{type:"range",id:"change_vol",onInput:this.change_vol,step:"0.05",min:"0",max:"1",defaultValue:"0.5"})))))},n.prototype.renderVideo=function(){return a.createElement("div",{id:"ex1",className:"modal"},a.createElement("div",{id:"wrapper"},a.createElement("div",{id:"player_wrapper"},a.createElement("video",{id:"video_player",onClick:this.play_vid,src:this.state.src},a.createElement("source",{src:this.state.src,type:"video/mp4"})),a.createElement("div",{id:"player_controls"},a.createElement("img",{src:"public/images/medias/play.png",onClick:this.play_vid,id:"play_button",style:{paddingLeft:"unset"}}),a.createElement("input",{id:"time-bar",type:"range",min:"0",step:"0.05",max:"100",defaultValue:"0",onInput:this.timeBarChanged}),a.createElement("img",{src:"public/images/medias/volume.png",onClick:this.volumeClicked,id:"vol_img"}),a.createElement("input",{type:"range",id:"change_vol",onInput:this.change_vol,step:"0.05",min:"0",max:"1",defaultValue:"0.5"}),a.createElement("img",{src:"public/images/medias/enter-fullscreen.png",onClick:this.fullScreen})))))},n.prototype.render=function(){return"audio"===this.state.type?this.renderAudio():this.renderVideo()},n}(a.Component);t.a=i}).call(this,n(5))},126:function(e,t,n){"use strict";t.a={version:"0.0.3",langs:["en","fr","es"],langButton:!1,fullScreen:!1,licence:[234,104,96,82,116,122,137,160,187,180,212,219,262,287,294,259,314,315,357,337,359,374,400,379,385,463,514,500,485,576,547,546,595,648,662,682,707,713,790,780,908,894,874,878,831,826,841,885,893,883,869,854,806,803,809,861,882,813,798,841,774,856,755,730,786,773,820,780,816,793,791,829,843,784,849,824,825,834,786,852,818,900,820,827,873,804,861,833,791,805,798,845,805,812,837,809,843,839,835,847,847,834,884,827,942,902,937,884,902,945,903,896,941,954,895,809,842,855,839,799,758,814,781,755,710,710,738,675,693,682,668,695,643,725,693,637,648,679,648,657,597,603,642,615,637,651,667,612,621,661,640,658,659,639,620,622,605,606,574,569,560,560,551,502,577,533,478,508,471,462,394,353,357,340,364,312,292,289,311,280,261,264,243,270,223,244,257,247,257,270,285,261,267,264,257,267,247,281,257,251,258,264,285,252,277,290,277,308,354,322,355,317,338,369,385,376,403,385,487,427,514,523,523,594,1131,1988,2183,2322,2515,1432,1013,583,341,321,282,330,358,477,617,910,1062,752,690,567,569,597,558,733,792,1063,1574,1263,2111,2985,1963,474094],sections:{border:!1,flag_separator:!0,title:{visible:!0,border:!1},textContainer:{visible:!0,border:!1},spriteSpin:{visible:!0,border:!1},controlBar:{visible:!0,border:!1,type:"slider-arrow",flag_thumbnail:!0,flag_zoom:!0},lnkContainer:{visible:!0,border:!1,flag_lnkDownload:!1,flag_lnkVideo:!1,flag_lnkAudio:!1,flag_lnkDoc:!1,flag_lnkInfo:!1,flag_lnkContact:!0,flag_lnkPhone:!0,flag_lnkMail:!1,flag_lnkLink:!1,flag_lnkComVveeZaV:!1,flag_lnkCart:!1}},spriteSpinOptions:{source:void 0,detectSubsampling:!0,zoomUseWheel:!1,zoomPinFrame:!1,sense:1,senseLane:10,animate:!1,frameTime:160,reverse:!1,responsive:!0,retainAnimate:!1,plugins:["progress","360","drag","zoom","wheel"]}}},127:function(e,t,n){"use strict";n(242),n(243);var r=function(){function e(){}return e.getNavigatorLanguage=function(){return navigator.languages&&navigator.languages[0]||navigator.language||navigator.userLanguage},e.getLanguage=function(t){switch(e.getNavigatorLanguage()){case"en":case"en-US":return t.includes("en")?"en":"NA";case"fr":case"fr-CA":return t.includes("fr")?"fr":"NA";case"es":return t.includes("es")?"es":"NA";default:return"NA"}},e}();t.a=r},129:function(e,t,n){"use strict";n.r(t),function(e){n(73),n(134),n(58),n(85),n(61);var t=n(0),r=n(67),a=(n(148),n(109)),o=n(125),i=n(126),l=n(127),s=n(14),c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},u=function(e){return{lane:e.getAttribute("lane")?e.getAttribute("lane").split(",").map(Number):void 0,frame:(e.getAttribute("frame")||"1,40").split(",").map(Number),digits:parseInt(e.getAttribute("digits"),0)||3}},p=function(e){var t=document.createElement("div");t.setAttribute("id",e),document.body.appendChild(t)};document.body.appendChild(document.createComment("Une réalisation de Révolutionnez\n    Rembrandt 360 inc\n    Jean - Paul Robichaud\n    856, boul.Bernard - Pilon\n    McMasterville, Qc.J3G 5W8 Canada\n    Téléphone 450 467 - 6932\n    jean - paul@revolutionnez.ca\n    www.revolutionnez.ca\n    © TOUS DROITS RÉSERVÉS 2020 ©")),p("info"),p("zoom"),p("modal");var m,d=document.getElementById("object_360");if(d){var f=JSON.parse(JSON.stringify(i.a)),g=d.getAttribute("imagePath");f.id="object_360",g?f.spriteSpinOptions.source=s.b(g,u(d)):(f.spriteSpinOptions.source=s.b(e(window).width()>768?d.getAttribute("imagePathLarge"):d.getAttribute("imagePathSmall"),u(d)),f.spriteSpinOptions.sourceSmall=s.b(d.getAttribute("imagePathSmall"),u(d)),f.spriteSpinOptions.sourceZoom=s.b(d.getAttribute("imagePathLarge"),u(d))),d.hasAttribute("imagePathSmall")&&(f.imagePathSmall=d.getAttribute("imagePathSmall")),d.hasAttribute("imagePathLarge")&&(f.imagePathLarge=d.getAttribute("imagePathLarge")),d.hasAttribute("digits")&&(f.digits=parseInt(d.getAttribute("digits"),0)||3),f.spriteSpinOptions.animate=d.getAttribute("animate")?"true"===d.getAttribute("animate"):f.spriteSpinOptions.animate,f.spriteSpinOptions.lanes=d.getAttribute("lane")?d.getAttribute("lane").split(",").map(Number)[1]+1:void 0,f.spriteSpinOptions.frames=(d.getAttribute("frame")||void 0).split(",").map(Number)[1]+1,f.countdown=Number(d.getAttribute("countdown")||5),f.thumbnails=(m=d,(m.getAttribute("thumbnails")||"1,5,10,15").split(",").map(Number)).map((function(e){var t,n,r=f.spriteSpinOptions.source[e];return n=!1,t=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(n=!0),n&&(r=(r=r.replace(/small/g,"thumbnail")).replace(/_S_/g,"_T_")),{app:"object_360",id:e,path:r}}));var h=d.getAttribute("lang")||l.a.getLanguage(f.langs);Object(r.render)(t.createElement(a.a,c({},f,{lang:h})),d)}Object(r.render)(t.createElement(o.a,{ref:function(e){window.MediasRef=e}}),document.getElementById("modal")),s.a({replaceSourceFrame:function(){if(this.data.sourceZoom&&e(window).width()>768){var t=this.data.source;this.data.source=this.data.sourceZoom,this.data.sourceZoom=t}},reponsive:function(){this.data.source=this.data.sourceSmall,this.data.sourceZoom&&e(window).width()>768&&(this.data.source=this.data.sourceZoom)}})}.call(this,n(5))},148:function(e,t,n){var r=n(149);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(150)(r,a);r.locals&&(e.exports=r.locals)},149:function(e,t,n){e.exports={"body-color":"#fff",containerWidth:"600px",containerHeight:"400px",imageFolderPath:"public/images",borderColor:"#999",borderRadius:"7px"}}});