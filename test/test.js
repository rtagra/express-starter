
var expect = chai.expect;

describe('mocha-chai-init', function() {
  describe('testFunction', function() {
      it('Should expect to equal', function() {
            expect(5).to.be.equal(5);                
      });
  });

  describe('add', function() {
      it('should add', function(){
            expect(add(2,3)).to.be.equal(5);
       });
  });
});