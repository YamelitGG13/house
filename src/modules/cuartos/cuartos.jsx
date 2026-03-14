import { FaBed, FaHeart, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import "./cuartos.css";
const Cuartos = () => {
  return (
    <div className="cuartos">

      {/* HERO */}
      <section className="hero">

        <button className="btn-publicar">Publicar Cuarto</button>

        <div className="hero-overlay">

          <div className="estrellas">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>

          <h1>Descubre tu próximo hogar</h1>

          <p>
            Encuentra cuartos accesibles y seguros en un solo lugar
          </p>

        </div>

      </section>

     {/* CARDS DE CUARTOS */}
      <section className="contenedor-cards">

        {/* CARD 1 */}
        <div className="card-cuarto">

          <div className="card-img">
            <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2" alt="cuarto" />
            <div className="fav"><FaHeart /></div>
          </div>

          <div className="card-info">

            <div className="card-header">
              <h3>Habitación Cómoda</h3>
              <span className="rating"><FaStar /> 4.8</span>
            </div>

            <p className="direccion">
              <FaMapMarkerAlt /> Querétaro, México
            </p>

            <div className="servicios">
              WiFi • Agua • Luz • Cocina compartida
            </div>

            <div className="detalles">
              <span><FaBed /> 3 Inmuebles</span>
            </div>

            <div className="card-footer">
              <div className="precio">
                $3200 <span>Cargo mensual</span>
              </div>

              <button className="btn-contacto">
                 Contactar
              </button>
            </div>

          </div>

        </div>


        {/* CARD 2 */}
        <div className="card-cuarto">

          <div className="card-img">
            <img src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf" alt="cuarto" />
            <div className="fav"><FaHeart /></div>
          </div>

          <div className="card-info">

            <div className="card-header">
              <h3>Cuarto Moderno</h3>
              <span className="rating"><FaStar /> 4.6</span>
            </div>

            <p className="direccion">
              <FaMapMarkerAlt /> CDMX, México
            </p>

            <div className="servicios">
              WiFi • Agua • Luz
            </div>

            <div className="detalles">
              <span><FaBed /> 2 Inmuebles</span>
            </div>

            <div className="card-footer">
              <div className="precio">
                $2800 <span>Cargo mensual</span>
              </div>

              <button className="btn-contacto">
                Contactar
              </button>
            </div>

          </div>

        </div>


        {/* CARD 3 */}
        <div className="card-cuarto">

          <div className="card-img">
            <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85" alt="cuarto" />
            <div className="fav"><FaHeart /></div>
          </div>

          <div className="card-info">

            <div className="card-header">
              <h3>Cuarto Económico</h3>
              <span className="rating"><FaStar /> 4.4</span>
            </div>

            <p className="direccion">
              <FaMapMarkerAlt /> Puebla, México
            </p>

            <div className="servicios">
              Agua • Luz
            </div>

            <div className="detalles">
              <span><FaBed /> 4 Inmuebles</span>
            </div>

            <div className="card-footer">
              <div className="precio">
                $2000 <span>Cargo mensual</span>
              </div>

              <button className="btn-contacto">
                 Contactar
              </button>
            </div>

          </div>

        </div>


        {/* CARD 4 */}
        <div className="card-cuarto">

          <div className="card-img">
            <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b" alt="cuarto" />
            <div className="fav"><FaHeart /></div>
          </div>

          <div className="card-info">

            <div className="card-header">
              <h3>Habitación Amueblada</h3>
              <span className="rating"><FaStar /> 4.9</span>
            </div>

            <p className="direccion">
              <FaMapMarkerAlt /> Guadalajara, México
            </p>

            <div className="servicios">
              WiFi • Agua • Luz • Lavadora
            </div>

            <div className="detalles">
              <span><FaBed /> 1 Inmueble</span>
            </div>

            <div className="card-footer">
              <div className="precio">
                $3500 <span>Cargo mensual</span>
              </div>

              <button className="btn-contacto">
                Contactar
              </button>
            </div>

          </div>

        </div>


        {/* CARD 5 */}
        <div className="card-cuarto">

          <div className="card-img">
            <img src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0" alt="cuarto" />
            <div className="fav"><FaHeart /></div>
          </div>

          <div className="card-info">

            <div className="card-header">
              <h3>Cuarto Estudiantil</h3>
              <span className="rating"><FaStar /> 4.5</span>
            </div>

            <p className="direccion">
              <FaMapMarkerAlt /> Monterrey, México
            </p>

            <div className="servicios">
              WiFi • Agua • Luz
            </div>

            <div className="detalles">
              <span><FaBed /> 5 Inmuebles</span>
            </div>

            <div className="card-footer">
              <div className="precio">
                $2500 <span>Cargo mensual</span>
              </div>

              <button className="btn-contacto">
               Contactar
              </button>
            </div>

          </div>

        </div>


        {/* CARD 6 */}
        <div className="card-cuarto">

          <div className="card-img">
            <img src="https://images.unsplash.com/photo-1618220179428-22790b461013" alt="cuarto" />
            <div className="fav"><FaHeart /></div>
          </div>

          <div className="card-info">

            <div className="card-header">
              <h3>Habitación Privada</h3>
              <span className="rating"><FaStar /> 4.7</span>
            </div>

            <p className="direccion">
              <FaMapMarkerAlt /> Toluca, México
            </p>

            <div className="servicios">
              WiFi • Agua • Luz • Estacionamiento
            </div>

            <div className="detalles">
              <span><FaBed /> 2 Inmuebles</span>
            </div>

            <div className="card-footer">
              <div className="precio">
                $3000 <span>Cargo mensual</span>
              </div>

              <button className="btn-contacto">
               Contactar
              </button>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Cuartos;