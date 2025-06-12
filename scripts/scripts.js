function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: { lat: 9.9281, lng: -84.0907 },
  });

  const properties = [
    {
      title: "Casa en Escazú",
      price: "$250,000",
      image: "images/escazu3.webp",
      position: { lat: 9.9194, lng: -84.1425 },
    },
    {
      title: "Apartamento en Santa Ana",
      price: "$180,000",
      image: "images/staana1.webp",
      position: { lat: 9.9364, lng: -84.1826 },
    },
    {
      title: "Villa en Nosara",
      price: "$450,000",
      image: "images/nosara3.webp",
      position: { lat: 9.9797, lng: -85.6500 },
    }
  ];

  properties.forEach(property => {
    const marker = new google.maps.Marker({
      position: property.position,
      map,
      title: property.title,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: "#ef3340",
        fillOpacity: 1,
        scale: 8,
        strokeColor: "#ffffff",
        strokeWeight: 2
      }
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `
        <div class="popup">
          <strong>${property.title}</strong><br>
          Precio: ${property.price}<br>
          <img src="${property.image}" alt="Imagen de ${property.title}">
        </div>
      `
    });

    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });
  });
}
