"use client"

import React from 'react'
import { createContext , useState , useEffect } from 'react'


export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [userAddress, setUserAddress] = useState(null)
    const [buyNowItem, setBuyNowItem] = useState(null)

    useEffect(() => {
      const saved = localStorage.getItem("address")
      if(saved){
        try{
            const parsed = JSON.parse(saved)
            setUserAddress(parsed)
        } catch (error){
            console.log("Invalid Address Data")
            localStorage.removeItem("address")
        }
      }
    }, [])
    
    const saveAddress = (data) => {
      setUserAddress(data)
      localStorage.setItem("address",JSON.stringify(data))
    }
    

    useEffect(() => {
      const savedCart = localStorage.getItem("cart")
      if(savedCart){
        try{
            const parsed = JSON.parse(savedCart)
            setCart(parsed)
        } catch (error){
            console.log("Invalid Cart Data")
            localStorage.removeItem("cart")
        }
      }
    }, [])


    useEffect(() => {
      const savedBuyNow = localStorage.getItem("buyNow")
      if(savedBuyNow){
        try{
            const parsed = JSON.parse(savedBuyNow)
            setBuyNowItem(parsed)
        } catch (error){
            console.log("Invalid Cart Data")
            localStorage.removeItem("buyNow")
        }
      }
    }, [])

    const setBuyNow = (product) => {
        setBuyNowItem(product)
        localStorage.setItem("buyNow",JSON.stringify(product))

    }

    useEffect(() => {
        localStorage.setItem("cart",JSON.stringify(cart))
    }, [cart])
    

    const addToCart = (product) => {
        console.log("PRODUCT",product);
        
        const exist = cart.find((item) => item._id === product._id)

        if (exist) {
            const updated = cart.map((item) => item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
            )
            setCart(updated)
        }
        else {
            setCart([...cart, { ...product, quantity: 1 }])
        }
    }

    const removeOneCart = (id) => {
        const mapped = cart.map((item) => item._id === id ? { ...item, quantity: item.quantity - 1 } : item)

        const filtered = mapped.filter((item) => item.quantity > 0)
        setCart(filtered)
    }

    const removeAll = (id) => {
        const updated = cart.filter((item) => item._id !== id)

        setCart(updated)
    }

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0)


    return (
        <CartContext.Provider value={{ cart, addToCart, removeOneCart, removeAll, totalPrice ,saveAddress , userAddress ,buyNowItem ,setBuyNowItem, setBuyNow}}>
            {children}
        </CartContext.Provider>
    )
}
