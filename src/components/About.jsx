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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            aliquet suscipit est, a accumsan tortor mattis vel. Nunc nec nisi
            accumsan, dapibus tortor nec, laoreet ligula. Ut porttitor dolor a
            gravida vulputate. In dapibus rutrum est, non lacinia quam
            ullamcorper id. Praesent tristique erat vel lorem accumsan, ut
            aliquam felis finibus. Praesent mattis mi vitae sem volutpat
            volutpat. Ut sem tellus, fringilla sed commodo a, posuere eget nisi.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Mauris viverra lectus diam, ut facilisis neque congue at. Sed vel
            nunc et tellus dictum finibus vitae et lacus. Vivamus non interdum
            turpis. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Nunc id est pretium eros aliquet porttitor. Praesent vel
            massa ultrices odio egestas placerat tempus sit amet enim. Donec
            feugiat, ligula feugiat pellentesque viverra, leo mauris auctor
            diam, vitae ultricies libero ipsum sed magna. Proin pharetra dolor
            vitae dolor feugiat, ut sodales mauris mollis.
          </p>
        </div>
      </div>
    </section>
  );
}
