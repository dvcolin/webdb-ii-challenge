
exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
      // id, primary key
      table.increments();

      //VIN number
      table.string('VIN').unique().notNullable();

      // Make
      table.string('Make', 128).notNullable();

      //Model
      table.string('Model', 128).notNullable();

      // Mileage
      table.integer('Mileage').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
