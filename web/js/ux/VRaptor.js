/**
 * 
 */

Ext.ns('Ext.ux.vraptor');

Ext.ux.vraptor.decode = function(data) {
	var newData = {};
	
	for(key in data) {
		var newKey = new String(key).split('.')[1];
		newData[newKey] = data[key];
	}
	
	return newData;
};

Ext.ux.vraptor.encode = function(data, prefix) {
	var newData = {};
	
	for(key in data) {
		var newKey = prefix + '.' + key;
		
		var v = data[key];
		if(Ext.isObject(data[key])) {
			newKey += '.id';
			v = v.id;
		} else if(key == 'date') {
			v = Date.parseDate(v, 'd/m/Y H:i:s');
		}
		
		newData[newKey] = v; //key == 'date' ? Date.parseDate(data[key], 'd/m/Y H:i:s') : data[key];
	}
	
	return newData;
};