export const Header = () => (
  <header className="bg-white shadow px-8 py-4 flex items-center justify-between">
    {/* Título */}
    <div className="flex items-center gap-4">
      <img
        src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
        alt="Logo"
        className="w-8 h-8"
      />
      <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
    </div>

    {/* Barra de búsqueda */}
    <div className="flex-1 mx-8">
      <input
        type="text"
        placeholder="Buscar..."
        className="w-full max-w-xs px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
      />
    </div>

    {/* Acciones */}
    <div className="flex items-center gap-6">
      {/* Notificaciones */}
      <button className="relative">
        <svg
          className="w-6 h-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 7.165 6 9.388 6 12v2.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
        {/* Indicador de notificaciones */}
        <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-500"></span>
      </button>

      {/* Avatar de usuario */}
      <div className="relative group">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Usuario"
          className="w-10 h-10 rounded-full border-2 border-blue-600 cursor-pointer"
        />
        {/* Menú simulado */}
        <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition">
          <ul>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Perfil</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Configuración</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Cerrar sesión</li>
          </ul>
        </div>
      </div>
    </div>
  </header>
);
