require ('custom-env').env('local');
module.exports = {
    development: {
      storage: process.env.DB,
      dialect: 'sqlite'
    },
    test: {
        storage: process.env.DB,
        dialect: 'sqlite'
    },
    production: {
        storage: process.env.DB,
        dialect: 'sqlite'
    }
  };