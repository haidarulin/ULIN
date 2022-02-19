var wms_layers = [];


        var lyr_GOOGLEEARTH_0 = new ol.layer.Tile({
            'title': 'GOOGLE EARTH',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_konturzona6dan7_1 = new ol.format.GeoJSON();
var features_konturzona6dan7_1 = format_konturzona6dan7_1.readFeatures(json_konturzona6dan7_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_konturzona6dan7_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_konturzona6dan7_1.addFeatures(features_konturzona6dan7_1);
var lyr_konturzona6dan7_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_konturzona6dan7_1, 
                style: style_konturzona6dan7_1,
                interactive: true,
                title: '<img src="styles/legend/konturzona6dan7_1.png" /> kontur zona 6 dan 7'
            });
var format_trasebaru_2 = new ol.format.GeoJSON();
var features_trasebaru_2 = format_trasebaru_2.readFeatures(json_trasebaru_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_trasebaru_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_trasebaru_2.addFeatures(features_trasebaru_2);
var lyr_trasebaru_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_trasebaru_2, 
                style: style_trasebaru_2,
                interactive: true,
                title: '<img src="styles/legend/trasebaru_2.png" /> trase baru'
            });
var format_buildingzona6dan7_3 = new ol.format.GeoJSON();
var features_buildingzona6dan7_3 = format_buildingzona6dan7_3.readFeatures(json_buildingzona6dan7_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buildingzona6dan7_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buildingzona6dan7_3.addFeatures(features_buildingzona6dan7_3);
var lyr_buildingzona6dan7_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_buildingzona6dan7_3, 
                style: style_buildingzona6dan7_3,
                interactive: true,
                title: '<img src="styles/legend/buildingzona6dan7_3.png" /> building zona 6 dan 7'
            });
var format_pembebasanlahanrepair_4 = new ol.format.GeoJSON();
var features_pembebasanlahanrepair_4 = format_pembebasanlahanrepair_4.readFeatures(json_pembebasanlahanrepair_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pembebasanlahanrepair_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pembebasanlahanrepair_4.addFeatures(features_pembebasanlahanrepair_4);
var lyr_pembebasanlahanrepair_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pembebasanlahanrepair_4, 
                style: style_pembebasanlahanrepair_4,
                interactive: true,
                title: '<img src="styles/legend/pembebasanlahanrepair_4.png" /> pembebasan lahan repair'
            });
var format_sewalahanrepair_5 = new ol.format.GeoJSON();
var features_sewalahanrepair_5 = format_sewalahanrepair_5.readFeatures(json_sewalahanrepair_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sewalahanrepair_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sewalahanrepair_5.addFeatures(features_sewalahanrepair_5);
var lyr_sewalahanrepair_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sewalahanrepair_5, 
                style: style_sewalahanrepair_5,
                interactive: true,
                title: '<img src="styles/legend/sewalahanrepair_5.png" /> sewa lahan repair'
            });
var format_detour_6 = new ol.format.GeoJSON();
var features_detour_6 = format_detour_6.readFeatures(json_detour_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_detour_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_detour_6.addFeatures(features_detour_6);
var lyr_detour_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_detour_6, 
                style: style_detour_6,
                interactive: true,
                title: '<img src="styles/legend/detour_6.png" /> detour'
            });
var format_borepilerepair_7 = new ol.format.GeoJSON();
var features_borepilerepair_7 = format_borepilerepair_7.readFeatures(json_borepilerepair_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_borepilerepair_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_borepilerepair_7.addFeatures(features_borepilerepair_7);
var lyr_borepilerepair_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_borepilerepair_7, 
                style: style_borepilerepair_7,
                interactive: true,
                title: '<img src="styles/legend/borepilerepair_7.png" /> bore pile repair'
            });
var format_pilarzona6dan7repair_8 = new ol.format.GeoJSON();
var features_pilarzona6dan7repair_8 = format_pilarzona6dan7repair_8.readFeatures(json_pilarzona6dan7repair_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pilarzona6dan7repair_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pilarzona6dan7repair_8.addFeatures(features_pilarzona6dan7repair_8);
var lyr_pilarzona6dan7repair_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pilarzona6dan7repair_8, 
                style: style_pilarzona6dan7repair_8,
                interactive: true,
                title: '<img src="styles/legend/pilarzona6dan7repair_8.png" /> pilar zona 6 dan 7 repair'
            });

lyr_GOOGLEEARTH_0.setVisible(true);lyr_konturzona6dan7_1.setVisible(true);lyr_trasebaru_2.setVisible(true);lyr_buildingzona6dan7_3.setVisible(true);lyr_pembebasanlahanrepair_4.setVisible(true);lyr_sewalahanrepair_5.setVisible(true);lyr_detour_6.setVisible(true);lyr_borepilerepair_7.setVisible(true);lyr_pilarzona6dan7repair_8.setVisible(true);
var layersList = [lyr_GOOGLEEARTH_0,lyr_konturzona6dan7_1,lyr_trasebaru_2,lyr_buildingzona6dan7_3,lyr_pembebasanlahanrepair_4,lyr_sewalahanrepair_5,lyr_detour_6,lyr_borepilerepair_7,lyr_pilarzona6dan7repair_8];
lyr_konturzona6dan7_1.set('fieldAliases', {'ELEVATION': 'ELEVATION', 'X1_Y1_Z1': 'X1_Y1_Z1', });
lyr_trasebaru_2.set('fieldAliases', {'ANGLE': 'ANGLE', 'AREA': 'AREA', 'BLOCKNAME': 'BLOCKNAME', 'BULGE': 'BULGE', 'CENTER': 'CENTER', 'CENTROID': 'CENTROID', 'CLASSNAME': 'CLASSNAME', 'COLOR': 'COLOR', 'DWGNAME': 'DWGNAME', 'EANGLE': 'EANGLE', 'EHANDLE': 'EHANDLE', 'ELEVATION': 'ELEVATION', 'EWIDTH': 'EWIDTH', 'HEIGHT': 'HEIGHT', 'IMAGENAME': 'IMAGENAME', 'LABELPT': 'LABELPT', 'LAYER': 'LAYER', 'LENGTH': 'LENGTH', 'LINETYPE': 'LINETYPE', 'LINEWEIGHT': 'LINEWEIGHT', 'LOCKSTAT': 'LOCKSTAT', 'PLOTSTYLE': 'PLOTSTYLE', 'RADIUS': 'RADIUS', 'ROTATION': 'ROTATION', 'SANGLE': 'SANGLE', 'SHAPENAME': 'SHAPENAME', 'SIZE': 'SIZE', 'STRING': 'STRING', 'STYLE': 'STYLE', 'SWIDTH': 'SWIDTH', 'TAG': 'TAG', 'THICKNESS': 'THICKNESS', 'TRUECOLOR': 'TRUECOLOR', 'TYPE': 'TYPE', 'URL': 'URL', 'X1_Y1_Z1': 'X1_Y1_Z1', 'X1': 'X1', 'Y1': 'Y1', 'Z1': 'Z1', 'X2_Y2_Z2': 'X2_Y2_Z2', 'X2': 'X2', 'Y2': 'Y2', 'Z2': 'Z2', 'X3_Y3_Z3': 'X3_Y3_Z3', 'X3': 'X3', 'Y3': 'Y3', 'Z3': 'Z3', 'X4_Y4_Z4': 'X4_Y4_Z4', 'X4': 'X4', 'Y4': 'Y4', 'Z4': 'Z4', 'XSCALE': 'XSCALE', 'YSCALE': 'YSCALE', 'ZSCALE': 'ZSCALE', });
lyr_buildingzona6dan7_3.set('fieldAliases', {'name': 'name', 'height': 'height', 'ADDRESS': 'ADDRESS', 'FOTO': 'FOTO', });
lyr_pembebasanlahanrepair_4.set('fieldAliases', {'AREA': 'AREA', 'LENGTH': 'LENGTH', 'X1_Y1_Z1': 'X1_Y1_Z1', 'X1': 'X1', 'Y1': 'Y1', 'Z1': 'Z1', 'UTILITAS': 'UTILITAS', 'FOTO': 'FOTO', 'FOTO1': 'FOTO1', 'FOTO2': 'FOTO2', 'FOTO3': 'FOTO3', });
lyr_sewalahanrepair_5.set('fieldAliases', {'AREA': 'AREA', 'LENGTH': 'LENGTH', 'X1_Y1_Z1': 'X1_Y1_Z1', 'X1': 'X1', 'Y1': 'Y1', 'Z1': 'Z1', 'FOTO': 'FOTO', 'FOTO1': 'FOTO1', 'FOTO2': 'FOTO2', 'FOTO3': 'FOTO3', });
lyr_detour_6.set('fieldAliases', {'AREA': 'AREA', 'LENGTH': 'LENGTH', 'X1_Y1_Z1': 'X1_Y1_Z1', 'X1': 'X1', 'Y1': 'Y1', 'Z1': 'Z1', 'UTILITAS_1': 'UTILITAS_1', 'FOTO': 'FOTO', 'FOTO1': 'FOTO1', 'FOTO2': 'FOTO2', 'FOTO3': 'FOTO3', });
lyr_borepilerepair_7.set('fieldAliases', {'X1_Y1_Z1': 'X1_Y1_Z1', 'X1': 'X1', 'Y1': 'Y1', 'Z1': 'Z1', });
lyr_pilarzona6dan7repair_8.set('fieldAliases', {'STRING': 'STRING', });
lyr_konturzona6dan7_1.set('fieldImages', {'ELEVATION': 'TextEdit', 'X1_Y1_Z1': 'TextEdit', });
lyr_trasebaru_2.set('fieldImages', {'ANGLE': 'TextEdit', 'AREA': 'TextEdit', 'BLOCKNAME': 'TextEdit', 'BULGE': 'TextEdit', 'CENTER': 'TextEdit', 'CENTROID': 'TextEdit', 'CLASSNAME': 'TextEdit', 'COLOR': 'TextEdit', 'DWGNAME': 'TextEdit', 'EANGLE': 'TextEdit', 'EHANDLE': 'TextEdit', 'ELEVATION': 'TextEdit', 'EWIDTH': 'TextEdit', 'HEIGHT': 'TextEdit', 'IMAGENAME': 'TextEdit', 'LABELPT': 'TextEdit', 'LAYER': 'TextEdit', 'LENGTH': 'TextEdit', 'LINETYPE': 'TextEdit', 'LINEWEIGHT': 'TextEdit', 'LOCKSTAT': 'TextEdit', 'PLOTSTYLE': 'TextEdit', 'RADIUS': 'TextEdit', 'ROTATION': 'TextEdit', 'SANGLE': 'TextEdit', 'SHAPENAME': 'TextEdit', 'SIZE': 'TextEdit', 'STRING': 'TextEdit', 'STYLE': 'TextEdit', 'SWIDTH': 'TextEdit', 'TAG': 'TextEdit', 'THICKNESS': 'TextEdit', 'TRUECOLOR': 'TextEdit', 'TYPE': 'TextEdit', 'URL': 'TextEdit', 'X1_Y1_Z1': 'TextEdit', 'X1': 'TextEdit', 'Y1': 'TextEdit', 'Z1': 'TextEdit', 'X2_Y2_Z2': 'TextEdit', 'X2': 'TextEdit', 'Y2': 'TextEdit', 'Z2': 'TextEdit', 'X3_Y3_Z3': 'TextEdit', 'X3': 'TextEdit', 'Y3': 'TextEdit', 'Z3': 'TextEdit', 'X4_Y4_Z4': 'TextEdit', 'X4': 'TextEdit', 'Y4': 'TextEdit', 'Z4': 'TextEdit', 'XSCALE': 'TextEdit', 'YSCALE': 'TextEdit', 'ZSCALE': 'TextEdit', });
lyr_buildingzona6dan7_3.set('fieldImages', {'name': 'TextEdit', 'height': 'TextEdit', 'ADDRESS': 'TextEdit', 'FOTO': 'ExternalResource', });
lyr_pembebasanlahanrepair_4.set('fieldImages', {'AREA': 'TextEdit', 'LENGTH': 'TextEdit', 'X1_Y1_Z1': 'TextEdit', 'X1': 'TextEdit', 'Y1': 'TextEdit', 'Z1': 'TextEdit', 'UTILITAS': 'TextEdit', 'FOTO': 'ExternalResource', 'FOTO1': 'ExternalResource', 'FOTO2': 'ExternalResource', 'FOTO3': 'ExternalResource', });
lyr_sewalahanrepair_5.set('fieldImages', {'AREA': 'TextEdit', 'LENGTH': 'TextEdit', 'X1_Y1_Z1': 'TextEdit', 'X1': 'TextEdit', 'Y1': 'TextEdit', 'Z1': 'TextEdit', 'FOTO': 'ExternalResource', 'FOTO1': 'ExternalResource', 'FOTO2': 'ExternalResource', 'FOTO3': 'ExternalResource', });
lyr_detour_6.set('fieldImages', {'AREA': 'TextEdit', 'LENGTH': 'TextEdit', 'X1_Y1_Z1': 'TextEdit', 'X1': 'TextEdit', 'Y1': 'TextEdit', 'Z1': 'TextEdit', 'UTILITAS_1': 'TextEdit', 'FOTO': 'ExternalResource', 'FOTO1': 'ExternalResource', 'FOTO2': 'ExternalResource', 'FOTO3': 'ExternalResource', });
lyr_borepilerepair_7.set('fieldImages', {'X1_Y1_Z1': '', 'X1': '', 'Y1': '', 'Z1': '', });
lyr_pilarzona6dan7repair_8.set('fieldImages', {'STRING': 'TextEdit', });
lyr_konturzona6dan7_1.set('fieldLabels', {'ELEVATION': 'inline label', 'X1_Y1_Z1': 'inline label', });
lyr_trasebaru_2.set('fieldLabels', {'ANGLE': 'no label', 'AREA': 'no label', 'BLOCKNAME': 'no label', 'BULGE': 'no label', 'CENTER': 'no label', 'CENTROID': 'no label', 'CLASSNAME': 'no label', 'COLOR': 'no label', 'DWGNAME': 'no label', 'EANGLE': 'no label', 'EHANDLE': 'no label', 'ELEVATION': 'no label', 'EWIDTH': 'no label', 'HEIGHT': 'no label', 'IMAGENAME': 'no label', 'LABELPT': 'no label', 'LAYER': 'no label', 'LENGTH': 'no label', 'LINETYPE': 'no label', 'LINEWEIGHT': 'no label', 'LOCKSTAT': 'no label', 'PLOTSTYLE': 'no label', 'RADIUS': 'no label', 'ROTATION': 'no label', 'SANGLE': 'no label', 'SHAPENAME': 'no label', 'SIZE': 'no label', 'STRING': 'no label', 'STYLE': 'no label', 'SWIDTH': 'no label', 'TAG': 'no label', 'THICKNESS': 'no label', 'TRUECOLOR': 'no label', 'TYPE': 'no label', 'URL': 'no label', 'X1_Y1_Z1': 'no label', 'X1': 'no label', 'Y1': 'no label', 'Z1': 'no label', 'X2_Y2_Z2': 'no label', 'X2': 'no label', 'Y2': 'no label', 'Z2': 'no label', 'X3_Y3_Z3': 'no label', 'X3': 'no label', 'Y3': 'no label', 'Z3': 'no label', 'X4_Y4_Z4': 'no label', 'X4': 'no label', 'Y4': 'no label', 'Z4': 'no label', 'XSCALE': 'no label', 'YSCALE': 'no label', 'ZSCALE': 'no label', });
lyr_buildingzona6dan7_3.set('fieldLabels', {'name': 'inline label', 'height': 'inline label', 'ADDRESS': 'inline label', 'FOTO': 'inline label', });
lyr_pembebasanlahanrepair_4.set('fieldLabels', {'AREA': 'inline label', 'LENGTH': 'inline label', 'X1_Y1_Z1': 'inline label', 'X1': 'inline label', 'Y1': 'inline label', 'Z1': 'inline label', 'UTILITAS': 'inline label', 'FOTO': 'inline label', 'FOTO1': 'inline label', 'FOTO2': 'inline label', 'FOTO3': 'inline label', });
lyr_sewalahanrepair_5.set('fieldLabels', {'AREA': 'inline label', 'LENGTH': 'inline label', 'X1_Y1_Z1': 'inline label', 'X1': 'inline label', 'Y1': 'inline label', 'Z1': 'inline label', 'FOTO': 'inline label', 'FOTO1': 'inline label', 'FOTO2': 'inline label', 'FOTO3': 'inline label', });
lyr_detour_6.set('fieldLabels', {'AREA': 'inline label', 'LENGTH': 'inline label', 'X1_Y1_Z1': 'inline label', 'X1': 'inline label', 'Y1': 'inline label', 'Z1': 'inline label', 'UTILITAS_1': 'inline label', 'FOTO': 'inline label', 'FOTO1': 'inline label', 'FOTO2': 'inline label', 'FOTO3': 'inline label', });
lyr_borepilerepair_7.set('fieldLabels', {'X1_Y1_Z1': 'inline label', 'X1': 'inline label', 'Y1': 'inline label', 'Z1': 'inline label', });
lyr_pilarzona6dan7repair_8.set('fieldLabels', {'STRING': 'inline label', });
lyr_pilarzona6dan7repair_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});