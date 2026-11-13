// EcoPonto Belém – lógica da aplicação (Leaflet + OpenStreetMap)
var locais,sel=null,mat=null,q="",pick=null,mk={},T,map=null;const KEY="ecoponto_belem_v1";
try{locais=JSON.parse(localStorage.getItem(KEY))}catch(e){}
if(!Array.isArray(locais))locais=JSON.parse(JSON.stringify(SEED));
function persist(){try{localStorage.setItem(KEY,JSON.stringify(locais))}catch(e){toast("Espaço do navegador cheio: use uma foto menor.")}}
// Atualiza cadastros já salvos no navegador sem apagar os locais adicionados pelo usuário.
if(Array.isArray(locais)&&!locais.some(function(x){return x.id==="e11"})){var novoEcoponto=SEED.find(function(x){return x.id==="e11"});if(novoEcoponto){locais.push(JSON.parse(JSON.stringify(novoEcoponto)));persist()}}
var $=function(s){return document.querySelector(s)};
function el(t,a){var e=document.createElement(t);a=a||{};for(var k in a){if(k==="class")e.className=a[k];else if(k.slice(0,2)==="on")e[k]=a[k];else e.setAttribute(k,a[k])}for(var i=2;i<arguments.length;i++)[].concat(arguments[i]).forEach(function(c){if(c!=null)e.append(c)});return e}
function toast(m){var t=$("#toast");t.textContent=m;t.className="on";clearTimeout(T);T=setTimeout(function(){t.className=""},2800)}
function gm(x){return"https://www.google.com/maps/search/?api=1&query="+x.lat+","+x.lng}
function rt(x){return"https://www.google.com/maps/dir/?api=1&destination="+x.lat+","+x.lng}
function tags(x){return el("div",{"class":"tags"},x.m&&x.m.length?x.m.map(function(t){return el("span",{"class":"tag"},t)}):el("span",{"class":"tag"},"Materiais: consultar no local"))}
function vis(){var s=q.toLowerCase();return locais.filter(function(x){return(!mat||(x.m||[]).indexOf(mat)>-1)&&[x.n,x.b,x.a].join(" ").toLowerCase().indexOf(s)>-1})}
function popup(x){var im=el("div",{"class":"im"},x.img?el("img",{src:x.img,alt:"Foto de "+x.n,style:"width:100%;height:100%;object-fit:cover"}):"♻");
return el("div",{"class":"pp"},im,el("b",{},x.n),el("div",{"class":"mut"},[x.a,x.b].filter(Boolean).join(" · ")),el("div",{"class":"mut"},x.h||"Horário: consultar no local"),x.d?el("p",{style:"margin:6px 0"},x.d):null,tags(x),x.ap?el("small",{},"Aprox.: confirmar coordenada"):null,
el("div",{"class":"ac"},el("a",{"class":"btn pri",href:gm(x),target:"_blank",rel:"noopener"},"Abrir no Google Maps"),el("a",{"class":"btn",href:rt(x),target:"_blank",rel:"noopener"},"Como chegar"),el("button",{"class":"btn",onclick:function(){form(x)}},"Editar"),el("button",{"class":"btn dg",onclick:function(e){if(e.target.dataset.c!=="1"){e.target.dataset.c="1";e.target.textContent="Confirmar?";return}locais=locais.filter(function(y){return y.id!==x.id});persist();closeInfo();render();toast("Local excluído.")}},"Excluir")))}
function render(){Object.keys(mk).forEach(function(k){map.removeLayer(mk[k])});mk={};var v=vis();if(!map){drawList();return}
v.forEach(function(x){var m=L.marker([x.lat,x.lng]).addTo(map).bindPopup(popup(x));m.on("click",function(){sel=x.id;Object.keys(mk).forEach(function(k){if(mk[k].setZIndexOffset)mk[k].setZIndexOffset(k===sel?1000:0)});drawList()});mk[x.id]=m});
if(v.length&&!sel){var bounds=L.latLngBounds(v.map(function(x){return[x.lat,x.lng]}));map.fitBounds(bounds,{padding:[40,40]})}drawList()}
function drawList(){var B=$("#list");B.textContent="";var v=vis();if(!v.length)B.append(el("div",{"class":"mut"},"Nenhum local encontrado."));
v.forEach(function(x){B.append(el("button",{"class":"it"+(x.id===sel?" sel":""),onclick:function(){openInfo(x,true)}},el("div",{"class":"th"},x.img?el("img",{src:x.img,alt:""}):"♻"),el("div",{},el("b",{},x.n),el("br"),el("small",{},[x.a,x.b].filter(Boolean).join(" · ")),tags(x))))})}
function chips(){var c=$("#chips");c.textContent="";["Todos"].concat(MATS).forEach(function(t){c.append(el("button",{"class":"chip","aria-pressed":String(t==="Todos"?mat===null:mat===t),onclick:function(){mat=t==="Todos"?null:t;sel=null;chips();render()}},t))})}
function form(x,pre){closeInfo();var n=!x;x=x||{m:[]};pre=pre||{};var F=$("#fm");F.textContent="";var v={};
function f(k,l,t,w,req){var i=t==="textarea"?el("textarea",{rows:3}):el("input",{type:t||"text"});if(t==="number")i.step="any";if(req)i.required=true;var val=pre[k]!=null?pre[k]:x[k];i.value=val==null?"":val;v[k]=i;return el("label",{"class":"f"+(w?" w":"")},l,i)}
var mc=el("div",{"class":"mc"}),cb=MATS.map(function(m){var i=el("input",{type:"checkbox"});i.checked=(pre.m||x.m||[]).indexOf(m)>-1;mc.append(el("label",{},i,m));return[m,i]});
var img=x.img||"",ph=el("input",{type:"file",accept:"image/*"});
ph.onchange=function(){var fl=ph.files[0];if(!fl)return;var r=new FileReader();r.onload=function(){var im=new Image();im.onload=function(){var s=Math.min(1,640/im.width),c=document.createElement("canvas");c.width=im.width*s;c.height=im.height*s;c.getContext("2d").drawImage(im,0,0,c.width,c.height);img=c.toDataURL("image/jpeg",.75);toast("Foto anexada.")};im.src=r.result};r.readAsDataURL(fl)};
F.append(el("h2",{},n?"Novo local":"Editar local"),f("n","Nome *","text",1,1),f("a","Endereço","text",1),f("b","Bairro"),f("h","Horário"),f("d","Descrição","textarea",1),el("div",{"class":"f w"},"Materiais aceitos",mc),f("lat","Latitude *","number",0,1),f("lng","Longitude *","number",0,1),
el("div",{"class":"w",style:"display:flex;gap:8px;flex-wrap:wrap"},el("button",{type:"button","class":"btn",onclick:function(){var cur={x:x,n:n,v:{n:v.n.value,a:v.a.value,b:v.b.value,h:v.h.value,d:v.d.value,m:cb.filter(function(c){return c[1].checked}).map(function(c){return c[0]})}};$("#dlg").close();pick=cur;toast("Clique no mapa para escolher a posição.")}},"📍 Escolher no mapa"),el("button",{type:"button","class":"btn",onclick:function(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(p){v.lat.value=p.coords.latitude.toFixed(6);v.lng.value=p.coords.longitude.toFixed(6)},function(){toast("Localização não permitida.")})}},"Usar minha localização")),
el("label",{"class":"f w"},"Foto do local",ph),
el("div",{"class":"fa"},el("button",{type:"button","class":"btn",onclick:function(){$("#dlg").close()}},"Cancelar"),el("button",{type:"submit","class":"btn pri"},"Salvar")));
F.onsubmit=function(e){e.preventDefault();var lat=parseFloat(v.lat.value),lng=parseFloat(v.lng.value);if(!(lat>=-90&&lat<=90&&lng>=-180&&lng<=180)){toast("Coordenadas inválidas.");return}
var o={id:n?"p"+Date.now():x.id,n:v.n.value.trim(),a:v.a.value.trim(),b:v.b.value.trim(),h:v.h.value.trim(),d:v.d.value.trim(),m:cb.filter(function(c){return c[1].checked}).map(function(c){return c[0]}),lat:lat,lng:lng,ap:0,img:img};
if(n)locais.push(o);else locais=locais.map(function(y){return y.id===o.id?o:y});persist();$("#dlg").close();sel=o.id;render();if(map){map.setView([lat,lng],16)}toast("Salvo com sucesso.")};
if(!$("#dlg").open)$("#dlg").showModal()}
$("#q").oninput=function(e){q=e.target.value;sel=null;render()};
$("#add").onclick=function(){form(null)};
$("#rs").onclick=function(){if(confirm("Restaurar os 11 locais originais? Alterações serão perdidas.")){locais=JSON.parse(JSON.stringify(SEED));persist();sel=null;render()}};
function closeInfo(){if(map)map.closePopup()}
function openInfo(x,center){sel=x.id;if(!map)return;if(center){map.setView([x.lat,x.lng],16)}if(mk[x.id])mk[x.id].openPopup();Object.keys(mk).forEach(function(k){if(mk[k].setZIndexOffset)mk[k].setZIndexOffset(k===sel?1000:0)});drawList()}
function aviso(m){var d=$("#map");d.textContent="";d.append(el("div",{"class":"aviso"},m))}
chips();render();
map=L.map("map").setView([-1.4558,-48.4902],12);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>'}).addTo(map);
map.on("click",function(e){if(!pick)return;var p=pick;pick=null;form(p.n?null:p.x,Object.assign({},p.v,{lat:e.latlng.lat.toFixed(6),lng:e.latlng.lng.toFixed(6)}))});
render();
