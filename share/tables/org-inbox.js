$(document).ready(function() {
	var orgInboxData = [{
		ExportLabel: "Case-54654451654641",	    
	    ShareID: "654789123",
	    From: "Plano Police Department",
		To: "7 Recipients",
	    SentOn: "01/09/14",
	    ExpOn: "02/09/14",
	    Size: "892MB",
	    Type: "Link Share",
	    
	    Downloads: "4"
	},{
	    ExportLabel: "Case-105461530",	    
	    ShareID: "654789124",
	    From: "McKinney Police Department",
		To: "4 Recipients",
	    SentOn: "01/09/14",
	    ExpOn: "02/09/14",
	    Size: "892MB",
	    Type: "Passcoded Share",
	    
	    Downloads: "4"
	},{
	    ExportLabel: "Case-a54sa56d456a",	    
	    ShareID: "654789125",
	    From: "Plano Police Department",
		To: "1 Recipient",
	    SentOn: "01/09/14",
	    ExpOn: "02/09/14",
	    Size: "892MB",
	    Type: "Secure Share",
	    
	    Downloads: "4"
	},{
	    ExportLabel: "13-2015-CF-000001-0001-XX",	    
	    ShareID: "654789126",
	    From: "Celina Police Department",
		To: "1 Recipient",
	    SentOn: "01/09/14",
	    ExpOn: "02/09/14",
	    Size: "892MB",
	    Type: "Passcoded Share",
	    
	    Downloads: "4"
	},{
	    ExportLabel: "13-2015-CF-000001-0001-XX",	    
	    ShareID: "654789127",
	    From: "Celina Police Department",
		To: "3 Recipients",
	    SentOn: "01/09/14",
	    ExpOn: "02/09/14",
	    Size: "892MB",
	    Type: "Secure Share",
	    
	    Downloads: "4"
	},{
	    ExportLabel: "13-2015-CF-000001-0001-XX",	    
	    ShareID: "654789128",
	    From: "Plano Police Department",
		To: "1 Recipient",
	    SentOn: "01/09/14",
	    ExpOn: "02/09/14",
	    Size: "892MB",
	    Type: "Passcoded Share",
	    
	    Downloads: "4"
	},{
	    ExportLabel: "13-2015-CF-000001-0001-XX",	    
	    ShareID: "654789129",
	    From: "Celina Police Department",
		To: "8 Recipients",
	    SentOn: "01/09/14",
	    ExpOn: "02/09/14",
	    Size: "892MB",
	    Type: "Link Share",
	    
	    Downloads: "4"
	},{
	    ExportLabel: "13-2015-CF-000001-0001-XX",	    
	    ShareID: "654789130",
	    From: "Plano Police Department",
		To: "3 Recipients",
	    SentOn: "01/09/14",
	    ExpOn: "02/09/14",
	    Size: "892MB",
	    Type: "Secure Share",
	    
	    Downloads: "4"
	},{
	    ExportLabel: "13-2015-CF-000001-0001-XX",	    
	    ShareID: "654789131",
	    From: "McKinney Police Department",
		To: "2 Recipients",
	    SentOn: "01/09/14",
	    ExpOn: "02/09/14",
	    Size: "892MB",
	    Type: "Secure Share",
	    
	    Downloads: "4"
	},{
	    ExportLabel: "13-2015-CF-000001-0001-XX",	    
	    ShareID: "654789132",
	    From: "McKinney Police Department",
		To: "5 Recipients",
	    SentOn: "01/09/14",
	    ExpOn: "02/09/14",
	    Size: "892MB",
	    Type: "Secure Share",
	    
	    Downloads: "4"
	},{
	    ExportLabel: "13-2015-CF-000001-0001-XX",	    
	    ShareID: "654789133",
	    From: "Plano Police Department",
		To: "3 Recipients",
	    SentOn: "01/09/14",
	    ExpOn: "02/09/14",
	    Size: "892MB",
	    Type: "Secure Share",
	    
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
		scrollable: true,
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
            title: "Reference Label",
            width: 220,
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
            width: 220,
            filterable: {
                cell: {
                    showOperators: true
                }
            }
        }, {
            field: "To",
            title: "To",
            width: 120,
            filterable: {
                cell: {
                    showOperators: true
                }
            }
        }, {
            field: "SentOn",
            title: "Sent On",
            format: "{0: MM/dd/yy HH:mm}",
            width: 100
        }, {
            field: "ExpOn",
            title: "Expires On",
            format: "{0: MM/dd/yy HH:mm}",
            width: 100
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
            width: 150,
            filterable: {
                cell: {
                    showOperators: false,
                    operator: "contains"
                }
            }
        }, {
            field: "Downloads",
            width: 150,
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