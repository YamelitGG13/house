import { useState } from "react";
import { FaBed, FaHeart, FaMapMarkerAlt, FaPlus, FaStar } from "react-icons/fa";
import "./cuartos.css";

const Cuartos = () => {
  // 1. Estado para controlar si el modal se ve o no
  const [mostrarModal, setMostrarModal] = useState(false);

  // 2. Estado de la lista de cuartos
  const [cuartos, setCuartos] = useState([
    {
      titulo: "Habitación Cómoda",
      ciudad: "Zacualtipán, Hidalgo",
      servicios: "WiFi • Agua • Luz",
      inmuebles: 2,
      precio: 3200,
      contacto: "contacto@email.com",
      rating: 4.8,
      img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
    }
  ]);

  // 3. Estado del formulario
  const [formData, setFormData] = useState({
    titulo: "", ciudad: "", servicios: "WiFi • Luz", inmuebles: 1, precio: "", contacto: "", img: ""
  });

  const cerrarModal = () => setMostrarModal(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, img: URL.createObjectURL(file) });
    }
  };

  const agregarCuarto = (e) => {
    e.preventDefault();
    // Agregamos el nuevo cuarto al principio de la lista
    setCuartos([{ ...formData, rating: 5.0 }, ...cuartos]);
    cerrarModal(); // Cerramos el modal tras publicar
    // Limpiamos el formulario
    setFormData({ titulo: "", ciudad: "", servicios: "WiFi • Luz", inmuebles: 1, precio: "", contacto: "", img: "" });
  };

  return (
    <div className="cuartos">
      <section className="contenedor-cards">
        
        {/* CARD PARA ABRIR MODAL */}
        <div className="card-cuarto card-publicar" onClick={() => setMostrarModal(true)}>
          <div className="contenido-publicar">
            <div className="icono-plus"><FaPlus /></div>
            <span>Publicar nuevo cuarto</span>
          </div>
        </div>

        {/* RENDERIZADO DE CUARTOS */}
        {cuartos.map((cuarto, index) => (
          <div className="card-cuarto" key={index}>
            <div className="card-img">
              <img src={cuarto.img || "https://via.placeholder.com/300"} alt="cuarto" />
              <div className="fav"><FaHeart /></div>
            </div>
            <div className="card-info">
              <div className="card-header">
                <h3>{cuarto.titulo}</h3>
                <span className="rating"><FaStar /> {cuarto.rating}</span>
              </div>
              <p className="direccion"><FaMapMarkerAlt /> {cuarto.ciudad}</p>
              <div className="servicios">{cuarto.servicios}</div>
              <div className="detalles">
                <span><FaBed /> {cuarto.inmuebles} Hab.</span>
              </div>
              <div className="card-footer">
                <div className="precio">${cuarto.precio}<span> / mes</span></div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* MODAL CON Z-INDEX CORREGIDO */}
      {mostrarModal && (
        <div className="modal-overlay" onClick={cerrarModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Anunciar Cuarto</h2>
            <form onSubmit={agregarCuarto}>
              <label>Imagen del lugar</label>
              <input type="file" accept="image/*" onChange={handleImage} required />
              
              <input type="text" name="titulo" placeholder="Ej: Cuarto céntrico" value={formData.titulo} onChange={handleChange} required />
              <input type="text" name="ciudad" placeholder="Ubicación" value={formData.ciudad} onChange={handleChange} required />
              <input type="number" name="precio" placeholder="Precio mensual" value={formData.precio} onChange={handleChange} required />
              
              <div className="modal-botones">
                <button type="submit" className="btn-confirmar">Publicar ahora</button>
                <button type="button" className="btn-cancelar" onClick={cerrarModal}>Cancelar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cuartos;