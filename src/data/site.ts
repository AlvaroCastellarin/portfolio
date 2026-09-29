// Todo el contenido del portfolio vive acá: editá este archivo para actualizar el sitio.

export const profile = {
  name: 'Alvaro Castellarin',
  role: 'Desarrollador Full Stack',
  tagline:
    'Estudiante de 4to año en la UAI. Construyo APIs REST y sitios web accesibles, del backend a la interfaz.',
  // TODO(Alvaro): reescribí la bio con tus palabras (el TP pide que la escriba el alumno).
  bio: [
    'Soy estudiante de 4to año en la Universidad Abierta Interamericana (UAI) y me interesa el desarrollo web de punta a punta.',
    'Trabajé con .NET y Node.js del lado del servidor, diseñando APIs REST con autenticación, validación y bases de datos relacionales y NoSQL.',
    'Hoy estoy profundizando en React y busco mi primera experiencia profesional como desarrollador.',
  ],
  email: 'alvaro.castellarin2003@gmail.com',
  github: 'https://github.com/AlvaroCastellarin',
  // Dejalo vacío para ocultarlo; pegá la URL cuando tengas perfil de LinkedIn.
  linkedin: '',
  // Poné tu CV en public/cv-alvaro-castellarin.pdf y cambiá esto a true.
  hasCv: false,
  cvPath: '/cv-alvaro-castellarin.pdf',
};

export const skills: { category: string; items: string[] }[] = [
  { category: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Astro', 'Tailwind CSS'] },
  { category: 'Backend', items: ['C# / .NET', 'ASP.NET Core Web API', 'Entity Framework Core', 'Node.js', 'Express', 'JWT'] },
  { category: 'Bases de datos', items: ['SQL Server', 'MongoDB', 'Mongoose'] },
  { category: 'Herramientas', items: ['Git', 'GitHub', 'Visual Studio', 'VS Code', 'Postman', 'Render'] },
];

export const projects: {
  title: string;
  description: string;
  tech: string[];
  repo?: string;
  demo?: string;
}[] = [
  {
    title: 'MundialQuiz',
    description:
      'Juego de trivia sobre la historia de los Mundiales con más de 80 preguntas, sistema de vidas y checkpoints, bonus por velocidad de respuesta, ranking top 10 persistente, sonidos y formulario de contacto validado. Proyecto final de Desarrollo y Arquitecturas Web.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'LocalStorage'],
    repo: 'https://github.com/AlvaroCastellarin/MundialQuiz',
    demo: 'https://alvarocastellarin.github.io/MundialQuiz/',
  },
  {
    title: 'Rust-eze: dashboard de ventas',
    description:
      'Tablero de control para un concesionario de autos ficticio: gráficos de ventas mensuales, anuales y por marca filtrados por sucursal, con login y registro de usuarios con contraseñas hasheadas (PBKDF2). Trabajo final de Bases de Datos Aplicadas.',
    tech: ['C#', '.NET Framework', 'Windows Forms', 'SQL Server', 'ADO.NET'],
    repo: 'https://github.com/AlvaroCastellarin/TpFinalBDA',
  },
  {
    title: 'API REST de Biblioteca',
    description:
      'Web API para gestionar autores, libros y comentarios, con relación muchos a muchos entre autores y libros, DTOs, validaciones personalizadas y registro/login de usuarios con tokens JWT.',
    tech: ['C#', 'ASP.NET Core 9', 'EF Core', 'SQL Server', 'Identity', 'JWT', 'AutoMapper'],
    repo: 'https://github.com/AlvaroCastellarin/Cursos/tree/main/WebAPI%20RESTful%20.NET',
  },
  {
    title: 'API con Node, Express y TypeScript',
    description:
      'Backend desarrollado en la materia Desarrollo y Metodologías Web: CRUD completo sobre MongoDB, middlewares propios y validación de datos de entrada con esquemas de Zod.',
    tech: ['Node.js', 'Express', 'TypeScript', 'MongoDB', 'Mongoose', 'Zod'],
    repo: 'https://github.com/AlvaroCastellarin/mdw-2026',
  },
];

export const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#contacto', label: 'Contacto' },
];
