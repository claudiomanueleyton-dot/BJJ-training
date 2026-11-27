(()=>{
const main=document.querySelector('main');
const bar=document.createElement('nav');bar.id='mobileNav';bar.setAttribute('aria-label','Snabbnavigation');
const items=[['dashboard','⌂','Hem'],['athlete','＋','Träning'],['calendar','▦','Kalender'],['groupoverview','♟','Grupp'],['menu','☰','Mer']];
for(const [id,icon,label] of items){const b=document.createElement('button');b.type='button';b.dataset.destination=id;b.innerHTML=`<span aria-hidden="true">${icon}</span><small>${label}</small>`;b.onclick=()=>id==='menu'?$('menuToggle').click():openTab(id);bar.append(b)}main.append(bar);
function sync(){const active=document.querySelector('.panel.active')?.id;const group= ['groupoverview','planner','groupfitness','groupcalendar'].includes(active);for(const b of bar.children){const id=b.dataset.destination;b.hidden=id==='groupoverview'&&!coach;const selected=id===active||(id==='groupoverview'&&group)||(id==='athlete'&&active==='fitness');b.classList.toggle('current',selected);if(selected)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current')}}
const old=openTab;openTab=function(id){old(id);sync()};const previous=render;render=function(){previous();sync()};sync();
})();
