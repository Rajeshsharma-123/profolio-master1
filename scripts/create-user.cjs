// scripts/create-user.cjs
const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('password', 12);

  const user = await prisma.user.create({
    data: {
      name: 'Admin',
      email: 'admin@example.com',
      hashedPassword,
      image: '',
    },
  });

  console.log('User created:', user.email);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });