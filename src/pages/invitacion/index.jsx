import React, { useState, useEffect } from 'react';
import Loading from "../../components/loading";
import "../invitacion/styles.css";
import Img from "../invitacion/imgInv.jpg";

function Invitacion() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000); 
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="container-inv">
          <img className='img-2' src={Img} alt="" />
          <p>Estoy muy emocionada de invitarte a mi fiesta de 15 años. En este día tan especial, quiero rodearme de amor y amistad:</p>

          <p>"En el camino de la vida, las personas que nos rodean son como estrellas que iluminan nuestras noches más oscuras y guían nuestros pasos. He sido bendecida con amigos y familiares que han llenado mi mundo de amor y apoyo"</p>

          <p>Te invito a unirte a nosotros para celebrar la importancia de las personas en mi vida en una velada formal llena de alegría y gratitud.</p>

          <p>Fecha: [Fecha del evento]</p>
          <p>Hora: [Hora del evento]</p>
          <p>Lugar: [Dirección del evento]</p>

          <p>Por favor, confirma tu asistencia antes del [Fecha de confirmación] para que pueda asegurarme de que este día sea aún más especial.</p>

          <p>Espero contar con tu presencia en esta ocasión tan significativa.</p>

          <p>Con cariño, Samira.</p>
        </div>
      )}
    </div>
  )
}

export default Invitacion;