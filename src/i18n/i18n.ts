import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          nav: {
            home: "Home",
            projects: "Projects",
            about: "About",
            contact: "Contact"
          },
          aboutPage: {
            title: "Building Digital Resilience",
            text1: "As a developer, I strive to create beautiful websites with stunning design and great performance. I enjoy creating extremely visual and interactive experiences using any technology that will deliver the best results.",
            text2: "Having a background of 10 years experience in a hospital, I also developed my soft skills. I consider myself a proactive listener and a good team worker.",
            skills: "Technical Arsenal"
          },
          banner: {
            subtitle: "Fullstack developer and lab technician",
            description: "Crafting functional, high-performance web experiences through the lens of analytical precision and system-level resilience.",
            explore: "Explore",
            contact: "Contact"
          },
          footer: {
            title: "Need Precision for your Next Build?",
            description: "Whether it's a regulated medical device interface or a high-traffic enterprise application, let's build it with clinical accuracy.",
            btn: "Start a Conversation",
            linkedin: "LinkedIn",
            github: "Github"
          },
          work: {
            repo: "Repository",
            visit: "Visit Page"
          }
        }
      },
      es: {
        translation: {
          nav: {
            home: "Inicio",
            projects: "Proyectos",
            about: "Sobre mí",
            contact: "Contacto"
          },
          aboutPage: {
            title: "Construyendo Resiliencia Digital",
            text1: "Como desarrollador, me esfuerzo por crear sitios web hermosos con un diseño impresionante y un gran rendimiento. Disfruto creando experiencias sumamente visuales e interactivas utilizando cualquier tecnología que brinde los mejores resultados.",
            text2: "Con una trayectoria de 10 años en el hospital, también desarrollé mis habilidades interpersonales. Me considero un oyente proactivo y un buen trabajador en equipo.",
            skills: "Arsenal Técnico"
          },
          banner: {
            subtitle: "Desarrollador Fullstack y Técnico de Laboratorio",
            description: "Creando experiencias web funcionales y de alto rendimiento a través del lente de la precisión analítica y la resiliencia digital a nivel de sistema.",
            explore: "Explorar",
            contact: "Contacto"
          },
          footer: {
            title: "¿Necesitas precisión para tu próximo proyecto?",
            description: "Ya sea una interfaz de dispositivo médico regulado o una aplicación empresarial de alto tráfico, construyámoslo con precisión clínica.",
            btn: "Iniciar una conversación",
            linkedin: "LinkedIn",
            github: "Github"
          },
          work: {
            repo: "Repositorio",
            visit: "Visitar Sitio"
          }
        }
      }
    }
  });

export default i18next;