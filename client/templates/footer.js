import apikey from '/client/lib/env.js'
import './footer.html'

Template.footer.onRendered(function () {
});

Template.footer.helpers({
  key: apikey
});

