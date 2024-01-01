"use client";

import { useState } from "react";

type Props = {
  outcomes: string;
};

const Outcomes = ({ outcomes }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="text-lg md:text-3xl font-bold tracking-tight md:tracking-tighter leading-tight mb-8">
      <div onClick={handleToggle} className="flex gap-1">
        <p className="hover:underline">Objetivos del aprendizaje: </p>
        <p>{outcomes}</p>
      </div>

      {isOpen && (
        <div className="bg-blue-100 p-4 rounded-md mt-4">
          <ol className="list-decimal pl-4 text-sm md:text-lg lg:text-xl font-semibold tracking-tight flex flex-col gap-2">
            <li>
              Identificar en uno mismo los puntos fuertes y las áreas en las que
              se necesita mejorar.
            </li>
            <li>
              Mostrar que se han afrontado desafíos y se han desarrollado nuevas
              habilidades en el proceso.
            </li>
            <li>Mostrar cómo iniciar y planificar una experiencia de CAS.</li>
            <li>
              Mostrar habilidades de trabajo en equipo y reconocer los
              beneficios del trabajo colaborativo.
            </li>
            <li>
              Mostrar compromiso y perseverancia en las experiencias de CAS.
            </li>
            <li>
              Mostrar compromiso con cuestiones de importancia global.
            </li>
            <li>
              Reconocer y considerar el aspecto ético de las decisiones y las
              acciones.
            </li>
          </ol>
        </div>
      )}
    </div>
  );
};

export default Outcomes;
