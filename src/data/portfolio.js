export const portfolioData = {
  name: "Marvin Esguerra",
  roles: ["Software Engineer", "Fullstack Developer"],
  intro:
    "I’m a full-stack software engineer based in the Philippines, specializing in building scalable web applications using modern frontend and backend technologies. I focus on creating clean, maintainable systems that solve real-world business problems.",
  about:
    "I’m a full-stack developer with experience building business systems such as HRIS, CRM, real estate platforms, inventory tools, and custom web applications. I focus on developing practical, scalable, and maintainable solutions that solve real-world business needs.",
  contact: {
    email: "mrvndlnsgrr@gmail.com",
    mobile: "+63 9451244990",
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
        "images/projects/jzprime/dashboard.png",
        "images/projects/jzprime/lots.png",
        "images/projects/jzprime/quotations.png",
        "images/projects/jzprime/create-quotation.png",
        "images/projects/jzprime/sales.png",
        "images/projects/jzprime/view-sale.png",
        "images/projects/jzprime/collections-monitoring.png",
        "images/projects/jzprime/collections-dashboard.png",
        "images/projects/jzprime/payments.png",
        "images/projects/jzprime/record-payment.png",
        "images/projects/jzprime/sales-report.png",
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
        "Processes sales transactions with real-time updates",
        "Tracks inventory and manages stock efficiently",
        "Integrates with cash drawers for automatic opening after transactions",
        "Supports receipt printer integration for instant invoice printing",
        "Includes reporting modules for sales and inventory analytics",
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
        "A comprehensive healthcare management system built on OpenEMR, designed to streamline electronic medical records, patient management, and clinical workflows.",

      tech: ["PHP", "jQuery", "Bootstrap", "MySQL"],

      highlights: [
        "Electronic Medical Records (EMR) - Manage and store patient medical histories digitally",
        "Practice Management - Handle day-to-day clinic operations efficiently",
        "Patient Demographics - Maintain detailed patient information and profiles",
        "Appointment Scheduling - Organize and manage patient appointments",
        "Prescription Management - Create and track patient prescriptions",
        "Patient Portal - Allow patients to access records and communicate with providers",
        "Reporting - Generate medical, operational, and financial reports",
        "Billing Management - Manage invoices, payments, and insurance processing"
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
      title: "MHSI Flexshift (HRIS for Healthcare)",
      description:
        "A healthcare-focused HRIS designed to streamline workforce management, scheduling, and operational processes for medical institutions.",

      tech: ["Laravel", "Vue.js", "MySQL", "AWS EC2, S3 & RDS"],

      highlights: [
        "Shift Scheduling - Plan and manage staff shifts efficiently",
        "Time and Attendance Tracking - Monitor employee attendance in real time",
        "Recruitment Management - Handle hiring processes from application to onboarding",
        "Supplies Management - Track and manage inventory and medical supplies",
        "Booking Management - Manage staff or facility bookings and allocations",
        "Reporting - Generate HR and operational reports for better decision-making"
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
        "An admin dashboard for managing queue operations, counter services, and agents, with API integration for desktop and tablet-based queueing systems.",

      tech: ["Laravel", "Livewire", "Alpine.js", "Tailwind CSS", "MySQL"],

      highlights: [
        "Queue Management - Monitor and control customer queues in real time",
        "Counter Services Management - Manage service types and counter assignments",
        "Counter Agents Management - Handle agent profiles, roles, and availability",
        "Admin Dashboard - Centralized control panel for operations and monitoring",
        "API Integration - Provide endpoints for agent desktop app and tablet devices",
        "Real-Time Updates - Sync queue status across all connected devices",
      ],

      images: [],

      links: {
        demo: null,
        repo: null,
      },

      featured: false,
    },

    {
      id: "hrims",
      title: "CIS - HRIMS",
      description:
        "A Human Resource Information Management System designed to streamline employee lifecycle, payroll, and HR operations.",

      tech: ["Laravel", "Livewire", "Alpine.js", "Tailwind Css", "MySQL"],

      highlights: [
        "Employee Records Management - Maintain and organize employee information",
        "Payroll Management - Process salaries, deductions, and payouts",
        "Benefits Administration - Manage employee benefits and entitlements",
        "Time and Attendance - Track employee attendance and working hours",
        "Performance Management - Monitor and evaluate employee performance",
        "Recruitment Management - Handle hiring and onboarding processes",
        "Training and Development - Manage employee learning and growth programs",
        "Disciplinary Tracking - Record and manage employee disciplinary actions",
        "Calendar and Scheduling - Organize events, schedules, and HR activities",
        "Announcements - Publish company-wide updates and notices",
        "Memos Management - Create and distribute internal communications"
      ],

      images: [
        "images/projects/hrims/hrims.png",
      ],

      links: {
        demo: null,
        repo: null,
      },

      featured: false,
    },

    {
      id: "ticketing",
      title: "CIS - Ticketing",
      description:
        "A system for managing and tracking support requests and issue resolution efficiently.",

      tech: ["Laravel", "Livewire", "Alpine.js", "Tailwind Css", "MySQL"],

      highlights: [
        "Ticket Management - Create, assign, and track support tickets",
        "Issue Tracking - Monitor issue status and resolution progress",
        "Priority Management - Categorize and prioritize requests",
        "User Communication - Enable updates and responses within tickets",
        "Reporting - Generate insights on support performance and trends"
      ],

      images: [
        "images/projects/ticketing/ticketing.png",
      ],

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
        "Order Management - Designed delivery transaction flows for request creation, fulfillment, and status lifecycle tracking",
        "Dispatch Engine - Implemented proximity-based driver matching using configurable radius logic and availability checks",
        "Geolocation-Based Auto Assignment - Automated driver allocation through location-aware dispatch rules",
        "Real-Time Delivery Monitoring - Synchronized order progress and delivery updates across web and mobile platforms",
        "Service Workflow Support - Handled multiple delivery categories including parcels, documents, food, and general goods",
        "Access Control - Structured role-based access for admin, customer, and driver accounts",
        "API Integration Layer - Exposed backend services for customer and driver mobile app consumption",
      ],

      images: [],

      links: {
        demo: null,
        repo: null,
      },

      featured: false,
    },

    {
      id: "csm",
      title: "CIS - CSM: Customer Relationship Management (CRM)",
      description:
        "caters sales process includes the following: Lead Management, Opportunity Management, Sales and Pipeline Visualization, Quotation, Sales Quotes Management, Rate Calculator, Service Request with Email Integration.",

      tech: ["Laravel", "Livewire", "Alpine.js", "Tailwind Css", "MySQL"],

      highlights: [
        "Lead Management - Capture and track potential clients from inquiry to conversion",
        "Opportunity Management - Monitor deals, stages, and closing potential",
        "Sales Pipeline Visualization - View and analyze the sales funnel in real time",
        "Quotation Management - Create and manage quotations with structured pricing",
        "Sales Quotes Management - Generate professional quotes with detailed breakdowns",
        "Rate Calculator - Automatically compute pricing based on defined rates",
        "Service Request Management - Track and resolve customer service requests efficiently",
        "Email Integration - Send and manage communications within the system",
      ],

      images: [
        "images/projects/crm/crm.png",
      ],

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
        "A hybrid e-learning platform designed to support farmers and learners by providing accessible, practical, and guided agricultural knowledge through interactive and multimedia-based learning. business or operations-focused web application designed to manage workflows, data tracking, and reporting processes with a scalable backend architecture.",

      tech: ["Laravel", "Livewire", "Alpine.js", "Tailwind Css", "MySQL"],

      highlights: [
        "Interactive E-Learning Modules - Provide structured lessons on modern farming techniques and best practices",
        "Crop Management Guide - Offer step-by-step guidance for planting, growing, and harvesting crops",
        "Disease and Pest Identification - Help farmers detect and manage common crop issues",
        "Hybrid Learning Setup - Combine online learning with field-based activities",
        "Multimedia Learning Content - Use videos, images, and tutorials for better understanding",
        "Localized Content Support - Deliver agriculture knowledge tailored to local crops and conditions",
        "Progress Tracking - Monitor learner progress and performance over time"
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
    "C#",
    "ASP.NET",
    "JavaScript",
    "Alpine.js",
    "jQuery",
    "Vue.Js",
    "ReactJS",
    "Blazor",
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
    "Hardware Integration"
  ],
};
