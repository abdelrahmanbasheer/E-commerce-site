import create from 'zustand'
import {devtools, persist} from "zustand/middleware"
let ShoppingList = ((set) => ({
    items: [],
    increaseItems: () => set((state) => ({ items: state.items + 1 })),
    addToCart:(item)=>set((state)=>({items: [...state.items, item]})),
    removeAllItems: () => set({ items: []}),
    removeFromCart:(remItem)=>set((state)=>({
      items:state.items.filter((item)=>item.title !==remItem.title)
    })),
    
  }))

  ShoppingList=devtools(ShoppingList)
  ShoppingList=persist(ShoppingList,{name:"shoppingItems"})

export const finalList=create(ShoppingList)
