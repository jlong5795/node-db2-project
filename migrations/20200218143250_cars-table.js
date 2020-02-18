
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();

        tbl
            .string('VIN')
            .notNullable()
        
        tbl
            .string('Make')
            .notNullable();

        tbl
            .string('Model')
            .notNullable()
            .index();

        tbl
            .integer('Mileage')
            .notNullable();
        
        tbl.string('Transmission Type');

        tbl.string('Title');

    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
