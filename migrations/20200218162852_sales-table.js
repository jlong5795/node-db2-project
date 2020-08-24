
exports.up = function(knex) {
    return knex.schema.createTable('sales', tbl => {
        tbl.increments('id');
        tbl.string('VIN').notNullable();
        tbl.string('salesperson').notNullable();

        tbl.foreign('id').references('id').inTable('cars');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('sales');
};
