import React from 'react'
import ContactForm from '@/app/components/ContactForm'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-16 px-6">
            <div className="max-w-screen-xl mx-auto grid md:grid-cols-3 gap-8">
                {/* Liens importants */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Liens importants</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#about" className="hover:text-accent transition duration-300">
                                À propos de FacePresence
                            </a>
                        </li>
                        <li>
                            <a href="#faq" className="hover:text-accent transition duration-300">
                                FAQ
                            </a>
                        </li>
                        <li>
                            <a href="#privacy" className="hover:text-accent transition duration-300">
                                Politique de confidentialité
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Formulaire de contact */}
                <div className="md:col-span-2">
                    <h3 className="text-xl font-semibold mb-6">Contactez-nous</h3>
                    <ContactForm />
                </div>
            </div>

            {/* Footer copyright */}
            <div className="mt-12 text-center border-t border-gray-700 pt-6">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} FacePresence. Tous droits réservés.
                </p>
            </div>
        </footer>
    )
}

export default Footer