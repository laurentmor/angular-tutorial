'use strict';

/* jasmine specs for controllers go here */

describe('PhoneCat controllers', function() {

  describe('PhoneListCtrl', function(){
    var scope, ctrl;

    beforeEach(module('phonecatApp'));

    beforeEach(inject(function($controller) {
      scope = {};
      ctrl = $controller('PhoneListCtrl', {$scope:scope});
    }));

    it('should create "phones" model with 4 phones', function() {
      expect(scope.phones.length).toBe(4);
    });


    it('should set the default value of orderProp model', function() {
      expect(scope.order).toBe('age');
    });
  });
});