import React from 'react'
import Card from './Components/Card/Card'
import product1 from './assets/product1.jpg'
import product2 from './assets/product2.jpg'
import product3 from './assets/product3.jpg'
import product4 from './assets/product4.jpg'
import product5 from './assets/product5.jpg'
import product6 from './assets/product6.jpg'
import product7 from './assets/product7.jpg'
import product8 from './assets/product8.jpg'
import product9 from './assets/product9.jpg'
import product10 from './assets/product10.jpg'
import './App.css'
const App = () => {
  return (
    <div className='container'>
      <Card image={product1}
      title= "Product-1"
      des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laudantium delectus possimus. Ipsa, vero cupiditate!"
      price="80,00,000 Rupees"/>
      <Card image={product2}
      title= "Product-2"
      des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laudantium delectus possimus. Ipsa, vero cupiditate!"
      price="20,00,000 Rupees"/>
      <Card image={product3}
      title= "Product-3"
      des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laudantium delectus possimus. Ipsa, vero cupiditate!"
      price="60,00,000 Rupees"/>
      <Card image={product4}
      title= "Product-4"
      des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laudantium delectus possimus. Ipsa, vero cupiditate!"
      price="1,60,00,000 Rupees"/>
      <Card image={product5}
      title= "Product-5"
      des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laudantium delectus possimus. Ipsa, vero cupiditate!"
      price="2,30,00,000 Rupees"/>
      <Card image={product6}
      title= "Product-6"
      des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laudantium delectus possimus. Ipsa, vero cupiditate!"
      price="45,00,000 Rupees"/>
      <Card image={product7}
      title= "Product-7"
      des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laudantium delectus possimus. Ipsa, vero cupiditate!"
      price="1,45,00,000 Rupees"/>
      <Card image={product8}
      title= "Product-8"
      des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laudantium delectus possimus. Ipsa, vero cupiditate!"
      price="75,00,000 Rupees"/>
      <Card image={product9}
      title= "Product-9"
      des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laudantium delectus possimus. Ipsa, vero cupiditate!"
      price="25,00,000 Rupees"/>
      <Card image={product10}
      title= "Product-10"
      des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laudantium delectus possimus. Ipsa, vero cupiditate!"
      price="2,45,00,000 Rupees"/>
    </div>
      
  )
}

export default App
