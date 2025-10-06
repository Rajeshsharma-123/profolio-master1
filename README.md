<div align="center">

# 🎨 Profolio Master

### *Your Dynamic Personal Portfolio, Reimagined*

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)

[Live Demo](https://) • [Report Bug](#) • [Request Feature](#)

</div>

---

## 🚀 Overview

**Profolio** is a fully dynamic, production-ready portfolio platform built with modern web technologies. Designed for developers who want complete control over their personal brand, it features an intuitive admin panel, seamless content management, and a beautiful, responsive interface.

> *"Built by a developer, for developers who refuse to settle for static portfolios."*

---

## ✨ Features

### 🎯 **Core Capabilities**
- **Dynamic Content Management** — Update projects, skills, and personal information in real-time without touching code
- **Multi-Theme Support** — Light, dark, and system-adaptive themes for optimal viewing experience
- **Secure Authentication** — Production-grade security with NextAuth.js v5 (Auth.js)
- **Rich Media Support** — Advanced file uploads and image optimization with EdgeStore and Plaiceholder

### 🔐 **Admin Experience**
- Intuitive dashboard for content management
- Real-time preview of changes
- Secure, role-based access control

### 📧 **Communication**
- Custom email templates built with React Email
- Reliable email delivery via Resend integration
- Contact form with spam protection

### 🎨 **Design & UX**
- Responsive design that looks stunning on all devices
- Smooth animations and transitions
- Accessibility-first approach
- SEO-optimized out of the box

---

## 🛠️ Tech Stack

<table>
<tr>
<td valign="top" width="50%">

### Frontend
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + shadcn/ui
- **Language:** TypeScript
- **State Management:** Zustand
- **Image Processing:** Plaiceholder

</td>
<td valign="top" width="50%">

### Backend
- **Database:** MySQL
- **ORM:** Prisma
- **Authentication:** NextAuth.js v5
- **File Storage:** EdgeStore
- **Email:** React Email + Resend

</td>
</tr>
</table>

---

## 📦 Quick Start

### Prerequisites
- Node.js 18+ and pnpm
- MySQL database
- EdgeStore account
- Resend API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/profolio-master1.git
   cd profolio-master1
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Fill in your credentials:
   ```env
   DATABASE_URL="your-mysql-connection-string"
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   RESEND_API_KEY="your-resend-api-key"
   EDGE_STORE_ACCESS_KEY="your-edgestore-key"
   EDGE_STORE_SECRET_KEY="your-edgestore-secret"
   ```

3. **Install dependencies**
   ```bash
   pnpm install
   ```

4. **Initialize database**
   ```bash
   pnpm dlx prisma generate
   pnpm dlx prisma db push
   ```

5. **Run development server**
   ```bash
   pnpm dev
   ```

6. **Open your browser**
   
   Navigate to `http://localhost:3000` and start building! 🎉

---

## 📸 Screenshots

> *Add screenshots of your portfolio here to showcase the design*

---

## 🌐 Deployment

This project is deployed on a DigitalOcean Droplet for maximum control and performance.

**Live Site:** [https://](#) *(Add your actual URL)*

### Deploy Your Own
- **Vercel:** One-click deployment with the Vercel button
- **DigitalOcean:** Full control with droplet hosting
- **Railway:** Simple deployment with database included

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](#).

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 💬 Contact

**Your Name** — [@yourtwitter](#) — your.email@example.com

Project Link: [https://github.com/yourusername/profolio-master1](https://github.com/yourusername/profolio-master1)

---

<div align="center">

### ⭐ Star this repo if you find it helpful!

Made with ❤️ and lots of ☕

</div>
