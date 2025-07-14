import React from 'react'

const Pricing = () => {
  return (
    <div className='flex flex-col gap-8 items-center justify-center py-16 px-4 md:px-6 text-center max-w-5xl mx-auto'>
      
    <div className="max-w-2xl text-center">
  <h2 className="md:text-7xl text-4xl font-bold mb-4">DocsJS Premium</h2>
  <p className="text-lg dark:text-gray-200 text-gray-700">
    Potencia tu flujo de trabajo con <strong>DocsJS Premium</strong>. 
    Accede a toda la documentación técnica completamente en español, organizada y siempre actualizada. 
    Disfruta de características exclusivas pensadas para desarrolladores que valoran la claridad, la eficiencia 
    y tener todo en un solo lugar.
  </p>
</div>


      {/* Plan de precios */}
      <div className="w-full px-4 max-w-[380px]">
        <div className="pt-10 px-8 pb-8 bg-gray-100 rounded-3xl shadow-md">
          <div className="text-center mb-6">
            <h5 className="text-2xl font-semibold text-gray-800 mb-2">Plan Pro</h5>
            <span className="block text-5xl font-bold text-gray-800 mb-2">$3.99</span>
            <span className="block text-gray-600 font-medium mb-6">por usuario / mes</span>
            <a
              href="https://docsjs.lemonsqueezy.com/buy/5e29cd24-b230-4729-8c42-ac5f8b0dd4aa?discount=0"
              className="relative group inline-block w-full py-4 px-6 text-center text-gray-800 hover:text-white bg-yellow-300 font-semibold rounded-full overflow-hidden transition duration-200"
            >
              <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-105 transition duration-500"></div>
              <span className="relative z-10">Comienza Prueba de 7 Días</span>
            </a>
          </div>

          <ul className="text-left">
            {[
              "Documentación ilimitada",
              "Traducción al Espanol",
              "Acceso exclusivo a recursos avanzados",
              "Soporte prioritario 24/7",
            ].map((item, idx) => (
              <li key={idx} className="flex mb-4 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className="w-6 h-6 fill-current text-gray-800"
                >
                  <path d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L8 12.586l8.293-8.293a1 1 0 111.414 1.414l-9 9a1 1 0 01-1.414 0z" />
                </svg>
                <span className="ml-2 text-gray-800">{item}</span>
              </li>
            ))}

            <li className="flex items-center text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="w-6 h-6 fill-current text-gray-400"
              >
                <path d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L8 12.586l8.293-8.293a1 1 0 111.414 1.414l-9 9a1 1 0 01-1.414 0z" />
              </svg>
              <span className="ml-2 line-through">Navegación sin anuncios</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Pricing
