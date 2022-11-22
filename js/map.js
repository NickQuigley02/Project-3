function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4
  });
}

window.initMap = initMap;