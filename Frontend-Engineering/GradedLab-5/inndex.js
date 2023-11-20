
// Install MongoDB Client using npm
const MongoClient = require('mongodb').MongoClient;

// Setup the Client
const url = 'mongodb://localhost:27017';
const databaseName = '<Database_name>';
const collectionName = '<collection_name>';


/// Called to create a Collection
async function createCollection() {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    
    try {
        await client.connect();
        const db = client.db(databaseName);

        // Create a collection
        await db.createCollection(collectionName);
        console.log(`Collection '${collectionName}' created successfully.`);
    } finally {
        await client.close();
    }
}

// CRUD - Creates a Document in the specified Collection
async function insertDocument(document) {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const db = client.db(databaseName);
        const collection = db.collection(collectionName);

        // Insert a document into the collection
        const result = await collection.insertOne(document);
        console.log(`Document inserted with ID: ${result.insertedId}`);
    } finally {
        await client.close();
    }
}

// CRUD - Updates the Document 
async function updateDocument(query, updateData) {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const db = client.db(databaseName);
        const collection = db.collection(collectionName);

        // Update a document in the collection
        const result = await collection.updateOne(query, { $set: updateData });
        console.log(`Matched ${result.matchedCount} document(s) and modified ${result.modifiedCount} document(s).`);
    } finally {
        await client.close();
    }
}

// CRUD - Drops the specified Collection.
async function dropCollection() {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const db = client.db(databaseName);

        // Drop the collection
        await db.dropCollection(collectionName);
        console.log(`Collection '${collectionName}' dropped successfully.`);
    } finally {
        await client.close();
    }
}

// Example document to insert
const exampleDocument = { name: 'John Doe', age: 30, city: 'Example City' };

// Create a collection
createCollection()
    .then(() => {
        // Insert a document
        return insertDocument(exampleDocument);
    })
    .then(() => {
        // Update a document
        const updateQuery = { name: 'John Doe' };
        const updateData = { age: 31 };
        return updateDocument(updateQuery, updateData);
    })
    .then(() => {
        // Drop the collection
        return dropCollection();
    })
    .catch(error => console.error(error));
