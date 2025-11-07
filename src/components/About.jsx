export default function About() {
  return (
    <section
      id="about"
      className="bg-gray-50 text-gray-900 py-20 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <img
            src="/angela.jpg"
            alt="Artista"
            className="w-full max-w-sm rounded-2xl shadow-lg object-cover"
          />
        </div>

        <div>
          <h2 className="text-4xl font-serif mb-6">Sobre mí</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Hola, soy Ángela! Soy una artista autodidacta afincada en Galicia.
             Mi producción artística abarca principalmente la pintura al óleo, 
             aunque también he explorado otras disciplinas como la escultura y el dibujo. 
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Me inspiran los personajes diferentes, lo grotesco y lo teatral;
             y trato de plasmarlo desde una perspectiva amable donde lo feo pueda 
             habitar con naturalidad. Investigo la fealdad como una categoría estética 
             y como una herramienta que permita una empatía entre la figura y el espectador.
          </p>
        </div>
      </div>
    </section>
  );
}
