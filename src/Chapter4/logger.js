var log4js = require('log4js')
var R = require('ramda')

log4js.configure({
    "appenders": {
      "console": {
        "type": "console",
        "level": "all"
      }
    },
    "categories": {
      "default": {
        "appenders": [
          "console"
        ],
        "level": "all"
      }
    }
  });
const logger = function(appender, layout, name, level, message){
    const appenders = {
        //'alert': new log4js.JSAlertAppender(),
        //'console': new log4js.BrowserConsoleAppender()
        'console': 'console'
    }
    const layouts = {
        'basic': {type: 'basic'}//new log4js.BasicLayout(),
        //'json': new log4js.JSONLayout(),
        //'xml': new log4js.XMLLayout()
    }
    const appenderr = appenders[appender]
    //appenderr.setLayout(layouts[layout])
    const logger = new log4js.getLogger(name)
    logger.addAppender(appenderr)

    logger.log(level, message, null)
}

const log = R.curry(logger)('console', 'basic', 'FJS')
log('ERROR', 'Error condition detected')