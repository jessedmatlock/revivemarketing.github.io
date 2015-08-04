$(document).ready(function() {
	var userMgmtData = [{
		    Name: "Jeff Schmelling",
			Email: "email@email.com",
			Role: "",
		    AccountDate: "08/15/13 ",
		    LastLogin: "03/09/14 ",
		    Status: "active"
		},{
			Name: "Joe VanSchuyver",
			Email: "email@email.com",
			Role: "",
			AccountDate: "03/01/15 ",
			LastLogin: "03/09/15 ",
			Status: "pending"
		},{
			Name: "Zach Bonham",
			Email: "email@email.com",
			Role: "",
			AccountDate: "10/09/14 ",
			LastLogin: "12/09/14 ",
			Status: "inactive"
		},{
			Name: "Christina Ye",
			Email: "email@email.com",
			Role: "",
			AccountDate: "10/09/14 ",
			LastLogin: "12/09/14 ",
			Status: "inactive"
		}];
	
    $("#user-mgmt").kendoGrid({
        dataSource: {
			data: userMgmtData,
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
		sortable: {
		    mode: "single"
		},	
		scrollable : true,
        pageable: true,
        columns: [{
		    template: kendo.template($("#user-mgmt-template").html()),
			width: 50,
			title: " ",
			filterable: false
        },{
            field: "Name",
            title: "Name",
            width: 200,
            filterable: {
                cell: {
                    showOperators: true
                }
            }
        },{
            field: "Email",
            title: "Email",
            width: 180,
            filterable: {
                cell: {
                    showOperators: true
                }
            }
		},{
		    template: kendo.template($("#user-role-template").html()),
			width: 150,
			field: "Role",
			title: "Role",
            filterable: {
                cell: {
                    showOperators: false
                }
            }

        }, {
            field: "AccountDate",
            title: "Account Date",
    		format: "{0: MM/dd/yy HH:mm}",
			width: 120
        }, {
            field: "LastLogin",
            title: "Last Login",
    		format: "{0: MM/dd/yy HH:mm}",
			width: 120
        }, {
            field: "Status",
            width: 80,
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