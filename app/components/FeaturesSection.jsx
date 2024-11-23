import { UserCheck, FileText, BarChart, Send, Download, Lock, Globe } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Des Fonctionnalités Puissantes, Une Utilisation Simple</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Reconnaissance faciale en temps réel */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
            <UserCheck className="w-16 h-16 mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Reconnaissance faciale en temps réel</h3>
            <p className="text-gray-600">Identifie les employés instantanément dès leur arrivée ou sortie, avec une précision de 99%.</p>
          </div>

          {/* Génération automatique de rapports de présence */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
            <FileText className="w-16 h-16 mb-4 text-green-500" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Génération automatique de rapports de présence</h3>
            <p className="text-gray-600">Des rapports détaillés sont créés chaque jour, sans intervention manuelle.</p>
          </div>

          {/* Graphiques explicatifs sur l'assiduité */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
            <BarChart className="w-16 h-16 mb-4 text-orange-500" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Graphiques explicatifs sur l'assiduité</h3>
            <p className="text-gray-600">Visualisez les données d'assiduité et d'heures de travail sous forme de graphiques clairs et compréhensibles.</p>
          </div>

          {/* Envoi automatique des rapports par email */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
            <Send className="w-16 h-16 mb-4 text-red-500" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Envoi automatique des rapports par email</h3>
            <p className="text-gray-600">Recevez les rapports générés directement dans votre boîte de réception chaque jour.</p>
          </div>

          {/* Exportation des rapports en Excel ou PDF */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
            <Download className="w-16 h-16 mb-4 text-purple-500" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Exportation des rapports en Excel ou PDF</h3>
            <p className="text-gray-600">Exporte facilement les rapports sous différents formats pour une analyse approfondie.</p>
          </div>

          {/* Sécurité et respect de la vie privée */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
            <Lock className="w-16 h-16 mb-4 text-teal-500" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Sécurité et respect de la vie privée</h3>
            <p className="text-gray-600">Toutes les données sont protégées et l'intégrité de la vie privée des employés est garantie.</p>
          </div>

          {/* Compatibilité multi-sites */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
            <Globe className="w-16 h-16 mb-4 text-indigo-500" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Compatibilité multi-sites</h3>
            <p className="text-gray-600">FacePresence fonctionne parfaitement sur plusieurs sites, avec une gestion centralisée.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;