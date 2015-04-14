$(document).ready(function() {
	var orgInboxData = [{
		ExportLabel: "Case-1234",	    
	    ShareID: "654789123",
	    From: "Plano PD",
		To: "7 Recipients",
	    SentOn: "01/09/14",
	    ExpOn: "02/09/14",
	    Size: "892MB",
	    Type: "Secure",
	    
	    Downloads: "4"
	},{
	    ExportLabel: "Case-1234",	    
	    ShareID: "654789124",
	    From: "McKinney PD",
		To: "4 Recipients",
	    SentOn: "01/09/14",
	    ExpOn: "02/09/14",
	    Size: "892MB",
	    Type: "Secure",
	    
	    Downloads: "4"
	},{
	    ExportLabel: "Case-1234",	    
	    ShareID: "654789125",
	    From: "Plano PD",
		To: "1 Recipient",
	    SentOn: "01/09/14",
	    ExpOn: "02/09/14",
	    Size: "892MB",
	    Type: "Secure",
	    
	    Downloads: "4"
	},{
	    ExportLabel: "Case-1234",	    
	    ShareID: "654789126",
	    From: "Celina PD",
		To: "1 Recipient",
	    SentOn: "01/09/14",
	    ExpOn: "02/09/14",
	    Size: "892MB",
	    Type: "Secure",
	    
	    Downloads: "4"
	},{
	    ExportLabel: "Case-1234",	    
	    ShareID: "654789127",
	    From: "Celina PD",
		To: "3 Recipients",
	    SentOn: "01/09/14",
	    ExpOn: "02/09/14",
	    Size: "892MB",
	    Type: "Secure",
	    
	    Downloads: "4"
	},{
	    ExportLabel: "Case-1234",	    
	    ShareID: "654789128",
	    From: "Plano PD",
		To: "1 Recipient",
	    SentOn: "01/09/14",
	    ExpOn: "02/09/14",
	    Size: "892MB",
	    Type: "Secure",
	    
	    Downloads: "4"
	},{
	    ExportLabel: "Case-1234",	    
	    ShareID: "654789129",
	    From: "Celina PD",
		To: "8 Recipients",
	    SentOn: "01/09/14",
	    ExpOn: "02/09/14",
	    Size: "892MB",
	    Type: "Secure",
	    
	    Downloads: "4"
	},{
	    ExportLabel: "Case-1234",	    
	    ShareID: "654789130",
	    From: "Plano PD",
		To: "3 Recipients",
	    SentOn: "01/09/14",
	    ExpOn: "02/09/14",
	    Size: "892MB",
	    Type: "Secure",
	    
	    Downloads: "4"
	},{
	    ExportLabel: "Case-1234",	    
	    ShareID: "654789131",
	    From: "McKinney PD",
		To: "2 Recipients",
	    SentOn: "01/09/14",
	    ExpOn: "02/09/14",
	    Size: "892MB",
	    Type: "Secure",
	    
	    Downloads: "4"
	},{
	    ExportLabel: "Case-1234",	    
	    ShareID: "654789132",
	    From: "McKinney PD",
		To: "5 Recipients",
	    SentOn: "01/09/14",
	    ExpOn: "02/09/14",
	    Size: "892MB",
	    Type: "Secure",
	    
	    Downloads: "4"
	},{
	    ExportLabel: "Case-1234",	    
	    ShareID: "654789133",
	    From: "Plano PD",
		To: "3 Recipients",
	    SentOn: "01/09/14",
	    ExpOn: "02/09/14",
	    Size: "892MB",
	    Type: "Secure",
	    
	    Downloads: "4"
	}];
	
    $("#org-inbox").kendoGrid({
        dataSource: {
            data: orgInboxData,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            serverFiltering: true
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
        }, {
            template: kendo.template($("#org-inbox-template").html()),
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

        }, {
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
            field: "From",
            title: "From",
            width: 150,
            filterable: {
                cell: {
                    showOperators: true
                }
            }
        }, {
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
});