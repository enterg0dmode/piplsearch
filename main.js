/**
 * @author  00000F
 */

(function() {

    var _ = require('lodash');

    var Main = function(apiKey) {
        var _services = ['name', 'search', 'thumbnail']
            , Inherits = require('./inherits')
            , self = this;

        // pipl api kodu
        this.options = {
            api_url: "http://api.pipl.com/search/v4/",
            apiKey: apiKey
        };

        _.forEach(_services, function(service) {
            module.exports[service] = require(__dirname + '/services/' + service)(Inherits, self.options);
        });

        return module.exports;
    }.bind(this);

    module.exports = Main;
}).call(this);