/*
 * File: DisasterType.Store.js
 * Date: Sat Jun 04 2011 17:20:43 GMT-0300 (Hora oficial do Brasil)
 * 
 * This file was generated by Ext Designer version 1.1.2.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.ns('DisasterType');
DisasterType.Store = Ext.extend(Ext.data.JsonStore, {
    constructor: function(cfg) {
        cfg = cfg || {};
        DisasterType.Store.superclass.constructor.call(this, Ext.apply({
        	storeId: 'disasterTypeStore',
        	 data: [
                    {pqp:'desalojados', name:'Desalojados'},
                    {pqp:'desabrigados', name:'Desabrigados'},
                    {pqp:'mortos', name:'Mortos'},
                    {pqp:'atinjidos', name:'Atingidos'},
                    {pqp:'res_danificadas', name:'ResidÍncias Danificadas'},
                    {pqp:'res_destruidas', name:'ResidÍncias Destruidas'}
             ],
             fields: [
                      {
                     	 name	: 'pqp'
                     	 },
                 {
                     name	: 'name'
                 }
             ]
        }, cfg));
    }
});
new DisasterType.Store();