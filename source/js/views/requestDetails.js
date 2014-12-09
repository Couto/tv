var Backbone = require('backbone');
var moment = require('moment');

var RequestDetailsView = Backbone.View.extend({

    template: require('../templates/requestDetails.hbs'),

    initialize: function() {
        this.listenTo(this.model, 'change', function(){
            this.render();
        });
    },

    render: function() {
        var $markup = $(this.template(this.model.attributes));

        this.$el.toggleClass('error', this.model.hasError());
        this.$el.toggleClass('warning', this.model.hasWarning());

        if (this.model.get('active')) {
            this.$el.addClass('active');
        }

        this.$el.html($markup);

        return this;
    }

});

module.exports = RequestDetailsView;
