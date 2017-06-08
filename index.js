var pgtools = require('pgtools');

// This can also be a connection string
// (in which case the database part is ignored and replaced with postgres)

const config = {
  user: 'postgres',
  password: '',
  port: 5432,
  host: 'localhost'
}

pgtools.dropdb(config, 'test-db', function (err, res) {
    if (err) {
        console.log("Error")
    }
    console.log(res);
});