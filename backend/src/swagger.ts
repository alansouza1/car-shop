import swaggerJSDoc from 'swagger-jsdoc';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Car Shop API',
      version: '1.0.0',
      description: 'A simple vehicle dealership API',
    },
    components: {
      schemas: {
        Car: {
          type: 'object',
          required: ['model', 'year', 'color', 'buyValue', 'doorsQty', 'seatsQty'],
          properties: {
            model: { type: 'string', minLength: 3 },
            year: { type: 'integer', minimum: 1900, maximum: 2026 },
            color: { type: 'string', minLength: 3 },
            status: { type: 'boolean' },
            buyValue: { type: 'integer' },
            doorsQty: { type: 'integer', minimum: 2, maximum: 4 },
            seatsQty: { type: 'integer', minimum: 2, maximum: 7 },
          },
        },
      },
    },
  },
  apis: ['./src/routes/*.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
