(self.webpackChunksnowge=self.webpackChunksnowge||[]).push([[917],{4847:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return L}});var n=r(7294),a=r(6310),l=r(4529),o=r(7329),s=r(2122),c=(r(5697),r(4131));var i=function(e){var t=function(t){var r=e(t);return t.css?(0,s.Z)({},(0,c.Z)(r,e((0,s.Z)({theme:t.theme},t.css))),function(e,t){var r={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(r[n]=e[n])})),r}(t.css,[e.filterProps])):r};return t.propTypes={},t.filterProps=["css"].concat((0,o.Z)(e.filterProps)),t};var m=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=function(e){return t.reduce((function(t,r){var n=r(e);return n?(0,c.Z)(t,n):t}),{})};return n.propTypes={},n.filterProps=t.reduce((function(e,t){return e.concat(t.filterProps)}),[]),n},p=r(6156),d=r(3592);function f(e,t){return t&&"string"==typeof t?t.split(".").reduce((function(e,t){return e&&e[t]?e[t]:null}),e):null}var u=function(e){var t=e.prop,r=e.cssProperty,n=void 0===r?e.prop:r,a=e.themeKey,l=e.transform,o=function(e){if(null==e[t])return null;var r=e[t],o=f(e.theme,a)||{};return(0,d.k)(e,r,(function(e){var t;return"function"==typeof o?t=o(e):Array.isArray(o)?t=o[e]||e:(t=f(o,e)||e,l&&(t=l(t))),!1===n?t:(0,p.Z)({},n,t)}))};return o.propTypes={},o.filterProps=[t],o};function v(e){return"number"!=typeof e?e:"".concat(e,"px solid")}var E=m(u({prop:"border",themeKey:"borders",transform:v}),u({prop:"borderTop",themeKey:"borders",transform:v}),u({prop:"borderRight",themeKey:"borders",transform:v}),u({prop:"borderBottom",themeKey:"borders",transform:v}),u({prop:"borderLeft",themeKey:"borders",transform:v}),u({prop:"borderColor",themeKey:"palette"}),u({prop:"borderRadius",themeKey:"shape"})),h=m(u({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),u({prop:"display"}),u({prop:"overflow"}),u({prop:"textOverflow"}),u({prop:"visibility"}),u({prop:"whiteSpace"})),w=m(u({prop:"flexBasis"}),u({prop:"flexDirection"}),u({prop:"flexWrap"}),u({prop:"justifyContent"}),u({prop:"alignItems"}),u({prop:"alignContent"}),u({prop:"order"}),u({prop:"flex"}),u({prop:"flexGrow"}),u({prop:"flexShrink"}),u({prop:"alignSelf"}),u({prop:"justifyItems"}),u({prop:"justifySelf"})),y=m(u({prop:"gridGap"}),u({prop:"gridColumnGap"}),u({prop:"gridRowGap"}),u({prop:"gridColumn"}),u({prop:"gridRow"}),u({prop:"gridAutoFlow"}),u({prop:"gridAutoColumns"}),u({prop:"gridAutoRows"}),u({prop:"gridTemplateColumns"}),u({prop:"gridTemplateRows"}),u({prop:"gridTemplateAreas"}),u({prop:"gridArea"})),N=m(u({prop:"position"}),u({prop:"zIndex",themeKey:"zIndex"}),u({prop:"top"}),u({prop:"right"}),u({prop:"bottom"}),u({prop:"left"})),x=m(u({prop:"color",themeKey:"palette"}),u({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),g=u({prop:"boxShadow",themeKey:"shadows"});function b(e){return e<=1?"".concat(100*e,"%"):e}var C=u({prop:"width",transform:b}),k=u({prop:"maxWidth",transform:b}),S=u({prop:"minWidth",transform:b}),P=u({prop:"height",transform:b}),Z=u({prop:"maxHeight",transform:b}),M=u({prop:"minHeight",transform:b}),K=(u({prop:"size",cssProperty:"width",transform:b}),u({prop:"size",cssProperty:"height",transform:b}),m(C,k,S,P,Z,M,u({prop:"boxSizing"}))),T=r(1650),A=m(u({prop:"fontFamily",themeKey:"typography"}),u({prop:"fontSize",themeKey:"typography"}),u({prop:"fontStyle",themeKey:"typography"}),u({prop:"fontWeight",themeKey:"typography"}),u({prop:"letterSpacing"}),u({prop:"lineHeight"}),u({prop:"textAlign"})),R=r(1253),I=r(5505),Q=r(5706),O=r.n(Q),z=r(8518);function F(e,t){var r={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(r[n]=e[n])})),r}var G=r(8102),H=function(e){var t=function(e){return function(t){var r,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=a.name,o=(0,R.Z)(a,["name"]),c=l,i="function"==typeof t?function(e){return{root:function(r){return t((0,s.Z)({theme:e},r))}}}:{root:t},m=(0,z.Z)(i,(0,s.Z)({Component:e,name:l||e.displayName,classNamePrefix:c},o));t.filterProps&&(r=t.filterProps,delete t.filterProps),t.propTypes&&(t.propTypes,delete t.propTypes);var p=n.forwardRef((function(t,a){var l=t.children,o=t.className,c=t.clone,i=t.component,p=(0,R.Z)(t,["children","className","clone","component"]),d=m(t),f=(0,I.Z)(d.root,o),u=p;if(r&&(u=F(u,r)),c)return n.cloneElement(l,(0,s.Z)({className:(0,I.Z)(l.props.className,f)},u));if("function"==typeof l)return l((0,s.Z)({className:f},u));var v=i||e;return n.createElement(v,(0,s.Z)({ref:a,className:f},u),l)}));return O()(p,e),p}}(e);return function(e,r){return t(e,(0,s.Z)({defaultTheme:G.Z},r))}},W=i(m(E,h,w,y,N,x,g,K,T.Z,A)),j=H("div")(W,{name:"MuiBox"});var B=function(){var e,t=(0,n.useState)(2),r=t[0],a=t[1];return(0,n.useEffect)((function(){}),[r]),n.createElement("div",{className:"roadmap-container flex-column"},n.createElement("div",{className:"flex-row x-centre roadnav-container"},n.createElement("div",{className:"node-container flex-row y-centre"},n.createElement("div",{className:"node pointer flex-row y-centre x-centre passed "+(1===r?"active-node":""),onClick:function(){return a(1)}},n.createElement("span",{className:"small-font white-text"},"Q1")),n.createElement("div",{className:"node-container flex-row y-centre"},n.createElement("div",{className:"node-link passed"}),n.createElement("div",{className:"node-path on-the-way"}))),n.createElement("div",{className:"node-container flex-row y-centre"},n.createElement("div",{className:"node-link"}),n.createElement("div",{className:"node pointer flex-row y-centre x-centre "+(2===r?"active-node white-text":""),onClick:function(){return a(2)}},n.createElement("span",{className:"small-font"},"Q2")),n.createElement("div",{className:"node-container flex-row y-centre"},n.createElement("div",{className:"node-link"}),n.createElement("div",{className:"node-path"}))),n.createElement("div",{className:"node-container flex-row y-centre"},n.createElement("div",{className:"node-link"}),n.createElement("div",{className:"node pointer flex-row y-centre x-centre "+(3===r?"active-node white-text":""),onClick:function(){return a(3)}},n.createElement("span",{className:"small-font"},"Q3")),n.createElement("div",{className:"node-container flex-row y-centre"},n.createElement("div",{className:"node-link"}),n.createElement("div",{className:"node-path"}))),n.createElement("div",{className:"node-container flex-row y-centre"},n.createElement("div",{className:"node-link"}),n.createElement("div",{className:"node pointer flex-row y-centre x-centre "+(4===r?"active-node white-text":""),onClick:function(){return a(4)}},n.createElement("span",{className:"small-font"},"Q4")))),n.createElement(j,{className:"info-card flex-column"},0===(e=r)?n.createElement("div",{className:"flex-column"},n.createElement("div",{className:"card-header-combo"},"Quarter 1 - 2021"),n.createElement("div",{className:"flex-row x-centre"},"Chill dude, Snowge Mcfloofy wasn't even born yet..")):1===e?n.createElement("div",{className:"flex-column"},n.createElement("div",{className:"card-header-combo"},"Quarter 1 - 2021"),n.createElement("div",{className:"card-info-container flex-column"},n.createElement("div",{className:"milestone-container"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"passed milestone-complete"}),n.createElement("div",{className:"slightly-bolder"},"Milestone 1"),n.createElement("span",null," - "),n.createElement("div",null,"Snowge Pre Sale")),n.createElement("div",{className:"milestone-content flex-row wrap"},"HUGE SUCCESS! MUCH WOW! Our presale sold out in under 3 minutes.")),n.createElement("div",{className:"milestone-container"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"passed milestone-complete"}),n.createElement("div",{className:"slightly-bolder"},"Milestone 2"),n.createElement("span",null," - "),n.createElement("div",null,"Fair Launch on PancakeSwap")),n.createElement("div",{className:"milestone-content flex-row wrap"},"Even though we had to move our launch forward about 24 hours it was an overall success in terms of demand. During this period we came across an issue with safemoon forks that allows them to rug you poor folk. As a team we decided to nuke this and save our fellow floofs. ",n.createElement("strong",null,"Community over greed, always"),".")),n.createElement("div",{className:"milestone-container"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"not-passed milestone-complete"}),n.createElement("div",{className:"slightly-bolder"},"Milestone 3"),n.createElement("span",null," - "),n.createElement("div",null,"Meme Contest + Airdrops")),n.createElement("div",{className:"milestone-content flex-row wrap"},"Snowge doesn't belong to anyone. It belongs to all of us.")),n.createElement("div",{className:"milestone-container"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"not-passed milestone-complete"}),n.createElement("div",{className:"slightly-bolder"},"Milestone 4"),n.createElement("span",null," - "),n.createElement("div",null,"TechRate Audit")),n.createElement("div",{className:"milestone-content flex-row wrap"},"Your safety comes first!")))):2===e?n.createElement("div",{className:"flex-column"},n.createElement("div",{className:"card-header-combo"},"Quarter 2 - 2021"),n.createElement("div",{className:"card-info-container flex-column"},n.createElement("div",{className:"milestone-container"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"not-passed milestone-complete"}),n.createElement("div",{className:"slightly-bolder"},"Milestone 1"),n.createElement("span",null," - "),n.createElement("div",null,"CMC, CG, and Blockfolio Listing")),n.createElement("div",{className:"milestone-content flex-row wrap"},"Spreading the word one website at a time.")),n.createElement("div",{className:"milestone-container"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"not-passed milestone-complete"}),n.createElement("div",{className:"slightly-bolder"},"Milestone 2"),n.createElement("span",null," - "),n.createElement("div",null,"Have a PROPER website")),n.createElement("div",{className:"milestone-content flex-row wrap"},"I'm sorry frens Master Snowge has been riding me hard but by end of Q3 I promis you I will deliver a nice website to Master Snowge with loads more functionality.")),n.createElement("div",{className:"milestone-container"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"not-passed milestone-complete"}),n.createElement("div",{className:"slightly-bolder"},"Milestone 3"),n.createElement("span",null," - "),n.createElement("div",null,"CEX Listings (Ideal Timeline)")),n.createElement("div",{className:"milestone-content flex-row wrap"},"Can you boys, girls, and enbys imagine the level of mooning we would achieve??")),n.createElement("div",{className:"milestone-container"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"not-passed milestone-complete"}),n.createElement("div",{className:"slightly-bolder"},"Milestone 4"),n.createElement("span",null," - "),n.createElement("div",null,"SFSR Charitable Donation Fund")),n.createElement("div",{className:"milestone-content flex-row wrap"},"Saving the floofs is one of our highest priorities.")))):3===e?n.createElement("div",{className:"flex-column"},n.createElement("div",{className:"flex-column"},n.createElement("div",{className:"card-header-combo"},"Quarter 3 - 2021"),n.createElement("div",{className:"card-info-container flex-column"},n.createElement("div",{className:"milestone-container"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"not-passed milestone-complete"}),n.createElement("div",{className:"slightly-bolder"},"Milestone 1"),n.createElement("span",null," - "),n.createElement("div",null,"Snowge NFTs")),n.createElement("div",{className:"milestone-content flex-row wrap"},"These floofs are already underway, all I can spoil is that they will be ",n.createElement("i",null," italian chef kiss"),".")),n.createElement("div",{className:"milestone-container"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"not-passed milestone-complete"}),n.createElement("div",{className:"slightly-bolder"},"Milestone 2"),n.createElement("span",null," - "),n.createElement("div",null,"Physical Token Backing")),n.createElement("div",{className:"milestone-content flex-row wrap"},"Can't show our hand too much here...but this will be ",n.createElement("i",null," exclusive ")," to SnowgeCoin holders! More details coming soon!"))))):4===e?n.createElement("div",{className:"flex-column"},n.createElement("div",{className:"card-header-combo"},"Quarter 4 - 2021"),n.createElement("div",{className:"flex-row x-centre"},"More Snowges to come!")):void 0))},L=function(){return n.createElement("div",{className:"app-background flex-column scrollbar"},n.createElement(a.Z,null),n.createElement("div",{className:"flex-row x-centre"},n.createElement(B,null)),n.createElement("span",{className:"flex-spacer"}),n.createElement(l.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-roadmap-js-a089999ad2f7a651ff69.js.map