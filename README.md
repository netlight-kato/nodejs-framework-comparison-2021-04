# NodeJS Framework Comparison (April 2021)

This repository implements a tiny example in [NestJS](https://nestjs.com), [AdonisJs](https://adonisjs.com/),
and [Fastify](https://www.fastify.io/) to ease the process of comparing these frameworks.

The example is about creating bundles of matresses and pillows via an API with the following endpoints:

```sh
# Read all bundles
curl --location --request GET 'http://localhost:3000/bundles'

# Read a single bundle
curl --location --request GET 'http://localhost:3000/bundles/{id}'

# Create a bundle
curl --location --request POST 'http://localhost:3000/bundles' \
     --header 'Content-Type: application/json' \
     --data-raw '{ "mattress": "Emma Original 200x180", "pillows": 3 }'

# Delete a bundle
curl --location --request DELETE 'http://localhost:3000/bundles/{id}'

```