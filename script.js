// Initial rendering logic – to be refactored during the lab
function addStations(stations) {
  // TODO: Refactor this loop using map() or forEach()
  for (let i = 0; i < stations.length; i++) {
    addStationElement(stations[i]);
  }


  

}

 

// 🧪 TEAM FEATURES

// 💌 Wishlist Renderer
function renderWishlist() {
  // TODO: Use forEach to display items in wishlist


}

// ❌ Search Feedback
function searchStations(query) {
  // TODO: Filter stations array based on query
  // TODO: Display error if none found

}

// 🌟 Random Featured Station
function pickFeaturedStation() {
  // TODO: Use Math.random to select and display a station
}

// 🏙️ Group by City
function groupStationsByCity() {
  
  // Group stations under each city
  const grouped = {};
  stations.forEach(station => {
    const city = station.city;
    if (!grouped[city]) {
      grouped[city] = [];
    }
    grouped[city].push(station);
  });
  return grouped;

}


// 🔄 Filter Toggle
function toggleFilteredStations() {
  // TODO: Add toggle logic to filter stations dynamically
}

// Load stations on page startgr
addStations(stations);

function renderGroupedStationsByCity() {
  const grouped = groupStationsByCity();
  let html = '';
  for (const city in grouped) {
    html += `<h3>${city}</h3><ul>`;
    grouped[city].forEach(station => {
      html += `<li>${station.name}</li>`;
    });
    html += '</ul>';
  }
  const container = document.getElementById('city-groups');
  if (container) {
    container.innerHTML = html;
  }
}

