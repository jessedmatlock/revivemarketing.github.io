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
	var orgInboxData = [{
	    ShareID: "654789123",
	    From: "Orgization Name",
		To: "Patrick Mills",
	    ExportLabel: "Case-1234",
	    SentOn: "01/09/2014 12:51",
	    ExpOn: "01/09/2014 12:51",
	    Size: "892MB",
	    Type: "Secure",
	    Forwarded: "1",
	    Downloads: "4"
	},{
	    ShareID: "654789124",
	    From: "Orgization Name",
		To: "Patrick Mills",
	    ExportLabel: "Case-1234",
	    SentOn: "01/09/2014 12:51",
	    ExpOn: "01/09/2014 12:51",
	    Size: "892MB",
	    Type: "Secure",
	    Forwarded: "1",
	    Downloads: "4"
	},{
	    ShareID: "654789125",
	    From: "Orgization Name",
		To: "Patrick Mills",
	    ExportLabel: "Case-1234",
	    SentOn: "01/09/2014 12:51",
	    ExpOn: "01/09/2014 12:51",
	    Size: "892MB",
	    Type: "Secure",
	    Forwarded: "1",
	    Downloads: "4"
	},{
	    ShareID: "654789126",
	    From: "Orgization Name",
		To: "Patrick Mills",
	    ExportLabel: "Case-1234",
	    SentOn: "01/09/2014 12:51",
	    ExpOn: "01/09/2014 12:51",
	    Size: "892MB",
	    Type: "Secure",
	    Forwarded: "1",
	    Downloads: "4"
	},{
	    ShareID: "654789127",
	    From: "Orgization Name",
		To: "Patrick Mills",
	    ExportLabel: "Case-1234",
	    SentOn: "01/09/2014 12:51",
	    ExpOn: "01/09/2014 12:51",
	    Size: "892MB",
	    Type: "Secure",
	    Forwarded: "1",
	    Downloads: "4"
	},{
	    ShareID: "654789128",
	    From: "Orgization Name",
		To: "Patrick Mills",
	    ExportLabel: "Case-1234",
	    SentOn: "01/09/2014 12:51",
	    ExpOn: "01/09/2014 12:51",
	    Size: "892MB",
	    Type: "Secure",
	    Forwarded: "1",
	    Downloads: "4"
	},{
	    ShareID: "654789129",
	    From: "Orgization Name",
		To: "Patrick Mills",
	    ExportLabel: "Case-1234",
	    SentOn: "01/09/2014 12:51",
	    ExpOn: "01/09/2014 12:51",
	    Size: "892MB",
	    Type: "Secure",
	    Forwarded: "1",
	    Downloads: "4"
	},{
	    ShareID: "654789130",
	    From: "Orgization Name",
		To: "Patrick Mills",
	    ExportLabel: "Case-1234",
	    SentOn: "01/09/2014 12:51",
	    ExpOn: "01/09/2014 12:51",
	    Size: "892MB",
	    Type: "Secure",
	    Forwarded: "1",
	    Downloads: "4"
	},{
	    ShareID: "654789131",
	    From: "Orgization Name",
		To: "Patrick Mills",
	    ExportLabel: "Case-1234",
	    SentOn: "01/09/2014 12:51",
	    ExpOn: "01/09/2014 12:51",
	    Size: "892MB",
	    Type: "Secure",
	    Forwarded: "1",
	    Downloads: "4"
	},{
	    ShareID: "654789132",
	    From: "Orgization Name",
		To: "Patrick Mills",
	    ExportLabel: "Case-1234",
	    SentOn: "01/09/2014 12:51",
	    ExpOn: "01/09/2014 12:51",
	    Size: "892MB",
	    Type: "Secure",
	    Forwarded: "1",
	    Downloads: "4"
	},{
	    ShareID: "654789133",
	    From: "Orgization Name",
		To: "Patrick Mills",
	    ExportLabel: "Case-1234",
	    SentOn: "01/09/2014 12:51",
	    ExpOn: "01/09/2014 12:51",
	    Size: "892MB",
	    Type: "Secure",
	    Forwarded: "1",
	    Downloads: "4"
	}];
	
    $("#org-inbox").kendoGrid({
        dataSource: {
			data: orgInboxData,
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
		    template: kendo.template($("#org-inbox-template").html()),
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
        },{
            field: "From",
            title: "From",
            width: 150,
            filterable: {
                cell: {
                    showOperators: true
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
            field: "ExportLabel",
            title: "Export Label",
            width: 120,
            filterable: {
                cell: {
                    operator: "gte"
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