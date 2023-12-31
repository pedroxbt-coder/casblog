import Container from "./container";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-8 w-full items-center">
          <div className="flex flex-col items-start lg:gap-6 lg:flex-row lg:justify-center lg:items-center">
            <a
              href="https://github.com/pedroxbt-coder/casblog"
              className="bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              ¿Cómo se ha creado?
            </a>
            <p className="font-bold">
              Más información en pedro.serrano@sancristobalsl.com
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
