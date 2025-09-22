import './Locations.css'
import lwnLibraryImage from '../img/LWN.jpg'
import blLibraryImage from '../img/BL.jpg'
import hssLibraryImage from '../img/HSS.jpg'
import clLibraryImage from '../img/CL.jpeg'
import admLibraryImage from '../img/ADM.jpg'
import ciLibraryImage from '../img/CI.jpg'

const Locations = () => {
  return (
    <div className="locations-container">
      <h1>Our Locations</h1>
      <div className="locations-grid">
        <div className="location-item">
          <div className="location-box">
            <img src={lwnLibraryImage} alt="Lee Wee Nam Library" className="location-image" />
            <div className="location-text">
              <h3>Lee Wee Nam Library</h3>
              <div className="capacity-info">
                <span>Capacity: 75%</span>
                <div className="capacity-bar">
                  <div className="capacity-fill" style={{width: '75%', backgroundColor: '#FF9500'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="location-item">
          <div className="location-box">
            <img src={blLibraryImage} alt="Business School Library" className="location-image" />
            <div className="location-text">
              <h3>Business Library</h3>
              <div className="capacity-info">
                <span>Capacity: 45%</span>
                <div className="capacity-bar">
                  <div className="capacity-fill" style={{width: '45%', backgroundColor: '#34C759'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="location-item">
          <div className="location-box">
            <img src={hssLibraryImage} alt="Humanities and Social Sciences Library" className="location-image" id="hss-image" />
            <div className="location-text">
              <h3>Humanities and Social Sciences Library</h3>
              <div className="capacity-info">
                <span>Capacity: 92%</span>
                <div className="capacity-bar">
                  <div className="capacity-fill" style={{width: '92%', backgroundColor: '#FF3B30'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="location-item">
          <div className="location-box">
            <img src={clLibraryImage} alt="Chinese Library" className="location-image" id="cl-image" />
            <div className="location-text">
              <h3>Chinese Library</h3>
              <div className="capacity-info">
                <span>Capacity: 38%</span>
                <div className="capacity-bar">
                  <div className="capacity-fill" style={{width: '38%', backgroundColor: '#34C759'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="location-item">
          <div className="location-box">
            <img src={admLibraryImage} alt="Art, Media & Design Library" className="location-image" />
            <div className="location-text">
              <h3>Art,Media & Design Library</h3>
              <div className="capacity-info">
                <span>Capacity: 67%</span>
                <div className="capacity-bar">
                  <div className="capacity-fill" style={{width: '67%', backgroundColor: '#FF9500'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="location-item">
          <div className="location-box">
            <img src={ciLibraryImage} alt="Communication & Information Library" className="location-image" />
            <div className="location-text">
              <h3>Communication & Information Library</h3>
              <div className="capacity-info">
                <span>Capacity: 84%</span>
                <div className="capacity-bar">
                  <div className="capacity-fill" style={{width: '84%', backgroundColor: '#FF3B30'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Locations

