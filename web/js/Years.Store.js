/*
 * File: Years.Store.js
 * Date: Sat Jun 04 2011 17:13:05 GMT-0300 (Hora oficial do Brasil)
 * 
 * This file was generated by Ext Designer version 1.1.2.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.ns('Years');
Years.Store = Ext.extend(Ext.data.JsonStore, {
    constructor: function(cfg) {
        cfg = cfg || {};
        Years.Store.superclass.constructor.call(this, Ext.apply({
            storeId: 'yearsStore',
            data: [
                   {year:2007},
                   {year:2008},
                   {year:2009},
                   {year:2010},
                   {year:2011}
            ],
            fields: [
                {
                    name: 'year'
                }
            ]
        }, cfg));
    }
});
Ext.reg('yearsstore', Years.Store);new Years.Store();