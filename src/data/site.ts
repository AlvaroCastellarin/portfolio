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
  // TODO(Alvaro): pegá la URL de tu perfil de LinkedIn.
  linkedin: 'https://www.linkedin.com/in/alvaro-castellarin',
  // Poné tu CV en public/cv-alvaro-castellarin.pdf y cambiá esto a true.
  hasCv: false,
  cvPath: '/cv-alvaro-castellarin.pdf',
};

export const skills: { category: string; items: string[] }[] = [
  { category: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Astro', 'Tailwind CSS'] },
  { category: 'Backend', items: ['C# / .NET', 'ASP.NET Core Web API', 'Entity Framework Core', 'Node.js', 'Express', 'JWT'] },
  { category: 'Bases de datos', items: ['SQL Server', 'MongoDB', 'Mongoose'] },
  { category: 'Herramientas', items: ['Git', 'GitHub', 'Visual Studio', 'VS Code', 'Postman', 'Vercel'] },
];

export const projects: {
  title: string;
  description: string;
  tech: string[];
  repo?: string;
  demo?: string;
}[] = [
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
    // TODO(Alvaro): link al repo de la materia si es público.
    repo: 'https://github.com/AlvaroCastellarin',
  },
  {
    title: 'Prácticas de HTML y CSS',
    description:
      'Colección de ejercicios de maquetado: estructura semántica, formularios, rutas, imágenes, listas y estilos, que fueron la base de este portfolio.',
    tech: ['HTML5', 'CSS3'],
    repo: 'https://github.com/AlvaroCastellarin/Cursos/tree/main/Curso%20HTML%20y%20CSS',
  },
  {
    title: 'Este portfolio',
    description:
      'Sitio personal one-page, responsive, con modo claro/oscuro, formulario de contacto validado y animaciones que respetan prefers-reduced-motion.',
    tech: ['Astro', 'Tailwind CSS', 'TypeScript', 'Vercel'],
    // TODO(Alvaro): actualizá los links cuando crees el repo y el deploy.
    repo: 'https://github.com/AlvaroCastellarin/portfolio',
    demo: 'https://portfolio-alvaro-castellarin.vercel.app',
  },
];

export const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#contacto', label: 'Contacto' },
];
