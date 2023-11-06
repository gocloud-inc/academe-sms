import { defineStore } from 'pinia'
import { faker } from '@faker-js/faker'

export const useInventoryItemsStore = defineStore('inventoryItems', {
	state: () => ({
		inventoryItems: inventoryItemsData()
	}),
})

function inventoryItemsData(): any {
    const items = []
    for (let i = 0; i < 10; i++) {
        items.push({
            code: faker.commerce.isbn(10),
            name: faker.commerce.productName(),
            category: faker.helpers.arrayElement(['Textbook', 'Uniform']),
            department: faker.helpers.arrayElement(['College', 'k12']),
            size: faker.commerce.productMaterial(),
            stock: faker.number.int(100),
        });
    }
}
