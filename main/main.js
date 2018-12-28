var myApp = angular.module('hello', ['ui.router']);

myApp.config(function ($stateProvider) {

  /*
  $stateProvider.
    state('root', {
        url: '',
        views: {
            'ViewA': {
                templateUrl: 'ViewA.html',
                controller: ViewAController
            },
            'ViewB': {
                templateUrl: 'ViewB.html',
                controller: ViewBController
            },
            'ViewC': {
                templateUrl: 'ViewC.html',
                controller: ViewCContoller
            },
            'ViewCDetails@root': {
                templateUrl: 'ViewCDetails.html',
                controller: ...
            }
        }
    }); */

  // An array of state definitions
  var states = [{
      name: 'hello',
      url: '/hello',
      component: 'hello'
    },
    {
      name: 'about',
      url: '/about',
      component: 'about'
    },

    {
      name: 'people',
      url: '/people',
      component: 'people',
      resolve: {
        people: function (PeopleService) {
          return PeopleService.getAllPeople();
        }
      }
    },

    {
      name: 'people.person',
      url: '/{personId}',
      component: 'person',
      resolve: {
        person: function (people, $stateParams) {
          return people.find(function (person) {
            return person.id === $stateParams.personId;
          });
        }
      }
    }
  ]

  // Loop over the state definitions and register them
  states.forEach(function (state) {
    $stateProvider.state(state);
  });
});


myApp.run(function ($http, $uiRouter) {
  var Visualizer = window['ui-router-visualizer'].Visualizer;
  $uiRouter.plugin(Visualizer);
  $http.get('data/people.json', {
    cache: true
  });
});