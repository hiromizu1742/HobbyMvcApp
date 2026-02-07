$(function () {
    $("#calcBtn").on("click", function () {
        const hours = parseFloat($("#hours").val());
        const rate = parseFloat($("#rate").val());

        if (isNaN(hours) || hours <= 0) {
            $("#hoursError").show();
            $("#total").val("");
            return;
        }

        $("#hoursError").hide();
        $("#total").val((hours * rate).toFixed(2));
    });
});
