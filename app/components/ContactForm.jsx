'use client'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Check, CircleX } from 'lucide-react'


const ContactForm = () => {
    const [status, setStatus] = useState(false)
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_f68i55q', 'template_g4qga8p', form.current, {
                publicKey: 'bi9LHnozKoosLFQ1g',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    document.getElementById('my_modal_2').showModal()
                    setStatus(true)
                    form.current.reset()
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    document.getElementById('my_modal_2').showModal()
                    setStatus(false)
                },
            );
    };
    return (
        <>
            <div>
                {
                    status ? (
                        <dialog id="my_modal_2" className="modal text-gray-900">
                            <div className="modal-box">
                                <div className='w-full flex items-center justify-center'><Check width={40} height={40} className='bg-accent text-white rounded-full w-20 h-20' /></div>
                                <p className="py-4 text-center">Votre message a été envoyé avec succès. <br /> <span className='text-accent font-semibold'>FacePresence</span> vous répond sous peu</p>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    ) : (
                        <dialog id="my_modal_2" className="modal text-gray-900">
                            <div className="modal-box">
                                <div className='w-full flex items-center justify-center'><CircleX width={40} height={40} className='bg-red-400 text-white rounded-full w-20 h-20' /></div>
                                <p className="py-4 text-center">Message non envoyé. <br /> <span className='text-accent font-semibold'>Rééssayez !</span></p>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    )
                }
            </div>

            <form
                ref={form}
                method="POST"
                encType="text/plain"
                className="space-y-6"
                onSubmit={sendEmail}
                id='senderEmail'
            >

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Nom de l'entreprise */}
                    <div>
                        <label htmlFor="from_name" className="block text-sm font-medium">Nom</label>
                        <input
                            type="text"
                            id="name"
                            name="from_name"
                            placeholder="Nom de votre entreprise"
                            required
                            className="w-full p-4 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition duration-300 shadow-md hover:shadow-lg"
                        />
                    </div>

                    <div>
                        <label htmlFor="from_company" className="block text-sm font-medium">Nom de l'entreprise</label>
                        <input
                            type="text"
                            id="company"
                            name="from_company"
                            placeholder="Nom de votre entreprise"
                            required
                            className="w-full p-4 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition duration-300 shadow-md hover:shadow-lg"
                        />
                    </div>

                    <div>
                        <label htmlFor="from_email" className="block text-sm font-medium">Email</label>
                        <input
                            type="text"
                            id="eamil"
                            name="from_email"
                            placeholder="Email de votre entreprise"
                            required
                            className="w-full p-4 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition duration-300 shadow-md hover:shadow-lg"
                        />
                    </div>

                    {/* Localisation */}
                    <div>
                        <label htmlFor="from_location" className="block text-sm font-medium">Localisation</label>
                        <input
                            type="text"
                            id="location"
                            name="from_location"
                            placeholder="Votre localisation"
                            required
                            className="w-full p-4 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition duration-300 shadow-md hover:shadow-lg"
                        />
                    </div>
                </div>

                {/* Objet */}
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium">Objet</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Objet de votre message"
                        required
                        className="w-full p-4 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition duration-300 shadow-md hover:shadow-lg"
                    />
                </div>

                {/* Message */}
                <div>
                    <label htmlFor="message" className="block text-sm font-medium">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        placeholder="Votre message"
                        required
                        className="w-full p-4 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition duration-300 shadow-md hover:shadow-lg"
                    ></textarea>
                </div>

                {/* Bouton de soumission */}
                <div>
                    <button
                        type="submit"
                        className="w-full py-3 px-6 bg-accent text-white rounded-md text-lg font-semibold hover:bg-accent-dark focus:outline-none focus:ring-4 focus:ring-accent-dark transition duration-300"
                    >
                        Envoyer le message
                    </button>
                </div>
            </form>
        </>
    )
}

export default ContactForm