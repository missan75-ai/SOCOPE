import React, { useState } from 'react';

// Main App component
const App = () => {
  // State to store the list of clients
  const [clients, setClients] = useState([]);
  // State for form inputs, updated to match the mockup fields
  const [newClient, setNewClient] = useState({
    name: '',
    address: '',
    phone: '',
    whatsapp: '',
    email: '',
    wilaya: '',
    companyType: '',
    activitySector: '',
    engineNeeds: '',
    otherSpecificNeeds: '',
    rcNumber: '', // New field from mockup
    nif: '',      // New field from mockup
  });

  // Handle input changes in the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewClient((prevClient) => ({
      ...prevClient,
      [name]: value,
    }));
  };

  // Handle form submission to add a new client
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (newClient.name.trim() === '') {
      // Basic validation: client name cannot be empty
      // Using a custom message box instead of alert()
      const messageBox = document.createElement('div');
      messageBox.className = 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative z-50 shadow-lg';
      messageBox.innerHTML = `
        <strong class="font-bold">Erreur!</strong>
        <span class="block sm:inline">Le nom du client ne peut pas être vide.</span>
        <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" onclick="this.parentNode.parentNode.remove()">
            <title>Fermer</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.103l-2.651 3.746a1.2 1.2 0 1 1-1.697-1.697l3.746-2.651-3.746-2.651a1.2 1.2 0 0 1 1.697-1.697L10 8.897l2.651-3.746a1.2 1.2 0 0 1 1.697 1.697L11.103 10l3.746 2.651a1.2 1.2 0 0 1 0 1.698z"/>
          </svg>
        </span>
      `;
      document.body.appendChild(messageBox);
      return;
    }
    // Add the new client to the clients list
    setClients((prevClients) => [...prevClients, { ...newClient, id: Date.now() }]);
    // Clear the form fields
    setNewClient({
      name: '',
      address: '',
      phone: '',
      whatsapp: '',
      email: '',
      wilaya: '',
      companyType: '',
      activitySector: '',
      engineNeeds: '',
      otherSpecificNeeds: '',
      rcNumber: '',
      nif: '',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 font-sans text-gray-800">
      <div className="container mx-auto max-w-4xl bg-white shadow-xl rounded-2xl p-6 md:p-8">
        <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-8">
          Gestion des Fiches Clients
        </h1>

        {/* Client Registration Form */}
        <div className="mb-10 p-6 bg-blue-50 rounded-xl shadow-inner">
          <h2 className="text-2xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-3">
            Enregistrer un Nouveau Client
          </h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Photo Section */}
            <div className="md:col-span-2 flex flex-col items-center mb-4">
              <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs mb-2 overflow-hidden">
                {/* Placeholder for actual image upload */}
                <i className="fas fa-camera text-4xl"></i>
              </div>
              <button type="button" className="text-indigo-600 hover:text-indigo-800 font-medium text-sm">
                AJOUTER/MODIFIER PHOTO
              </button>
            </div>

            {/* Nom du Client */}
            <div className="md:col-span-2"> {/* Full width */}
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Nom du Client <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={newClient.name}
                onChange={handleChange}
                placeholder="Ex: Dupont & Fils"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-200"
                required
              />
            </div>
            {/* Adresse */}
            <div className="md:col-span-2"> {/* Full width */}
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                Adresse
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={newClient.address}
                onChange={handleChange}
                placeholder="Ex: 123 Rue de la Paix"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-200"
              />
            </div>
            {/* Téléphone */}
            <div> {/* Half width */}
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Téléphone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={newClient.phone}
                onChange={handleChange}
                placeholder="Ex: +213 555 123 456"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-200"
              />
            </div>
            {/* Numéro WhatsApp */}
            <div> {/* Half width */}
              <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-2">
                Numéro WhatsApp
              </label>
              <input
                type="text"
                id="whatsapp"
                name="whatsapp"
                value={newClient.whatsapp}
                onChange={handleChange}
                placeholder="Ex: +213 777 987 654"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-200"
              />
            </div>
            {/* Email */}
            <div className="md:col-span-2"> {/* Full width */}
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={newClient.email}
                onChange={handleChange}
                placeholder="Ex: contact@client.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-200"
              />
            </div>
            {/* Wilaya */}
            <div className="md:col-span-2"> {/* Full width, simulating dropdown with input */}
              <label htmlFor="wilaya" className="block text-sm font-medium text-gray-700 mb-2">
                Wilaya
              </label>
              <input
                type="text" // Could be a <select> for real Wilayas
                id="wilaya"
                name="wilaya"
                value={newClient.wilaya}
                onChange={handleChange}
                placeholder="Ex: Alger"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-200"
              />
            </div>
            {/* Type d'entreprise - Note: Mockup shows checkbox, keeping as text input for simplicity */}
            <div className="md:col-span-2">
              <label htmlFor="companyType" className="block text-sm font-medium text-gray-700 mb-2">
                Type d'entreprise
              </label>
              <input
                type="text"
                id="companyType"
                name="companyType"
                value={newClient.companyType}
                onChange={handleChange}
                placeholder="Ex: SARL, EURL, Auto-entrepreneur"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-200"
              />
            </div>
            {/* Secteur d'activité - Note: Mockup shows checkbox, keeping as text input for simplicity */}
            <div className="md:col-span-2">
              <label htmlFor="activitySector" className="block text-sm font-medium text-gray-700 mb-2">
                Secteur d'activité
              </label>
              <input
                type="text"
                id="activitySector"
                name="activitySector"
                value={newClient.activitySector}
                onChange={handleChange}
                placeholder="Ex: BTP, Services, Commerce"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-200"
              />
            </div>
            {/* Besoins - Type d'engin - Note: Mockup shows checkbox, keeping as text input for simplicity */}
            <div className="md:col-span-2">
              <label htmlFor="engineNeeds" className="block text-sm font-medium text-gray-700 mb-2">
                Besoins - Type d'engin
              </label>
              <textarea
                id="engineNeeds"
                name="engineNeeds"
                value={newClient.engineNeeds}
                onChange={handleChange}
                rows="2"
                placeholder="Ex: Grue mobile, Pelleteuse, Chariot élévateur"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-200 resize-y"
              ></textarea>
            </div>
            {/* Autres besoins spécifiques */}
            <div className="md:col-span-2">
              <label htmlFor="otherSpecificNeeds" className="block text-sm font-medium text-gray-700 mb-2">
                Autres besoins spécifiques
              </label>
              <textarea
                id="otherSpecificNeeds"
                name="otherSpecificNeeds"
                value={newClient.otherSpecificNeeds}
                onChange={handleChange}
                rows="3"
                placeholder="Ex: Formation, Maintenance sur site, Pièces détachées"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-200 resize-y"
              ></textarea>
            </div>
            {/* N° RC */}
            <div> {/* Half width */}
              <label htmlFor="rcNumber" className="block text-sm font-medium text-gray-700 mb-2">
                N° RC
              </label>
              <input
                type="text"
                id="rcNumber"
                name="rcNumber"
                value={newClient.rcNumber}
                onChange={handleChange}
                placeholder="Numéro du registre de commerce"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-200"
              />
            </div>
            {/* NIF */}
            <div> {/* Half width */}
              <label htmlFor="nif" className="block text-sm font-medium text-gray-700 mb-2">
                NIF
              </label>
              <input
                type="text"
                id="nif"
                name="nif"
                value={newClient.nif}
                onChange={handleChange}
                placeholder="Numéro d'identification fiscale"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-200"
              />
            </div>

            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-300"
              >
                Ajouter le Client
              </button>
            </div>
          </form>
        </div>

        {/* Client List Display */}
        <div>
          <h2 className="text-2xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-3">
            Fiches Clients Enregistrées
          </h2>
          {clients.length === 0 ? (
            <p className="text-center text-gray-500 italic py-8">
              Aucun client enregistré pour le moment. Ajoutez-en un en utilisant le formulaire ci-dessus !
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {clients.map((client) => (
                <div key={client.id} className="bg-white border border-gray-200 rounded-xl shadow-md p-5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-indigo-700 mb-2">{client.name}</h3>
                    {/* Placeholder for client image */}
                    <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-4 text-gray-500 text-xs overflow-hidden">
                      <i className="fas fa-user-circle text-5xl"></i> {/* Generic user icon */}
                    </div>
                    {client.address && (
                      <p className="text-gray-600 text-sm mb-1">
                        <i className="fas fa-map-marker-alt mr-2 text-blue-500"></i>
                        Adresse: {client.address}
                      </p>
                    )}
                    {client.phone && (
                      <p className="text-gray-600 text-sm mb-1">
                        <i className="fas fa