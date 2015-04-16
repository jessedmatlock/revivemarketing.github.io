/*
$(function() {  
  
  $.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=aapl-ohlcv.json&callback=?', function(data) {

        var inputs = [{
            name: 'Bookmark',
            intervals: [{ // From-To pairs
                from: Date.UTC(2013, 9, 27, 9, 1, 00),
                to: Date.UTC(2013, 9, 27, 9, 1, 01)
            }, {
                from: Date.UTC(2013, 9, 27, 9, 20),
                to: Date.UTC(2013, 9, 27, 9, 21)
            }]
        }, {
            name: 'Mic 1',
            intervals: [{ // From-To pairs
                from: Date.UTC(2013, 9, 27, 9, 3, 00),
                to: Date.UTC(2013, 9, 27, 9, 6, 00)
            }, {
                from: Date.UTC(2013, 9, 27, 9, 18, 00),
                to: Date.UTC(2013, 9, 27, 9, 23, 00)
            }]
        }, {
            name: 'Mic 2',
            intervals: [{ // From-To pairs
                from: Date.UTC(2013, 9, 27, 9, 3, 00),
                to: Date.UTC(2013, 9, 27, 9, 9, 00)
            }, {
                from: Date.UTC(2013, 9, 27, 9, 16, 00),
                to: Date.UTC(2013, 9, 27, 9, 18, 00)
            }, {
                from: Date.UTC(2013, 9, 27, 9, 42, 00),
                to: Date.UTC(2013, 9, 27, 9, 44, 00)
            }, {
                from: Date.UTC(2013, 9, 27, 9, 49, 00),
                to: Date.UTC(2013, 9, 27, 10, 05, 00)
            }]
        }, {
            name: 'Lights',
            intervals: [{ // From-To pairs
                from: Date.UTC(2013, 9, 27, 9, 11, 00),
                to: Date.UTC(2013, 9, 27, 9, 55, 00)
            }]
        }, {
           name: 'Brakes',
           intervals: [{ // From-To pairs
               from: Date.UTC(2013, 9, 27, 9, 11, 00),
               to: Date.UTC(2013, 9, 27, 9, 55, 00)
            }]
        }, {
            name: 'Siren',
            intervals: [{ // From-To pairs
                from: Date.UTC(2013, 9, 27, 9, 11, 00),
                to: Date.UTC(2013, 9, 27, 9, 55, 00)
            }]
        }];


        // re-structure the tasks into line seriesvar status = [];
        var status = [];
        $.each(inputs.reverse(), function(i, input) {
            var item = {
                name: input.name,
                data: []
            };
            $.each(input.intervals, function(j, interval) {
                item.data.push({
                    x: interval.from,
                    y: i,
                    label: interval.label,
                    from: interval.from,
                    to: interval.to
                }, {
                    x: interval.to,
                    y: i,
                    from: interval.from,
                    to: interval.to
                });

                // add a null value between intervals
                if (input.intervals[j + 1]) {
                    item.data.push(
                        [(interval.to + input.intervals[j + 1].from) / 2, null]
                    );
                }

            });

            status.push(item);
        });

        // split the data set into ohlc and volume
        var volume = [],
            dataLength = data.length;

        for (i = 0; i < dataLength; i++) {

            volume.push([
                data[i][0], // the date
                data[i][5] // the volume
            ]);
        }

        // set the allowed units for data grouping
        var groupingUnits = [
            [    'millisecond', // unit name
                [1, 2, 5, 10, 20, 25, 50, 100, 200, 500] // allowed multiples
            ], [
                'second',
                [1, 2, 5, 10, 15, 30]
            ], [
                'minute',
                [1, 2, 5, 10, 15, 30]
            ], [
                'hour',
                [1, 2, 3, 4, 6, 8, 12]
            ], [
                'day',
                [1]
            ]       
        ];

       // create the chart
        $('#meta-data-graph').highcharts('StockChart', {
	        scrollbar: {
	            enabled: false
	        },	
            chart: {
                renderTo: 'container',
              	marginTop: 40
            },
            credits: {
                enabled: false
            },
            exporting: {
               filename: 'event-id-metadata-graph',
    
                buttons: {
                    contextButton: {
                        menuItems: [{
                            text: 'Export Graph to PDF',
                            onclick: function () {
                                this.exportChart({
                                    type: 'application/pdf'
                                });
                            }
                        }, {
                            text: 'Export Table to PDF',
                            onclick: function () {
                            	alert('Launch Print Table function')                            	
                            //    this.exportChart({
                            //    	type: 'image/jpeg'
                            //    });
                            },
                            separator: false
                        }]
                    }
                }
            },
            rangeSelector: {
              enabled: false,
              inputEnabled: false,
              selected: 3,
              buttons: [{
                    type: 'second',
                    count: 1,
                    text: '1s'
                }, {
                    type: 'minute',
                    count: 1,
                    text: '1m'
                }, {
                    type: 'day',
                    count: 1,
                    text: '1d'
                }, {
                    type: 'all',
                    text: 'All'
                }]
            },
            navigator: {
              adaptToUpdatedData: false,
              // ^-- This should be false when loading data asynchronously, 
              // to prevent circular loading
              margin: 5,
              // maskInside: false,
                series: {
                  lineWidth: 0,
                    marker: {
                        enabled: false	
                    }
                }
            },
            title: {
              text: '' // title above chart
            },
            xAxis: {
                type: 'datetime',
                events: {
                    afterSetExtremes: function(e) {},
                    setExtremes: function(e) {
                        var min = e.min,
                            max = e.max;
	                    //$('#spinner1').val(Highcharts.dateFormat('%Y/%m/%d %H:%M:%S',min));
	                    $('#spinner1').val(Highcharts.dateFormat('%Y/%m/%d %H:%M:%S', min));
						$('#spinner2').val(Highcharts.dateFormat('%Y/%m/%d %H:%M:%S', max));
                    }
                },
              labels: {
                enabled: false
              },
              tickLength: 0
            },

            yAxis: [{
                height: '60%',
              	opposite: false,
                tickInterval: 1,
              	tickWidth: 0,
                labels: {
                    formatter: function() {
                        if (inputs[this.value]) {
                            return inputs[this.value].name;
                        }
                    },
                    align: 'right',
                  	x: -20,
                  	y: 4
                },            
              showLastLabel: true
            }, {
                height: '40%',
                top: '60%',
   	            opposite: false,
                offset: 60,
                lineWidth: 1,
              	tickWidth: 0,
                labels: {
                    align: 'right',
                    formatter: function() {
                        return this.value + ' MPH';
                    },
                    x: 52,
                    y: 4
                },
                showLastLabel: true,
                title: {
                  text: 'Speed',
                  align: 'middle',
                  opposite: false,
                  style: {
                  	color: '#fff'
                  }
                }
            }],
            plotOptions: {
				series: {
                    states: {
                        hover: {
                            lineWidth: 2
                        }
                    }
                },
                line: {
                   linecap: 'square',
                    marker: {
                       enabled: true  // shows markers for all graphs points
                    },
                    point: {
                        events: {
                            click: function() {
                                // let's show the data value of the selected point (on click)
                                $('#click-value').html(Highcharts.dateFormat('%m/%d/%Y at %H:%M:%S', this.x));
                            }
                        }
                    }
                }
            },

            series: [{
                 states: {
                      hover: {
                          lineWidth: 5
                      }
                },
                lineWidth: 5,
                marker: {
                    enabled: false, // hide markers for interval bars
	                lineWidth: 1
                },
                dataLabels: {
                    enabled: true,
                    align: 'left',
                    formatter: function() {
                        return this.point.options && this.point.options.label;
                    }
                },
                name: '',
                data: status[0].data,
                dataGrouping: {
                    units: groupingUnits
                }
            }, {
                 states: {
                      hover: {
                          lineWidth: 5
                      }
                },
                lineWidth: 5,
                marker: {
                    enabled: false, // hide markers for interval bars
	                lineWidth: 1,
	                radius: 5
                },
                dataLabels: {
                    enabled: true,
                    align: 'left',
                    formatter: function() {
                        return this.point.options && this.point.options.label;
                    }
                },
                name: '',
                data: status[1].data,
                dataGrouping: {
                    units: groupingUnits
                }
            }, {
                 states: {
                      hover: {
                          lineWidth: 5
                      }
                },
                lineWidth: 5,
                marker: {
                    enabled: false, // hide markers for interval bars
	                lineWidth: 1,
	                radius: 5
                },
                dataLabels: {
                    enabled: true,
                    align: 'left',
                    formatter: function() {
                        return this.point.options && this.point.options.label;
                    }
                },
                name: '',
                data: status[2].data,
                dataGrouping: {
                    units: groupingUnits
                }
            }, {
                 states: {
                      hover: {
                          lineWidth: 5
                      }
                },
                lineWidth: 5,
                marker: {
                    enabled: false, // hide markers for interval bars
	                lineWidth: 1,
	                radius: 5
                },
                dataLabels: {
                    enabled: true,
                    align: 'left',
                    formatter: function() {
                        return this.point.options && this.point.options.label;
                    }
                },
              	name: '',
                data: status[3].data,
                dataGrouping: {
                    units: groupingUnits
                }
            }, {
				states: {
                    hover: {
                        lineWidth: 5
                    }
                },
                lineWidth: 5,
                marker: {
                    enabled: false, // hide markers for interval bars
	                lineWidth: 1,
	                radius: 5
                },
                dataLabels: {
                    enabled: true,
                    align: 'left',
                    formatter: function() {
                        return this.point.options && this.point.options.label;
                    }
                },
             	name: '',
                data: status[4].data,
                dataGrouping: {
                    units: groupingUnits
                }
            }, {
                 states: {
                      hover: {
                          lineWidth: 5
                      }
                },
                lineWidth: 5,
                marker: {
                    enabled: false, // hide markers for interval bars
	                lineWidth: 1,
	                radius: 5
                },
                dataLabels: {
                    enabled: true,
                    align: 'left',
                    formatter: function() {
                        return this.point.options && this.point.options.label;
                    }
                },
              	name: '',
                data: status[5].data,
                dataGrouping: {
                    units: groupingUnits
                }
            }, {
                name: 'GPS Speed',
                data: [
                    [Date.UTC(2013, 9, 27, 9, 1, 00), 32],
                    [Date.UTC(2013, 9, 27, 9, 2, 33), 40],
                    [Date.UTC(2013, 9, 27, 9, 3, 00), 55],
                    [Date.UTC(2013, 9, 27, 9, 6, 00), 55],
                    [Date.UTC(2013, 9, 27, 9, 9, 00), 65],
                    [Date.UTC(2013, 9, 27, 9, 11, 00), 66],
                    [Date.UTC(2013, 9, 27, 9, 14, 00), 67],
                    [Date.UTC(2013, 9, 27, 9, 16, 00), 71],
                    [Date.UTC(2013, 9, 27, 9, 18, 00), 78],
                    [Date.UTC(2013, 9, 27, 9, 20, 00), 81],
                    [Date.UTC(2013, 9, 27, 9, 23, 00), 83],
                    [Date.UTC(2013, 9, 27, 9, 30, 00), 85],
                    [Date.UTC(2013, 9, 27, 9, 35, 00), 85],
                    [Date.UTC(2013, 9, 27, 9, 38, 00), 92],
                    [Date.UTC(2013, 9, 27, 9, 42, 00), 90],
                    [Date.UTC(2013, 9, 27, 9, 44, 00), 88],
                    [Date.UTC(2013, 9, 27, 9, 46, 00), 87],
                    [Date.UTC(2013, 9, 27, 9, 49, 00), 85],
                    [Date.UTC(2013, 9, 27, 9, 50, 00), 80],
                    [Date.UTC(2013, 9, 27, 9, 53, 00), 75],
                    [Date.UTC(2013, 9, 27, 9, 55, 00), 70],
                    [Date.UTC(2013, 9, 27, 10, 02, 00), 65],
                    [Date.UTC(2013, 9, 27, 10, 04, 00), 60],
                    [Date.UTC(2013, 9, 27, 10, 05, 00), 40],
                    [Date.UTC(2013, 9, 27, 10, 08, 00), 35]
                ],
                yAxis: 1,
                dataGrouping: {
                    units: groupingUnits
                }
            }, {
                name: 'Patrol Speed',
                data: [
                    [Date.UTC(2013, 9, 27, 9, 1, 00), 30],
                    [Date.UTC(2013, 9, 27, 9, 2, 33), 33],
                    [Date.UTC(2013, 9, 27, 9, 3, 00), 37],
                    [Date.UTC(2013, 9, 27, 9, 6, 00), 40],
                    [Date.UTC(2013, 9, 27, 9, 9, 00), 48],
                    [Date.UTC(2013, 9, 27, 9, 11, 00), 52],
                    [Date.UTC(2013, 9, 27, 9, 14, 00), 55],
                    [Date.UTC(2013, 9, 27, 9, 16, 00), 60],
                    [Date.UTC(2013, 9, 27, 9, 18, 00), 66],
                    [Date.UTC(2013, 9, 27, 9, 20, 00), 68],
                    [Date.UTC(2013, 9, 27, 9, 23, 00), 80],
                    [Date.UTC(2013, 9, 27, 9, 30, 00), 88],
                    [Date.UTC(2013, 9, 27, 9, 35, 00), 90],
                    [Date.UTC(2013, 9, 27, 9, 38, 00), 80],
                    [Date.UTC(2013, 9, 27, 9, 42, 00), 75],
                    [Date.UTC(2013, 9, 27, 9, 44, 00), 63],
                    [Date.UTC(2013, 9, 27, 9, 50, 00), 46],
                    [Date.UTC(2013, 9, 27, 9, 55, 00), 35],
                    [Date.UTC(2013, 9, 27, 10, 08, 00), 28]
                ],
                yAxis: 1,
                dataGrouping: {
                    units: groupingUnits
                }
            }]
        });
    });
});
*/

// WGV chart demo 
$(function() {


    $.getJSON('//www.highcharts.com/samples/data/jsonp.php?filename=aapl-ohlcv.json&callback=?', function(data) {

        var inputs = [{
            name: 'Bookmark',
            intervals: [{ // From-To pairs
                from: 0,
                to: 5
            }, {
                from: 20,
                to: 25
            }]
        }, {
            name: 'Mic 1',
            intervals: [{ // From-To pairs
                from: 10,
                to: 20
            }, {
                from: 50,
                to: 60
            }]
        }, {
            name: 'Mic 2',
            intervals: [{ // From-To pairs
                from: 10,
                to: 30
            }, {
                from: 45,
                to: 55
            }, {
                from: 75,
                to: 80
            }, {
                from: 90,
                to: 100
            }]
        }, {
            name: 'Lights',
            intervals: [{ // From-To pairs
                from: 20,
                to: 60
            }]
        }, {
            name: 'Brakes',
            intervals: [{ // From-To pairs
                from: 10,
                to: 90
            }]
        }, {
            name: 'Siren',
            intervals: [{ // From-To pairs
                from: 30,
                to: 40
            }]
        }];


        // re-structure the tasks into line seriesvar status = [];
        var status = [];
        $.each(inputs.reverse(), function(i, input) {
            var item = {
                name: input.name,
                data: []
            };
            $.each(input.intervals, function(j, interval) {
                item.data.push({
                    x: interval.from,
                    y: i,
                    label: interval.label,
                    from: interval.from,
                    to: interval.to
                }, {
                    x: interval.to,
                    y: i,
                    from: interval.from,
                    to: interval.to
                });

                // add a null value between intervals
                if (input.intervals[j + 1]) {
                    item.data.push(
                        [(interval.to + input.intervals[j + 1].from) / 2, null]
                    );
                }

            });

            status.push(item);
        });

        // split the data set into ohlc and volume
        var volume = [],
            dataLength = data.length;

        for (i = 0; i < dataLength; i++) {

            volume.push([
                data[i][0], // the date
                data[i][5] // the volume
            ]);
        }

        // set the allowed units for data grouping
        var groupingUnits = [
            ['millisecond', // unit name
                [1, 2, 5, 10, 20, 25, 50, 100, 200, 500] // allowed multiples
            ],
            [
                'second', [1, 2, 5, 10, 15, 30]
            ],
            [
                'minute', [1, 2, 5, 10, 15, 30]
            ],
            [
                'hour', [1, 2, 3, 4, 6, 8, 12]
            ],
            [
                'day', [1]
            ]
        ];

        // create the chart
        
       $('#meta-data-graph').highcharts('StockChart', {
            chart: {
                renderTo: 'container',
                marginTop: 40
            },
            credits: {
                enabled: false
            },
            rangeSelector: {
                enabled: false,
                inputEnabled: false,
                selected: 3,
                buttons: [{
                    type: 'second',
                    count: 1,
                    text: '1s'
                }, {
                    type: 'minute',
                    count: 1,
                    text: '1m'
                }, {
                    type: 'day',
                    count: 1,
                    text: '1d'
                }, {
                    type: 'all',
                    text: 'All'
                }]
            },
           
            scrollbar : {
                enabled : false
            },


            navigator: {
                enabled : false,
                
                adaptToUpdatedData: false,
                // ^-- This should be false when loading data asynchronously, 
                // to prevent circular loading
                margin: 5,
                // maskInside: false,
                series: {
                    lineWidth: 0,
                    marker: {
                        enabled: false
                    }
                }
            },
            title: {
                text: '' // title above chart
            },
            xAxis: {
                type: 'datetime',
                labels: {
                    enabled: false
                },
                events: {
                    afterSetExtremes: function(e) {},
                    setExtremes: function(e) {
                        var min = e.min,
                            max = e.max;
                        $('#report').html('Start Time: ' + min + ',<br/> Stop Time: ' + max + ',<br/> e.trigger: ' + e.trigger);
                    }
                },
      /*          plotBands: [{ // mark the weekend
                    color: '#222',
                    from: trimSlider1, //Date.UTC(2013, 9, 27, 9, 1, 00),
                    to: trimSlider2, //Date.UTC(2013, 9, 27, 9, 7, 00),
                    label: {
                        text: 'Trimmed Video',
                        style: {
                            color: '#888'
                        }
                    }
                }],
    */
            },

            yAxis: [{
                height: '60%',
                opposite: false,
                tickInterval: 1,
                tickWidth: 0,
                labels: {
                    formatter: function() {
                        if (inputs[this.value]) {
                            return inputs[this.value].name;
                        }
                    },
                    align: 'right',
                    x: -20,
                    y: 4
                },
                showLastLabel: true
            }, {
                height: '40%',
                top: '60%',
                opposite: false,
                offset: 60,
                lineWidth: 1,
                tickWidth: 0,
                labels: {
                    align: 'right',
                    formatter: function() {
                        return this.value + ' MPH';
                    },
                    x: 52,
                    y: 4
                },
                showLastLabel: true,
                title: {
                    text: 'Speed',
                    align: 'middle',
                    opposite: false,
                    style: {
                        color: '#fff'
                    }
                }
            }],
            plotOptions: {
                series: {
                    states: {
                        hover: {
                            lineWidth: 2
                        }
                    }
                },
                line: {
                    linecap: 'square',
                    marker: {
                        enabled: true // shows markers for all graphs points
                    },
                    point: {
                        events: {
                            click: function() {
                                // let's show the data value of the selected point (on click)
                                $('#click-value').html(Highcharts.dateFormat('%m/%d/%Y at %H:%M:%S', this.x));
                            }
                        }
                    }
                }
            },

            series: [{
                states: {
                    hover: {
                        lineWidth: 10
                    }
                },
                lineWidth: 10,
                marker: {
                    enabled: false, // hide markers for interval bars
                    lineWidth: 1
                },
                dataLabels: {
                    enabled: true,
                    align: 'left',
                    formatter: function() {
                        return this.point.options && this.point.options.label;
                    }
                },
                name: '',
                data: status[0].data,
                dataGrouping: {
                    units: groupingUnits
                }
            }, {
                states: {
                    hover: {
                        lineWidth: 10
                    }
                },
                lineWidth: 10,
                marker: {
                    enabled: false, // hide markers for interval bars
                    lineWidth: 1,
                    radius: 5
                },
                dataLabels: {
                    enabled: true,
                    align: 'left',
                    formatter: function() {
                        return this.point.options && this.point.options.label;
                    }
                },
                name: '',
                data: status[1].data,
                dataGrouping: {
                    units: groupingUnits
                }
            }, {
                states: {
                    hover: {
                        lineWidth: 10
                    }
                },
                lineWidth: 10,
                marker: {
                    enabled: false, // hide markers for interval bars
                    lineWidth: 1,
                    radius: 5
                },
                dataLabels: {
                    enabled: true,
                    align: 'left',
                    formatter: function() {
                        return this.point.options && this.point.options.label;
                    }
                },
                name: '',
                data: status[2].data,
                dataGrouping: {
                    units: groupingUnits
                }
            }, {
                states: {
                    hover: {
                        lineWidth: 10
                    }
                },
                lineWidth: 10,
                marker: {
                    enabled: false, // hide markers for interval bars
                    lineWidth: 1,
                    radius: 5
                },
                dataLabels: {
                    enabled: true,
                    align: 'left',
                    formatter: function() {
                        return this.point.options && this.point.options.label;
                    }
                },
                name: '',
                data: status[3].data,
                dataGrouping: {
                    units: groupingUnits
                }
            }, {
                states: {
                    hover: {
                        lineWidth: 10
                    }
                },
                lineWidth: 10,
                marker: {
                    enabled: false, // hide markers for interval bars
                    lineWidth: 1,
                    radius: 5
                },
                dataLabels: {
                    enabled: true,
                    align: 'left',
                    formatter: function() {
                        return this.point.options && this.point.options.label;
                    }
                },
                name: '',
                data: status[4].data,
                dataGrouping: {
                    units: groupingUnits
                }
            }, {
                states: {
                    hover: {
                        lineWidth: 10
                    }
                },
                lineWidth: 10,
                marker: {
                    enabled: false, // hide markers for interval bars
                    lineWidth: 1,
                    radius: 5
                },
                dataLabels: {
                    enabled: true,
                    align: 'left',
                    formatter: function() {
                        return this.point.options && this.point.options.label;
                    }
                },
                name: '',
                data: status[5].data,
                dataGrouping: {
                    units: groupingUnits
                }
            }, {


                name: 'GPS Speed',
                data: [
                    [0, 32],
                    [5, 40],
                    [10, 45],
                    [20, 45],
                    [30, 50],
                    [35, 55],
                    [40, 60],
                    [45, 70],
                    [50, 75],
                    [55, 75],
                    [60, 83],
                    [65, 85],
                    [70, 85],
                    [75, 92],
                    [80, 90],
                    [85, 88],
                    [90, 87],
                    [95, 85],
                    [100, 0],
                ],
                yAxis: 1,
                dataGrouping: {
                    units: groupingUnits
                }
            }, {
                name: 'Patrol Speed',
                data: [
                    [0, 22],
                    [5, 35],
                    [10, 68],
                    [20, 72],
                    [30, 75],
                    [35, 79],
                    [40, 85],
                    [45, 70],
                    [50, 78],
                    [55, 81],
                    [60, 83],
                    [65, 85],
                    [70, 92],
                    [75, 90],
                    [80, 80],
                    [85, 88],
                    [90, 85],
                    [95, 40],
                    [100, 0],

                ],
                yAxis: 1,
                dataGrouping: {
                    units: groupingUnits
                }
            }]
        });
    });
});
    
$('#trim-slider').slider({
    range: true,
    min: 0,
    max: 100,
    step: 0.125,
    values: [ 0, 100 ], 
    start: function(event, ui) {
        $('#meta-data-graph').highcharts().xAxis[0].removePlotBand('trim-band');
    },
    stop: function(event, ui) {},
    change: function(event, ui) {
        $( "#trim-slider-range" ).html( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
        
        $('#meta-data-graph').highcharts().xAxis[0].addPlotBand({
            from: ui.values[ 0 ],
            to: ui.values[ 1 ],
            borderColor: 'rgba(255, 240, 0, 0.75)',
            borderWidth: '1px',
            color: 'rgba(255, 240, 0, 0.125)',
            id: 'trim-band',
            label: {
                text: 'Trimmed Video',
                style: {
                    color: '#FFF000'
                }
            }
        });        
        // show thumbnail overlay, to simulate refresh of the thumbnail.. 
		if (ui.handle.nextSibling) {
            // Moving LEFT slider ...
			refresh_thumb('#thumb1');
        } else {
            // Moving RIGHT slider ...
			refresh_thumb('#thumb2');			
        }
    }  
});


$("#slider").slider({
    value: 0,
    min: 0,
    max: 100,
    step: 0.125,
    slide: function(event, ui) {
        $("#slider-value").html(ui.value);
    }
}).find('.ui-slider-handle').append('<div class="line"></div>');