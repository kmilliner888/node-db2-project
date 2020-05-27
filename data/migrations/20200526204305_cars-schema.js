
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments('id');
      tbl.string('VIN').notNullable();
      tbl.string('MAKE').notNullable();
      tbl.string('MODEL').notNullable();
      tbl.string('MILEAGE').notNullable();
      tbl.string('TRANSMISSION');
      tbl.string('TITLE');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
