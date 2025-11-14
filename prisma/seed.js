import prisma from "../src/config/prisma.js";
import { faker } from "@faker-js/faker/locale/en";




const databaseSeeder = async () => {
    for(let i = 0; i < 50; i++) {
        const book = await prisma.book.create({
            data: {
                title: faker.book.title(),
                description: faker.lorem.sentence(),
                thumbnail_url: faker.image.url(),
                release_year: new Date(faker.date.anytime()).getFullYear(),
            }
        })
    }
}

const authorSeeder = async () => {
    for(let i = 0; i < 50; i++) {
        const author = await prisma.author.create({
            data: {
                name: faker.person.fullName(),
            }
        })
    }
}

async function main() {
    await databaseSeeder();
    await authorSeeder();
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
