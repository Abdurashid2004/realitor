import{i as r,m as o,n as l}from"./app-aaf1260a.js";import{r as c}from"./resultUIStore-81e22dea.js";import{D as a}from"./DatabaseType-0c502678.js";import"./resultStore-5e9bef73.js";import"./wrapper-101fa27b.js";const d={mixins:[r],data(){return{dbType:null,singleTable:!1,panels:[{id:"design",i18n:"table.design"},{id:"result",i18n:"table.data"},{id:"process",i18n:"table.process",hidden:()=>[a.SQLITE,a.DUCK_DB].includes(this.dbType)},{id:"erDiagram",i18n:"table.erDiagram",icon:"codicon-symbol-class yellow",hidden:()=>!0}],activePanel:"result"}},computed:{...o(c,["showSQLPanel"]),computedPanels(){return this.panels.filter(t=>{var e;return((e=t==null?void 0:t.hidden)==null?void 0:e.call(t))!=!0})}},mounted(){this.activePanel=this.$route.name,this.on("table_info",({singleTable:t,dbType:e})=>{this.dbType=e,this.singleTable=t})},methods:{changePanel(t){this.activePanel=t,this.$router.push(t)}}};var _=function(){var e=this,i=e._self._c;return i("div",[e.singleTable?i("ul",{directives:[{name:"show",rawName:"v-show",value:e.showSQLPanel,expression:"showSQLPanel"}],staticClass:"tab",attrs:{id:"tableTab"}},e._l(e.computedPanels,function(s,n){return i("li",{key:n,staticClass:"tab__item",class:{"tab__item--active":e.activePanel==s.id},on:{click:function(h){return e.changePanel(s.id)}}},[s.icon?i("i",{class:s.icon,staticStyle:{position:"relative",top:"3px"},attrs:{type:"icon"}}):e._e(),e._v(" "+e._s(e.$t(s.i18n))+" ")])}),0):e._e(),i("keep-alive",[i("router-view")],1)],1)},u=[],m=l(d,_,u,!1,null,"4d705889",null,null);const P=m.exports;export{P as default};
