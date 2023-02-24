const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
});
 
var _db;
 
module.exports = {
  connectToServer: async function () {
      try {
        await client.connect();
      } catch (error) {
        console.log(error);
      }
        _db = client.db("employees");
        return (_db === undefined ? false : true);
  },
  getDb: function () {
    return _db;
  },
};