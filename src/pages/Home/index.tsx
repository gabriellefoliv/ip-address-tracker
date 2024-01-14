// components
import Input from "./../../components/Input";
import Dashboard from "./../../components/Dashboard";
import { TileLayer, Marker, MapContainer } from "react-leaflet";
import L from "leaflet";
// imgs
import arrowIcon from "../../images/icon-arrow.svg";
import markerImg from "../../images/icon-location.svg";
import backgroundImg from '../../images/pattern-bg-desktop.png'

// hooks
import useIpTracker from "../../hooks/ip-tracker";
import { BackgroundImgStyled, IpTracker, IpTrackerButton, IpTrackerContainer, IpTrackerForm, IpTrackerTitle, SubmitArrow } from "./style";
import Footer from "../../components/Footer";

// custom icon to put on Marker in map
const markerIcon = new L.Icon({
  iconUrl: markerImg,
  iconRetinaUrl: markerImg,
  iconSize: [33, 43],
});

function Home () {
  const {
    ip,
    handleSubmitIp,
    position,
    location,
    isp,
    timezone,
    ipAddress,
    setIp,
    setIpErrorStatus,
  } = useIpTracker();

  return (
    <>
      <IpTracker>
        <BackgroundImgStyled src={backgroundImg}/>
        <IpTrackerContainer>
          <IpTrackerTitle>IP Address Tracker</IpTrackerTitle>

          <IpTrackerForm onSubmit={handleSubmitIp}>
            <Input
              aria-label="IP Address"
              name="ip-adress"
              placeholder="Search for any IP address"
              value={ip}
              onChange={(e) => {
                setIpErrorStatus(false);
                setIp(e.target.value);
              }}
            />
            <IpTrackerButton>
              <SubmitArrow
                src={arrowIcon}
                alt="Seta, icone do botão"
                className="ip-tracker-submit-arrow"
              />
            </IpTrackerButton>
          </IpTrackerForm>
          <Dashboard
            location={location}
            timezone={timezone}
            isp={isp}
            ipAddress={ipAddress}
          />
        </IpTrackerContainer>
      </IpTracker>

      {/* <MapContainer className="map-container" center={position} zoom={14} style={{width:"100%"}}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position} icon={markerIcon} />
      </MapContainer> */}

        <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{width:"100%"}}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={markerIcon}>
            </Marker>
        </MapContainer>

        <Footer/>

    </>
  );
};

export default Home;