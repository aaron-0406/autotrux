import { FunctionComponent } from "react";

interface SectionAutoProps {
  id: number | undefined;
  modelo: string;
  marca: string;
  costo: string;
  url: string;
  function: (id: number | undefined) => void;
}

const SectionAuto: FunctionComponent<SectionAutoProps> = (
  props: SectionAutoProps
) => {
  return (
    <div className="text-center border border-2 my-3">
      <img
        className="w-100 rounded mb-2"
        style={{ height: "220px" }}
        src={props.url}
        alt="imagenAuto"
      />
      <p className="my-0 mt-2">
        <strong>Modelo:</strong> {props.modelo}
      </p>
      <p className="my-0">
        <strong>Marca:</strong> {props.marca}
      </p>
      <p className="my-0">
        <strong>Costo:</strong> {props.costo}
      </p>
      <button
        type="button"
        className="btn btn-primary my-2"
        data-bs-toggle="modal"
        data-bs-target="#verAutoCliente"
        onClick={() => props.function(props.id)}
      >
        Ver
      </button>
    </div>
  );
};

export default SectionAuto;
