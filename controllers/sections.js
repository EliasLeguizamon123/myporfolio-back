const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getSections = async (req, res) => {
    await prisma.$connect();
    const sections = await prisma.sections.findMany();
    console.log(sections);
    res.json(sections);
};

module.exports = { getSections };