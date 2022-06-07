import { defineStore } from 'pinia'
import { uuid } from 'vue-uuid'

export const useItemStore = defineStore({
    id: 'cards',
    state: () => ({
        cards: Array<Card>(),
    }),
    getters: {
    },
    actions: {
        addEmptyCard() {
            this.cards.push({ id: uuid.v4(), items: [], title: '' })
        },
        addCardItem(card: Card, title: string) {
            card.items.push({ id: uuid.v4(), link: '', rating: 0, title: title })
        },
        removeCardItem(card: Card, item: Item) {
            card.items = card.items.filter(i => i.id !== item.id)
        },
        update(card: Card, title: string) {
            card.title = title
        },
    }
})
