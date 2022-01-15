import React from 'react'
import logo from 'media/wolf.png'
const Team = () => {
    return (
        <div className="gap-5 py-10 flex justify-center">
            <figure className="col-start-1 col-end-4 col-span-3 md:flex bg-gray-300 rounded-xl p-8 md:p-0">
                <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={logo} alt="" width="384" height="512" />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4 ">
                    <figcaption className="font-medium">
                        <div className="text-sky-500">
                            Franklin Zapata
                        </div>
                        <div className="text-gray-700">
                            Software Engineer, Medellín
                        </div>
                        <div className='social justify-center'>
                            <a href="https://github.com/FranklinZ12">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="www.linkedin.com/in/franklin-zapata">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </figcaption>
                </div>
            </figure>
        </div>
    )
}

export default Team