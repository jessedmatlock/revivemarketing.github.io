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
	var userMgmtData = [{
		    userID: "1",
		    Name: "Jeff Schmelling",
			Email: "email@email.com",
		    AccountDate: "08/15/2013 12:51",
		    LastLogin: "03/09/2014 12:51",
		    Status: "active"
		},{
			userID: "2",
			Name: "Joe VanSchuyver",
			Email: "email@email.com",
			AccountDate: "03/01/2015 12:51",
			LastLogin: "03/09/2015 12:51",
			Status: "pending"
		},{
			userID: "3",
			Name: "Zach Bonham",
			Email: "email@email.com",
			AccountDate: "10/09/2014 12:51",
			LastLogin: "12/09/2014 12:51",
			Status: "disabled"
		}];
	
    $("#user-mgmt").kendoGrid({
        dataSource: {
			data: userMgmtData,
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
		    template: kendo.template($("#user-mgmt-template").html()),
			width: 50,
			title: " ",
			filterable: false
		},{
            field: "userID",
            width: 80,
            title: "User ID",
            filterable: {
                cell: {
                    showOperators: false,
                    operator: "contains"
                }
            }
        },{
            field: "Name",
            title: "Name",
            width: 150,
            filterable: {
                cell: {
                    showOperators: true
                }
            }
        },{
            field: "Email",
            title: "Email",
            width: 150,
            filterable: {
                cell: {
                    showOperators: true
                }
            }
        }, {
            field: "AccountDate",
            title: "Account Date",
    		format: "{0: MM/dd/yy HH:mm}",
			width: 150
        }, {
            field: "LastLogin",
            title: "Last Login",
    		format: "{0: MM/dd/yy HH:mm}",
			width: 150
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