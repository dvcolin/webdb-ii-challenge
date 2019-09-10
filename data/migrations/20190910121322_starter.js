
exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
      // id, primary key
      table.increments();

      // VIN number
      table.string('vin').unique().notNullable();

      // Make
      table.string('make', 128).notNullable();

      // Model
      table.string('model', 128).notNullable();

      // Mileage
      table.integer('mileage').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
