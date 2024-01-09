import React from 'react'
import "./styleHome.scss"
const Homehero = () => {
  return (
    <div className='main-hero'>
        <section className='izquierda-hero'>
            <h1 className='h1-rol'>ROL</h1>
        </section>
        <section className='derecha-hero'>
            <h1 className='h1-cka'>CKA</h1>
            <h3 className='p-hero'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Eos, commodi odit beatae in vel asperiores consequuntur, iusto sit,
                ipsa officiis odio voluptas laboriosam aperiam dolorum.              
            </h3>
        </section>
    </div>
  )
}

export default Homehero