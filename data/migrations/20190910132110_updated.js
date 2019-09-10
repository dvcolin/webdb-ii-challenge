
exports.up = function(knex) {
    return knex.schema.table('cars', table => {

        // Transmission type (optional)
        table.string('transmission');

        // status of title (optional)
        table.string('status');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
