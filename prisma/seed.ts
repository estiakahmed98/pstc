import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const email = process.env.ADMIN_EMAIL ?? "admin@pstc.org";
  const password = process.env.ADMIN_PASSWORD;

  if (!password) {
    throw new Error("ADMIN_PASSWORD must be set before seeding the admin user.");
  }

  await prisma.user.upsert({
    where: { email },
    update: {
      name: "PSTC Admin",
      password: await hash(password, 12),
      role: "super_admin",
      isActive: true,
    },
    create: {
      name: "PSTC Admin",
      email,
      password: await hash(password, 12),
      role: "super_admin",
    },
  });

  console.log(`Admin user is ready: ${email}`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
