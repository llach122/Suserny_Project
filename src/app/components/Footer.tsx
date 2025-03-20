import { Facebook, GalleryHorizontalEnd, Instagram, Twitter } from "lucide-react";

interface FooterProps {
  company: string;
  insta: string;
  face: string;
  twit: string;
}

function Footer({ company, insta, face, twit }: FooterProps) {
  return (
    <footer className="bg-black text-white py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <GalleryHorizontalEnd size={24} />
          <span className="text-xl">{company }</span>
        </div>
        <div className="flex gap-6">
          <a href={insta} target="_blank" rel="noopener noreferrer">
            <Instagram className="w-6 h-6 cursor-pointer hover:text-gray-300" />
          </a>
          <a href={face} target="_blank" rel="noopener noreferrer">
            <Facebook className="w-6 h-6 cursor-pointer hover:text-gray-300" />
          </a>
          <a href={twit} target="_blank" rel="noopener noreferrer">
            <Twitter className="w-6 h-6 cursor-pointer hover:text-gray-300" />
          </a>
        </div>
        <p className="text-sm text-gray-400">© 2024 Reflejo. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
  )
}
export default Footer

