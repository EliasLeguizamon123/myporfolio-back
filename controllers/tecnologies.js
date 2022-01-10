const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getTecnologies = async (req, res) => {
  try{
    await prisma.$connect();
    const tecnologies = await prisma.tecnologies.findMany();
    res.status(200).json({
      status: 'success',
      data: tecnologies
    });
  } catch(err){
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};
const postTecnologies = async (req, res) => {
  try{
    const newTecnology = { ...req.body };
    await prisma.$connect();
    const tecnology = await prisma.tecnologies.create({
      data: newTecnology
    });
    res.status(201).json({
      status: 'success',
      data: tecnology
    });
  } catch(err){
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

module.exports = { getTecnologies };