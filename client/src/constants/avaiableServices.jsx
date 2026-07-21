import GermanLanguage from "../assets/images/germanLanguage.jpg";
import KoreanLanguage from "../assets/images/korean.jpg";
import ComputerTraining from "../assets/images/computerClasses.jpg";
import AccountingTraining from "../assets/images/accountingTraining.jpg";
import Mentor1 from "../assets/images/sundarpandey.jpg"
import Mentor2 from "../assets/images/chabilaldumre.jpg"

export const AvailableServices = [
  // German
  {
    id: 1,
    image: GermanLanguage,
    category: "Language",
    title: "German Language",
    subHeading: "Learn German for study, work, and global opportunities.",
    category: "Language",

    description:
      "Our German Language program is designed for students who wish to study, work, or migrate to Germany. The curriculum follows CEFR standards (A1–C2) with speaking, listening, writing, grammar, and exam preparation. Students receive practical training through live conversations, role-playing sessions, mock interviews, and regular assessments.",

    duration: "6 Months",
    mode: "Physical + Online",
    level: "Beginner to Advanced",
    classTiming: "Morning | Day | Evening",
    certificate: true,
    languageLevels: ["A1", "A2", "B1", "B2", "C1", "C2"],

    gallery: [GermanLanguage, GermanLanguage, GermanLanguage, GermanLanguage],

    features: [
      "Interactive Classes",
      "Native Pronunciation",
      "Speaking Sessions",
      "Weekly Exams",
      "Study Materials",
      "Mock Interviews",
      "Visa Guidance",
      "Career Counselling",
    ],

    curriculum: [
      {
        title: "Module 1",
        topics: [
          "German Alphabets",
          "Pronunciation",
          "Greetings",
          "Basic Grammar",
        ],
      },
      {
        title: "Module 2",
        topics: ["Sentence Formation", "Vocabulary", "Conversations"],
      },
    ],

    mentors: [
      {
        name: "Mr. John Doe",
        image: Mentor1,
        experience: "10 Years",
        specialization: "Goethe Preparation",
      },
      {
        name: "Ms. Jane Smith",
        image: Mentor2,
        experience: "8 Years",
        specialization: "German Speaking",
      },
    ],

    faqs: [
      {
        question: "Who can join?",
        answer: "Anyone with basic English knowledge.",
      },
      {
        question: "Do I get certificate?",
        answer: "Yes.",
      },
    ],

    testimonials: [
      {
        name: "Ram Sharma",
        rating: 5,
        review: "Amazing teachers and interactive classes.",
      },
    ],

    statistics: {
      students: "1200+",
      mentors: "8",
      successRate: "98%",
      batches: "50+",
    },

    cta: {
      title: "Start Your German Journey",
      button: "Enroll Now",
    },
  },

  // Korean
  {
    id: 2,
    slug: "korean-language",

    image: KoreanLanguage,

    category: "Language",

    title: "Korean Language",

    subHeading: "Master Korean with confidence for career advancement.",

    description:
      "Our Korean Language course is designed for students preparing for higher education, employment, or cultural exchange in South Korea. The program develops reading, writing, listening, and speaking skills while preparing students for the TOPIK examination through interactive classroom activities and real-life conversations.",

    duration: "6 Months",

    mode: "Physical + Online",

    level: "Beginner to Advanced",

    classTiming: "Morning | Day | Evening",

    certificate: true,

    languageLevels: [
      "TOPIK I",
      "TOPIK II",
      "Beginner",
      "Intermediate",
      "Advanced",
    ],

    gallery: [KoreanLanguage, KoreanLanguage, KoreanLanguage, KoreanLanguage],

    features: [
      "Hangul Writing",
      "Speaking Practice",
      "Listening Exercises",
      "TOPIK Preparation",
      "Weekly Assessments",
      "Small Batch Classes",
      "Study Materials",
      "Career Guidance",
    ],

    curriculum: [
      {
        title: "Module 1",
        topics: [
          "Hangul Alphabet",
          "Pronunciation",
          "Greetings",
          "Daily Expressions",
        ],
      },
      {
        title: "Module 2",
        topics: ["Grammar", "Conversation", "Vocabulary", "Reading"],
      },
      {
        title: "Module 3",
        topics: ["TOPIK Preparation", "Mock Tests", "Interview Practice"],
      },
    ],

    mentors: [
      {
        name: "Ms. Kim Ji-eun",
        image: KoreanLanguage,
        experience: "9 Years",
        specialization: "TOPIK Instructor",
      },
      {
        name: "Mr. Park Min-su",
        image: KoreanLanguage,
        experience: "7 Years",
        specialization: "Conversation Expert",
      },
    ],

    faqs: [
      {
        question: "Is prior knowledge required?",
        answer: "No. Beginners are welcome.",
      },
      {
        question: "Do you prepare students for TOPIK?",
        answer: "Yes, including mock examinations.",
      },
    ],

    testimonials: [
      {
        name: "Sita Karki",
        rating: 5,
        review: "The teachers made Korean easy and enjoyable to learn.",
      },
    ],

    statistics: {
      students: "900+",
      mentors: "6",
      successRate: "97%",
      batches: "35+",
    },

    cta: {
      title: "Start Speaking Korean Today",
      button: "Join Korean Course",
    },
  },

  // Accounting
  {
    id: 3,
    slug: "accounting-training",

    image: AccountingTraining,

    category: "Professional",

    title: "Accounting Training",

    subHeading: "Gain industry-ready accounting and finance expertise.",

    description:
      "Our Accounting Training program equips students with practical accounting knowledge using modern accounting software and real-world financial scenarios. Students learn bookkeeping, taxation, payroll management, auditing, financial reporting, and computerized accounting to prepare for today's workplace.",

    duration: "4 Months",

    mode: "Physical + Online",

    level: "Basic to Professional",

    classTiming: "Morning | Evening",

    certificate: true,

    languageLevels: [],

    gallery: [
      AccountingTraining,
      AccountingTraining,
      AccountingTraining,
      AccountingTraining,
    ],

    features: [
      "Tally ERP",
      "QuickBooks",
      "VAT & Taxation",
      "Payroll",
      "Financial Statements",
      "Practical Projects",
      "Interview Preparation",
      "Certificate",
    ],

    curriculum: [
      {
        title: "Module 1",
        topics: ["Accounting Basics", "Journal", "Ledger", "Trial Balance"],
      },
      {
        title: "Module 2",
        topics: ["Financial Statements", "Bank Reconciliation", "Tax"],
      },
      {
        title: "Module 3",
        topics: ["Computerized Accounting", "Tally", "QuickBooks"],
      },
    ],

    mentors: [
      {
        name: "CA. Ramesh Sharma",
        image: AccountingTraining,
        experience: "12 Years",
        specialization: "Corporate Accounting",
      },
      {
        name: "Ms. Anita Joshi",
        image: AccountingTraining,
        experience: "8 Years",
        specialization: "Taxation",
      },
    ],

    faqs: [
      {
        question: "Is accounting background required?",
        answer: "No. Beginners can also join.",
      },
      {
        question: "Will I learn accounting software?",
        answer: "Yes. Practical sessions are included.",
      },
    ],

    testimonials: [
      {
        name: "Prakash KC",
        rating: 5,
        review: "Excellent practical classes with experienced instructors.",
      },
    ],

    statistics: {
      students: "1500+",
      mentors: "10",
      successRate: "99%",
      batches: "60+",
    },

    cta: {
      title: "Become a Professional Accountant",
      button: "Enroll Today",
    },
  },

  // Computer Training
  {
    id: 4,
    slug: "computer-training",

    image: ComputerTraining,

    category: "IT Training",

    title: "Computer Training",

    subHeading: "Build practical digital skills for today's workplace.",

    description:
      "Our Computer Training program covers essential digital skills required in today's professional environment. Students gain practical experience in Microsoft Office, internet applications, graphic design basics, programming fundamentals, and office productivity tools through project-based learning.",

    duration: "3 Months",

    mode: "Physical + Online",

    level: "Beginner to Advanced",

    classTiming: "Morning | Day | Evening",

    certificate: true,

    languageLevels: [],

    gallery: [
      ComputerTraining,
      ComputerTraining,
      ComputerTraining,
      ComputerTraining,
    ],

    features: [
      "MS Word",
      "Excel",
      "PowerPoint",
      "Internet",
      "Email",
      "Typing Skills",
      "Basic Programming",
      "Project Work",
    ],

    curriculum: [
      {
        title: "Module 1",
        topics: ["Computer Fundamentals", "Windows", "File Management"],
      },
      {
        title: "Module 2",
        topics: ["MS Word", "Excel", "PowerPoint"],
      },
      {
        title: "Module 3",
        topics: ["Internet", "Email", "Basic Programming"],
      },
    ],

    mentors: [
      {
        name: "Mr. Nabin Gautam",
        image: ComputerTraining,
        experience: "9 Years",
        specialization: "Office Applications",
      },
      {
        name: "Mr. Suresh Adhikari",
        image: ComputerTraining,
        experience: "11 Years",
        specialization: "Programming",
      },
    ],

    faqs: [
      {
        question: "Can beginners join?",
        answer: "Yes, absolutely.",
      },
      {
        question: "Do you provide certificates?",
        answer: "Yes, after successful completion.",
      },
    ],

    testimonials: [
      {
        name: "Aayush Bista",
        rating: 5,
        review: "The practical classes improved my confidence using computers.",
      },
    ],

    statistics: {
      students: "2000+",
      mentors: "12",
      successRate: "98%",
      batches: "75+",
    },

    cta: {
      title: "Start Your IT Journey",
      button: "Join Computer Training",
    },
  },
];