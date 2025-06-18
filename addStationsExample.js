function addStation(station) {
    // ...implementation to add a station...
}

// Using forEach
function addStationsWithForEach(stations) {
    stations.forEach(station => {
        addStation(station);
    });
}

// Using map
function addStationsWithMap(stations) {
    stations.map(station => {
        addStation(station);
        return null; // map returns a new array, but we ignore it here
    });
    
}