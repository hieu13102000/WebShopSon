$(function() {
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 500,
    values: [75, 300],
    slide: function(event, ui) {
      $("#amount").val(ui.values[0]+"k"  + " - " + ui.values[1]+"k");
    }
  });
  $("#amount").val($("#slider-range").slider("values", 0)+"k" +
    " - " + $("#slider-range").slider("values", 1)+"k");
});

