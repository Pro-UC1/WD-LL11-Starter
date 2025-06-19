function addStationElement(station) {
    const list = document.getElementById("station-list");
    const div = document.createElement("div");
    div.className = "station";
    div.innerHTML = `
      <h3>${station.name}</h3>
      <p><strong>Location:</strong> ${station.location}</p>
      <p><strong>Type:</strong> ${station.type}</p>
    `;
    list.appendChild(div);
  }
 
function groupStationsByCity(stationsByCity) {
    const container = document.getElementById("grouped-stations");
    if (!container) return;

    container.innerHTML = ""; // Clear previous content

    for (const city in stationsByCity) {
        const cityDiv = document.createElement("div");
        cityDiv.className = "city-group";
        cityDiv.innerHTML = `<h3>${city}</h3>`;
        
        const ul = document.createElement("ul");
        stationsByCity[city].forEach(station => {
            const li = document.createElement("li");
            li.textContent = station.name;
            ul.appendChild(li);
        });
        
        cityDiv.appendChild(ul);
        container.appendChild(cityDiv);
    }
} 
 

  