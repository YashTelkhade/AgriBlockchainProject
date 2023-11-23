// path: ./src/api/restaurant/controllers/restaurant.js

const { createCoreController } = require('@strapi/strapi').factories;
const pragma = require('better-sqlite3/lib/methods/pragma');
const https = require('https');
const PaytmChecksum = require('paytmChecksum');

module.exports = createCoreController('api::order.order', ({ strapi }) => ({
    // Method 1: Creating an entirely custom action
    async pre(ctx) {
        /*
        * import checksum generation utility
        * You can get this utility from https://developer.paytm.com/docs/checksum/
        */

        var paytmParams = {};
        let params = JSON.parse(ctx.request.body)

        const entry = await strapi.entityService.create('api::order.order', {
            data: {
              email: params.email,
              orderid:params.orderId,
              paymentinfo: null,
              products:params.cart,
              address:params.address,
              name: params.name,
              transactionid:null,
              amount:params.amount,
              status: 'pending',
    
            },
          });
          
        
        paytmParams.body = {
            "requestType": "Payment",
            "OBJID":entry.id,
            "mid": process.env.MID,
            "websiteName": "YOUR_WEBSITE_NAME",
            "orderId": params.orderId,
            "callbackUrl": "https://shopify-backend-6122.herokuapp.com/api/order/posttransaction",
            "txnAmount": {
                "value": params.amount,
                "currency": "INR",
            },
            "userInfo": {
                "custId": "CUST_001",
            },
        };

        /*
        * Generate checksum by parameters we have in body
        * Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys 
        */  
        let checksum = await PaytmChecksum.generateSignature(JSON.stringify(paytmParams.body), process.env.MKEY)

        paytmParams.head = {
            "signature": checksum
        };

        var post_data = JSON.stringify(paytmParams);

        const getToken = async () => {

            return new Promise((resolve, reject) => {



                var options = {

                    /* for Staging */
                    // hostname: 'securegw-stage.paytm.in',

                    /* for Production */
                    hostname: 'securegw.paytm.in',

                    port: 443,
                    path: `/theia/api/v1/initiateTransaction?mid=${process.env.MID}&orderId=${params.orderId}`,
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Content-Length': post_data.length
                    }
                };

                var response = "";
                var post_req = https.request(options, function (post_res) {
                    post_res.on('data', function (chunk) {
                        response += chunk;
                    });

                    post_res.on('end', function () {
                        console.log('Response: ', response);
                        resolve(response)
                    });
                });

                post_req.write(post_data);
                post_req.end();

            })
        }

        let myr = await getToken()

        ctx.send(JSON.parse(myr))
    },

    async post(ctx) {
        /*
        * import checksum generation utility
        * You can get this utility from https://developer.paytm.com/docs/checksum/
        */

        var paytmParams = {};
        let params = JSON.parse(ctx.request.body)
        console.log(params)
        await strapi.entityService.update('api::order.order', params.OBJID, {
            data: {
              transactionid: params.TXNID,
              paymentinfo: params
            },
          });
          
        ctx.send(JSON.parse(params))
        

}}));