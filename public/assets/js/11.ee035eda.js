(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{503:function(t,e){function r(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}r.keys=function(){return[]},r.resolve=r,t.exports=r,r.id=503},626:function(t,e){function r(t,e){for(var r=0,n=t.length-1;n>=0;n--){var i=t[n];"."===i?t.splice(n,1):".."===i?(t.splice(n,1),r++):r&&(t.splice(n,1),r--)}if(e)for(;r--;r)t.unshift("..");return t}function n(t,e){if(t.filter)return t.filter(e);for(var r=[],n=0;n<t.length;n++)e(t[n],n,t)&&r.push(t[n]);return r}e.resolve=function(){for(var t="",e=!1,i=arguments.length-1;i>=-1&&!e;i--){var o=i>=0?arguments[i]:process.cwd();if("string"!=typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(t=o+"/"+t,e="/"===o.charAt(0))}return(e?"/":"")+(t=r(n(t.split("/"),(function(t){return!!t})),!e).join("/"))||"."},e.normalize=function(t){var o=e.isAbsolute(t),s="/"===i(t,-1);return(t=r(n(t.split("/"),(function(t){return!!t})),!o).join("/"))||o||(t="."),t&&s&&(t+="/"),(o?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(n(t,(function(t,e){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,r){function n(t){for(var e=0;e<t.length&&""===t[e];e++);for(var r=t.length-1;r>=0&&""===t[r];r--);return e>r?[]:t.slice(e,r-e+1)}t=e.resolve(t).substr(1),r=e.resolve(r).substr(1);for(var i=n(t.split("/")),o=n(r.split("/")),s=Math.min(i.length,o.length),u=s,a=0;a<s;a++)if(i[a]!==o[a]){u=a;break}var l=[];for(a=u;a<i.length;a++)l.push("..");return(l=l.concat(o.slice(u))).join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!=typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),r=47===e,n=-1,i=!0,o=t.length-1;o>=1;--o)if(47===(e=t.charCodeAt(o))){if(!i){n=o;break}}else i=!1;return-1===n?r?"/":".":r&&1===n?"/":t.slice(0,n)},e.basename=function(t,e){var r=function(t){"string"!=typeof t&&(t+="");var e,r=0,n=-1,i=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!i){r=e+1;break}}else-1===n&&(i=!1,n=e+1);return-1===n?"":t.slice(r,n)}(t);return e&&r.substr(-1*e.length)===e&&(r=r.substr(0,r.length-e.length)),r},e.extname=function(t){"string"!=typeof t&&(t+="");for(var e=-1,r=0,n=-1,i=!0,o=0,s=t.length-1;s>=0;--s){var u=t.charCodeAt(s);if(47!==u)-1===n&&(i=!1,n=s+1),46===u?-1===e?e=s:1!==o&&(o=1):-1!==e&&(o=-1);else if(!i){r=s+1;break}}return-1===e||-1===n||0===o||1===o&&e===n-1&&e===r+1?"":t.slice(e,n)};var i="b"==="ab".substr(-1)?function(t,e,r){return t.substr(e,r)}:function(t,e,r){return e<0&&(e=t.length+e),t.substr(e,r)}},632:function(t,e,r){(function(e){r(141),r(58),r(41),r(26),r(54),r(148),r(101),r(253);var n=this&&this.__rest||function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]])}return r},i=r(626);t.exports=function(t){var o=t.platform,s=void 0===o?"github":o,u=n(t,["platform"]),a={github:"@vssue/api-github-v3","github-v4":"@vssue/api-github-v4",gitlab:"@vssue/api-gitlab-v4",bitbucket:"@vssue/api-bitbucket-v2",gitee:"@vssue/api-gitee-v5"},l=a[s];if(!l)throw new Error("[@vssue/vuepress-plugin-vssue] Platform '".concat(s,"' is not supported. Available platforms: ").concat(Object.keys(a).join(", "),"."));try{r(503).resolve(l)}catch(t){throw new Error("[@vssue/vuepress-plugin-vssue] ".concat(l," is not installed. Run 'npm install ").concat(l,"' or 'yarn add ").concat(l,"' to install it."))}return{name:"vssue",enhanceAppFiles:[i.resolve(e,"enhanceApp.js")],define:{VSSUE_OPTIONS:JSON.stringify(u)},alias:{"@vssue/api$":r(503).resolve(l)}}}}).call(this,"/")}}]);