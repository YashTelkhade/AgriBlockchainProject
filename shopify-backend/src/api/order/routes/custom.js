// path: ./src/api/restaurant/routes/custom-restaurant.js

module.exports = {
    routes: [
      {
        method: 'POST',
        path: '/order/pretransaction',
        handler: 'custom.pre',
      },
      {
        method: 'POST',
        path: '/order/posttransaction',
        handler: 'custom.post',
      }
    ],
  };
   