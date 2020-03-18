new WOW().init();
function myMap() {

   var myCenter = new google.maps.LatLng(52.1010523, -1.9229738);

   var mapProp = {
       center: myCenter,
       zoom: 16,
       mapTypeId: google.maps.MapTypeId.HYBRID
   };

   var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

   var marker = new google.maps.Marker({
       position: myCenter,
   });

   marker.setMap(map);
}
$(document).ready(function(){
   var d = new Date();
   var y = d.getFullYear();
   document.getElementById('copy').innerHTML = "Simon Brain " + y;
});
