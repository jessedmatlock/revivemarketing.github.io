$(document).ready(function() {
	
	var manageOrgsData = [{
	    Organization: "Plano PD",
		OrgID: "ID_21342323",
		Organization: "Organization Name",
	    City: "Plano",
	    State: "TX",
	    Zip: "75013",
	    ContactName: "James Kirk",
	    ContactPhone: "555-555-1212",
	    ContactEmail: "james@mail.com",
	    StartDate: "01/09/14",
	    EndDate: "01/09/14",
	    Type: "paying"
	},{
	    Organization: "Plano PD",
		OrgID: "ID_21342323",
		Organization: "Organization Name",
	    City: "Plano",
	    State: "TX",
	    Zip: "75013",
	    ContactName: "James Kirk",
	    ContactPhone: "555-555-1212",
	    ContactEmail: "james@mail.com",
	    StartDate: "01/09/14",
	    EndDate: "01/09/14",
	    Type: "paying"
	},{
		Organization: "Plano PD",
		OrgID: "ID_21342323",
		Organization: "Organization Name",
	    City: "Plano",
	    State: "TX",
	    Zip: "75013",
	    ContactName: "James Kirk",
	    ContactPhone: "555-555-1212",
	    ContactEmail: "james@mail.com",
	    StartDate: "01/09/14",
	    EndDate: "01/09/14",
	    Type: "paying"
	}];
	
	
    $("#manage-orgs").kendoGrid({
        dataSource: {
            data: manageOrgsData,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            serverFiltering: true
        },
        height: 300,
        filterable: {
            mode: "row"
        },
		scrollable : true,
        sortable: {
            mode: "single"
        },
        pageable: true,
        columns: [{
            template: kendo.template($("#manage-orgs-template").html()),
            width: 50,
            title: " ",
            filterable: false
        }, {
            field: "Organization",
            width: 150,
            title: "Organization",
            filterable: {
                cell: {
                    showOperators: false,
                    operator: "contains"
                }
            }
        }, {
            field: "OrgID",
            width: 100,
            title: "Org ID",
            filterable: {
                cell: {
                    showOperators: false,
                    operator: "contains"
                }
            }
        }, {
            field: "City",
            title: "City",
            width: 100,
            filterable: {
                cell: {
                    operator: "gte"
                }
            }
        }, {
            field: "State",
            title: "State",
            width: 80,
            filterable: {
                cell: {
                    showOperators: false,
                    operator: "contains"
                }
            }
        }, {
            field: "Zip",
            title: "Zip",
            width: 80,
            filterable: {
                cell: {
                    showOperators: false,
                    operator: "contains"
                }
            }
        }, {
            field: "ContactName",
            title: "Contact Name",
            width: 120,
            filterable: {
                cell: {
                    operator: "gte"
                }
            }
        }, {
            field: "ContactPhone",
            title: "Contact Phone",
            width: 120,
            filterable: {
                cell: {
                    operator: "gte"
                }
            }
        }, {
            field: "ContactEmail",
            title: "Contact Email",
            width: 150,
            filterable: {
                cell: {
                    operator: "gte"
                }
            }
        }, {
            field: "StartDate",
            title: "Start Date",
            format: "{0:MM/dd/yyyy}"
        }, {
            field: "EndDate",
            title: "End Date",
            format: "{0:MM/dd/yyyy}"
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
        }]
    });
});