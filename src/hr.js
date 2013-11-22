define([
    "q",
    "hr/shims",
    "hr/configs",
    "hr/class",
    "hr/view",
    "hr/application",
    "hr/head",
    "hr/history",
    "hr/router",
    "hr/model",
    "hr/collection",
    "hr/list",
    "hr/logger",
    "hr/requests",
    "hr/urls",
    "hr/storage",
    "hr/cache",
    "hr/template",
    "hr/resources",
    "hr/queue",
    "hr/i18n",
    "hr/views"
], function(Q, shims, configs, 
Class, View, Application, Head, History, Router, Model, Collection, ListView,
Logger, Requests, Urls, Storage, Cache, Template, Resources, Queue, I18n, views) {


    Q.onerror = function(err) {
        Logger.logging.error(err);
    };


    var hr = {
        configs: configs,
        Class: Class,
        View: View,
        Application: Application,
        Head: Head,
        Router: Router,
        Model: Model,
        Collection: Collection,
        List: ListView,
        History: History,

        Logger: Logger,
        Storage: Storage,
        Cache: Cache,
        Requests: Requests,
        Urls: Urls,
        Template: Template,
        Resources: Resources,
        Queue: Queue,
        I18n: I18n,
        views: views,

        app: null,

        configure: function(args, options) {
            options = options || {};
            args = args || {};
            if (args.revision == null) {
                Logger.logging.error("Error invalid configuration for hr");
                return;
            }

            configs.extend(options, {
                revision: args.revision,
                args: args,
                baseUrl: args.baseUrl || ""
            });
        }
    };
    
    return hr;
})