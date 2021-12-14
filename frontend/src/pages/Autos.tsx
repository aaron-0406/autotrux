import { useEffect, useState } from "react";

//Services
import * as autoServices from "../services/AutoServices";

//Interfaces
import Vehiculo from "../interfaces/Vehiculo";

//Components
import SectionAuto from "../components/views/Autos/SectionAuto";
import ModalAuto from "../components/views/Autos/ModalAuto";

const initialVehiculo: Vehiculo = {
  id_vehiculo: 0,
  tipo_vehiculo: "",
  placa_vehiculo: "",
  modelo_vehiculo: "",
  marca_vehiculo: "",
  color_vehiculo: "",
  anio_vehiculo: "",
  transmision_vehiculo: "",
  combustible_vehiculo: "",
  motor_vehiculo: "",
  traccion_vehiculo: "",
  potencia_vehiculo: "",
  torque_vehiculo: "",
  rendimiento_vehiculo: "",
  asientos_vehiculo: "",
  costo_vehiculo: "",
  estado_vehiculo: "",
  foto_vehiculo: "",
};

const Autos = () => {
  //Cargar datos
  const [auto, setAuto] = useState<Vehiculo>(initialVehiculo);
  const [autos, setAutos] = useState<Vehiculo[]>([]);

  const getAutos = async () => {
    const res: any = await autoServices.getAllVehiculos("AUTO");
    if (res.data.error) return setAutos([]);
    setAutos(res.data.autos);
  };

  const changeAuto = (id: any) => {
    const autoEncontrado: any = autos.find(
      (element) => element.id_vehiculo === id
    );
    setAuto(autoEncontrado);
  };

  useEffect(() => {
    getAutos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>
        <h1 className="text-center py-4">AUTOS</h1>
      </div>

      <div className="container">
        <div className="row">
          {autos.map((auto: Vehiculo) => {
            return (
              <div className="col-md-4" key={auto.id_vehiculo}>
                <SectionAuto
                  key={auto.id_vehiculo}
                  id={auto.id_vehiculo}
                  modelo={auto.modelo_vehiculo}
                  marca={auto.marca_vehiculo}
                  costo={auto.costo_vehiculo}
                  url={auto.foto_vehiculo}
                  function={changeAuto}
                />
              </div>
            );
          })}
        </div>
      </div>
      <ModalAuto auto={auto} />
    </>
  );
};

export default Autos;
