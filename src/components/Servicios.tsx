"use client";

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent
} from "@/components/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Network,
  Camera,
  Key,
  Shield,
  Radio,
  Sun,
  Server,
  Settings,
  Lightbulb
} from "lucide-react";

const servicios = [
  {
    icon: <Network className="w-5 h-5 mr-2" />,
    categoria: "Infraestructura de Redes",
    detalles: [
      "Cableado estructurado: Cat5e, Cat6, Cat6A, fibra óptica",
      "Instalación de racks, gabinetes y canalización",
      "Certificación con equipo Fluke",
      "Venta de conectores, patchcords y testers"
    ]
  },
  {
    icon: <Camera className="w-5 h-5 mr-2" />,
    categoria: "Videovigilancia y CCTV",
    detalles: [
      "Instalación de cámaras IP, HD-TVI, PTZ y térmicas",
      "Configuración de NVRs/DVRs y monitoreo remoto",
      "Venta de cámaras, grabadores, discos y accesorios"
    ]
  },
  {
    icon: <Key className="w-5 h-5 mr-2" />,
    categoria: "Control de Acceso",
    detalles: [
      "Lectores biométricos, tarjetas y QR",
      "Cerraduras eléctricas, torniquetes y control vehicular",
      "Venta de sensores, fuentes y baterías"
    ]
  },
  {
    icon: <Shield className="w-5 h-5 mr-2" />,
    categoria: "Alarmas y Seguridad",
    detalles: [
      "Alarmas residenciales, comerciales e industriales",
      "Detección de humo, gas y temperatura",
      "Venta de sensores, sirenas y paneles de control"
    ]
  },
  {
    icon: <Radio className="w-5 h-5 mr-2" />,
    categoria: "Radiocomunicación",
    detalles: [
      "Enlaces inalámbricos punto a punto y multipunto",
      "Radios VHF/UHF y montaje de torres",
      "Venta de radios, antenas, cables y soportes"
    ]
  },
  {
    icon: <Sun className="w-5 h-5 mr-2" />,
    categoria: "Energía y Sistemas Solares",
    detalles: [
      "Sistemas On Grid, Off Grid e híbridos",
      "UPS, reguladores, baterías e inversores",
      "Venta de paneles, breakers, estructuras y conectores"
    ]
  },
  {
    icon: <Server className="w-5 h-5 mr-2" />,
    categoria: "Servidores y TI",
    detalles: [
      "Instalación de servidores NAS/SAN",
      "Almacenamiento especializado para videovigilancia",
      "Venta de switches, discos, cables y software VMS"
    ]
  },
  {
    icon: <Lightbulb className="w-5 h-5 mr-2" />,
    categoria: "Automatización y Domótica",
    detalles: [
      "Control de iluminación, clima y seguridad",
      "Integración con apps móviles y asistentes de voz",
      "Venta de sensores, hubs y módulos inteligentes"
    ]
  },
  {
    icon: <Settings className="w-5 h-5 mr-2" />,
    categoria: "Consultoría Especializada",
    detalles: [
      "Diseño e implementación de proyectos",
      "Mantenimiento y capacitación técnica",
      "Asesoría en normativas y levantamientos técnicos"
    ]
  }
];

const valorAgregado = [
  "Venta de equipos con asesoría técnica personalizada",
  "Instalación profesional y soporte postventa",
  "Facturación, contratos de mantenimiento y entregas programadas"
];

export const ServiciosSection = () => {
  return (
    <section className="w-full px-6 py-16 bg-white" id="servicios">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">Nuestros Servicios</h2>

        <Tabs defaultValue={servicios[0].categoria} className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 mb-8">
            {servicios.map((s) => (
              <TabsTrigger
                key={s.categoria}
                value={s.categoria}
                className="flex items-center gap-1 px-4 py-2 text-sm"
              >
                {s.icon}
                {s.categoria}
              </TabsTrigger>
            ))}
          </TabsList>

          {servicios.map((s) => (
            <TabsContent key={s.categoria} value={s.categoria}>
              <Card className="shadow-2xl rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-700 flex items-center">
                    {s.icon}
                    {s.categoria}
                  </h3>
                  <Accordion type="multiple" className="space-y-2">
                    {s.detalles.map((detalle, idx) => (
                      <AccordionItem key={idx} value={`item-${idx}`}>
                        <AccordionTrigger>{detalle.split(":")[0]}</AccordionTrigger>
                        <AccordionContent>{detalle}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16">
          <h3 className="text-3xl font-semibold mb-6 text-center text-gray-800">Valor Agregado</h3>
          <ul className="grid gap-4 sm:grid-cols-2 text-gray-700 text-lg list-disc list-inside">
            {valorAgregado.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServiciosSection;
