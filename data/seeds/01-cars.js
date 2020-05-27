
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, VIN: '2T1BU4EE0BC582067', MAKE: 'TOYOTA', MODEL: 'CAMERY', MILEAGE: '97000', TITLE: 'CLEAN'},
        {id: 2, VIN: '3C63DRNL1CG332299', MAKE: 'CHEVROLET', MODEL: 'CRUZ', MILEAGE: '106000', TITLE: 'CLEAN'},
        {id: 3, VIN: '1NKWL00XXYR835477', MAKE: 'DODGE', MODEL: 'CARAVAN', MILEAGE: '53000', TITLE: 'CLEAN'}
      ]);
    });
};
