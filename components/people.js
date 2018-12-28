angular.module('hello').component('people', {
  bindings: { people: '<' },
  templateUrl: 'templates/people.html'
 // template: 'templates/people.html'
});