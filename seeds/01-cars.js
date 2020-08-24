
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate()
    .then(function () {
      const cars = [
        {
          VIN: '123456',
          Make: 'Toyota',
          Model: 'Corolla',
          Mileage: 12345,
          Transmission: 'Automatic',
          Title: 'clean'
        },
        {
          VIN: '123456',
          Make: 'Ford',
          Model: 'Focus',
          Mileage: 123,
          Transmission: 'Manual',
          Title: 'clean'
        }
      ]
      // Inserts seed entries
      return knex('cars').insert(cars);
    });
};
