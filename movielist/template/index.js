var html, data;
$(document).ready(function() {
    render();
});

function render() {
    html = '';

    $.ajax({
        type: "POST",
        dataType: "JSON",
        url: "../api/get_movielist.php",
        data: {},
        success: function(response) {
            console.log("good", response);
        },
        error: function(err) {
            console.log("bad", err);
        }

    })
}

$(document).ready(function() {
    $(".btn-hamburger").on("click", function() {
        $("nav ul").toggleClass("nav-active");
    })
})

function open_modal_create() {
    $("#modal_create").css("display", "flex")
}

function close_modal() {
    $(".modal").css("display", "none")
}
// modaledit
function open_modal_edit() {
    $("#modal_edit").css("display", "flex")
}

function open_modal_create() {
    $("#modal_create").css("display", "flex")
}

function Delete_modal_delete() {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        }
    })
}