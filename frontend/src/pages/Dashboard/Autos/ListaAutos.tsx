/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useState, useEffect } from "react";

//Services
import * as autoServices from "../../../services/AutoServices";

// Componentes
import AutoItem from "./AutoItem";
import ModalAuto from "./ModalAuto";

// Interfaces
import Vehiculo from "../../../interfaces/Vehiculo";

interface Props {
    setTrigguer: (trigguer: number) => void;
    trigguer: number;
    autoModal: Vehiculo;
    setAutoModal: (auto: Vehiculo) => void;
    filtro: string;
}

const ListaAutos: React.FC<Props> = (props) => {
    //Cargar datos
    const [autos, setAutos] = useState<Vehiculo[]>([]);
    const [loadAutos, setLoadAutos] = useState<boolean>(false);

    const [cantidad, setCantidad] = useState<number>(0);
    const [cantidadPaginas, setCantidadPaginas] = useState<number>(0);
    const [page, setPage] = useState<number>(1);

    const getAutos = async () => {
        const res: any = await autoServices.getAll(page, props.filtro);
        if (res.data.error) return setAutos([]);
        setAutos(res.data.autos);
        setLoadAutos(true);
    };

    const getCantidad = async () => {
        const res: any = await autoServices.getCount(props.filtro);
        setCantidad(res.data);
        setCantidadPaginas(Math.ceil(res.data / 12));
    };

    const paginaSiguiente = () => {
        if (page === cantidadPaginas) return;
        setPage(page + 1);
    };

    const paginaAnterior = () => {
        if (page === 1) return;
        setPage(page - 1);
    };

    const limpieza = () => {
        setAutos([]);
        setLoadAutos(false);
    };

    useEffect(() => {
        getAutos();
        return () => limpieza();
    }, [page, props.filtro]);

    useEffect(() => {
        setPage(1);
        setCantidadPaginas(0);
        getCantidad();
        return () => {
            setCantidad(0);
            setCantidadPaginas(0);
            setPage(1);
        };
    }, [props.filtro, props.trigguer]);

    return (
        <>
            <table className="table table-bordered table-hover table-striped">
                <caption>Cantidad de autos: {cantidad}</caption>
                <thead>
                    <tr>
                        <th className="border-0" style={{ width: 10 }}>
                            #
                        </th>
                        <th className="border-0">Placa</th>
                        <th className="border-0">Modelo</th>
                        <th className="border-0">Costo / Día</th>
                        <th className="border-0">Asientos</th>
                        <th className="border-0">Estado</th>
                        <th className="border-0" style={{ width: 40 }}></th>
                        <th className="border-0" style={{ width: 40 }}></th>
                    </tr>
                </thead>
                <tbody>
                    {!loadAutos ? (
                        <>
                            <tr className="m-3">
                                <td>Cargando datos...</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </>
                    ) : (
                        <>
                            {autos.length === 0 ? (
                                <>
                                    <tr className="m-3">
                                        <td> No hay expedientes registrados aún</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </>
                            ) : (
                                <>
                                    {autos.map((auto, i) => {
                                        return <AutoItem i={i + 1} getAutos={getAutos} setAutoModal={props.setAutoModal} auto={auto} key={auto.id_vehiculo} />;
                                    })}
                                </>
                            )}
                        </>
                    )}
                </tbody>
            </table>
            <div className="d-flex justify-content-between">
                {cantidadPaginas === 0 ? (
                    <></>
                ) : (
                    <>
                        {page === 1 ? (
                            <></>
                        ) : (
                            <>
                                <button
                                    onClick={() => {
                                        paginaAnterior();
                                    }}
                                    className="btn btn__blue"
                                >
                                    <span aria-hidden="true">&laquo; Página Anterior</span>
                                </button>
                            </>
                        )}
                        {page === cantidadPaginas ? (
                            <></>
                        ) : (
                            <>
                                <button
                                    onClick={() => {
                                        paginaSiguiente();
                                    }}
                                    className="btn btn__blue ms-auto"
                                >
                                    <span aria-hidden="true">Página Siguiente &raquo;</span>
                                </button>
                            </>
                        )}
                    </>
                )}
            </div>
            <ModalAuto setTrigguer={props.setTrigguer} trigguer={props.trigguer} render={getAutos} auto={props.autoModal} setAutoModal={props.setAutoModal} />
        </>
    );
}

export default ListaAutos;