(self.webpackChunkyt_clone=self.webpackChunkyt_clone||[]).push([[743],{8511:(e,t,s)=>{var r,o=Object.create,a=Object.defineProperty,l=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,i=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty,h=(e,t,s,r)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let o of n(t))p.call(e,o)||o===s||a(e,o,{get:()=>t[o],enumerable:!(r=l(t,o))||r.enumerable});return e},u=(e,t,s)=>(((e,t,s)=>{t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s})(e,"symbol"!==typeof t?t+"":t,s),s),c={};((e,t)=>{for(var s in t)a(e,s,{get:t[s],enumerable:!0})})(c,{default:()=>b}),e.exports=(r=c,h(a({},"__esModule",{value:!0}),r));var y=((e,t,s)=>(s=null!=e?o(i(e)):{},h(!t&&e&&e.__esModule?s:a(s,"default",{value:e,enumerable:!0}),e)))(s(2791)),d=s(2362),f=s(365);const m=e=>e.replace("/manage/videos","");class b extends y.Component{constructor(){super(...arguments),u(this,"callPlayer",d.callPlayer),u(this,"duration",null),u(this,"currentTime",null),u(this,"secondsLoaded",null),u(this,"mute",(()=>{this.setMuted(!0)})),u(this,"unmute",(()=>{this.setMuted(!1)})),u(this,"ref",(e=>{this.container=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){this.duration=null,(0,d.getSDK)("https://player.vimeo.com/api/player.js","Vimeo").then((t=>{if(!this.container)return;const{playerOptions:s,title:r}=this.props.config;this.player=new t.Player(this.container,{url:m(e),autoplay:this.props.playing,muted:this.props.muted,loop:this.props.loop,playsinline:this.props.playsinline,controls:this.props.controls,...s}),this.player.ready().then((()=>{const e=this.container.querySelector("iframe");e.style.width="100%",e.style.height="100%",r&&(e.title=r)})).catch(this.props.onError),this.player.on("loaded",(()=>{this.props.onReady(),this.refreshDuration()})),this.player.on("play",(()=>{this.props.onPlay(),this.refreshDuration()})),this.player.on("pause",this.props.onPause),this.player.on("seeked",(e=>this.props.onSeek(e.seconds))),this.player.on("ended",this.props.onEnded),this.player.on("error",this.props.onError),this.player.on("timeupdate",(e=>{let{seconds:t}=e;this.currentTime=t})),this.player.on("progress",(e=>{let{seconds:t}=e;this.secondsLoaded=t})),this.player.on("bufferstart",this.props.onBuffer),this.player.on("bufferend",this.props.onBufferEnd),this.player.on("playbackratechange",(e=>this.props.onPlaybackRateChange(e.playbackRate)))}),this.props.onError)}refreshDuration(){this.player.getDuration().then((e=>{this.duration=e}))}play(){const e=this.callPlayer("play");e&&e.catch(this.props.onError)}pause(){this.callPlayer("pause")}stop(){this.callPlayer("unload")}seekTo(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.callPlayer("setCurrentTime",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}setMuted(e){this.callPlayer("setMuted",e)}setLoop(e){this.callPlayer("setLoop",e)}setPlaybackRate(e){this.callPlayer("setPlaybackRate",e)}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return this.secondsLoaded}render(){const{display:e}=this.props,t={width:"100%",height:"100%",overflow:"hidden",display:e};return y.default.createElement("div",{key:this.props.url,ref:this.ref,style:t})}}u(b,"displayName","Vimeo"),u(b,"canPlay",f.canPlay.vimeo),u(b,"forceLoad",!0)}}]);
//# sourceMappingURL=reactPlayerVimeo.94219f52.chunk.js.map