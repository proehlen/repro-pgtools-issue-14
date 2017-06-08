# Repro issue 14 olalonde/pgtools
[Issue](https://github.com/olalonde/pgtools/issues/14#issuecomment-306912431)

1. run `npm install`
2. run `createdb test-db`
3. Open database in another client - e.g. pgAdmin3
4. run 'npm start'

Above sequence never used to fail silently but now leads to this output:
```
[peter@peter-mba pgtools-dropdb]$ createdb test-db
[peter@peter-mba pgtools-dropdb]$ npm start

> pgtools-dropdb@1.0.0 start /home/peter/Temp/pgtools-dropdb
> node index.js

/home/peter/Temp/pgtools-dropdb/node_modules/pgtools/index.js:22
  var message = (errors[pgErr.code].message || 'Unknown Postgres error.') + ' Cause: ' + pgErr.message;
                                   ^

TypeError: Cannot read property 'message' of undefined
    at PgError (/home/peter/Temp/pgtools-dropdb/node_modules/pgtools/index.js:22:36)
    at Query.callback (/home/peter/Temp/pgtools-dropdb/node_modules/pgtools/index.js:60:17)
    at Query.handleError (/home/peter/Temp/pgtools-dropdb/node_modules/pg/lib/query.js:141:17)
    at Connection.<anonymous> (/home/peter/Temp/pgtools-dropdb/node_modules/pg/lib/client.js:181:26)
    at emitOne (events.js:96:13)
    at Connection.emit (events.js:191:7)
    at Socket.<anonymous> (/home/peter/Temp/pgtools-dropdb/node_modules/pg/lib/connection.js:136:12)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:191:7)
    at readableAddChunk (_stream_readable.js:178:18)
    at Socket.Readable.push (_stream_readable.js:136:10)
    at TCP.onread (net.js:561:20)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! pgtools-dropdb@1.0.0 start: `node index.js`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the pgtools-dropdb@1.0.0 start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/peter/.npm/_logs/2017-06-08T07_53_34_949Z-debug.log


```