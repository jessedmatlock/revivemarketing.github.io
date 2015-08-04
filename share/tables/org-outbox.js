$(document).ready(function() {
	var orgOutboxData = [{
	    ShareID: "ID_21342323",
		To: "Organization Name",
	    ExportLabel: "13-2015-CF-000001-0001-XX",
	    SentOn: "01/09/14",
	    ExpOn: "02/09/14",
	    Size: "892MB",
	    Type: "Secure",
	    Forwarded: "1",
	    
	},{
	    ShareID: "ID_21342324",
		To: "Organization Name",
	    ExportLabel: "13-2015-CF-000001-0001-XX",
	    SentOn: "01/09/14",
	    ExpOn: "02/09/14",
	    Size: "892MB",
	    Type: "Secure",
	    Forwarded: "1",
	    
	},{
	    ShareID: "ID_21342325",
		To: "Organization Name",
	    ExportLabel: "13-2015-CF-000001-0001-XX",
	    SentOn: "01/09/14",
	    ExpOn: "02/09/14",
	    Size: "892MB",
	    Type: "Secure",
	    Forwarded: "1",
	    
	},{
	    ShareID: "ID_21342326",
		To: "Organization Name",
	    ExportLabel: "13-2015-CF-000001-0001-XX",
	    SentOn: "01/09/14",
	    ExpOn: "02/09/14",
	    Size: "892MB",
	    Type: "Secure",
	    Forwarded: "1",
	    
	},{
	    ShareID: "ID_21342327",
		To: "Organization Name",
	    ExportLabel: "13-2015-CF-000001-0001-XX",
	    SentOn: "01/09/14",
	    ExpOn: "02/09/14",
	    Size: "892MB",
	    Type: "Secure",
	    Forwarded: "1",
	    
	},{
	    ShareID: "ID_21342328",
		To: "Organization Name",
	    ExportLabel: "13-2015-CF-000001-0001-XX",
	    SentOn: "01/09/14",
	    ExpOn: "02/09/14",
	    Size: "892MB",
	    Type: "Secure",
	    Forwarded: "1",
	    
	},{
	    ShareID: "ID_21342329",
		To: "Organization Name",
	    ExportLabel: "13-2015-CF-000001-0001-XX",
	    SentOn: "01/09/14",
	    ExpOn: "02/09/14",
	    Size: "892MB",
	    Type: "Secure",
	    Forwarded: "1",
	    
	},{
	    ShareID: "654789130",
		To: "Organization Name",
	    ExportLabel: "13-2015-CF-000001-0001-XX",
	    SentOn: "01/09/14",
	    ExpOn: "02/09/14",
	    Size: "892MB",
	    Type: "Secure",
	    Forwarded: "1",
	    
	},{
	    ShareID: "654789131",
		To: "Organization Name",
	    ExportLabel: "13-2015-CF-000001-0001-XX",
	    SentOn: "01/09/14",
	    ExpOn: "02/09/14",
	    Size: "892MB",
	    Type: "Secure",
	    Forwarded: "1",
	    
	},{
	    ShareID: "654789132",  
		To: "Organization Name",
	    ExportLabel: "13-2015-CF-000001-0001-XX",
	    SentOn: "01/09/14",
	    ExpOn: "02/09/14",
	    Size: "892MB",
	    Type: "Secure",
	    Forwarded: "1",
	    
	},{
	    ShareID: "654789133",
		To: "Organization Name",
	    ExportLabel: "13-2015-CF-000001-0001-XX",
	    SentOn: "01/09/14",
	    ExpOn: "02/09/14",
	    Size: "892MB",
	    Type: "Secure",
	    Forwarded: "1",
	    
	}];
	
    $("#org-outbox").kendoGrid({
        dataSource: {
			data: orgOutboxData,
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
		scrollable : true,
        pageable: true,
        columns: [{
		    template: "<input type='checkbox' class='checkbox' />",
		    width: 30,
		    title: "<input type='checkbox' class='checkbox' />",
		    filterable: false
		},{
		    template: kendo.template($("#org-outbox-template").html()),
			width: 50,
			title: " ",
			filterable: false
			}, {
	            field: "ExportLabel",
	            title: "Reference Label",
	            width: 200,
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
            field: "To",
            title: "To",
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
			width: 150
        }, {
            field: "ExpOn",
            title: "Expires On",
    		format: "{0: MM/dd/yy HH:mm}",
			width: 150
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
		}]
		
    }).data("kendoGrid");  
	//bind click event to the checkbox
});