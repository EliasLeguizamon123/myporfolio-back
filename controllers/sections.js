const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getSections = async (req, res) => {
    try{
        await prisma.$connect();
        const sections = await prisma.sections.findMany();
        res.status(200).json({
            status: 'success',
            data: sections
        });
    } catch(err){
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

module.exports = { getSections };