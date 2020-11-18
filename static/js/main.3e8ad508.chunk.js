(this["webpackJsonpkda-music-player"]=this["webpackJsonpkda-music-player"]||[]).push([[0],{24:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(2),r=a.n(c),i=a(12),o=a.n(i),s=a(4),u=a.n(s),l=a(8),d=a(3),j=a(6),b=a(7),h=a(5),g=function(e){var t=e.isPlaying,a=e.songInfo,r=e.audioRef,i=e.currentSong,o=e.songs,s=e.isRandom,j=e.volume,g=e.setIsRandom,m=e.setSongInfo,p=e.setIsPlaying,O=e.setCurrentSong,v=e.setSongs,f=e.handleVolume,x=e.setVolume;Object(c.useEffect)((function(){var e=o.map((function(e){return e.id===i.id?Object(d.a)(Object(d.a)({},e),{},{active:!0}):Object(d.a)(Object(d.a)({},e),{},{active:!1})}));v(e)}),[i]);var y=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},S=function(){var e=Object(l.a)(u.a.mark((function e(a){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.findIndex((function(e){return e.id===i.id})),c=null,s?(c=Math.floor(11*Math.random()),n===c&&(c=Math.floor(11*Math.random()))):((c=n+a)<0&&(c=o.length-1),c>=o.length&&(c=0)),e.next=5,O(o[c]);case 5:t&&r.current.play();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k={transform:"translateX(".concat(a.animationPercentage,"%)")};return Object(n.jsxs)("div",{className:"player",children:[Object(n.jsxs)("div",{className:"time-control",children:[Object(n.jsx)("p",{children:y(a.currentTime)}),Object(n.jsxs)("div",{style:{background:"linear-gradient(to right, ".concat(i.color[0],", ").concat(i.color[1],")")},className:"track",children:[Object(n.jsx)("input",{min:0,max:a.duration||0,value:a.currentTime,onChange:function(e){r.current.currentTime=e.target.value,m(Object(d.a)(Object(d.a)({},a),{},{currentTime:e.target.value}))},type:"range"}),Object(n.jsx)("div",{style:k,className:"animate-track"})]}),Object(n.jsx)("p",{children:a.duration?y(a.duration):"0:00"})]}),Object(n.jsxs)("div",{className:"play-control",children:[Object(n.jsx)(b.a,{onClick:function(){return S(-1)},className:"skip-back icon",size:"2x",icon:h.a}),Object(n.jsx)(b.a,{onClick:function(){t?(r.current.pause(),p(!t)):(r.current.play(),p(!t))},className:"play icon",size:"2x",icon:t?h.d:h.e}),Object(n.jsx)(b.a,{onClick:function(){return S(1)},className:"skip-forward icon",size:"2x",icon:h.b})]}),Object(n.jsx)("div",{class:"randomPlayButton",children:Object(n.jsx)(b.a,{onClick:function(){return g(!s)},className:"randomButton icon ".concat(s?"randomButton-Active":null),size:"2x",icon:h.f})}),Object(n.jsx)("div",{className:"slidecontainer",children:Object(n.jsx)("input",{type:"range",min:0,max:1,step:.1,value:j,className:"slider2",onChange:function(e){document.getElementById("myRange").value=e.target.value,x(e.target.value),f(e.target.value)},id:"myRange"})})]})},m=function(e){var t=e.currentSong,a=e.isPlaying;return Object(n.jsxs)("div",{className:"song-container",children:[Object(n.jsx)("img",{src:t.cover,className:" ".concat(a?"rotating-cover":""),alt:t.name}),Object(n.jsx)("h2",{children:t.name}),Object(n.jsx)("h3",{children:t.artist})]})},p=function(e){var t=e.song,a=e.songs,c=e.isPlaying,r=e.id,i=e.audioRef,o=e.setCurrentSong,s=e.setSongs,j=function(){var e=Object(l.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(t);case 2:n=a.map((function(e){return e.id===r?Object(d.a)(Object(d.a)({},e),{},{active:!0}):Object(d.a)(Object(d.a)({},e),{},{active:!1})})),s(n),c&&i.current.play();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{onClick:j,className:"library-song ".concat(t.active?"selected":""),children:[Object(n.jsx)("img",{src:t.cover,alt:t.name}),Object(n.jsxs)("div",{className:"song-description",children:[Object(n.jsx)("h3",{children:t.name}),Object(n.jsx)("h4",{children:t.artist})]})]})},O=function(e){var t=e.songs,a=e.audioRef,c=e.isPlaying,r=e.libraryStatus,i=e.setCurrentSong,o=e.setSongs;return Object(n.jsxs)("div",{className:"library ".concat(r?"active-library":""),children:[Object(n.jsx)("h2",{children:"Library"}),Object(n.jsx)("div",{className:"library-songs",children:t.map((function(e){return Object(n.jsx)(p,{song:e,songs:t,id:e.id,audioRef:a,setCurrentSong:i,isPlaying:c,setSongs:o},e.id)}))})]})},v=function(e){var t=e.libraryStatus,a=e.setLibraryStatus;return Object(n.jsxs)("nav",{children:[Object(n.jsxs)("h1",{children:[Object(n.jsx)("span",{className:"logo",children:"KDA "}),"Music player"]}),Object(n.jsxs)("button",{onClick:function(){a(!t)},children:["Library",Object(n.jsx)(b.a,{icon:h.c})]})]})},f=function(e){var t=e.isPlaying;return Object(n.jsx)("span",{className:"bigB uniqueTime ".concat(t?"flicker-in-1":""),children:"K / DA"})},x=(a(24),a(27));var y=function(){return[{name:"More",cover:"https://i0.wp.com/colorcodedlyrics.com/wp-content/uploads/2020/10/kda-more.jpg?fit=640%2C640&ssl=1",artist:"K/DA ft. Madison Beer, (G)I-DLE, Lexie Liu, Jaira Burns y Seraphine",audio:"https://audio.jukehost.co.uk/vEJdY0ibFVVP4NgDsBDcPKnqojLWY9sd",color:["#E8B72A","#A8C3E0"],id:Object(x.a)(),active:!0},{name:"Villain",cover:"https://i.ibb.co/rvx0qKW/evelynn-villain3.png",artist:"Evelynn ft. Madison Beer and Kim Petras",audio:"https://audio.jukehost.co.uk/gV1bxpmCAWcCiP7DlOqrnIil5c1GxUst",color:["#D746A1","#6F0C72"],id:Object(x.a)(),active:!1},{name:"Drum Go Dum",cover:"https://i.ibb.co/7SvKYgQ/all-out.png",artist:"K/DA ft. Wolftyla, Bekuh BOOM, Aluna, League of Legends",audio:"https://audio.jukehost.co.uk/FLgUN6h3D6Worj5TLBxDuSmEPr3GKRzC",color:["#CFFAE7","#A2D4F3"],id:Object(x.a)(),active:!1},{name:"Pop/Stars",cover:"https://i.ibb.co/D7F92Gn/popstars.png",artist:"K/DA ft. Madison Beer, (G)I-DLE, Jaira Burns, League Of Legends",audio:"https://audio.jukehost.co.uk/Y7q6VoEHDVPqujli5iH8TGFecmwQ9WRR",color:["#4a3d77","#06082B"],id:Object(x.a)(),active:!1},{name:"The Baddest",cover:"https://esports.as.com/2020/08/27/league-of-legends/THE-BADDEST_1386471401_485435_667x667.jpg",artist:"K/DA ft. (G)I-DLE, Bea Miller, Wolftyla",audio:"https://audio.jukehost.co.uk/EKZnzjqtkvQsZ3wJ898HR5Y8IoVUbwye",color:["#869BA6","#211D2A"],id:Object(x.a)(),active:!1},{name:"I'll Show You",cover:"https://i.ibb.co/Xsb6Vj3/showu.png",artist:"K/DA ft. Twice, Bekuh BOOM, Annika Wells",audio:"https://audio.jukehost.co.uk/fSfrC6W4E70660CCPXz1kUA4E6gV3HkY",color:["#A9C6E3","#1A1823"],id:Object(x.a)(),active:!1},{name:"Childhood Dreams",cover:"https://i.ibb.co/RDVK4ZR/childhoodnew.png",artist:"Cover Seraphine",audio:"https://audio.jukehost.co.uk/sEhmEUKiguFiEsdnBqby0p9dERKlPxeh",color:["#A8616D","#BE8991"],id:Object(x.a)(),active:!1},{name:"All The Things She Said",cover:"https://i.ibb.co/s2LH5dH/allthenew.png",artist:"Cover Seraphine",audio:"https://audio.jukehost.co.uk/6W3SMdy3DsAa2VuiOdIgmhP8CyD9Em7r",color:["#614389","#A3ABCF"],id:Object(x.a)(),active:!1},{name:"Made Me This Way",cover:"https://i.ibb.co/HDCc1pz/madethisnew.png",artist:"Cover Seraphine ft. Jasmine Clarke, Absofacto, Kosukekasza",audio:"https://audio.jukehost.co.uk/Pjh3DzgFjxC8P6m8GU7lC24UNSfTghwg",color:["#1C2E52","#8D8F8F"],id:Object(x.a)(),active:!1},{name:"Pop/Stars Cover",cover:"https://i.ibb.co/bNrNqyS/popstarsnew.png",artist:"Seraphine",audio:"https://audio.jukehost.co.uk/tM87whzbRPd6jpUGI4YYfgeOtl6OkbtT",color:["#6D4270","#B77E8D"],id:Object(x.a)(),active:!1},{name:"The Starry-Eyed Songstress",cover:"https://i.ibb.co/SNkcKPR/starry.png",artist:"Seraphine",audio:"https://audio.jukehost.co.uk/O3TvGR8K3tcOpIwTgNLhrw1qMCdgHpHZ",color:["#B14978","#FD7FC9"],id:Object(x.a)(),active:!1}]};var S=function(){var e=Object(c.useRef)(null),t=Object(c.useState)(y()),a=Object(j.a)(t,2),r=a[0],i=a[1],o=Object(c.useState)(r[0]),s=Object(j.a)(o,2),b=s[0],h=s[1],p=Object(c.useState)(!1),x=Object(j.a)(p,2),S=x[0],k=x[1],C=Object(c.useState)(!1),D=Object(j.a)(C,2),N=D[0],E=D[1],P=Object(c.useState)(1),A=Object(j.a)(P,2),B=A[0],M=A[1],T=Object(c.useState)({currentTime:0,duration:0,animationPercentage:0}),I=Object(j.a)(T,2),w=I[0],R=I[1],L=Object(c.useState)(!1),F=Object(j.a)(L,2),K=F[0],G=F[1],V=function(e){var t=e.target.currentTime,a=e.target.duration,n=Math.round(t),c=Math.round(a),r=Math.round(n/c*100);R(Object(d.a)(Object(d.a)({},w),{},{currentTime:t,duration:a,animationPercentage:r}))},z=function(){var t=Object(l.a)(u.a.mark((function t(){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r.findIndex((function(e){return e.id===b.id})),n=null,N?(n=Math.floor(11*Math.random()),a===n&&(n=Math.floor(11*Math.random()))):(n=a+1)>=r.length&&(n=0),t.next=5,h(r[n]);case 5:S&&e.current.play();case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"App ".concat(K?"library-active":""),children:[Object(n.jsx)(v,{libraryStatus:K,setLibraryStatus:G}),Object(n.jsx)(m,{isPlaying:S,currentSong:b}),Object(n.jsx)(g,{isPlaying:S,currentSong:b,songInfo:w,songs:r,audioRef:e,isRandom:N,volume:B,setVolume:M,setSongInfo:R,setIsPlaying:k,setCurrentSong:h,setSongs:i,setIsRandom:E,handleVolume:function(e){document.getElementById("audio-source").volume=e}}),Object(n.jsx)(O,{audioRef:e,songs:r,isPlaying:S,setCurrentSong:h,setSongs:i,libraryStatus:K}),Object(n.jsx)("audio",{onLoadedMetadata:V,onTimeUpdate:V,ref:e,src:b.audio,onEnded:z,id:"audio-source"}),Object(n.jsx)(f,{isPlaying:S}),Object(n.jsxs)("h1",{className:"made-with ".concat(K?"library-active z":""),children:["Made with \u2764\ufe0f by"," ",Object(n.jsx)("a",{href:"https://github.com/sebasvil20",target:"_blank",rel:"noopener noreferrer",children:"@Sebasvil20"})]}),Object(n.jsx)("h4",{className:"copyright ".concat(K?"library-active z":""),children:"NO COPYRIGHT INFRINGEMENT INTENDED. ALL K/DA COPYRIGHT BELONG TO RIOT GAMES, INC."})]})},k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,28)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(S,{})}),document.getElementById("root")),k()}},[[25,1,2]]]);
//# sourceMappingURL=main.3e8ad508.chunk.js.map