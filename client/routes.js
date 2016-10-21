Router.configure({
  layoutTemplate: 'main'
});

Router.route('home', {
  template: 'hello',
  path: '/'
});