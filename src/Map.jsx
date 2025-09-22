import { useEffect, useRef, useState } from 'react'
import './Map.css'

const Map = () => {
  const mapRef = useRef(null)
  const mapInstanceRef = useRef(null)
  const [mapLoaded, setMapLoaded] = useState(false)

  // NTU library locations with more accurate coordinates
  const locations = [
    {
      name: "Lee Wee Nam Library",
      coords: [1.34685, 103.67985], // More precise main library location
      capacity: "75%",
      color: "#FF9500"
    },
    {
      name: "Business Library", 
      coords: [1.34515, 103.68050], // NBS S3 Building more accurate
      capacity: "45%",
      color: "#34C759"
    },
    {
      name: "Humanities and Social Sciences Library",
      coords: [1.34895, 103.67935], // HSS Building more precise
      capacity: "92%", 
      color: "#FF3B30"
    },
    {
      name: "Chinese Library",
      coords: [1.34885, 103.67925], // Adjusted near HSS
      capacity: "38%",
      color: "#34C759"
    },
    {
      name: "Art, Media & Design Library",
      coords: [1.34385, 103.67885], // ADM Building more accurate
      capacity: "67%",
      color: "#FF9500"
    },
    {
      name: "Communication & Information Library",
      coords: [1.34775, 103.68155], // WKWSCI Building adjusted
      capacity: "84%",
      color: "#FF3B30"
    }
  ]

  useEffect(() => {
    if (mapRef.current && !mapInstanceRef.current) {
      // Initialize the map centered on NTU campus
      const map = window.L.map(mapRef.current).setView([1.3466, 103.6798], 16)

      // Use Esri World Street Map (looks like Google Maps)
      const tileLayer = window.L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: 19,
        attribution: 'Map'
      }).addTo(map)

      tileLayer.on('load', function() {
        setMapLoaded(true)
      })

      // Set loaded after a short delay as fallback
      setTimeout(() => setMapLoaded(true), 3000)

      // Add pin-style markers for each location
      locations.forEach(location => {
        // Create custom pin-style marker
        const customIcon = window.L.divIcon({
          className: 'custom-pin',
          html: `
            <div style="
              position: relative;
              width: 30px;
              height: 30px;
            ">
              <div style="
                width: 20px;
                height: 20px;
                background-color: ${location.color};
                border: 2px solid white;
                border-radius: 50% 50% 50% 0;
                transform: rotate(-45deg);
                margin: 5px 0 0 5px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.4);
              "></div>
              <div style="
                position: absolute;
                top: 8px;
                left: 8px;
                width: 6px;
                height: 6px;
                background-color: white;
                border-radius: 50%;
              "></div>
            </div>
          `,
          iconSize: [30, 30],
          iconAnchor: [15, 30],
          popupAnchor: [0, -30]
        })

        const marker = window.L.marker(location.coords, { icon: customIcon }).addTo(map)
        
        // Create popup content
        const popupContent = `
          <div class="map-popup">
            <h3>${location.name}</h3>
            <div class="popup-capacity">
              <span>Capacity: ${location.capacity}</span>
              <div class="popup-capacity-bar">
                <div class="popup-capacity-fill" style="width: ${location.capacity}; background-color: ${location.color}"></div>
              </div>
            </div>
          </div>
        `
        
        marker.bindPopup(popupContent)
      })

      mapInstanceRef.current = map
    }

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [])

  return (
    <div className="map-container">
      <h2>Map</h2>
      <div ref={mapRef} className="map" id="map">
        {!mapLoaded && (
          <div className="map-loading">
            <p>Loading map...</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Map