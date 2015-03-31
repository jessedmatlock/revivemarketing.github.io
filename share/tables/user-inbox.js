$(document).ready(function() {
	var inboxData = [{
	    ShareID: "654789123",
	    From: "Plano PD",
	    ExportLabel: "Case-1234",
	    SentOn: "01/09/14",
	    ExpOn: "02/09/14",
	    Size: "892MB",
	    Type: "Secure",
	    Forwarded: "1",
	    Downloads: "4"
	},{
	    ShareID: "654789124",
	    From: "McKinney PD",
	    ExportLabel: "Case-1234",
	    SentOn: "01/09/14",
	    ExpOn: "02/09/14",
	    Size: "892MB",
	    Type: "Secure",
	    Forwarded: "1",
	    Downloads: "4"
	},{
	    ShareID: "654789125",
	    From: "Celina PD",
	    ExportLabel: "Case-1234",
	    SentOn: "01/09/14",
	    ExpOn: "02/09/14",
	    Size: "892MB",
	    Type: "Secure",
	    Forwarded: "1",
	    Downloads: "4"
	},{
	    ShareID: "654789126",
	    From: "McKinney PD",
	    ExportLabel: "Case-1234",
	    SentOn: "01/09/14",
	    ExpOn: "02/09/14",
	    Size: "892MB",
	    Type: "Secure",
	    Forwarded: "1",
	    Downloads: "4"
	},{
	    ShareID: "654789127",
	    From: "McKinney PD",
	    ExportLabel: "Case-1234",
	    SentOn: "01/09/14",
	    ExpOn: "02/09/14",
	    Size: "892MB",
	    Type: "Secure",
	    Forwarded: "1",
	    Downloads: "4"
	},{
	    ShareID: "654789128",
	    From: "Plano PD",
	    ExportLabel: "Case-1234",
	    SentOn: "01/09/14",
	    ExpOn: "02/09/14",
	    Size: "892MB",
	    Type: "Secure",
	    Forwarded: "1",
	    Downloads: "4"
	},{
	    ShareID: "654789129",
	    From: "Celina PD",
	    ExportLabel: "Case-1234",
	    SentOn: "01/09/14",
	    ExpOn: "02/09/14",
	    Size: "892MB",
	    Type: "Secure",
	    Forwarded: "1",
	    Downloads: "4"
	},{
	    ShareID: "654789130",
	    From: "Plano PD",
	    ExportLabel: "Case-1234",
	    SentOn: "01/09/14",
	    ExpOn: "02/09/14",
	    Size: "892MB",
	    Type: "Secure",
	    Forwarded: "1",
	    Downloads: "4"
	},{
	    ShareID: "654789131",
	    From: "Celina PD",
	    ExportLabel: "Case-1234",
	    SentOn: "01/09/14",
	    ExpOn: "02/09/14",
	    Size: "892MB",
	    Type: "Secure",
	    Forwarded: "1",
	    Downloads: "4"
	},{
	    ShareID: "654789132",
	    From: "McKinney PD",
	    ExportLabel: "Case-1234",
	    SentOn: "01/09/14",
	    ExpOn: "02/09/14",
	    Size: "892MB",
	    Type: "Secure",
	    Forwarded: "1",
	    Downloads: "4"
	},{
	    ShareID: "654789133",
	    From: "Plano PD",
	    ExportLabel: "Case-1234",
	    SentOn: "01/09/14",
	    ExpOn: "02/09/14",
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
			sortable: {
			    mode: "single",
			    allowUnsort: false
			},
            serverFiltering: true,
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
		    title: "<input type='checkbox' class='checkbox' />",
		    filterable: false
		},{
		    template: kendo.template( $("#user-inbox-template").html() ),
			width: 50,
			title: " ",
			filterable: false
			}, {
	            field: "ExportLabel",
	            title: "Export Label",
	            width: 120,
	            filterable: {
	                cell: {
	                    operator: "gte"
	                }
	            }
	        
		},{
            field: "ShareID",
            width: 120,
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
            field: "SentOn",
            title: "Sent On",
    		format: "{0: MM/dd/yy HH:mm}",
			width: 110
        }, {
            field: "ExpOn",
            title: "Expires On",
    		format: "{0: MM/dd/yy HH:mm}",
			width: 110
        }, {
            field: "Size",
            width: 80,
            filterable: {
                cell: {
                    operator: "gte",
                    showOperators: false
                }
            }
        }, {
            field: "Type",
            title: "Type",
            width: 80,
            filterable: {
                cell: {
                    showOperators: false,
                    operator: "contains"
                }
            }
        }, {
            field: "Forwarded",
            width: 80,
            title: "Forwarded",
            filterable: {
                cell: {
                    operator: "gte",
                    showOperators: false
                }
            }
        }, {
           field: "Downloads",
           width: 80,
           title: "Downloads",
           filterable: {
               cell: {
                   operator: "gte",
                   showOperators: false
               }
           }
		}]
		
    }).data("kendoGrid");  
	//bind click event to the checkbox
});