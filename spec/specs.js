describe('countBy', function() {
  it("enters two numbers and returns an array", function() {
    expect(countBy(50,10)).to.be.an('array');
  });

  it("returns the output array of counts to first entered number", function() {
    expect(countBy(30,10)).to.eql([10, 20, 30]);
  });

  it("returns error statment if users enters smaller first number", function() {
    expect(countBy(10,50)).to.eql(['Great Sadness (first number must be larger than the second number']);
  });
});
