import { Project, Skill, Experience } from './types';

export const developerInfo = {
  name: 'Sofía Ramos',
  title: 'React & Mobile Developer Specialist',
  shortBio: 'Apasionada por crear experiencias digitales excepcionales en web y dispositivos móviles. Especializada en React, React Native e interfaces fluidas de alto rendimiento.',
  aboutLong: 'Hola, soy Sofía Ramos, desarrolladora frontend y mobile con más de 4 años de experiencia en el ecosistema de JavaScript. Me dedico a transformar ideas complejas en interfaces intuitivas, rápidas y totalmente accesibles. Siempre me esfuerzo por escribir código limpio, escalable y mantenible.\n\nHe liderado el diseño y desarrollo de aplicaciones web responsivas y aplicaciones móviles nativas para dispositivos iOS y Android. Estoy profundamente enfocada en los detalles de micro-interacciones, el rendimiento y la optimización de batería en dispositivos móviles.',
  avatarUrl: '/src/assets/images/developer_avatar_1782076812999.jpg',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  email: 'sofia.ramos.dev@gmail.com',
  phone: '+34 612 345 678',
  location: 'Madrid, España / Remoto',
  availability: 'Disponible para nuevos proyectos o roles full-time'
};

export const skills: Skill[] = [
  // Frontend
  { name: 'React / Next.js', iconName: 'Layers', level: 95, category: 'frontend' },
  { name: 'Tailwind CSS', iconName: 'Palette', level: 90, category: 'frontend' },
  { name: 'TypeScript', iconName: 'Code', level: 90, category: 'languages' },
  { name: 'Redux / Zustand', iconName: 'Cpu', level: 85, category: 'frontend' },
  
  // Mobile
  { name: 'React Native', iconName: 'Smartphone', level: 92, category: 'mobile' },
  { name: 'iOS/Android Deploy', iconName: 'CloudLightning', level: 85, category: 'mobile' },
  { name: 'Expo / Bare Workflow', iconName: 'Sparkles', level: 90, category: 'mobile' },
  { name: 'Fastlane / CI-CD', iconName: 'Workflow', level: 80, category: 'tools' },
  
  // Tools & Languages
  { name: 'JavaScript (ES6+)', iconName: 'Flame', level: 95, category: 'languages' },
  { name: 'Git & GitHub', iconName: 'GitBranch', level: 92, category: 'tools' },
  { name: 'Figma for Devs', iconName: 'PenTool', level: 85, category: 'tools' },
  { name: 'Jest / Testing', iconName: 'ShieldCheck', level: 80, category: 'tools' }
];

export const projects: Project[] = [
  {
    id: 'zenspace',
    title: 'ZenSpace - Mindfulness App',
    description: 'Aplicación móvil de meditación con temporizadores de respiración guiada interactivos, estadísticas offline de bienestar e integraciones de sonido ambiente mediante Expo Audio.',
    category: 'Mobile',
    tags: ['React Native', 'Expo', 'Zustand', 'Reanimated', 'SQLite'],
    imageUrl: '/src/assets/images/zenspace_app_1782076830574.jpg',
    githubUrl: 'https://github.com',
    liveUrl: 'https://google.com',
    features: [
      'Animaciones fluidas a 60fps con Reanimated y react-native-svg',
      'Persistencia offline eficiente mediante base de datos SQLite',
      'Control de audio en segundo plano personalizable'
    ]
  },
  {
    id: 'finanzio',
    title: 'Finanzio - Dashboard de Finanzas',
    description: 'Plataforma web de contabilidad personal y predicción inteligente de gastos. Permite categorizar transacciones automáticamente y visualizar presupuestos utilizando gráficos interactivos.',
    category: 'React',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Framer Motion'],
    imageUrl: '/src/assets/images/finanzio_dashboard_1782076847672.jpg',
    githubUrl: 'https://github.com',
    liveUrl: 'https://google.com',
    features: [
      'Visualizaciones dinámicas y adaptables usando Recharts',
      'Predicción mensual inteligente basada en el historial de gastos',
      'Exportación segura de reportes en PDF y Excel'
    ]
  },
  {
    id: 'educamobile',
    title: 'EducaMobile - Microaprendizaje',
    description: 'Plataforma educativa móvil optimizada para aprender desarrollo web mediante lecciones cortas de 5 minutos, cuestionarios interactivos y recompensas gamificadas de nivel.',
    category: 'Mobile',
    tags: ['React Native', 'TypeScript', 'Tailwind SDK', 'Context API', 'Node API'],
    imageUrl: '/src/assets/images/educamobile_app_1782076862645.jpg',
    githubUrl: 'https://github.com',
    liveUrl: 'https://google.com',
    features: [
      'Racha diaria y sistema de niveles gamificado',
      'Cuestionarios de opción múltiple instantáneos con vibración háptica',
      'Modo offline que se sincroniza al recuperar internet'
    ]
  }
];

export const experiences: Experience[] = [
  {
    role: 'Ssr. React & React Native Engineer',
    company: 'TechNovation Mobile Solutions',
    period: '2024 - Presente',
    description: 'Lideré el desarrollo y lanzamiento de dos aplicaciones insignias en el App Store y Play Store, duplicando el engagement de usuarios activos diarios.',
    bullets: [
      'Migración exitosa de un MVP a Expo Bare Workflow optimizando los tamaños de build en un 35%.',
      'Implementación de componentes web sumamente dinámicos y reutilizables bajo principios estrictos de accesibilidad WCAG.',
      'Mejora de la velocidad de inicio de la app un 22% mediante carga diferida y optimización de assets.'
    ]
  },
  {
    role: 'React Frontend Developer',
    company: 'PixelForge Studio',
    period: '2022 - 2024',
    description: 'Diseñé, desarrollé y di soporte a múltiples aplicaciones SPA responsivas utilizando React, Next.js y Tailwind CSS para clientes globales en finanzas y educación.',
    bullets: [
      'Colaboración estrecha con diseñadores UX/UI para traducir mockups complejos de Figma a código fluido y libre de errores.',
      'Configuración de flujos automatizados CI/CD que redujeron las fallas de despliegue en un 40%.',
      'Rediseño completo del panel administrativo web, mejorando el puntaje Lighthouse del cliente a más de 95 en rendimiento.'
    ]
  }
];
