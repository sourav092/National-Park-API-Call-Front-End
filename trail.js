﻿var dataTable;

$(document).ready(function () {
    loadDataTable();
})

function loadDataTable() {
    dataTable = $('#tblData').DataTable({
        "ajax": {
            "url": "Trail/GetAll",
            "type": "GET",
            "datatype":"json"
        },
        "columns": [
            { "data": "nationalPark.name", "width": "20%" },
            { "data": "name", "width": "20%" },
            { "data": "distance", "width": "20%" },
            { "data": "elevatiuon", "width": "20%" },
            {
                "data": "id",
                "render": function (data) {
                    return ` 
                     <div class="text-center">
                     <a href="Trail/Upsert/${data}" class="btn btn-info">
                      <i class="fas fa-edit"></i> 
                     </a>
                     <a class="btn btn-danger" onclick=Delete("Trail/Delete/${data}")>
                     <i class="fas fa-trash-alt"></i> 
                      </a> 
                    </div>
                   `;
                }
                }

            ]
        })
}
function Delete(url) {
    /*alert(url)*/
    swal({
        title: "want to delete data",
        text: "Delete information!!!",
        icon: "warning",
        buttons: true,
        dangerModel: true,
    }).then((willDelete) => {
        if (willDelete) {
            $.ajax({
                url: url,
                type: "Delete",
                success: function (data) {
                    if (data.success) {
                        toastr.success(data.message);
                        dataTable.ajax.reload();
                    }
                    else {
                        toastr.error(data.message);
                    }
                }
            })
        }
    })
}
