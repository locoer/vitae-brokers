import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { Check, Triangulo } from '@/ComponentesV/Iconos'

const Select = ({opciones=["Opciones..."], selected, setSelected, className, ...props}) => {

  return (
    <div className={`w-full ${className}`} {...props} >
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-pointer py-2 pl-3 pr-10 text-left bg-gris-200 rounded-lg shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-rojo focus-visible:ring-offset-rojo-300 focus-visible:ring-offset-2 focus-visible:border-rojo sm:text-sm">
            <span className="block truncate">{selected}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <Triangulo
                className="w-2.5 h-2.5 stroke-rojo fill-rojo rotate-180" 
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-20 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-40 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {opciones.map((opcion, opcionIdx) => (
                <Listbox.Option
                  key={opcionIdx}
                  className={({ active }) =>
                    `cursor-default select-none relative py-2 pl-10 pr-4 ${
                      active ? 'text-dorado-900 bg-dorado-300' : 'text-gray-900'
                    }`
                  }
                  value={opcion}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {opcion}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-dorado-700">
                          <Check className="w-5 h-5 stroke-dorado-700" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default Select
