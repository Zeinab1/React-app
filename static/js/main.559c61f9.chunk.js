(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(7),c=a.n(r),s=(a(15),a(1)),l=a(2),m=a(4),o=a(3),u=a(5),d=(a(16),function(e){var t=e.items,a=e.deleteItem,n=t.length?t.map(function(e){return i.a.createElement("div",{key:e.id},i.a.createElement("span",{className:"name"},e.name),i.a.createElement("span",{className:"age"},e.age),i.a.createElement("span",{className:"action icon",onClick:function(){return a(e.id)}},"\xd7"))}):i.a.createElement("p",null,"There is no items to show");return i.a.createElement("div",{className:"ListItems"},i.a.createElement("div",null,i.a.createElement("span",{className:"name title"},"Name"),i.a.createElement("span",{className:"age title"},"Age"),i.a.createElement("span",{className:"action title"},"Action")),n)}),h=a(8),p=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).state={name:"",age:""},a.handleChange=function(e){a.setState(Object(h.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){if(e.preventDefault(),""===e.target.name.value)return!1;a.props.addItem(a.state),a.setState({name:"",age:""})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("input",{type:"text",id:"name",placeholder:"Type your name ...",onChange:this.handleChange,value:this.state.name}),i.a.createElement("input",{type:"number",id:"age",placeholder:"Type your age ...",onChange:this.handleChange,value:this.state.age}),i.a.createElement("input",{className:"submit",type:"submit",value:"Add"})))}}]),t}(n.Component),g=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).state={items:[{id:1,name:"Ahmed",age:23},{id:2,name:"Tarek",age:43},{id:3,name:"Gamal",age:23}]},a.deleteItem=function(e){var t=a.state.items.filter(function(t){return t.id!==e});a.setState({items:t})},a.addItem=function(e){e.id=Math.random();var t=a.state.items;t.push(e),a.setState({items:t})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App container "},i.a.createElement("h1",{className:"text-center"},"To dolist"),i.a.createElement(d,{items:this.state.items,deleteItem:this.deleteItem}),i.a.createElement(p,{addItem:this.addItem}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.559c61f9.chunk.js.map