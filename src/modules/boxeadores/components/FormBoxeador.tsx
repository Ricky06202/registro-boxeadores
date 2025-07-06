import React, { useState } from 'react';
import {
  MenuItem,
  Select,
  TextField,
  FormControl, // <-- Importa FormControl
  InputLabel, // <-- Importa InputLabel
} from '@mui/material';

const personas = [
  { id: 1, name: 'Persona 1' },
  { id: 2, name: 'Persona 2' },
];

const categorias = [
  { id: 1, name: 'Categoria 1' },
  { id: 2, name: 'Categoria 2' },
];

const generos = [
  { id: 1, name: 'Masculino' },
  { id: 2, name: 'Femenino' },
];

const guardias = [
  { id: 1, name: 'Guardia 1' },
  { id: 2, name: 'Guardia 2' },
];

const managers = [
  { id: 1, name: 'Manager 1' },
  { id: 2, name: 'Manager 2' },
];

const promotores = [
  { id: 1, name: 'Promotor 1' },
  { id: 2, name: 'Promotor 2' },
];

export default function FormBoxeador() {
  const [boxeador, setBoxeador] = useState({
    person_id: '',
    encuentros: '',
    rondas: '',
    categoria_id: '',
    genero_id: '',
    fecha_nacimiento: '',
    guardia_id: '',
    altura: '',
    alcance: '',
    manager_id: '',
    promotor_id: '',
    victorias: '',
    derrotas: '',
    empates: '',
    victorias_ko: '',
    derrotas_ko: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setBoxeador({ ...boxeador, [name]: value });
  };

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(boxeador); // Cambié esto para que imprima el estado actual del boxeador
  }

  return (
    <form className="grid grid-cols-2 gap-4" onSubmit={onSubmit}> {/* Aumenté el gap para mejor espaciado */}
      {/** Persona */}
      <FormControl fullWidth> {/* <-- Envuelve en FormControl y dale fullWidth */}
        <InputLabel id="person-select-label">Persona</InputLabel> {/* <-- Agrega InputLabel */}
        <Select
          labelId="person-select-label" // <-- Conecta el Select con el InputLabel por su ID
          id="person-select" // <-- Un ID único para el Select
          label="Persona" // <-- Esta prop aquí es importante para la animación de la label
          name="person_id"
          value={boxeador.person_id}
          onChange={handleChange}
        >
          {personas.map((persona) => (
            <MenuItem key={persona.id} value={persona.id}>
              {persona.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/** Encuentros */}
      <TextField
        label="Encuentros"
        name="encuentros"
        type="number"
        value={boxeador.encuentros}
        onChange={handleChange}
        fullWidth // Asegúrate de que los TextField también sean fullWidth
      />

      {/** Rondas */}
      <TextField
        label="Rondas"
        name="rondas"
        type="number"
        value={boxeador.rondas}
        onChange={handleChange}
        fullWidth
      />

      {/** Categoria */}
      <FormControl fullWidth>
        <InputLabel id="categoria-select-label">Categoría</InputLabel>
        <Select
          labelId="categoria-select-label"
          id="categoria-select"
          label="Categoría"
          name="categoria_id"
          value={boxeador.categoria_id}
          onChange={handleChange}
        >
          {categorias.map((categoria) => (
            <MenuItem key={categoria.id} value={categoria.id}>
              {categoria.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/** Genero */}
      <FormControl fullWidth>
        <InputLabel id="genero-select-label">Género</InputLabel>
        <Select
          labelId="genero-select-label"
          id="genero-select"
          label="Género"
          name="genero_id"
          value={boxeador.genero_id}
          onChange={handleChange}
        >
          {generos.map((genero) => (
            <MenuItem key={genero.id} value={genero.id}>
              {genero.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/** Fecha de nacimiento */}
      {/* Para TextField type="date", la label se comporta diferente, generalmente no flota. */}
      {/* Puedes usar un InputLabel directamente si quieres una etiqueta fija, o el prop 'shrink' */}
      <TextField
        label="Fecha de Nacimiento" // <-- Agrega la label
        name="fecha_nacimiento"
        type="date"
        value={boxeador.fecha_nacimiento}
        onChange={handleChange}
        fullWidth
        InputLabelProps={{
            shrink: true, // Esto hace que la label siempre esté "encogida" arriba para campos tipo date
        }}
      />

      {/** Guardia */}
      <FormControl fullWidth>
        <InputLabel id="guardia-select-label">Guardia</InputLabel>
        <Select
          labelId="guardia-select-label"
          id="guardia-select"
          label="Guardia"
          name="guardia_id"
          value={boxeador.guardia_id}
          onChange={handleChange}
        >
          {guardias.map((guardia) => (
            <MenuItem key={guardia.id} value={guardia.id}>
              {guardia.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/** Altura */}
      <TextField
        label="Altura"
        name="altura"
        type="number"
        value={boxeador.altura}
        onChange={handleChange}
        fullWidth
      />

      {/** Alcance */}
      <TextField
        label="Alcance"
        name="alcance"
        type="number"
        value={boxeador.alcance}
        onChange={handleChange}
        fullWidth
      />

      {/** Manager */}
      <FormControl fullWidth>
        <InputLabel id="manager-select-label">Manager</InputLabel>
        <Select
          labelId="manager-select-label"
          id="manager-select"
          label="Manager"
          name="manager_id"
          value={boxeador.manager_id}
          onChange={handleChange}
        >
          {managers.map((manager) => (
            <MenuItem key={manager.id} value={manager.id}>
              {manager.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/** Promotor */}
      <FormControl fullWidth>
        <InputLabel id="promotor-select-label">Promotor</InputLabel>
        <Select
          labelId="promotor-select-label"
          id="promotor-select"
          label="Promotor"
          name="promotor_id"
          value={boxeador.promotor_id}
          onChange={handleChange}
        >
          {promotores.map((promotor) => (
            <MenuItem key={promotor.id} value={promotor.id}>
              {promotor.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/** Victorias */}
      <TextField
        label="Victorias"
        name="victorias"
        type="number"
        value={boxeador.victorias}
        onChange={handleChange}
        fullWidth
      />

      {/** Derrotas */}
      <TextField
        label="Derrotas"
        name="derrotas"
        type="number"
        value={boxeador.derrotas}
        onChange={handleChange}
        fullWidth
      />

      {/** Empates */}
      <TextField
        label="Empates"
        name="empates"
        type="number"
        value={boxeador.empates}
        onChange={handleChange}
        fullWidth
      />

      {/** Victorias por KO */}
      <TextField
        label="Victorias por KO"
        name="victorias_ko"
        type="number"
        value={boxeador.victorias_ko}
        onChange={handleChange}
        fullWidth
      />

      {/** Derrotas por KO */}
      <TextField
        label="Derrotas por KO"
        name="derrotas_ko"
        type="number"
        value={boxeador.derrotas_ko}
        onChange={handleChange}
        fullWidth
      />

      {/* Botón de envío, puedes agregarlo al final del formulario */}
      <button type="submit" className="col-span-2 p-3 bg-blue-500 text-white rounded-md mt-4 hover:bg-blue-600">
        Guardar Boxeador
      </button>
    </form>
  );
}