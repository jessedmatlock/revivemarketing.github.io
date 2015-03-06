/*{    command: [{
        name: 'action',
        template: kendo.template($("#command-template").html()),
        click: function(e) {
            //e.preventDefault();
            alert('Dropdown to be implemented in LIVE APP');
        }
    }],
    title: " ",
    width: 50
}
*/


$(document).ready(function() {
	var inboxData = [{
	    ShareID: "654789123",
	    From: "John B. Good",
	    ExportLabel: "Case-1234",
	    SentOn: "01/09/2014",
	    ExpOn: "01/09/2014",
	    Size: "892MB",
	    Type: "Secure",
	    Forwarded: "1",
	    Downloads: "4"
	},{
	    ShareID: "654789123",
	    From: "John B. Good",
	    ExportLabel: "Case-1234",
	    SentOn: "01/09/2014",
	    ExpOn: "01/09/2014",
	    Size: "892MB",
	    Type: "Secure",
	    Forwarded: "1",
	    Downloads: "4"
	},{
	    ShareID: "654789123",
	    From: "John B. Good",
	    ExportLabel: "Case-1234",
	    SentOn: "01/09/2014",
	    ExpOn: "01/09/2014",
	    Size: "892MB",
	    Type: "Secure",
	    Forwarded: "1",
	    Downloads: "4"
	}];
	
    $("#user-inbox").kendoGrid({
        dataSource: {
			data: inboxData,
//            type: "odata",
//            transport: {
//               read: "http://demos.telerik.com/kendo-ui/service/Northwind.svc/Orders"
//           },
//            pageSize: 20,
//            serverPaging: true,
            serverFiltering: true,
            schema: {
                model: {
                    fields: {
		                Action: {
		                	editable: false,
		                	nullable: true
		                },                      	
                        ShareID: {
                            type: "number"
                        },
                        From: {
                            type: "string"
                        },
                        ExportLabel: {
                            type: "string"
                        },
                        SentOn: {
                            type: "date"
                        },
                        ExpOn: {
                            type: "date"
                        },
                        Size: {
                            type: "number"
                        },
                        Type: {
                            type: "string"
                        },
                        Forwarded: {
                            type: "string"
                        },
                        Downloads: {
                            type: "string"
                        }
                    }
                }
            }
        },
        height: 550,
		filterable: {
		    mode: "row"
		},
		sortable: {
		    mode: "single"
		},	
        pageable: true,
        columns: [{
		    template: "<input type='checkbox' class='checkbox' />",
		    width: 30,
		    title: " ",
		    filterable: false
        
		},{
            field: "ShareID",
            width: 150,
            title: "Share ID",
            filterable: {
                cell: {
                    showOperators: false,
                    operator: "contains"
                }
            }
        },{
            field: "From",
            title: "From",
            width: 150,
            filterable: {
                cell: {
                    showOperators: true
                }
            }
        }, {
            field: "ExportLabel",
            title: "Export Label",
            width: 160,
            filterable: {
                cell: {
                    operator: "gte"
                }
            }
        }, {
            field: "SentOn",
            title: "Sent On",
            format: "{0:MM/dd/yyyy}"
        }, {
            field: "ExpOn",
            title: "Expires On",
            format: "{0:MM/dd/yyyy}"
        }, {
            field: "Size",
            width: 150,
            filterable: {
                cell: {
                    operator: "gte",
                    showOperators: false
                }
            }
        }, {
            field: "Type",
            title: "Type",
            width: 100,
            filterable: {
                cell: {
                    showOperators: false,
                    operator: "contains"
                }
            }
        }, {
            field: "Forwarded",
            width: 100,
            title: "Forwarded",
            filterable: {
                cell: {
                    operator: "gte",
                    showOperators: false
                }
            }
        }, {
           field: "Downloads",
           width: 100,
           title: "Downloads",
           filterable: {
               cell: {
                   operator: "gte",
                   showOperators: false
               }
           }
		},{
		    command: [{
		        name: 'action',
		        template: kendo.template($("#command-template").html()),
		        click: function(e) {
		            //e.preventDefault();
		            alert('Dropdown to be implemented in LIVE APP');
		        }
		    }],
		    title: " ",
		    filterable: false,
		    width: 50
		}]
		
    }).data("kendoGrid");  
	//bind click event to the checkbox
});