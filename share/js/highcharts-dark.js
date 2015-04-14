//Highcharts.createElement('link', {
//    href: '//fonts.googleapis.com/css?family=Unica+One',
//    rel: 'stylesheet',
//    type: 'text/css'
//}, null, document.getElementsByTagName('head')[0]);

Highcharts.theme = {
    colors: ["#2b908f", "#90ee7e", "#f45b5b", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
        "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"
    ],
    chart: {
        backgroundColor: {
            linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
            },
            stops: [
                [0, '#212121'],
                [1, '#3c3c3e']
            ]
        },
        style: {
          //  fontFamily: "'Unica One', sans-serif"
        },
        plotBorderColor: '#606063'
    },
    title: {
        style: {
            color: '#E0E0E3',
            textTransform: 'uppercase',
            fontSize: '20px'
        }
    },
    subtitle: {
        style: {
            color: '#E0E0E3',
            textTransform: 'uppercase'
        }
    },
    xAxis: {
        gridLineColor: '#707073',
        labels: {
            style: {
                color: '#E0E0E3'
            }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        title: {
            style: {
                color: '#A0A0A3'

            }
        }
    },
    yAxis: {
        gridLineColor: '#707073',
        labels: {
            style: {
                color: '#E0E0E3'
            }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        tickWidth: 1,
        title: {
            style: {
                color: '#A0A0A3'
            }
        }
    },
    tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        style: {
            color: '#F0F0F0'
        }
    },
    plotOptions: {
        series: {
            dataLabels: {
                color: '#B0B0B3'
            },
            marker: {
                lineColor: '#333'
            }
        },
        boxplot: {
            fillColor: '#505053'
        },
        candlestick: {
            lineColor: 'white'
        },
        errorbar: {
            color: 'white'
        }
    },
    legend: {
        itemStyle: {
            color: '#E0E0E3'
        },
        itemHoverStyle: {
            color: '#FFF'
        },
        itemHiddenStyle: {
            color: '#606063'
        }
    },
    credits: {
        style: {
            color: '#666'
        }
    },
    labels: {
        style: {
            color: '#707073'
        }
    },

    drilldown: {
        activeAxisLabelStyle: {
            color: '#F0F0F3'
        },
        activeDataLabelStyle: {
            color: '#F0F0F3'
        }
    },

    navigation: {
		 menuStyle: {
		    border: '1px solid #222',
		    background: '#333',
		    boxShadow: '1px 1px 10px rgb(0, 0, 0)'
		},
		menuItemStyle: {
			fontWeight: 'normal',
			fontSize: '14px',
			lineHeight: '1.5',
			background: 'none',
			color: '#aaa'
		},
		menuItemHoverStyle: {
		    background: '#303030',
		    color: '#ffffff'
		},
    
        buttonOptions: {
            symbolStroke: '#eee',
            theme: {
                'stroke-width': 1,
                stroke: '#222',
                fill: '#444',
                r: 0,
                states: {
                    hover: {
                        stroke: '#222',
                        fill: '#222'
                    },
                    select: {
                        stroke: '#222',
                        fill: '#222'
                    }
                }
            }
        },
    },

    // scroll charts
    rangeSelector: {
        buttonTheme: {
            fill: '#505053',
            stroke: '#000000',
            style: {
                color: '#CCC'
            },
            states: {
                hover: {
                    fill: '#707073',
                    stroke: '#000000',
                    style: {
                        color: 'white'
                    }
                },
                select: {
                    fill: '#000000',
                    stroke: '#000000',
                    style: {
                        color: 'white'
                    }
                }
            }
        },
        inputBoxBorderColor: '#505053',
        inputStyle: {
            backgroundColor: '#333',
            color: 'silver'
        },
        labelStyle: {
            color: '#fff'
        }
    },

    navigator: {
        outlineColor: '#000',
        outlineWidth: 1,
        //maskFill: 'rgba(76, 249, 49, 0.25)',
        maskFill: 'rgba(127, 207, 58, 0.5)',
        handles: {
            backgroundColor: '#7FCF3A',
            borderColor: '#000'
        },
        series: {
            color: '#3e3e40',
            lineColor: '#3e3e40',
            marker: {enabled: false}
        },
        xAxis: {
            gridLineColor: '#3e3e40',
            labels: {
                style: {
                    color: '#fff'
                },
            }
        },
    },
    scrollbar: {
        barBackgroundColor: '#5D853B',
        barBorderColor: '#5D853B',
        //barBorderWidth: 0,
        buttonArrowColor: '#fff',
        buttonBackgroundColor: '#606063',
        buttonBorderColor: '#222',
        buttonBorderWidth: 1,
        rifleColor: '#fff',
        trackBackgroundColor: '#3e3e40',
        trackBorderWidth: 1,
        trackBorderColor: '#333',

    },
    tooltip: {
        backgroundColor: {
            linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
            },
            stops: [
                [0, '#444'],
                [1, '#333']
            ]
        },
        borderColor: '#000',
        borderWidth: 1,
        formatter: function() {
            var s = '<b>Time: </b>'+ Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x);

            $.each(this.points, function(i, point) {
                s += '<br/>'+ this.series.name +': ' + point.y +' MPH';
            });
        
            return s;
        },
        style: {
            color: '#eee',
            fontSize: '12px',
            fontFamily: 'Helvetica, sens-serif',
            padding: '8px'
        }
    },



};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);
