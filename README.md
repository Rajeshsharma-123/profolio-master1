# profolio-master1

Hey there! 👋
Profolio is my personal portfolio project — a dynamic and customizable website built with Next.js. It’s designed to make updating my projects, skills, and personal info super easy, so everything stays fresh and up to date.

✨ What It Does

A fully dynamic portfolio website

Easily manage and update your info, skills, and project listings

Light / dark / system theme modes

Secure login using NextAuth.js v5 / Auth.js

Data stored with MySQL and managed using Prisma

State management powered by Zustand

File uploads handled by EdgeStore

Custom email templates with React Email

Email sending through Resend

Smooth image placeholders via Plaiceholder

🧰 Tools & Tech

Built using some of my favorite tools and frameworks:

Next.js 14

shadcn/ui

NextAuth.js v5 / Auth.js

Tailwind CSS

TypeScript

MySQL

Prisma

Zustand

EdgeStore

React Email

Resend

Plaiceholder

⚙️ How to Run It

If you’d like to try it out yourself:

Copy the example environment file:

cp .env.example .env


Fill in your Database URL, Auth, Resend, and EdgeStore settings in the .env file.

Install all dependencies:

pnpm install


Set up your Prisma database:

pnpm dlx prisma generate
pnpm dlx prisma db push


Run the development server:

pnpm dev

🌐 Live Demo

The site is hosted on my personal DigitalOcean Droplet.
Check it out here 👉 https://
