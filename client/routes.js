Router.configure({
  layoutTemplate: 'main'
});

Router.route('/', {
  template: 'hello',
  name: 'home'
})