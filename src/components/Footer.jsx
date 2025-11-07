import { Mail, Instagram, ShoppingBag } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="bg-gray-100 text-gray-700 py-10 px-6 border-t border-gray-200"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Información principal */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-serif text-gray-900 mb-2">
            Ángela Ríos Martínez
          </h3>
          <p className="text-gray-600">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>

        {/* Contacto */}
        <div className="flex flex-col items-center md:items-end space-y-3">
          <h4 className="text-lg font-medium text-gray-800">Contacto</h4>

          <div className="flex items-center space-x-2 hover:text-gray-900 transition">
            <Mail size={18} />
            <a
              href="mailto:angelarm21@outlook.es"
              className="hover:underline text-gray-700"
            >
              angelarm21@outlook.es
            </a>
          </div>

          <div className="flex items-center space-x-2 hover:text-gray-900 transition">
            <Instagram size={18} />
            <a
              href="https://www.instagram.com/anngelarios"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-gray-700"
            >
              @anngelarios
            </a>
          </div>

          {/* Enlace a Wallapop */}
          <div className="flex items-center space-x-2 hover:text-gray-900 transition">
            <ShoppingBag size={18} />
            <a
              href="https://www.wallapop.com/app/user/tu-nombre-de-usuario" // 👉 reemplaza con tu URL real
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-gray-700"
            >
              Wallapop
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
