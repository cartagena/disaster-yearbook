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

Graphic.Panel = Ext.extend(Graphic.PanelUi, {
    initComponent: function() {
        Graphic.Panel.superclass.initComponent.call(this);
        
		this.subtitleTemplate = '{0} a {1}';
		this.originalSubtitle = '';
		
        this.chart = new Ext.ux.HighChart({
			store		: 'disastersStore'
			,series			: this.mainSeries
			,xField			: 'dataOcorrencia'
			,chartConfig	: {
				chart		: {
					defaultSeriesType	: 'column'
		            ,margin				: [50, 200, 60, 170]
		        }
		        ,yAxis			: {
					title	: 'Valor' 
				}        
		        ,title		: {
		        	text		: this.chartTitle
		        }
		        ,subtitle	: {
		        	text		: this.originalSubtitle
		        }
		        ,plotArea	: {
	                shadow				: null
	                ,borderWidth		: null
	                ,backgroundColor	: null
		        }
		        ,tooltip	: {
	                formatter	: function() {
	                	return '<b>'+ this.series.name +'</b>: '+ this.y;
	                }
		        }
				,plotOptions: {
					column : {
						stacking		: 'normal'
						,cursor			: 'pointer'
					}
				}
		        ,legend		: {
	                layout			: 'vertical'
	                ,style			: {
		                left			: 'auto'
		                ,bottom			: 'auto'
		                ,right			: '50px'
		                ,top			: '100px'
	                }
		        }
				,credits	: {
					enabled		: false
				}
			}
		});
        
        this.add(this.chart);
        
    }
});
Ext.reg('graphicpanel', Graphic.Panel);