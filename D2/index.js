const { MongoClient } = require('mongodb');

async function main() {
  const uri = "mongodb://127.6.16.6:3050/"
  const client = new MongoClient(uri);
  try {
    const connected = await client.connect();
    if (connected) {
      console.log("the client is connected");
    }
    await listDatabases(client);
  }
  catch (e) {
    console.log("error connecting the databases");
  }
}

main()

async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();
  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};