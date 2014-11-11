$(function(){
var map = new BMap.Map("allmap");
var myGeo = new BMap.Geocoder();
// 将地址解析结果显示在地图上,并调整地图视野
myGeo.getPoint("西北政法大学北校区", function(point){
if (point) {
map.centerAndZoom(point, 16);
map.addOverlay(new BMap.Marker(point));
}
}, "西安市");
map.addControl(new BMap.NavigationControl());  //添加默认缩放平移控件
map.enableScrollWheelZoom();                            //启用滚轮放大缩小
});