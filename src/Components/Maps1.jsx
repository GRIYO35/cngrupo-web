import React, { useEffect } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import { Icon, Style } from 'ol/style';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import TileLayer from 'ol/layer/Tile';
import iconImage from '../Assets/pngwing.com.png';
import OSM from 'ol/source/OSM';
import ZoomControl from 'ol/control/Zoom';
import FullScreenControl from 'ol/control/FullScreen';
import "./Maps1.css";

const MapComponent = () => {
  useEffect(() => {
    const coordinates = fromLonLat([-65.41651339151728, -24.804615680399422]);

    const iconStyle = new Style({
      image: new Icon({
        src: iconImage,
        anchor: [0.5, 1],
        scale: 1,
        color: '#0A0A0A'
      })
    });

    const marker = new Feature({
      geometry: new Point(coordinates)
    });

    marker.setStyle(iconStyle);

    const markerLayer = new VectorLayer({
      source: new VectorSource({
        features: [marker]
      })
    });

    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        markerLayer
      ],
      view: new View({
        center: coordinates,
        zoom: 17
      }),
      
      controls: [
        new ZoomControl(),
        new FullScreenControl()
      ]
    });

    return () => {
      map.setTarget(null);
    };
  }, []);

  return <div id="map" className='MapaDim' />;
};

export default MapComponent;

