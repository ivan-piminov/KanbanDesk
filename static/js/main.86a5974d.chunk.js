(this.webpackJsonpkanbandest=this.webpackJsonpkanbandest||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(7),r=a.n(o),c=(a(13),a(5)),l=a(1),i=a(2),u=a(3),d=a(4),m=function(e){var t=e.toDoTask.map((function(t){return s.a.createElement("div",{style:{border:"1px solid black",margin:"10px",display:"flex",flexDirection:"column",alignItems:"center",padding:"0 5px"},key:t.id},t.taskName,s.a.createElement("div",null,s.a.createElement("button",{type:"button",className:"btn btn-sm btn-success mb-2 mt-3",onClick:function(){return e.addTaskInProgressStatus(t.id,t.taskName)}}," \u041d\u0430\u0447\u0430\u0442\u044c")))}));return s.a.createElement("div",{className:"container",style:{borderRight:"1px solid black",display:"flex",flexDirection:"column",alignItems:"center"}},s.a.createElement("div",null,t),s.a.createElement("div",null,s.a.createElement("button",{type:"button",className:"btn btn-sm btn-primary",onClick:e.addNewTask}," \u041d\u043e\u0432\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0430 ")))},k=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={count:e.props.currentValue},e.countTimers=function(){setInterval((function(){e.setState({count:e.state.count+1},(function(){e.props.totalTime(e.props.id,e.state.count)}))}),1e3)},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.countTimers()}},{key:"render",value:function(){var e=this.state.count,t=Math.floor(e%86400/3600),a=Math.floor(e%3600/60),n=Math.floor(e%60);return s.a.createElement("div",null,s.a.createElement("span",null,t>=10?t:"0".concat(t),":"),s.a.createElement("span",null,a>=10?a:"0".concat(a),":"),s.a.createElement("span",null,n>=10?n:"0".concat(n)))}}]),a}(s.a.Component),f=function(e){var t=e.tasksInProgress.map((function(t){return s.a.createElement("div",{style:{border:"1px solid black",margin:"10px",display:"flex",flexDirection:"column",alignItems:"center",padding:"0 5px"},key:t.id},t.taskName,s.a.createElement(k,{id:t.id,currentValue:t.count,totalTime:e.counter}),s.a.createElement("button",{type:"button",className:"btn btn-sm btn-info mb-2",onClick:function(){return e.sendTaskToDone(t.id,t.taskName,t.count)}}," \u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c"))}));return s.a.createElement("div",{className:"container",style:{borderRight:"1px solid black",display:"flex",flexDirection:"column",alignItems:"center"}},t)},p=function(e){var t=e.tasksDone.map((function(e){return s.a.createElement("div",{key:e.id,style:{border:"1px solid black",margin:"10px",display:"flex",flexDirection:"column",alignItems:"center",padding:"0 5px"}},s.a.createElement("div",null,e.taskName),s.a.createElement("div",null,s.a.createElement("b",null," \u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c: ",e.price," \u0440\u0443\u0431.")))}));return s.a.createElement("div",{className:"container",style:{display:"flex",flexDirection:"column",alignItems:"center"}},t)},b=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={tasksTodo:[{id:Math.random(),taskName:"\u0438\u0441\u043a\u0430\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u0443"},{id:Math.random(),taskName:"\u0430\u043a\u0442\u0438\u0432\u043d\u0435\u0435 \u0438\u0441\u043a\u0430\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u0443"},{id:Math.random(),taskName:"\u0435\u0449\u0435 \u0431\u043e\u043b\u0435\u0435 \u0430\u043a\u0442\u0438\u0432\u043d\u043e \u0438\u0441\u043a\u0430\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u0443"}],tasksInProgress:[],tasksDone:[]},e.saveState=function(){localStorage.setItem("our-state",JSON.stringify(e.state))},e.restoreState=function(){var t=localStorage.getItem("our-state");if(t){var a=JSON.parse(t);e.setState(a)}},e.addNewTask=function(){var t=prompt("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438");""===t||null===t?prompt("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438"):e.setState({tasksTodo:[].concat(Object(c.a)(e.state.tasksTodo),[{id:Math.random().toFixed(4),taskName:t}])},(function(){e.saveState()}))},e.addTaskInProgressStatus=function(t,a){e.setState({tasksTodo:e.state.tasksTodo.filter((function(e){return e.id!==t})),tasksInProgress:[].concat(Object(c.a)(e.state.tasksInProgress),[{id:t,taskName:a,count:0}])},(function(){e.saveState()}))},e.sendTaskToDone=function(t,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=1e3;e.setState({tasksInProgress:e.state.tasksInProgress.filter((function(e){return e.id!==t})),tasksDone:[].concat(Object(c.a)(e.state.tasksDone),[{id:t,taskName:a,price:(n/3600*s).toFixed(2)}])},(function(){e.saveState()}))},e.counter=function(t,a){e.saveState(),e.state.tasksInProgress.forEach((function(e){e.id===t&&(e.count=a)}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.restoreState()}},{key:"render",value:function(){return s.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},s.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",borderBottom:"1px solid black",margin:"5px 0 5px 0",paddingBottom:"10px"}},s.a.createElement("div",null,s.a.createElement("b",null,"ToDo")),s.a.createElement("div",null,s.a.createElement("b",null,"InProgress")),s.a.createElement("div",null,s.a.createElement("b",null,"Done"))),s.a.createElement("div",{className:"container-fluid d-flex justify-content-around mt-2"},s.a.createElement(m,{toDoTask:this.state.tasksTodo,addNewTask:this.addNewTask,addTaskInProgressStatus:this.addTaskInProgressStatus}),s.a.createElement(f,{tasksInProgress:this.state.tasksInProgress,sendTaskToDone:this.sendTaskToDone,counter:this.counter}),s.a.createElement(p,{tasksDone:this.state.tasksDone})))}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.86a5974d.chunk.js.map