// All content in this file is placeholder/dummy content as permitted by the
// assignment brief ("Dummy Content Rule"). Swap it for real copy later —
// components read from here so content edits never touch component code.

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Programs", href: "#programs" },
  { label: "Software", href: "#software" },
  { label: "About", href: "#why-us" },
  { label: "Career", href: "/career" },
  { label: "Jobs", href: "/vaulthire" },
];

export const languages = [
  {
    id: "python",
    label: "Python",
    color: "#f2c94c",
    snippet: `def welcome(student):
    student["curious"] = True
    teach(student, topic="real projects")
    mentor(student, with_="industry engineers")
    return "Welcome to VaultofCodes!"

print(welcome({"name": "you"}))`,
  },
  {
    id: "javascript",
    label: "JavaScript",
    color: "#f2a93c",
    snippet: `const student = { curious: true };

function joinVaultOfCodes(student) {
  teach(student, "real projects");
  mentor(student, "industry engineers");
  return student.becomeDeveloper();
}

console.log("Welcome to VaultofCodes!");`,
  },
  {
    id: "java",
    label: "Java",
    color: "#e76f51",
    snippet: `public class VaultOfCodes {
    public static void main(String[] args) {
        Student student = new Student("you", true);
        student.learn("real projects");
        student.buildPortfolio();
        System.out.println("Welcome to VaultofCodes!");
    }
}`,
  },
  {
    id: "cpp",
    label: "C++",
    color: "#00a8e8",
    snippet: `#include <iostream>
using namespace std;

int main() {
    string student = "you";
    cout << "Learning real projects, " << student << "!" << endl;
    cout << "Welcome to VaultofCodes!" << endl;
    return 0;
}`,
  },
  {
    id: "c",
    label: "C",
    color: "#8b7ff2",
    snippet: `#include <stdio.h>

int main() {
    char student[] = "you";
    printf("Learning real projects, %s!\\n", student);
    printf("Welcome to VaultofCodes!\\n");
    return 0;
}`,
  },
  {
    id: "go",
    label: "Go",
    color: "#2fe0c4",
    snippet: `package main

import "fmt"

func main() {
    student := "you"
    fmt.Printf("Learning real projects, %s!\\n", student)
    fmt.Println("Welcome to VaultofCodes!")
}`,
  },
];

export const whatWeDo = [
  {
    id: "edtech",
    tag: "EdTech",
    title: "Practical technology education",
    description:
      "Cohort-based courses, internships, workshops, and learning resources built by engineers who ship production code every week.",
    points: ["Hands-on cohort courses", "Paid internships", "Weekend workshops", "Mentor circles"],
    cta: "Explore Programs",
    href: "#programs",
  },
  {
    id: "software",
    tag: "Software & SaaS",
    title: "Real tools for real problems",
    description:
      "A growing suite of software products and SaaS platforms that solve the same problems our own students and partners face daily.",
    points: ["Credential verification", "Career intelligence", "Hiring & internship tooling", "Developer utilities"],
    cta: "Explore Software",
    href: "#software",
  },
];

export const programs = [
  {
    id: "web-dev",
    title: "Web Development",
    level: "Beginner → Advanced",
    duration: "12 weeks",
    icon: "code",
    description: "React, Node.js, and full-stack fundamentals with a deployed capstone project.",
  },
  {
    id: "python",
    title: "Python Programming",
    level: "Beginner",
    duration: "8 weeks",
    icon: "terminal",
    description: "Core Python, automation, and data handling for absolute beginners.",
  },
  {
    id: "ai-prompt",
    title: "AI & Prompt Engineering",
    level: "Intermediate",
    duration: "6 weeks",
    icon: "sparkles",
    description: "Practical LLM workflows, prompt design, and building AI-powered features.",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Fundamentals",
    level: "Intermediate",
    duration: "10 weeks",
    icon: "shield",
    description: "Network security, threat modeling, and secure application design.",
  },
  {
    id: "ethical-hacking",
    title: "Ethical Hacking",
    level: "Advanced",
    duration: "10 weeks",
    icon: "bug",
    description: "Penetration testing fundamentals in safe, sandboxed lab environments.",
  },
  {
    id: "data-science",
    title: "Data Science",
    level: "Intermediate",
    duration: "12 weeks",
    icon: "bar-chart",
    description: "Statistics, Python tooling, and applied machine learning basics.",
  },
];

export const products = [
  {
    id: "vaultverify",
    name: "VaultVerify",
    category: "Credential Verification",
    description: "Instant, tamper-proof certificate and credential verification for institutions and employers.",
    benefit: "Verify any credential in under 5 seconds",
    icon: "badge-check",
    cta: "Explore VaultVerify",
    href: "/vaultverify",
    features: [
      "Tamper-proof, blockchain-backed certificate records",
      "Instant employer-facing verification lookup by ID or QR code",
      "Bulk verification API for institutions and hiring partners",
      "Real-time revocation and status updates",
    ],
    stats: [
      { value: "5s", label: "Avg. verification time" },
      { value: "50K+", label: "Credentials issued" },
      { value: "99.9%", label: "Verification accuracy" },
    ],
  },
  {
    id: "vaultcareer",
    name: "VaultCareer",
    category: "Career Intelligence",
    description: "A career guidance and student-intelligence platform that maps skills to real hiring demand.",
    benefit: "Personalized roadmaps for every learner",
    icon: "compass",
    cta: "Explore VaultCareer",
    href: "/vaultcareer",
    features: [
      "Personalized skill roadmaps mapped to live hiring demand",
      "Gap analysis against real job descriptions",
      "Curated project and course recommendations",
      "Progress tracking shared with mentors",
    ],
    stats: [
      { value: "10K+", label: "Roadmaps generated" },
      { value: "120+", label: "Skill tracks mapped" },
      { value: "4.7/5", label: "Learner rating" },
    ],
  },
  {
    id: "vaulthire",
    name: "VaultHire",
    category: "Recruitment Platform",
    description: "Recruitment and internship management for companies hiring straight from our talent pool.",
    benefit: "Cut hiring time by up to 60%",
    icon: "briefcase",
    cta: "Explore VaultHire",
    href: "/vaulthire",
    features: [
      "Direct access to a vetted, portfolio-first talent pool",
      "Automated screening against role requirements",
      "Internship and full-time pipeline management",
      "Integrated interview scheduling and offer tracking",
    ],
    stats: [
      { value: "60%", label: "Faster time-to-hire" },
      { value: "300+", label: "Partner companies" },
      { value: "100+", label: "Open roles listed" },
    ],
  },
];

export const whyPoints = [
  { title: "Practical learning", description: "Every lesson pairs with a real, deployable deliverable." },
  { title: "Industry-focused skills", description: "Curriculum reviewed quarterly by working engineers." },
  { title: "Real projects", description: "Client and product briefs, not toy exercises." },
  { title: "Technology-first approach", description: "Built like a product team, not a classroom." },
  { title: "Accessible learning", description: "Remote, hybrid, and self-paced formats for every schedule." },
  { title: "Software innovation", description: "Learn on the same tools our SaaS products are built with." },
  { title: "Student community", description: "48+ campus chapters running peer learning year-round." },
  { title: "Portfolio-first", description: "Leave with shipped projects and a GitHub history, not just a certificate." },
];

export const stats = [
  { value: 50000, suffix: "+", label: "Students Trained" },
  { value: 100, suffix: "+", label: "Programs & Courses" },
  { value: 10000, suffix: "+", label: "Projects Shipped" },
  { value: 50, suffix: "+", label: "Workshops Run" },
];

export const howItWorks = [
  { step: "01", title: "Discover", description: "Explore programs and software tracks tailored to where you're starting from." },
  { step: "02", title: "Learn", description: "Work through cohort courses and workshops guided by working engineers." },
  { step: "03", title: "Build", description: "Ship real, deployed projects that become the core of your portfolio." },
  { step: "04", title: "Launch", description: "Land internships, jobs, or launch your own product with our support." },
];

export const testimonials = [
  {
    name: "Aisha Verma",
    role: "Web Development, Batch of 2026",
    quote: "I shipped three real projects before I graduated. That portfolio is the reason I got hired.",
  },
  {
    name: "Rohan Das",
    role: "AI & Prompt Engineering",
    quote: "The mentors treated us like junior engineers, not students. Code reviews every single week.",
  },
  {
    name: "Meera Iyer",
    role: "Cybersecurity Fundamentals",
    quote: "VaultCareer mapped out exactly which skills I was missing. It felt like having a personal advisor.",
  },
  {
    name: "Kabir Shah",
    role: "Ethical Hacking",
    quote: "The lab environments were the closest thing to real-world pentesting I found anywhere online.",
  },
];

export const footerLinks = {
  Company: [
    { label: "About Us", href: "#why-us" },
    { label: "Careers", href: "/career" },
    { label: "Community", href: "#community" },
    { label: "Contact", href: "#footer" },
  ],
  Programs: [
    { label: "Web Development", href: "#programs" },
    { label: "Python Programming", href: "#programs" },
    { label: "AI & Prompt Engineering", href: "#programs" },
    { label: "Cybersecurity", href: "#programs" },
  ],
  Software: [
    { label: "VaultVerify", href: "/vaultverify" },
    { label: "VaultCareer", href: "/vaultcareer" },
    { label: "VaultHire", href: "/vaulthire" },
  ],
  Resources: [
    { label: "Free Tests", href: "#free-tests" },
    { label: "Blog", href: "#" },
    { label: "Documentation", href: "#" },
    { label: "Help Center", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};
