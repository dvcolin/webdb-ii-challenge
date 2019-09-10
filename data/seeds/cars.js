
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vin: '1G1ZT51FX6F111393', make: 'Chevrolet', model: 'Malibu', mileage: 45345 },
        {vin: 'W06VR52R9WR220134', make: 'Cadillac', model: 'Catera', mileage: 45345 },
        {vin: '1N4BA41E74C829102', make: 'Nissan', model: 'Maxima', mileage: 45345 },
        {vin: 'JH4KA4660LC006262', make: 'Acura', model: 'Legend', mileage: 45345 },
        {vin: 'KMHFG4JG1CA181127', make: 'Hyundai', model: 'Azera', mileage: 45345 },
      ]);
    });
};
