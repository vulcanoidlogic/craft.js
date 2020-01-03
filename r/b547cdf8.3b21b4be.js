(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{140:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return d})),t.d(n,"default",(function(){return m}));var r=t(1),a=t(9),i=(t(0),t(150)),o=t(151),s={id:"frame",title:"<Frame />",sidebar_label:"<Frame />"},c={id:"api/frame",title:"<Frame />",description:'import {API, Badge} from "./API";',source:"@site/docs/api/Frame.md",permalink:"/r/docs/api/frame",sidebar_label:"<Frame />",sidebar:"docs",previous:{title:"<Editor />",permalink:"/r/docs/api/editor"},next:{title:"<Canvas />",permalink:"/r/docs/api/canvas"}},d=[{value:"Reference",id:"reference",children:[{value:"Props",id:"props",children:[]}]},{value:"Examples",id:"examples",children:[{value:"Designing the default screen",id:"designing-the-default-screen",children:[]},{value:"Loading from serialised Nodes",id:"loading-from-serialised-nodes",children:[]}]}],l={rightToc:d},p="wrapper";function m(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)(p,Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)(o.b,{type:"component",mdxType:"Badge"}),Object(i.b)("p",null,"Frame defines the editable area in your page editor. It is rendered based on the editor's internal state (i.e. Nodes)."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"const { connectors, setProp, ...collected } = useNode(collector);\n")),Object(i.b)("h2",{id:"reference"},"Reference"),Object(i.b)("h3",{id:"props"},"Props"),Object(i.b)("p",null,"Both props specifies the initial screen to render. You must design the default screen with React Elements first (via the ",Object(i.b)("inlineCode",{parentName:"p"},"children")," prop), and only load from ",Object(i.b)("inlineCode",{parentName:"p"},"json")," if it's available. "),Object(i.b)(o.a,{items:[["children","React.ReactElement<Canvas>","Creates the initial screen using React Elements. Must begin with a &lt;Canvas /&gt; which creates the Root Node."],["json?","String","Loads the initial screen from the serialised JSON Nodes"]],mdxType:"API"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"These props are memoized - after the initial render, changes to these props will have no effect. If for example, you wish to load a different set of serialised JSON nodes after the initial render, you may use the ",Object(i.b)("inlineCode",{parentName:"p"},"deserialize")," method via the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/r/docs/api/useEditor"}),Object(i.b)("inlineCode",{parentName:"a"},"useEditor"))," hook.")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("h3",{id:"designing-the-default-screen"},"Designing the default screen"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:"{9,10,16,17}","{9,10,16,17}":!0}),'import {Editor, Frame, Canvas} from "cradt";\n\nconst App = () => {\n  return (\n    <div>\n      <h2>My App!</h2>\n      <Editor>\n        <h2>My Page Editor</h2>\n        <Frame> \n          <Canvas is={Container}> // defines the Root Node\n            <h2>Drag me around</h2>\n            <MyComp text="You can drag me around too" />\n            <Canvas is="div" style={{background: "#333" }}>\n              <p>Same here</p>\n            </Canvas>\n          </Canvas>\n        </Frame>\n      </Editor>\n    </div>\n  )\n}\n')),Object(i.b)("h3",{id:"loading-from-serialised-nodes"},"Loading from serialised Nodes"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:"{10}","{10}":!0}),'import {Editor, Frame, Canvas} from "cradt";\n\nconst App = () => {\n  return (\n    <div>\n      <h2>My App!</h2>\n      <Editor>\n        <h2>My Page Editor</h2>\n        <Frame\n          json=\'{"canvas-ROOT":{"type":"div","isCanvas":true,"props":{},"parent":null,"displayName":"div","custom":{},"nodes":["node-sdiwzXkvQ","node-rGFDi0G6m","node-yNBLMy5Oj"]},"node-sdiwzXkvQ":{"type":{"resolvedName":"Card"},"props":{},"parent":"canvas-ROOT","displayName":"Card","custom":{},"_childCanvas":{"main":"canvas-_EEw_eBD_","second":"canvas-lE4Ni9oIn"}}\'\n        > \n          <Canvas is={Container}> // defines the Root Node\n            <h2>Drag me around</h2>\n            <MyComp text="You can drag me around too" />\n            <Canvas is="div" style={{background: "#333" }}>\n              <p>Same here</p>\n            </Canvas>\n          </Canvas>\n        </Frame>\n      </Editor>\n    </div>\n  )\n}\n')))}m.isMDXComponent=!0},150:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=a.a.createContext({}),l=function(e){var n=a.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s({},n,{},e)),t},p=function(e){var n=l(e.components);return a.a.createElement(d.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(t),m=r,b=p["".concat(o,".").concat(m)]||p[m]||u[m]||i;return t?a.a.createElement(b,s({ref:n},d,{components:t})):a.a.createElement(b,s({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=b;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=t[d];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},151:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return s}));var r=t(0),a=t.n(r),i=function(e){var n=e.item,t=n[0],r=n.length>1&&"string"==typeof n[1]&&n[1],i=3==n.length?"string"==typeof n[2]&&n[2]:4==n.length&&"string"==typeof n[3]&&n[3],s=n.length>1&&Array.isArray(n[n.length-1])&&n[n.length-1];return a.a.createElement("li",{className:"api-item"},a.a.createElement("div",null,t&&a.a.createElement("code",{className:"api-title"},t),r&&a.a.createElement("strong",{className:"api-type"},r)),i&&a.a.createElement("div",{className:"api-description",dangerouslySetInnerHTML:{__html:i}}),s&&a.a.createElement(o,{items:s}))},o=function(e){var n=e.items;return a.a.createElement("ul",null,n&&n.map((function(e,n){return a.a.createElement(i,{item:e,key:n})})))},s=function(e){var n,t=e.type,r=e.title,i=void 0===r||r,o=e.noMargin,s=void 0===o||o;switch(t){case"hoc":n="Higher-Order Component";break;default:n=t[0].toUpperCase()+t.substring(1)}return a.a.createElement("div",{className:"badge-wrapper"},a.a.createElement("span",{className:"badge badge-"+t+" "+(i?"badge-title":"")+" "+(s?"badge-no-margin":"")},n))}}}]);