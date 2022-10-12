import { productsList } from '../mocks/products'
import { getProductById } from './getProductById'

describe('getProductById handler', () => {
    it('should find item by id', async () => {
        const response = await getProductById({
            pathParameters: {
                id: '1',
            },
        })

        expect(JSON.parse(response.body)).toEqual((await productsList())[0])
    })

    it('should return 404 error if item not found', async () => {
        const response = await getProductById({
            pathParameters: {
                id: '100',
            },
        })

        expect(JSON.parse(response.statusCode)).toEqual(404)
    })
})
