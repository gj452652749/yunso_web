export function configRouter (router) {

  // normal routes
  router.map({
    // basic example
    '/foo': {
      // the component can also be a plain string component id,
      // but a component with that id must be available in the
      // App component's scope.
      component: require('foo.vue')
    },
    '/bar': {
      // the component can also be a plain string component id,
      // but a component with that id must be available in the
      // App component's scope.
      component: require('bar.vue')
    },
    
  })
}
