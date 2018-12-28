$(document).ready(function () {
    $(document).on("scroll",
        function () {
            if ($(window).scrollTop() === $(document).height() - $(window).height()) {
                loadMoreAtBottom();
            }
        });

    function loadMoreAtBottom() {
        var topItemNumber = parseInt($("#TopItemNumber").val());

        $.post("Home/LoadItemsBottom",
            {
                topItemNumber: topItemNumber
            },
            function (data) {
                if (data.status === "OK") {
                    $("#TopItemNumber").val(topItemNumber + data.pictures.length);

                    for (var i = 0; i < data.pictures.length; i++) {
                        AddOneBox(data.pictures[i].url, data.pictures[i].summary);
                    }
                }
            });
    }
});

function AddOneBox(pictureUrl, summary) {
    $(".infinite-container").append("<div class='dog-picture-box'><img class='dog-picture' src='images/" +
        pictureUrl +
        "' alt='" +
        summary +
        "' /></div>");
};