export function configRouter (router) {

  // normal routes
  router.map({
    // basic example
    '/overview': {
      // the component can also be a plain string component id,
      // but a component with that id must be available in the
      // App component's scope.
      component: function (resolve) {
                require(['./components/app/overview.vue'], resolve)
        }
    },
    '/bar': {
      // the component can also be a plain string component id,
      // but a component with that id must be available in the
      // App component's scope.
      component: function (resolve) {
                require(['./components/app/overview.vue'], resolve)
        }
    },
    
  })
}
