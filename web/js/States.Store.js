/*
 * File: States.Store.js
 * Date: Sat Jun 04 2011 17:20:43 GMT-0300 (Hora oficial do Brasil)
 * 
 * This file was generated by Ext Designer version 1.1.2.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.ns('States');
States.Store = Ext.extend(Ext.data.JsonStore, {
    constructor: function(cfg) {
        cfg = cfg || {};
        States.Store.superclass.constructor.call(this, Ext.apply({
            storeId: 'statesStore'
        }, cfg));
    }
});
new States.Store();