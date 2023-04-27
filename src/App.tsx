import { useState } from 'react'
import './App.css'
import { sampleProducts } from './data/data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <header>TS Amamzona</header>
     <main>
      <ul>
      {
      sampleProducts.map(product=>(
        <li key={product.slug}>
          <img src={product.image} className='product-image' alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.price}</p>
        </li>
      ))}
      </ul>
     </main>
  <footer>All Right reserve</footer>   
    </>
  )
}

export default App
