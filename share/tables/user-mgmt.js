$(document).ready(function() {
    $("#user-mgmt").kendoGrid({
        dataSource: {
            type: "odata",
            transport: {
                read: "http://demos.telerik.com/kendo-ui/service/Northwind.svc/Orders"
            },
            pageSize: 20,
            serverPaging: true,
            serverFiltering: true,
            schema: {
                model: {
                    fields: {
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
                        }
                    }
                }
            }
        },
        height: 550,
        filterable: {
            mode: "row"
        },
        pageable: true,
        columns: [{
            field: "ShareID",
            width: 100,
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
                    showOperators: false
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
            width: 50,
            filterable: {
                cell: {
                    operator: "gte"
                }
            }
        }, {
            field: "Type",
            title: "Type",
            width: 50,
            filterable: {
                cell: {
                    showOperators: false,
                    operator: "contains"
                }
            }
        }, {
            field: "Forwarded",
            width: 50,
            title: "Forwarded",
            filterable: {
                cell: {
                    showOperators: false,
                    operator: "contains"
                }
            }
        }]
    });
});