angular.module('hello').component('personForm', {


  templateUrl: 'templates/personForm.html',

  controller: function () {

    this.someMessage = 'This is a form';

  } // End of controller
})