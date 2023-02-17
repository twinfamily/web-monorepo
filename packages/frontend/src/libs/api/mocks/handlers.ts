import { rest } from 'msw';

export const handlers = [
  rest.get('https://example.com/products/:productId', (req, res, ctx) => {
    const { productId } = req.params;

    const products = [
      {
        id: '22',
        name: 'banana',
        quantity: 3,
      },
    ];

    const product = products.filter((product) => product.id === productId)[0];

    return res(ctx.json(product));
  }),
];