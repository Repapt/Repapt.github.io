(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),l=a.n(r),i=(a(13),a(1)),o=a(2),s=a(4),u=a(3),b=a(5),p=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).onClick=function(){var e=a.props,t=e.label;(0,e.onClick)(t)},a}return Object(b.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.onClick,t=this.props,a=t.activeTab,n=t.label,r="tab-list-item";return a===n&&(r+=" tab-list-active"),c.a.createElement("li",{className:r,onClick:e},n)}}]),t}(c.a.Component),m=(a(14),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).onClickTabItem=function(e){a.setState({activeTab:e})},a.state={activeTab:a.props.children[0].props.label},a}return Object(b.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.onClickTabItem,t=this.props.children,a=this.state.activeTab;return c.a.createElement("div",{className:"tab-manager"},c.a.createElement("ol",{className:"tab-list"},t.map((function(t){var n=t.props.label;return c.a.createElement(p,{activeTab:a,key:n,label:n,onClick:e})}))),c.a.createElement("div",{className:"tab-content"},t.map((function(e){if(e.props.label===a)return e.props.children}))))}}]),t}(c.a.Component)),h=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(m,null,c.a.createElement("div",{label:"Home"},c.a.createElement("h1",null," Hi, I'm Samuel "))))}}]),t}(c.a.Component);l.a.render(c.a.createElement(h,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.1461ff35.chunk.js.map