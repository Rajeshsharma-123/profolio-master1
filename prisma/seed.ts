const { PrismaClient, SkillType, ServiceType, QualificationType, ToolType } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prismaSeed = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...');

  // 🔄 Optional: Clean database before seeding
  await prismaSeed.downloadToken.deleteMany();
  await prismaSeed.resumeDownloader.deleteMany();
  await prismaSeed.tool.deleteMany();
  await prismaSeed.title.deleteMany();
  await prismaSeed.miscellaneous.deleteMany();
  await prismaSeed.tag.deleteMany();
  await prismaSeed.portfolio.deleteMany();
  await prismaSeed.qualification.deleteMany();
  await prismaSeed.expertise.deleteMany();
  await prismaSeed.experience.deleteMany();
  await prismaSeed.about.deleteMany();
  await prismaSeed.account.deleteMany();
  await prismaSeed.session.deleteMany();
  await prismaSeed.resume.deleteMany();
  await prismaSeed.user.deleteMany();

  // 👤 Create user data
  const usersData = [
    {
      name: 'John Doe',
      email: 'john@example.com',
      image: 'https://i.pravatar.cc/150?img=1'
    },
    {
      name: 'Alice Smith',
      email: 'alice@example.com',
      image: 'https://i.pravatar.cc/150?img=2'
    },
    {
      name: 'Bob Johnson',
      email: 'bob@example.com',
      image: 'https://i.pravatar.cc/150?img=3'
    },
    {
      name: 'Emma Wilson',
      email: 'emma@example.com',
      image: 'https://i.pravatar.cc/150?img=4'
    },
    {
      name: 'Liam Brown',
      email: 'liam@example.com',
      image: 'https://i.pravatar.cc/150?img=5'
    }
  ];

  const passwordHash = await bcrypt.hash('Password123!', 12);

  // 🧩 Create each user with nested relations
  for (const u of usersData) {
    const username = u.name.toLowerCase().replace(/\s+/g, '');

    const user = await prismaSeed.user.create({
      data: {
        name: u.name,
        email: u.email,
        hashedPassword: passwordHash,
        image: u.image,

        about: {
          create: {
            experience: `${Math.floor(Math.random() * 10) + 2} years`,
            project: `${Math.floor(Math.random() * 30) + 5} projects`,
            worldwide: 'Worked with clients across 8+ countries',
            summary: `${u.name} is a passionate developer experienced in fullstack development, design systems, and performance optimization.`
          }
        },

        experiences: {
          create: [
            { skill: 'React', level: 'Expert', type: SkillType.FRONTEND },
            { skill: 'Next.js', level: 'Advanced', type: SkillType.FRONTEND },
            { skill: 'Node.js', level: 'Intermediate', type: SkillType.BACKEND },
            { skill: 'Express', level: 'Intermediate', type: SkillType.BACKEND }
          ]
        },

        expertises: {
          create: [
            { service: 'SEO Optimization', type: ServiceType.SEOOPTIMIZATION },
            { service: 'Web Development', type: ServiceType.WEBDEVELOPMENT },
            { service: 'Content Creation', type: ServiceType.CONTENTCREATION }
          ]
        },

        qualifications: {
          create: [
            {
              type: QualificationType.EDUCATION,
              degree: 'B.Tech in Computer Science',
              school: 'Tech University',
              position: '',
              company: '',
              startYear: '2014',
              endYear: '2018'
            },
            {
              type: QualificationType.EXPERIENCE,
              degree: '',
              school: '',
              position: 'Software Developer',
              company: 'InnovateX Ltd.',
              startYear: '2019',
              endYear: '2022'
            }
          ]
        },

        portfolios: {
          create: [
            {
              title: `${u.name}'s Portfolio Website`,
              description: 'A stunning portfolio showcasing projects, tools, and expertise.',
              githubUrl: `https://github.com/${username}/portfolio`,
              demoUrl: `https://${username}.dev`,
              tags: { create: [{ name: 'Next.js' }, { name: 'TailwindCSS' }, { name: 'Framer Motion' }] }
            },
            {
              title: `${u.name}'s SaaS Dashboard`,
              description: 'Admin dashboard built with Next.js and Prisma ORM.',
              githubUrl: `https://github.com/${username}/dashboard`,
              demoUrl: `https://${username}-dashboard.vercel.app`,
              tags: { create: [{ name: 'Prisma' }, { name: 'TypeScript' }, { name: 'NextAuth' }] }
            }
          ]
        },

        miscellaneous: {
          create: {
            email: `contact@${username}.com`,
            messengerName: u.name,
            messengerUrl: `https://m.me/${username}`,
            discordUsername: `${username}#1234`,
            discordUrl: `https://discord.com/users/${username}`,
            facebookUrl: `https://facebook.com/${username}`,
            instagramUrl: `https://instagram.com/${username}`,
            twitterUrl: `https://twitter.com/${username}`,
            linkedinUrl: `https://linkedin.com/in/${username}`,
            githubUrl: `https://github.com/${username}`,
            titles: {
              create: [
                { name: 'Fullstack Developer' },
                { name: 'Tech Enthusiast' },
                { name: 'Open Source Contributor' }
              ]
            }
          }
        },

        tools: {
          create: [
            { name: 'VS Code', color: ToolType.DARK, image: 'https://via.placeholder.com/50?text=VSCode' },
            { name: 'Figma', color: ToolType.LIGHT, image: 'https://via.placeholder.com/50?text=Figma' },
            { name: 'Postman', color: ToolType.DARK, image: 'https://via.placeholder.com/50?text=Postman' }
          ]
        },

        resume: {
          create: {
            pdf: `https://example.com/${username}_resume.pdf`
          }
        },

        accounts: {
          create: [
            { type: 'oauth', provider: 'google', providerAccountId: `${username}_google` },
            { type: 'oauth', provider: 'github', providerAccountId: `${username}_github` }
          ]
        },

        sessions: {
          create: [
            {
              sessionToken: `${username}_session_1`,
              expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)
            }
          ]
        }
      }
    });

    console.log(`✅ User created: ${u.name}`);
  }

  // 🌐 Resume Downloaders
  await prismaSeed.resumeDownloader.createMany({
    data: [
      { name: 'Ankit Mehta', email: 'ankit@techcorp.com', company: 'TechCorp' },
      { name: 'Sneha Rao', email: 'sneha@designhub.com', company: 'DesignHub' },
      { name: 'Ravi Patel', email: 'ravi@innovatex.com', company: 'InnovateX' },
      { name: 'Sophia Lee', email: 'sophia@creativelabs.com', company: 'Creative Labs' },
      { name: 'Noah Clark', email: 'noah@devsolutions.com', company: 'DevSolutions' }
    ]
  });

  // 🔐 Download Tokens
  await prismaSeed.downloadToken.createMany({
    data: [
      { email: 'ankit@techcorp.com', token: 'token_ankit', expires: new Date(Date.now() + 86400000) },
      { email: 'sneha@designhub.com', token: 'token_sneha', expires: new Date(Date.now() + 86400000) },
      { email: 'ravi@innovatex.com', token: 'token_ravi', expires: new Date(Date.now() + 86400000) },
      { email: 'sophia@creativelabs.com', token: 'token_sophia', expires: new Date(Date.now() + 86400000) },
      { email: 'noah@devsolutions.com', token: 'token_noah', expires: new Date(Date.now() + 86400000) }
    ]
  });

  console.log('✅ All data seeded successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prismaSeed.$disconnect();
  });
