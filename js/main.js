var countBy = function(end, step) {
  var result = [];
  for (var i = step; i <= end; i += step) {
    result.push(i);
  }
  return result;
};
