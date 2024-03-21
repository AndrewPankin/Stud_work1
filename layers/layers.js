var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_YandexSatellite22_1 = new ol.layer.Tile({
            'title': 'Yandex Satellite 22',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="">Yandex Satellite</a>',
                url: 'https://core-sat.maps.yandex.net/tiles?l=sat&x={x}&y={y}&z={z}&scale=1&lang=ru_RU'
            })
        });
var format_lab1_2 = new ol.format.GeoJSON();
var features_lab1_2 = format_lab1_2.readFeatures(json_lab1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab1_2.addFeatures(features_lab1_2);
var lyr_lab1_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_lab1_2, 
                style: style_lab1_2,
                popuplayertitle: "lab1",
                interactive: false,
                title: '<img src="styles/legend/lab1_2.png" /> lab1'
            });
var format_building_house_3 = new ol.format.GeoJSON();
var features_building_house_3 = format_building_house_3.readFeatures(json_building_house_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_house_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_house_3.addFeatures(features_building_house_3);
var lyr_building_house_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_house_3, 
                style: style_building_house_3,
                popuplayertitle: "building_house",
                interactive: true,
                title: '<img src="styles/legend/building_house_3.png" /> building_house'
            });
var format_building_school_4 = new ol.format.GeoJSON();
var features_building_school_4 = format_building_school_4.readFeatures(json_building_school_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_school_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_school_4.addFeatures(features_building_school_4);
var lyr_building_school_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_school_4, 
                style: style_building_school_4,
                popuplayertitle: "building_school",
                interactive: true,
                title: '<img src="styles/legend/building_school_4.png" /> building_school'
            });
var format_building_hospital_5 = new ol.format.GeoJSON();
var features_building_hospital_5 = format_building_hospital_5.readFeatures(json_building_hospital_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_hospital_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_hospital_5.addFeatures(features_building_hospital_5);
var lyr_building_hospital_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_hospital_5, 
                style: style_building_hospital_5,
                popuplayertitle: "building_hospital",
                interactive: true,
                title: '<img src="styles/legend/building_hospital_5.png" /> building_hospital'
            });
var format_building_garages_6 = new ol.format.GeoJSON();
var features_building_garages_6 = format_building_garages_6.readFeatures(json_building_garages_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_garages_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_garages_6.addFeatures(features_building_garages_6);
var lyr_building_garages_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_garages_6, 
                style: style_building_garages_6,
                popuplayertitle: "building_garages",
                interactive: true,
                title: '<img src="styles/legend/building_garages_6.png" /> building_garages'
            });
var format_building_university_7 = new ol.format.GeoJSON();
var features_building_university_7 = format_building_university_7.readFeatures(json_building_university_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_university_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_university_7.addFeatures(features_building_university_7);
var lyr_building_university_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_university_7, 
                style: style_building_university_7,
                popuplayertitle: "building_university",
                interactive: true,
                title: '<img src="styles/legend/building_university_7.png" /> building_university'
            });
var format_building_industrial_8 = new ol.format.GeoJSON();
var features_building_industrial_8 = format_building_industrial_8.readFeatures(json_building_industrial_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_industrial_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_industrial_8.addFeatures(features_building_industrial_8);
var lyr_building_industrial_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_industrial_8, 
                style: style_building_industrial_8,
                popuplayertitle: "building_industrial",
                interactive: true,
                title: '<img src="styles/legend/building_industrial_8.png" /> building_industrial'
            });
var format_building_yes_9 = new ol.format.GeoJSON();
var features_building_yes_9 = format_building_yes_9.readFeatures(json_building_yes_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_yes_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_yes_9.addFeatures(features_building_yes_9);
var lyr_building_yes_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_yes_9, 
                style: style_building_yes_9,
                popuplayertitle: "building_yes",
                interactive: true,
                title: '<img src="styles/legend/building_yes_9.png" /> building_yes'
            });
var format_building_apartments_10 = new ol.format.GeoJSON();
var features_building_apartments_10 = format_building_apartments_10.readFeatures(json_building_apartments_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_apartments_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_apartments_10.addFeatures(features_building_apartments_10);
var lyr_building_apartments_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_apartments_10, 
                style: style_building_apartments_10,
                popuplayertitle: "building_apartments",
                interactive: true,
                title: '<img src="styles/legend/building_apartments_10.png" /> building_apartments'
            });
var format_highway_crossing_11 = new ol.format.GeoJSON();
var features_highway_crossing_11 = format_highway_crossing_11.readFeatures(json_highway_crossing_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_crossing_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_crossing_11.addFeatures(features_highway_crossing_11);
var lyr_highway_crossing_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_highway_crossing_11, 
                style: style_highway_crossing_11,
                popuplayertitle: "highway_crossing",
                interactive: true,
                title: '<img src="styles/legend/highway_crossing_11.png" /> highway_crossing'
            });
var format_highway_path_12 = new ol.format.GeoJSON();
var features_highway_path_12 = format_highway_path_12.readFeatures(json_highway_path_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_path_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_path_12.addFeatures(features_highway_path_12);
var lyr_highway_path_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_highway_path_12, 
                style: style_highway_path_12,
                popuplayertitle: "highway_path",
                interactive: true,
                title: '<img src="styles/legend/highway_path_12.png" /> highway_path'
            });
var format_highway_service_13 = new ol.format.GeoJSON();
var features_highway_service_13 = format_highway_service_13.readFeatures(json_highway_service_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_service_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_service_13.addFeatures(features_highway_service_13);
var lyr_highway_service_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_highway_service_13, 
                style: style_highway_service_13,
                popuplayertitle: "highway_service",
                interactive: true,
                title: '<img src="styles/legend/highway_service_13.png" /> highway_service'
            });
var format_highway_tertiary_14 = new ol.format.GeoJSON();
var features_highway_tertiary_14 = format_highway_tertiary_14.readFeatures(json_highway_tertiary_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_tertiary_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_tertiary_14.addFeatures(features_highway_tertiary_14);
var lyr_highway_tertiary_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_highway_tertiary_14, 
                style: style_highway_tertiary_14,
                popuplayertitle: "highway_tertiary",
                interactive: true,
                title: '<img src="styles/legend/highway_tertiary_14.png" /> highway_tertiary'
            });
var format_highway_traffic_signals_15 = new ol.format.GeoJSON();
var features_highway_traffic_signals_15 = format_highway_traffic_signals_15.readFeatures(json_highway_traffic_signals_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_traffic_signals_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_traffic_signals_15.addFeatures(features_highway_traffic_signals_15);
var lyr_highway_traffic_signals_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_highway_traffic_signals_15, 
                style: style_highway_traffic_signals_15,
                popuplayertitle: "highway_traffic_signals",
                interactive: true,
                title: '<img src="styles/legend/highway_traffic_signals_15.png" /> highway_traffic_signals'
            });
var format_highway_bus_stop_16 = new ol.format.GeoJSON();
var features_highway_bus_stop_16 = format_highway_bus_stop_16.readFeatures(json_highway_bus_stop_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_bus_stop_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_bus_stop_16.addFeatures(features_highway_bus_stop_16);
var lyr_highway_bus_stop_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_highway_bus_stop_16, 
                style: style_highway_bus_stop_16,
                popuplayertitle: "highway_bus_stop",
                interactive: true,
                title: '<img src="styles/legend/highway_bus_stop_16.png" /> highway_bus_stop'
            });
var format_highway_path_17 = new ol.format.GeoJSON();
var features_highway_path_17 = format_highway_path_17.readFeatures(json_highway_path_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_path_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_path_17.addFeatures(features_highway_path_17);
var lyr_highway_path_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_highway_path_17, 
                style: style_highway_path_17,
                popuplayertitle: "highway_path",
                interactive: true,
                title: '<img src="styles/legend/highway_path_17.png" /> highway_path'
            });
var format_highway_residential_18 = new ol.format.GeoJSON();
var features_highway_residential_18 = format_highway_residential_18.readFeatures(json_highway_residential_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_residential_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_residential_18.addFeatures(features_highway_residential_18);
var lyr_highway_residential_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_highway_residential_18, 
                style: style_highway_residential_18,
                popuplayertitle: "highway_residential",
                interactive: true,
                title: '<img src="styles/legend/highway_residential_18.png" /> highway_residential'
            });
var format_highway_road_19 = new ol.format.GeoJSON();
var features_highway_road_19 = format_highway_road_19.readFeatures(json_highway_road_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_road_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_road_19.addFeatures(features_highway_road_19);
var lyr_highway_road_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_highway_road_19, 
                style: style_highway_road_19,
                popuplayertitle: "highway_road",
                interactive: true,
                title: '<img src="styles/legend/highway_road_19.png" /> highway_road'
            });
var format_highway_service_20 = new ol.format.GeoJSON();
var features_highway_service_20 = format_highway_service_20.readFeatures(json_highway_service_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_service_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_service_20.addFeatures(features_highway_service_20);
var lyr_highway_service_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_highway_service_20, 
                style: style_highway_service_20,
                popuplayertitle: "highway_service",
                interactive: true,
                title: '<img src="styles/legend/highway_service_20.png" /> highway_service'
            });
var format_highway_steps_21 = new ol.format.GeoJSON();
var features_highway_steps_21 = format_highway_steps_21.readFeatures(json_highway_steps_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_steps_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_steps_21.addFeatures(features_highway_steps_21);
var lyr_highway_steps_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_highway_steps_21, 
                style: style_highway_steps_21,
                popuplayertitle: "highway_steps",
                interactive: true,
                title: '<img src="styles/legend/highway_steps_21.png" /> highway_steps'
            });
var format_highway_tertiary_22 = new ol.format.GeoJSON();
var features_highway_tertiary_22 = format_highway_tertiary_22.readFeatures(json_highway_tertiary_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_tertiary_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_tertiary_22.addFeatures(features_highway_tertiary_22);
var lyr_highway_tertiary_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_highway_tertiary_22, 
                style: style_highway_tertiary_22,
                popuplayertitle: "highway_tertiary",
                interactive: true,
                title: '<img src="styles/legend/highway_tertiary_22.png" /> highway_tertiary'
            });

lyr_OSMStandard_0.setVisible(true);lyr_YandexSatellite22_1.setVisible(true);lyr_lab1_2.setVisible(true);lyr_building_house_3.setVisible(true);lyr_building_school_4.setVisible(true);lyr_building_hospital_5.setVisible(true);lyr_building_garages_6.setVisible(true);lyr_building_university_7.setVisible(true);lyr_building_industrial_8.setVisible(true);lyr_building_yes_9.setVisible(true);lyr_building_apartments_10.setVisible(true);lyr_highway_crossing_11.setVisible(true);lyr_highway_path_12.setVisible(true);lyr_highway_service_13.setVisible(true);lyr_highway_tertiary_14.setVisible(true);lyr_highway_traffic_signals_15.setVisible(true);lyr_highway_bus_stop_16.setVisible(true);lyr_highway_path_17.setVisible(true);lyr_highway_residential_18.setVisible(true);lyr_highway_road_19.setVisible(true);lyr_highway_service_20.setVisible(true);lyr_highway_steps_21.setVisible(true);lyr_highway_tertiary_22.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_YandexSatellite22_1,lyr_lab1_2,lyr_building_house_3,lyr_building_school_4,lyr_building_hospital_5,lyr_building_garages_6,lyr_building_university_7,lyr_building_industrial_8,lyr_building_yes_9,lyr_building_apartments_10,lyr_highway_crossing_11,lyr_highway_path_12,lyr_highway_service_13,lyr_highway_tertiary_14,lyr_highway_traffic_signals_15,lyr_highway_bus_stop_16,lyr_highway_path_17,lyr_highway_residential_18,lyr_highway_road_19,lyr_highway_service_20,lyr_highway_steps_21,lyr_highway_tertiary_22];
lyr_lab1_2.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_building_house_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'address': 'address', });
lyr_building_school_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', });
lyr_building_hospital_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building:levels': 'building:levels', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', });
lyr_building_garages_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', });
lyr_building_university_7.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'type': 'type', 'name': 'name', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', });
lyr_building_industrial_8.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building:levels': 'building:levels', 'name:ru': 'name:ru', 'voltage': 'voltage', 'substation': 'substation', 'power': 'power', 'operator': 'operator', 'location': 'location', 'gas_insulated': 'gas_insulated', 'frequency': 'frequency', 'branch': 'branch', 'name': 'name', });
lyr_building_yes_9.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'tourism': 'tourism', 'addr:street': 'addr:street', 'description': 'description', 'religion': 'religion', 'training': 'training', 'sport': 'sport', 'leisure': 'leisure', 'name:ru': 'name:ru', 'amenity': 'amenity', 'shop': 'shop', 'type': 'type', 'name': 'name', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', });
lyr_building_apartments_10.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building:levels': 'building:levels', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', });
lyr_highway_crossing_11.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'crossing': 'crossing', });
lyr_highway_path_12.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'name': 'name', });
lyr_highway_service_13.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name:ru': 'name:ru', 'name': 'name', 'motorcar': 'motorcar', 'foot': 'foot', 'bicycle': 'bicycle', 'railway': 'railway', 'barrier': 'barrier', 'access': 'access', });
lyr_highway_tertiary_14.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'crossing': 'crossing', 'railway': 'railway', });
lyr_highway_traffic_signals_15.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', });
lyr_highway_bus_stop_16.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'bench': 'bench', 'public_transport': 'public_transport', 'bus': 'bus', 'name:ru': 'name:ru', 'name': 'name', });
lyr_highway_path_17.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'surface': 'surface', 'name': 'name', 'description': 'description', 'foot': 'foot', });
lyr_highway_residential_18.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'oneway': 'oneway', 'name': 'name', });
lyr_highway_road_19.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', });
lyr_highway_service_20.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'oneway': 'oneway', 'bridge': 'bridge', 'layer': 'layer', 'surface': 'surface', 'railway': 'railway', 'foot': 'foot', 'name:etymology:wikidata': 'name:etymology:wikidata', 'name': 'name', 'service': 'service', 'tunnel': 'tunnel', });
lyr_highway_steps_21.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'ramp': 'ramp', 'incline': 'incline', 'handrail': 'handrail', 'foot': 'foot', });
lyr_highway_tertiary_22.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'ref': 'ref', 'old_ref': 'old_ref', 'surface': 'surface', 'layer': 'layer', 'bridge': 'bridge', });
lyr_lab1_2.set('fieldImages', {'fid': '', 'name': 'TextEdit', });
lyr_building_house_3.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'addr:street': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:city': 'TextEdit', 'address': '', });
lyr_building_school_4.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', });
lyr_building_hospital_5.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'building:levels': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', });
lyr_building_garages_6.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', });
lyr_building_university_7.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:city': 'TextEdit', });
lyr_building_industrial_8.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'building:levels': 'TextEdit', 'name:ru': 'TextEdit', 'voltage': 'TextEdit', 'substation': 'TextEdit', 'power': 'TextEdit', 'operator': 'TextEdit', 'location': 'TextEdit', 'gas_insulated': 'TextEdit', 'frequency': 'TextEdit', 'branch': 'TextEdit', 'name': 'TextEdit', });
lyr_building_yes_9.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'tourism': '', 'addr:street': '', 'description': '', 'religion': '', 'training': '', 'sport': '', 'leisure': '', 'name:ru': '', 'amenity': '', 'shop': '', 'type': '', 'name': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', });
lyr_building_apartments_10.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'building:levels': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', });
lyr_highway_crossing_11.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'crossing': '', });
lyr_highway_path_12.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'name': '', });
lyr_highway_service_13.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'name:ru': '', 'name': '', 'motorcar': '', 'foot': '', 'bicycle': '', 'railway': '', 'barrier': '', 'access': '', });
lyr_highway_tertiary_14.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'crossing': '', 'railway': '', });
lyr_highway_traffic_signals_15.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', });
lyr_highway_bus_stop_16.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'bench': '', 'public_transport': '', 'bus': '', 'name:ru': '', 'name': '', });
lyr_highway_path_17.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'name': 'TextEdit', 'description': 'TextEdit', 'foot': 'TextEdit', });
lyr_highway_residential_18.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'oneway': '', 'name': '', });
lyr_highway_road_19.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', });
lyr_highway_service_20.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'oneway': '', 'bridge': '', 'layer': '', 'surface': '', 'railway': '', 'foot': '', 'name:etymology:wikidata': '', 'name': '', 'service': '', 'tunnel': '', });
lyr_highway_steps_21.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'ramp': '', 'incline': '', 'handrail': '', 'foot': '', });
lyr_highway_tertiary_22.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'name': '', 'ref': '', 'old_ref': '', 'surface': '', 'layer': '', 'bridge': '', });
lyr_lab1_2.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr_building_house_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'address': 'no label', });
lyr_building_school_4.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', });
lyr_building_hospital_5.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'building:levels': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', });
lyr_building_garages_6.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', });
lyr_building_university_7.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'type': 'no label', 'name': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', });
lyr_building_industrial_8.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'building:levels': 'no label', 'name:ru': 'no label', 'voltage': 'no label', 'substation': 'no label', 'power': 'no label', 'operator': 'no label', 'location': 'no label', 'gas_insulated': 'no label', 'frequency': 'no label', 'branch': 'no label', 'name': 'no label', });
lyr_building_yes_9.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'tourism': 'no label', 'addr:street': 'no label', 'description': 'no label', 'religion': 'no label', 'training': 'no label', 'sport': 'no label', 'leisure': 'no label', 'name:ru': 'no label', 'amenity': 'no label', 'shop': 'no label', 'type': 'no label', 'name': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', });
lyr_building_apartments_10.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'building:levels': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', });
lyr_highway_crossing_11.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'crossing': 'no label', });
lyr_highway_path_12.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'name': 'no label', });
lyr_highway_service_13.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'name:ru': 'no label', 'name': 'no label', 'motorcar': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'railway': 'no label', 'barrier': 'no label', 'access': 'no label', });
lyr_highway_tertiary_14.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'crossing': 'no label', 'railway': 'no label', });
lyr_highway_traffic_signals_15.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', });
lyr_highway_bus_stop_16.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'bench': 'no label', 'public_transport': 'no label', 'bus': 'no label', 'name:ru': 'no label', 'name': 'no label', });
lyr_highway_path_17.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'surface': 'no label', 'name': 'no label', 'description': 'no label', 'foot': 'no label', });
lyr_highway_residential_18.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'oneway': 'no label', 'name': 'no label', });
lyr_highway_road_19.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', });
lyr_highway_service_20.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'oneway': 'no label', 'bridge': 'no label', 'layer': 'no label', 'surface': 'no label', 'railway': 'no label', 'foot': 'no label', 'name:etymology:wikidata': 'no label', 'name': 'no label', 'service': 'no label', 'tunnel': 'no label', });
lyr_highway_steps_21.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'ramp': 'no label', 'incline': 'no label', 'handrail': 'no label', 'foot': 'no label', });
lyr_highway_tertiary_22.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'name': 'no label', 'ref': 'no label', 'old_ref': 'no label', 'surface': 'no label', 'layer': 'no label', 'bridge': 'no label', });
lyr_highway_tertiary_22.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});