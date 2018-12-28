angular.module('hello').component('hello', {
  /* template:  '<h3>{{$ctrl.greeting}} galaxy!</h3>' +
             '<button ng-click="$ctrl.toggleGreeting()">toggle greeting</button>', */

  templateUrl: 'templates/hello.html',

  controller: function () {
    this.greeting = 'hello';

    this.toggleGreeting = function () {
      this.greeting = (this.greeting == 'hello') ? 'whats up' : 'hello'
    }
  }
})