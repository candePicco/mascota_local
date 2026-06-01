"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Reportar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); 
  const [step, setStep] = useState(1);
  
  // Selección principal del tipo de publicación
  // Opciones: 'perdi_mi_mascota' | 'encontre_mascota' | 'en_adopcion'
  const [tipoReporte, setTipoReporte] = useState(''); 

  // Estados del Formulario
  const [nombre, setNombre] = useState('');
  const [zona, setZona] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [requisitos, setRequisitos] = useState('');
  const [foto, setFoto] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulación de a qué sección iría en la base de datos
    let seccionDestino = '';
    if (tipoReporte === 'perdi_mi_mascota') seccionDestino = 'Mascotas Perdidas';
    if (tipoReporte === 'encontre_mascota') seccionDestino = 'Mascotas Encontradas';
    if (tipoReporte === 'en_adopcion') seccionDestino = 'Adopciones';

    alert(`¡Publicación Exitosa!\nEnviando a sección: ${seccionDestino}\nNombre: ${nombre || 'No aplica'}\nZona/Barrio: ${zona || 'No aplica'}\nFoto cargada: ${foto ? 'Sí' : 'No'}`);
    
    // Resetear formulario
    setStep(1);
    setTipoReporte('');
    setNombre('');
    setZona('');
    setDescripcion('');
    setRequisitos('');
    setFoto(null);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFoto(e.target.files[0].name); // Guardamos el nombre para simular
    }
  };

  // Validación para habilitar el botón "Siguiente" o "Publicar" según tus reglas estrictas
  const isStepValid = () => {
    if (step === 1) return tipoReporte !== '';
    
    if (step === 2) {
      if (tipoReporte === 'perdi_mi_mascota') {
        // Obligatorio: Nombre y Zona
        return nombre.trim() !== '' && zona.trim() !== '';
      }
      if (tipoReporte === 'encontre_mascota') {
        // Obligatorio: Zona donde se la vio
        return zona.trim() !== '';
      }
      if (tipoReporte === 'en_adopcion') {
        // Requisitos y Nombre son opcionales, dejamos avanzar
        return true;
      }
    }

    if (step === 3) {
      if (tipoReporte === 'perdi_mi_mascota') {
        // Obligatorio: Foto (Descripción opcional)
        return foto !== null;
      }
      // Para los otros casos, foto y descripción son opcionales
      return true;
    }

    return true;
  };

  if (!isLoggedIn) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="max-w-md text-center bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <span className="text-5xl mb-4 block">🔒</span>
          <h2 className="text-2xl font-black text-gray-900 mb-3">Para publicar, primero identificate</h2>
          <p className="text-gray-600 mb-6 text-sm">Queremos asegurarnos de que la comunidad pueda contactarte de forma directa si hay novedades.</p>
          <div className="flex flex-col gap-3">
            <Link href="/login" className="bg-orange-500 text-white p-3 rounded-full font-bold hover:bg-orange-600 transition-all shadow-md">Iniciar Sesión</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-3xl shadow-sm border border-gray-100 min-h-[55vh] flex flex-col justify-between">
      
      {/* Progreso */}
      <div className="w-full bg-gray-100 h-1.5 rounded-full mb-6 overflow-hidden">
        <div className="bg-orange-500 h-1.5 transition-all duration-300" style={{ width: `${(step / 3) * 100}%` }}></div>
      </div>

      <form onSubmit={handleSubmit} className="flex-grow flex flex-col justify-between">
        
        {/* PASO 1: Tres opciones bien diferenciadas al estilo Airbnb */}
        {step === 1 && (
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-black text-gray-900 mb-2">¿Qué querés reportar hoy?</h2>
            <p className="text-sm text-gray-500 mb-6">Seleccioná la opción correcta para ubicarla en la sección correspondiente.</p>
            
            <div className="grid grid-cols-1 gap-3">
              <button
                type="button"
                onClick={() => setTipoReporte('perdi_mi_mascota')}
                className={`p-5 border-2 rounded-2xl text-left transition-all flex items-start gap-4 ${tipoReporte === 'perdi_mi_mascota' ? 'border-orange-500 bg-orange-50/40 ring-2 ring-orange-500/20' : 'border-gray-200 hover:border-gray-400'}`}
              >
                <span className="text-3xl">🚨</span>
                <div>
                  <span className="font-bold text-gray-900 block text-base">Perdí mi mascota</span>
                  <span className="text-xs text-gray-500 block mt-0.5">Se me escapó o perdió mi compañero. Va a "Mascotas Perdidas".</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setTipoReporte('encontre_mascota')}
                className={`p-5 border-2 rounded-2xl text-left transition-all flex items-start gap-4 ${tipoReporte === 'encontre_mascota' ? 'border-orange-500 bg-orange-50/40 ring-2 ring-orange-500/20' : 'border-gray-200 hover:border-gray-400'}`}
              >
                <span className="text-3xl">👀</span>
                <div>
                  <span className="font-bold text-gray-900 block text-base">Encontré / Vi una mascota en la calle</span>
                  <span className="text-xs text-gray-500 block mt-0.5">Vi un animal deambulando solo que parece perdido. Va a "Mascotas Encontradas".</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setTipoReporte('en_adopcion')}
                className={`p-5 border-2 rounded-2xl text-left transition-all flex items-start gap-4 ${tipoReporte === 'en_adopcion' ? 'border-orange-500 bg-orange-50/40 ring-2 ring-orange-500/20' : 'border-gray-200 hover:border-gray-400'}`}
              >
                <span className="text-3xl">🏡</span>
                <div>
                  <span className="font-bold text-gray-900 block text-base">Dar en Adopción Responsable</span>
                  <span className="text-xs text-gray-500 block mt-0.5">Busco un hogar definitivo para un animal de tránsito/refugio. Va a "Adopciones".</span>
                </div>
              </button>
            </div>
          </div>
        )}

        {/* PASO 2: Inputs dinámicos según el rol */}
        {step === 2 && (
          <div className="space-y-4">
            {tipoReporte === 'perdi_mi_mascota' && (
              <>
                <h2 className="text-xl font-black text-gray-900 mb-4">Datos de tu mascota</h2>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Nombre / Apodo <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="Ej: Rocco, Chiquito..." value={nombre} onChange={(e) => setNombre(e.target.value)} className="w-full p-3 border border-gray-300 rounded-xl focus:border-orange-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">¿En qué zona o barrio se perdió? <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="Ej: Banda Norte, Alberdi..." value={zona} onChange={(e) => setZona(e.target.value)} className="w-full p-3 border border-gray-300 rounded-xl focus:border-orange-500" />
                </div>
              </>
            )}

            {tipoReporte === 'encontre_mascota' && (
              <>
                <h2 className="text-xl font-black text-gray-900 mb-4">¿Dónde la viste?</h2>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Ubicación o zona exacta del avistaje <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="Ej: Esquina San Martín y Alvear, cerca de la plaza..." value={zona} onChange={(e) => setZona(e.target.value)} className="w-full p-3 border border-gray-300 rounded-xl focus:border-orange-500" />
                </div>
              </>
            )}

            {tipoReporte === 'en_adopcion' && (
              <>
                <h2 className="text-xl font-black text-gray-900 mb-4">Información de la adopción</h2>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Nombre / Apodo provisorio <span className="text-gray-400 font-normal">(Opcional)</span></label>
                  <input type="text" placeholder="Ej: Cachorrito negro, Luna..." value={nombre} onChange={(e) => setNombre(e.target.value)} className="w-full p-3 border border-gray-300 rounded-xl focus:border-orange-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Requisitos para adoptar / Mensaje <span className="text-gray-400 font-normal">(Opcional)</span></label>
                  <textarea placeholder="Ej: Seguimiento de vacunas, patio cerrado, compromiso de castración..." value={requisitos} onChange={(e) => setRequisitos(e.target.value)} className="w-full p-3 border border-gray-300 rounded-xl h-24 resize-none focus:border-orange-500"></textarea>
                </div>
              </>
            )}
          </div>
        )}

        {/* PASO 3: Fotos obligatorias/opcionales y descripciones */}
        {step === 3 && (
          <div className="space-y-4">
            <h2 className="text-xl font-black text-gray-900 mb-4">Multimedia y detalles finales</h2>
            
            {/* Input de carga de foto estilo bento/Airbnb */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Foto de la mascota {tipoReporte === 'perdi_mi_mascota' ? <span className="text-red-500">* (Obligatorio para buscar)</span> : <span className="text-gray-400 font-normal">(Opcional)</span>}
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer relative">
                <input type="file" accept="image/*" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                <span className="text-3xl block mb-2">📸</span>
                <span className="text-sm font-medium text-gray-600 block">
                  {foto ? `Archivo seleccionado: ${foto}` : 'Hacé clic para seleccionar o arrastrá una imagen'}
                </span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Descripción adicional {tipoReporte === 'perdi_mi_mascota' ? <span className="text-gray-400 font-normal">(Opcional)</span> : <span className="text-gray-400 font-normal">(Opcional)</span>}
              </label>
              <textarea placeholder="Cualquier seña particular, tamaño, color, temperamento..." value={descripcion} onChange={(e) => setDescripcion(e.target.value)} className="w-full p-3 border border-gray-300 rounded-xl h-28 resize-none focus:border-orange-500"></textarea>
            </div>
          </div>
        )}

        {/* Botonera de control inferior */}
        <div className="mt-8 pt-4 border-t border-gray-100 flex justify-between items-center">
          {step > 1 ? (
            <button type="button" onClick={() => setStep(step - 1)} className="text-gray-600 font-bold hover:underline py-2">Atrás</button>
          ) : <div></div>}

          {step < 3 ? (
            <button
              type="button"
              disabled={!isStepValid()}
              onClick={() => setStep(step + 1)}
              className={`px-6 py-3 rounded-full font-bold text-white shadow-md transition-all ${!isStepValid() ? 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none' : 'bg-gray-900 hover:bg-black hover:scale-105'}`}
            >
              Siguiente
            </button>
          ) : (
            <button
              type="submit"
              disabled={!isStepValid()}
              className={`px-8 py-3 rounded-full font-bold text-white shadow-lg transition-all ${!isStepValid() ? 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none' : 'bg-orange-500 hover:bg-orange-600 hover:scale-105'}`}
            >
              Publicar Alerta
            </button>
          )}
        </div>

      </form>
    </div>
  );
}