export const portfolioData = {
  name: "Marvin Esguerra",
  roles: ["Software Engineer", "Fullstack Developer"],
  intro:
    "I’m a full-stack software engineer based in the Philippines, specializing in building scalable web applications using modern frontend and backend technologies. I focus on creating clean, maintainable systems that solve real-world business problems.",
  about:
    "I’m a full-stack developer with experience building business systems such as HRIS, CRM, real estate platforms, inventory tools, and custom web applications. I focus on developing practical, scalable, and maintainable solutions that solve real-world business needs.",
  contact: {
    email: "mrvndlnsgrr@gmail.com",
    mobile: "+63 9450000000",
    github: "https://github.com/mrvndln",
    bitbucket: "https://bitbucket.org/mrvndlnsgrr",
    location: "Philippines",
  },
  projects: [
    {
      id: "jz-prime",
      title: "JZ Prime Realty System",
      description:
        "A full-stack real estate sales and accounts receivable system with project, block, lot, quotation, sales, payment milestones, Statement of Account (SOA), and collection monitoring modules.",

      tech: [
        "Laravel",
        "Livewire",
        "Alpine.js",
        "Tailwind",
        "MySQL",
        "AWS EC2 & RDS",
      ],

      highlights: [
        "Lot inventory management including Projects, Blocks, and Lots",
        "Sales and client management with reservation and contract tracking",
        "Quotation generation and printable quotation documents",
        "Installment milestone monitoring and balance tracking",
        "Automatic invoice and official receipt numbering",
        "Payment recording with receivable monitoring",
        "Collections monitoring dashboard with financial overview",
        "Statement of Account generation with PDF export",
        "Reports module including Sales, Collections, Aging, and Inventory reports",
        "Role-based access control and permission management",
      ],

      images: [
        "/images/projects/jzprime/dashboard.png",
        "/images/projects/jzprime/lots.png",
        "/images/projects/jzprime/quotations.png",
        "/images/projects/jzprime/create-quotation.png",
        "/images/projects/jzprime/sales.png",
        "/images/projects/jzprime/view-sale.png",
        "/images/projects/jzprime/collections-monitoring.png",
        "/images/projects/jzprime/collections-dashboard.png",
        "/images/projects/jzprime/payments.png",
        "/images/projects/jzprime/record-payment.png",
        "/images/projects/jzprime/sales-report.png",
      ],

      links: {
        demo: null,
        repo: null,
      },

      featured: true,
    },

    {
      id: "pos-inventory",
      title: "POS & Inventory System",
      description:
        "A point-of-sale and inventory management system built using ASP.NET and Blazor, designed for real-world retail operations with hardware integration and a robust PostgreSQL database.",

      tech: ["C#", "ASP.NET", "Blazor", "PostgreSQL", "Hardware Integration"],

      highlights: [
        "Sales transaction processing with real-time updates",
        "Inventory tracking and stock management",
        "Cash drawer integration for automated opening during transactions",
        "Receipt printer integration for instant invoice printing",
        "PostgreSQL-based data handling for scalability and performance",
        "Modular system architecture for maintainability",
      ],

      images: [],

      links: {
        demo: null,
        repo: null,
      },

      featured: false,
    },

    {
      id: "emedcore",
      title: "Emedcore+ (OpenEMR)",
      description:
        "Electronic medical records system with patient management, scheduling, billing, and reporting features.",

      tech: ["PHP", "jQuery", "Bootstrap", "MySQL"],

      highlights: [
        "Patient record management",
        "Scheduling and billing",
        "Medical reporting system",
      ],

      images: [],

      links: {
        demo: null,
        repo: null,
      },

      featured: false,
    },

    {
      id: "flexshift",
      title: "MHSI Flexshift",
      description:
        "HRIS system for healthcare operations with scheduling, attendance tracking, recruitment workflows, and reporting.",

      tech: ["Laravel", "Vue.js", "MySQL", "AWS EC2, S3 & RDS"],

      highlights: [
        "Shift scheduling system",
        "Time and attendance tracking",
        "Recruitment workflow",
        "Reports and analytics",
      ],

      images: [],

      links: {
        demo: null,
        repo: null,
      },

      featured: false,
    },

    {
      id: "robinson-q-assist",
      title: "Robinson Q-Assist",
      description:
        "A queue management dashboard designed to optimize service operations through real-time queue tracking, counter management, and performance monitoring.",

      tech: ["Laravel", "Livewire", "Alpine.js", "Tailwind CSS", "MySQL"],

      highlights: [
        "Queue flow and counter management",
        "Real-time queue monitoring dashboard",
        "Admin panel for service operations",
        "Improved service efficiency and waiting time tracking",
      ],

      images: [],

      links: {
        demo: null,
        repo: "https://bitbucket.org/mrvndlnsgrr/robinson-q-assist/src/main/",
      },

      featured: false,
    },

    {
      id: "hris",
      title: "HRIS / HR Management Modules",
      description:
        "Developed HR-related modules including disciplinary history, calendar, employee management, payroll workflows, and internal business processes.",

      tech: ["Laravel", "Livewire", "Alpine.js", "Tailwind Css", "MySQL"],

      highlights: [
        "Employee management",
        "Payroll workflows",
        "Disciplinary tracking",
        "Calendar and scheduling",
      ],

      images: [],

      links: {
        demo: null,
        repo: null,
      },

      featured: false,
    },

    {
      id: "blue-panther",
      title: "Blue Panther",
      description:
        "On-demand delivery web application connecting customers and riders for real-time and same-day delivery services.",

      tech: ["Laravel", "Livewire", "Alpine.js", "Tailwind Css", "MySQL"],

      highlights: [
        "Real-time delivery workflow",
        "Customer and rider modules",
        "Same-day logistics system",
      ],

      images: [],

      links: {
        demo: null,
        repo: "https://bitbucket.org/mrvndlnsgrr/blue-panther/src/main/",
      },

      featured: false,
    },

    {
      id: "crm-sales",
      title: "CRM & Sales Management",
      description:
        "CRM system for managing leads, opportunities, quotations, and sales pipeline with reporting and email integration.",

      tech: ["Laravel", "Livewire", "Alpine.js", "Tailwind Css", "MySQL"],

      highlights: [
        "Lead and opportunity tracking",
        "Sales pipeline visualization",
        "Quotation and reporting system",
      ],

      images: [],

      links: {
        demo: null,
        repo: null,
      },

      featured: false,
    },

    {
      id: "croptor",
      title: "Croptor",
      description:
        "A business or operations-focused web application designed to manage workflows, data tracking, and reporting processes with a scalable backend architecture.",

      tech: ["Laravel", "Livewire", "Alpine.js", "Tailwind Css", "MySQL"],

      highlights: [
        "Business workflow management",
        "Data tracking and reporting",
        "Custom module-based system design",
        "Scalable backend structure",
      ],

      images: [],

      links: {
        demo: null,
        repo: "https://bitbucket.org/mrvndlnsgrr/croptor/src/main/",
      },

      featured: false,
    },
  ],
  skills: [
    "Laravel",
    "Livewire",
    "Repository Pattern",
    "PHP",
    "JavaScript",
    "Alpine.js",
    "jQuery",
    "Vue.Js",
    "ReactJS",
    "Tailwind CSS",
    "Bootstrap",
    "MySQL",
    "PostgreSQL",
    "REST API",
    "Git",
    "GitHub",
    "Bitbucket",
    "AWS EC2",
    "AWS RDS",
    "AWS S3",
    "VS Code",
    "Postman",
    "RESTful API development",
    "API integration",
  ],
};
