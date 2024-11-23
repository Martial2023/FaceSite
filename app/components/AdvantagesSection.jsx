import { Clock, CheckCircle, DollarSign } from 'lucide-react';


const AdvantagesSection = () => {
    return (
        <div className="bg-gray-50 py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-semibold text-gray-800 mb-8">Un Système Conçu Pour Vous Séduire</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

                    {/* Gain de temps */}
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-indigo-100 p-6 rounded-full mb-4">
                            <Clock className="text-indigo-600 text-4xl" /> {/* Icône Clock */}
                        </div>
                        <h3 className="text-xl font-medium text-gray-800 mb-4">Gain de temps</h3>
                        <p className="text-gray-600">Réduction des tâches administratives grâce à l’automatisation des processus.</p>
                    </div>

                    {/* Fiabilité */}
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-green-100 p-6 rounded-full mb-4">
                            <CheckCircle className="text-green-600 text-4xl" /> {/* Icône CheckCircle */}
                        </div>
                        <h3 className="text-xl font-medium text-gray-800 mb-4">Fiabilité</h3>
                        <p className="text-gray-600">Moins d’erreurs, plus de transparence dans la gestion des présences.</p>
                    </div>

                    {/* Rentabilité */}
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-yellow-100 p-6 rounded-full mb-4">
                            <DollarSign className="text-yellow-600 text-4xl" /> {/* Icône DollarSign */}
                        </div>
                        <h3 className="text-xl font-medium text-gray-800 mb-4">Rentabilité</h3>
                        <p className="text-gray-600">ROI rapide grâce à l’automatisation des tâches de présence.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AdvantagesSection