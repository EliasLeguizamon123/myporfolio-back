const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const tecnology = require('../models/tecnologies');

const getTecnologies = async (req, res) => {
//   await prisma.$connect();
//   const tecnologies = await tecnology.find();
//   res.status(200).json({
//     status: 'success',
//     data: tecnologies
//   });
//   await prisma.$disconnect();
// };
  try{
    await prisma.$connect();
    const tecnologies = await prisma.tecnologies.findMany();
    await prisma.$disconnect();
    res.status(200).json({
      status: 'success',
      data: tecnologies
    });
  } catch(err){
    res.status(404).json({
      status: 'fail',
      message: err
    });
    await prisma.$disconnect();
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

module.exports = { getTecnologies, postTecnologies };