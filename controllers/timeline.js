const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getTimeline = async (req, res) => {
  try{
    await prisma.$connect();
    const timeline = await prisma.timeline.findMany();
    res.status(200).json({
      status: 'success',
      data: timeline
    });
    await prisma.$disconnect();
  }
  catch(err){
    res.status(404).json({
      status: 'fail',
      message: err
    });
    await prisma.$disconnect();
  }
};
const postJob = async (req, res) => {
  try{
    const newJob = { ...req.body };
    await prisma.$connect();
    const timeline = await prisma.timeline.create({
      data: newJob
    });
    res.status(201).json({
      status: 'success',
      data: timeline
    });
  }
  catch(err){
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
}

module.exports = { getTimeline, postJob };