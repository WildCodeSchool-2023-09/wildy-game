/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();

// Import Faker library for generating fake data
const { faker } = require("@faker-js/faker");

// Import database client
const database = require("./database/client");

const seed = async () => {
  try {
    // Declare an array to store the query promises
    // See why here: https://eslint.org/docs/latest/rules/no-await-in-loop
    const queries = [];

    /* ************************************************************************* */

    // Generating Seed Data

    // Optional: Truncate tables (remove existing data)
    await database.query("truncate player");

    // Insert fake data into the 'item' table
    for (let i = 0; i < 10; i += 1) {
      queries.push(
        database.query(
          "insert into player(id, firstname, lastname, pseudo, password, email, experience, credit, membreId, profilTheme, lvl, isAdmin) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
          [
            faker.datatype.uuid(),
            faker.name.firstName(),
            faker.name.lastName(),
            faker.internet.userName(),
            faker.internet.password(),
            faker.internet.email(),
            faker.datatype.number(),
            faker.finance.amount(),
            faker.datatype.uuid(),
            faker.lorem.word(),
            faker.datatype.number(),
            faker.datatype.boolean() ? 1 : 0,
          ]
        )
      );
    }

    /* ************************************************************************* */

    // Wait for all the insertion queries to complete
    await Promise.all(queries);

    // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
