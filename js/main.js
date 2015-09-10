var countBy = function(end, step) {
  var result = [];

  if (step > end) {
    result.push('Great Sadness (first number must be larger than the second number');
  } else {
    for (var i = step; i <= end; i += step) {
      result.push(i);
    }
  }

  return result;
};

$(document).ready(function() {

    $("form#countBy").submit(function(event) {

        var end = parseInt($("input#end").val());
        var step = parseInt($("input#step").val());

        var result = countBy(end, step);

        $("#result p").text(result.join(", "));

        $("#result").show();
        event.preventDefault();
    });

});
