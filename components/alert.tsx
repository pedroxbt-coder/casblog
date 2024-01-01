
type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  return (
    <div className="w-full flex justify-center items-center border-b bg-neutral-50 sticky top-0">
      <div className="py-2 text-center lg:text-sm md:text-xs text-xs">
        
            Blog creado por Pedro Serrano, estudiante de Bachillerato internacional en el{" "}
            <a
              href={`https://www.sancristobalsl.com/bachillerato-internacional-programa-diploma-castellon/`}
              className="underline hover:text-blue-600 duration-200 transition-colors"
            >
               centro educativo San Cristobal de Castellón
            </a>
            .
          
      </div>
    </div>
  );
};

export default Alert;
