import React from "react";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  image: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, image, features }) => {
  return (
    <div className="relative rounded-3xl overflow-hidden shadow-lg group">
      <div className="relative w-full h-72">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">{title}</h3>
          <ul className="text-white text-sm grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <span className="mr-2">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-between items-center mt-4">
          <a
            href="#contacto"
            className="px-5 py-2 rounded-full border border-[#4eac8c] bg-[#4eac8c]/30 text-white text-sm hover:text-white transition hover:bg-[#4eac8c]"
          >
            Contáctanos
          </a>
          <span className="text-white text-sm underline cursor-pointer">Ver más +</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
