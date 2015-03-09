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
	var orgOutboxData = [{
	    ShareID: "ID_21342323",
		To: "Organization Name",
	    ExportLabel: "Case-1234",
	    SentOn: "01/09/2014 12:51",
	    ExpOn: "01/09/2014 12:51",
	    Size: "892MB",
	    Type: "Secure",
	    Forwarded: "1",
	    Downloads: "4"
	},{
	    ShareID: "ID_21342324",
		To: "Organization Name",
	    ExportLabel: "Case-1234",
	    SentOn: "01/09/2014 12:51",
	    ExpOn: "01/09/2014 12:51",
	    Size: "892MB",
	    Type: "Secure",
	    Forwarded: "1",
	    Downloads: "4"
	},{
	    ShareID: "ID_21342325",
		To: "Organization Name",
	    ExportLabel: "Case-1234",
	    SentOn: "01/09/2014 12:51",
	    ExpOn: "01/09/2014 12:51",
	    Size: "892MB",
	    Type: "Secure",
	    Forwarded: "1",
	    Downloads: "4"
	},{
	    ShareID: "ID_21342326",
		To: "Organization Name",
	    ExportLabel: "Case-1234",
	    SentOn: "01/09/2014 12:51",
	    ExpOn: "01/09/2014 12:51",
	    Size: "892MB",
	    Type: "Secure",
	    Forwarded: "1",
	    Downloads: "4"
	},{
	    ShareID: "ID_21342327",
		To: "Organization Name",
	    ExportLabel: "Case-1234",
	    SentOn: "01/09/2014 12:51",
	    ExpOn: "01/09/2014 12:51",
	    Size: "892MB",
	    Type: "Secure",
	    Forwarded: "1",
	    Downloads: "4"
	},{
	    ShareID: "ID_21342328",
		To: "Organization Name",
	    ExportLabel: "Case-1234",
	    SentOn: "01/09/2014 12:51",
	    ExpOn: "01/09/2014 12:51",
	    Size: "892MB",
	    Type: "Secure",
	    Forwarded: "1",
	    Downloads: "4"
	},{
	    ShareID: "ID_21342329",
		To: "Organization Name",
	    ExportLabel: "Case-1234",
	    SentOn: "01/09/2014 12:51",
	    ExpOn: "01/09/2014 12:51",
	    Size: "892MB",
	    Type: "Secure",
	    Forwarded: "1",
	    Downloads: "4"
	},{
	    ShareID: "654789130",
		To: "Organization Name",
	    ExportLabel: "Case-1234",
	    SentOn: "01/09/2014 12:51",
	    ExpOn: "01/09/2014 12:51",
	    Size: "892MB",
	    Type: "Secure",
	    Forwarded: "1",
	    Downloads: "4"
	},{
	    ShareID: "654789131",
		To: "Organization Name",
	    ExportLabel: "Case-1234",
	    SentOn: "01/09/2014 12:51",
	    ExpOn: "01/09/2014 12:51",
	    Size: "892MB",
	    Type: "Secure",
	    Forwarded: "1",
	    Downloads: "4"
	},{
	    ShareID: "654789132",  
		To: "Organization Name",
	    ExportLabel: "Case-1234",
	    SentOn: "01/09/2014 12:51",
	    ExpOn: "01/09/2014 12:51",
	    Size: "892MB",
	    Type: "Secure",
	    Forwarded: "1",
	    Downloads: "4"
	},{
	    ShareID: "654789133",
		To: "Organization Name",
	    ExportLabel: "Case-1234",
	    SentOn: "01/09/2014 12:51",
	    ExpOn: "01/09/2014 12:51",
	    Size: "892MB",
	    Type: "Secure",
	    Forwarded: "1",
	    Downloads: "4"
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