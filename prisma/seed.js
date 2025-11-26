import prisma from "../src/config/prisma.js";
import { faker } from "@faker-js/faker/locale/en";




const databaseSeeder = async () => {
    const books = [];
    for(let i = 0; i < 50; i++) {
        const book = await prisma.book.create({
            data: {
                title: faker.book.title(),
                description: faker.lorem.sentence(),
                thumbnail_url: faker.image.url(),
                release_year: new Date(faker.date.anytime()).getFullYear(),
                published_at: faker.date.past(),
            }
        })
        books.push(book);
    }
    return books;
}

const authorSeeder = async () => {
    const authors = [];
    for(let i = 0; i < 50; i++) {
        const author = await prisma.author.create({
            data: {
                name: faker.person.fullName(),
                birth_date: faker.date.birthdate({ min: 18, max: 90, mode: 'age' }),
            }
        })
        authors.push(author);
    }
    return authors;
}

const authorOnBookSeeder = async (books, authors) => {
    // Assign 1-3 random authors to each book
    for(const book of books) {
        const numAuthors = faker.number.int({ min: 1, max: 3 });
        const selectedAuthors = faker.helpers.arrayElements(authors, numAuthors);
        
        for(const author of selectedAuthors) {
            await prisma.authorOnBook.create({
                data: {
                    book_id: book.id,
                    author_id: author.id,
                }
            });
        }
    }
}

async function main() {
    const books = await databaseSeeder();
    const authors = await authorSeeder();
    await authorOnBookSeeder(books, authors);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
