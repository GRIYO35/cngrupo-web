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
import OSM from 'ol/source/OSM';
import iconImage from '../Assets/pngwing.com.png'; // Importar la imagen
import ZoomControl from 'ol/control/Zoom';
import FullScreenControl from 'ol/control/FullScreen';
import "./Maps1.css"


const MapComponent = () => {
  useEffect(() => {
    // Coordenadas del punto de referencia
    const coordinates = fromLonLat([-65.41651339151728, -24.804615680399422]);

    // Crear un marcador personalizado con un icono de dirección
    const iconStyle = new Style({
      image: new Icon({
        src: iconImage, // Utilizar la imagen importada
        anchor: [0.5, 1], // Punto de anclaje del icono (centro inferior)
        scale: 1 // Escala del icono
      })
    });

    // Crear un nuevo punto de referencia como una característica (Feature)
    const marker = new Feature({
      geometry: new Point(coordinates)
    });

    // Asignar el estilo al marcador
    marker.setStyle(iconStyle);

    // Capa de marcador (VectorLayer) con el marcador personalizado
    const markerLayer = new VectorLayer({
      source: new VectorSource({
        features: [marker]
      })
    });

    // Crear un nuevo mapa OpenLayers en el elemento con id "map"
    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        markerLayer // Agregar la capa de marcador al mapa
      ],
      view: new View({
        center: coordinates,
        zoom: 17
      }),
      
      controls: [
        // Agregar controles de OpenLayers
        new ZoomControl(),
        new FullScreenControl()
      ]
    });

    // Retornar una función de limpieza para destruir el mapa cuando el componente se desmonte
    return () => {
      map.setTarget(null);
    };
  }, []); // El arreglo de dependencias está vacío para ejecutar este efecto solo una vez al montar el componente

  return <div id="map" className='MapaDim' />;
};

export default MapComponent;
