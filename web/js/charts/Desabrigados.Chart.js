/*
 * File: Graphic.Panel.js
 * Date: Sat Jun 04 2011 14:20:56 GMT-0300 (Hora oficial do Brasil)
 * 
 * This file was generated by Ext Designer version 1.1.2.
 * http://www.sencha.com/products/designer/
 *
 * This file will be generated the first time you export.
 *
 * You should implement event handling and custom methods in this
 * class.
 */
 
 Ext.ns('Desabrigados');

Desabrigados.Chart = Ext.extend(Graphic.Panel, {
    initComponent: function() {
        		
		this.mainSeries = [	
		      				{ yField : 'desabrigados' ,name : 'Desabrigados' }
		      			];
						
						this.chartTitle = 'Desabrigados';
		

		Desabrigados.Chart.superclass.initComponent.call(this);
        
    }
});
Ext.reg('desabrigadoschart', Desabrigados.Chart);