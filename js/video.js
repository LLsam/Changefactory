<style>
.pic{clear:both;width:410px;height:240px}/*图片区域*/
.pic img{width:410px;height:240px}/*图片宽度和高度，可自行修改*/
.play{clear:both;width:410px;height:240px;display:none;}/*视频区域-最初先设为隐藏*/
</style>
<div id="pic"><a href="JavaScript:vide();"><img src="图片.jpg"</a></div>
<div id="play"><embed src="通宵序列.mp4" width="410" height="240" autostart="false"></embed></div>
<script>
function $(v){return document.getElementById(v);}
function view(id){$(id).style.display = "block";}
function hide(id){$(id).style.display = "none";}
function vide(){//点击图片显示视频
	hide("pic");view("play");
}
</script>