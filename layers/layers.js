ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:25830").setExtent([587150.432900, 4109022.657400, 597563.062500, 4118310.709400]);
var wms_layers = [];


    var projection_CartografadelIGN_0 = ol.proj.get('EPSG:3857');
    var projectionExtent_CartografadelIGN_0 = projection_CartografadelIGN_0.getExtent();
    var size_CartografadelIGN_0 = ol.extent.getWidth(projectionExtent_CartografadelIGN_0) / 256;
    var resolutions_CartografadelIGN_0 = new Array(14);
    var matrixIds_CartografadelIGN_0 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_CartografadelIGN_0[z] = size_CartografadelIGN_0 / Math.pow(2, z);
        matrixIds_CartografadelIGN_0[z] = z;
    }
    var lyr_CartografadelIGN_0 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://www.ign.es/wmts/mapa-raster",
                                attributions: ' ',
                                "layer": "MTN",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/jpeg',
              projection: projection_CartografadelIGN_0,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_CartografadelIGN_0),
                resolutions: resolutions_CartografadelIGN_0,
                matrixIds: matrixIds_CartografadelIGN_0
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Cartografía del IGN',
                            opacity: 1.0,
                            
                            
                          });
var lyr_Ortoimagen_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.ign.es/wms-inspire/pnoa-ma",
                              attributions: ' ',
                              params: {
                                "LAYERS": "OI.OrthoimageCoverage",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Ortoimagen',
                            popuplayertitle: 'Ortoimagen',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortoimagen_1, 0]);
var lyr_IDEAndalucaMapaTopogrficodeAndaluca110000rsterAo2013_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.ideandalucia.es/wms/mta10r_2001-2013",
                              attributions: ' ',
                              params: {
                                "LAYERS": "mta10r_2001-2013",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'IDEAndalucía Mapa Topográfico de Andalucía 1:10.000 ráster (Año 2013)',
                            popuplayertitle: 'IDEAndalucía Mapa Topográfico de Andalucía 1:10.000 ráster (Año 2013)',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_IDEAndalucaMapaTopogrficodeAndaluca110000rsterAo2013_2, 0]);
var format_TrminomunicipalLosGallardos_3 = new ol.format.GeoJSON();
var features_TrminomunicipalLosGallardos_3 = format_TrminomunicipalLosGallardos_3.readFeatures(json_TrminomunicipalLosGallardos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_TrminomunicipalLosGallardos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrminomunicipalLosGallardos_3.addFeatures(features_TrminomunicipalLosGallardos_3);
var lyr_TrminomunicipalLosGallardos_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrminomunicipalLosGallardos_3, 
                style: style_TrminomunicipalLosGallardos_3,
                popuplayertitle: 'Término municipal Los Gallardos',
                interactive: true,
                title: '<img src="styles/legend/TrminomunicipalLosGallardos_3.png" /> Término municipal Los Gallardos'
            });
var format_CaminosmunicipalesLosGallardos_4 = new ol.format.GeoJSON();
var features_CaminosmunicipalesLosGallardos_4 = format_CaminosmunicipalesLosGallardos_4.readFeatures(json_CaminosmunicipalesLosGallardos_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_CaminosmunicipalesLosGallardos_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CaminosmunicipalesLosGallardos_4.addFeatures(features_CaminosmunicipalesLosGallardos_4);
var lyr_CaminosmunicipalesLosGallardos_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CaminosmunicipalesLosGallardos_4, 
                style: style_CaminosmunicipalesLosGallardos_4,
                popuplayertitle: 'Caminos municipales Los Gallardos',
                interactive: true,
                title: '<img src="styles/legend/CaminosmunicipalesLosGallardos_4.png" /> Caminos municipales Los Gallardos'
            });
var group_Caminos_lineas_dibujado = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Caminos_lineas_dibujado'});

lyr_CartografadelIGN_0.setVisible(true);lyr_Ortoimagen_1.setVisible(true);lyr_IDEAndalucaMapaTopogrficodeAndaluca110000rsterAo2013_2.setVisible(true);lyr_TrminomunicipalLosGallardos_3.setVisible(true);lyr_CaminosmunicipalesLosGallardos_4.setVisible(true);
var layersList = [lyr_CartografadelIGN_0,lyr_Ortoimagen_1,lyr_IDEAndalucaMapaTopogrficodeAndaluca110000rsterAo2013_2,lyr_TrminomunicipalLosGallardos_3,lyr_CaminosmunicipalesLosGallardos_4];
lyr_TrminomunicipalLosGallardos_3.set('fieldAliases', {'id_dera': 'id_dera', 'cod_mun': 'cod_mun', 'nombre': 'nombre', 'provincia': 'provincia', });
lyr_CaminosmunicipalesLosGallardos_4.set('fieldAliases', {'fid': 'fid', 'MAPA': 'MAPA', 'DELEGACIO': 'DELEGACIO', 'MUNICIPIO': 'MUNICIPIO', 'MASA': 'MASA', 'HOJA': 'HOJA', 'TIPO': 'TIPO', 'PARCELA': 'PARCELA', 'COORX': 'COORX', 'COORY': 'COORY', 'VIA': 'VIA', 'NUMERO': 'NUMERO', 'NUMERODUP': 'NUMERODUP', 'NUMSYMBOL': 'NUMSYMBOL', 'AREA': 'AREA', 'FECHAALTA': 'FECHAALTA', 'FECHABAJA': 'FECHABAJA', 'NINTERNO': 'NINTERNO', 'PCAT1': 'PCAT1', 'PCAT2': 'PCAT2', 'EJERCICIO': 'EJERCICIO', 'NUM_EXP': 'NUM_EXP', 'CONTROL': 'CONTROL', 'Referencia catastral': 'Referencia catastral', 'Longitud': 'Longitud', 'AREA.': 'AREA.', 'Ancho': 'Ancho', 'Perímetro (m)': 'Perímetro (m)', 'Coordenada': 'Coordenada', 'Coordena_1': 'Coordena_1', 'Coordena_2': 'Coordena_2', 'Coordena_3': 'Coordena_3', 'Orden de inventario': 'Orden de inventario', 'Nombre': 'Nombre', 'Veredas': 'Veredas', });
lyr_TrminomunicipalLosGallardos_3.set('fieldImages', {'id_dera': '', 'cod_mun': '', 'nombre': '', 'provincia': '', });
lyr_CaminosmunicipalesLosGallardos_4.set('fieldImages', {'fid': 'TextEdit', 'MAPA': 'TextEdit', 'DELEGACIO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'MASA': 'TextEdit', 'HOJA': 'TextEdit', 'TIPO': 'TextEdit', 'PARCELA': 'TextEdit', 'COORX': 'TextEdit', 'COORY': 'TextEdit', 'VIA': 'TextEdit', 'NUMERO': 'TextEdit', 'NUMERODUP': 'TextEdit', 'NUMSYMBOL': 'TextEdit', 'AREA': 'TextEdit', 'FECHAALTA': 'TextEdit', 'FECHABAJA': 'TextEdit', 'NINTERNO': 'TextEdit', 'PCAT1': 'TextEdit', 'PCAT2': 'TextEdit', 'EJERCICIO': 'TextEdit', 'NUM_EXP': 'TextEdit', 'CONTROL': 'TextEdit', 'Referencia catastral': 'TextEdit', 'Longitud': 'TextEdit', 'AREA.': 'TextEdit', 'Ancho': 'TextEdit', 'Perímetro (m)': 'TextEdit', 'Coordenada': 'TextEdit', 'Coordena_1': 'TextEdit', 'Coordena_2': 'TextEdit', 'Coordena_3': 'TextEdit', 'Orden de inventario': 'TextEdit', 'Nombre': 'TextEdit', 'Veredas': 'TextEdit', });
lyr_TrminomunicipalLosGallardos_3.set('fieldLabels', {'id_dera': 'hidden field', 'cod_mun': 'hidden field', 'nombre': 'inline label - visible with data', 'provincia': 'inline label - visible with data', });
lyr_CaminosmunicipalesLosGallardos_4.set('fieldLabels', {'fid': 'hidden field', 'MAPA': 'hidden field', 'DELEGACIO': 'hidden field', 'MUNICIPIO': 'hidden field', 'MASA': 'hidden field', 'HOJA': 'hidden field', 'TIPO': 'hidden field', 'PARCELA': 'hidden field', 'COORX': 'inline label - always visible', 'COORY': 'inline label - always visible', 'VIA': 'hidden field', 'NUMERO': 'hidden field', 'NUMERODUP': 'hidden field', 'NUMSYMBOL': 'hidden field', 'AREA': 'hidden field', 'FECHAALTA': 'hidden field', 'FECHABAJA': 'hidden field', 'NINTERNO': 'hidden field', 'PCAT1': 'hidden field', 'PCAT2': 'hidden field', 'EJERCICIO': 'hidden field', 'NUM_EXP': 'hidden field', 'CONTROL': 'hidden field', 'Referencia catastral': 'inline label - always visible', 'Longitud': 'hidden field', 'AREA.': 'hidden field', 'Ancho': 'hidden field', 'Perímetro (m)': 'inline label - always visible', 'Coordenada': 'hidden field', 'Coordena_1': 'hidden field', 'Coordena_2': 'hidden field', 'Coordena_3': 'hidden field', 'Orden de inventario': 'inline label - always visible', 'Nombre': 'inline label - always visible', 'Veredas': 'inline label - always visible', });
lyr_CaminosmunicipalesLosGallardos_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});