var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_Carto_Dark_1 = new ol.layer.Tile({
            'title': 'Carto_Dark',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            })
        });
var format_parquesnac3857edit_2 = new ol.format.GeoJSON();
var features_parquesnac3857edit_2 = format_parquesnac3857edit_2.readFeatures(json_parquesnac3857edit_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parquesnac3857edit_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parquesnac3857edit_2.addFeatures(features_parquesnac3857edit_2);
var lyr_parquesnac3857edit_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parquesnac3857edit_2, 
                style: style_parquesnac3857edit_2,
                popuplayertitle: 'parquesnac3857edit',
                interactive: true,
                title: '<img src="styles/legend/parquesnac3857edit_2.png" /> parquesnac3857edit'
            });
var format_rios3857edit_3 = new ol.format.GeoJSON();
var features_rios3857edit_3 = format_rios3857edit_3.readFeatures(json_rios3857edit_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rios3857edit_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rios3857edit_3.addFeatures(features_rios3857edit_3);
var lyr_rios3857edit_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rios3857edit_3, 
                style: style_rios3857edit_3,
                popuplayertitle: 'rios3857edit',
                interactive: true,
                title: '<img src="styles/legend/rios3857edit_3.png" /> rios3857edit'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Carto_Dark_1.setVisible(true);lyr_parquesnac3857edit_2.setVisible(true);lyr_rios3857edit_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Carto_Dark_1,lyr_parquesnac3857edit_2,lyr_rios3857edit_3];
lyr_parquesnac3857edit_2.set('fieldAliases', {'Name': 'Name', 'Declaracio': 'Declaracio', 'Reclasific': 'Reclasific', 'Ampliacion': 'Ampliacion', 'Fecha de d': 'Fecha de d', 'Modificaci': 'Modificaci', 'area': 'Área (hectáreas)', 'Nombre PN': 'Nombre Parque Nacional', });
lyr_rios3857edit_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Texto': 'Texto', 'Longitud': 'Longitud', 'Categoria': 'Categoria', 'Imagen': 'Imagen', 'Shape_Leng': 'Shape_Leng', 'Nombre Río': 'Nombre', });
lyr_parquesnac3857edit_2.set('fieldImages', {'Name': 'TextEdit', 'Declaracio': 'TextEdit', 'Reclasific': 'TextEdit', 'Ampliacion': 'TextEdit', 'Fecha de d': 'TextEdit', 'Modificaci': 'TextEdit', 'area': 'TextEdit', 'Nombre PN': 'TextEdit', });
lyr_rios3857edit_3.set('fieldImages', {'OBJECTID': 'Range', 'Texto': 'TextEdit', 'Longitud': 'Range', 'Categoria': 'TextEdit', 'Imagen': 'ExternalResource', 'Shape_Leng': 'TextEdit', 'Nombre Río': 'TextEdit', });
lyr_parquesnac3857edit_2.set('fieldLabels', {'Name': 'no label', 'Declaracio': 'header label - visible with data', 'Reclasific': 'no label', 'Ampliacion': 'no label', 'Fecha de d': 'header label - visible with data', 'Modificaci': 'no label', 'area': 'header label - always visible', 'Nombre PN': 'header label - always visible', });
lyr_rios3857edit_3.set('fieldLabels', {'OBJECTID': 'no label', 'Texto': 'inline label - visible with data', 'Longitud': 'inline label - visible with data', 'Categoria': 'no label', 'Imagen': 'inline label - visible with data', 'Shape_Leng': 'no label', 'Nombre Río': 'header label - always visible', });
lyr_rios3857edit_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});