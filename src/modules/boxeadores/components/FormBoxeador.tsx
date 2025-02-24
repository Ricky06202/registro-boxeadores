export const FormBoxeador: React.FC = () => {
  const [boxeador, setBoxeador] = useState<>({
    nombre: '',
    apellido: '',
    alias: '',
    categoria: '',
    genero: '',
    nacionalidad: '',
    countryCode: '',
    imagen: '',
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(boxeador);
  };

  const handleChange =
    (key: keyof typeof boxeador) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setBoxeador((prev) => ({ ...prev, [key]: e.target.value }));

  return (
    <PanelFlotante
      onClose={() => {}}
      onAccept={() => {}}
      title="Nuevo Boxeador"
    >
      <form onSubmit={onSubmit} className="space-y-4">
        <label className="block">
          <span className="text-gray-700">Nombre</span>
          <input
            type="text"
            value={boxeador.nombre}
            onChange={handleChange('nombre')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Apellido</span>
          <input
            type="text"
            value={boxeador.apellido}
            onChange={handleChange('apellido')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Alias</span>
          <input
            type="text"
            value={boxeador.alias}
            onChange={handleChange('alias')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Categoria</span>
          <input
            type="text"
            value={boxeador.categoria}
            onChange={handleChange('categoria')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Genero</span>
          <select
            value={boxeador.genero}
            onChange={handleChange('genero')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="">Seleccione un genero</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
          </select>
        </label>

        <label className="block">
          <span className="text-gray-700">Nacionalidad</span>
          <input
            type="text"
            value={boxeador.nacionalidad}
            onChange={handleChange('nacionalidad')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Codigo Pais</span>
          <input
            type="text"
            value={boxeador.countryCode}
            onChange={handleChange('countryCode')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Imagen</span>
          <input
            type="text"
            value={boxeador.imagen}
            onChange={handleChange('imagen')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Crear Boxeador
        </button>
      </form>
    </PanelFlotante>
  );
};
