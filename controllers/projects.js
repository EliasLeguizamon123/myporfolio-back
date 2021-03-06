const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getProjects = async (req, res) => {
  try{
    await prisma.$connect();
    const projects = await prisma.projects.findMany();
    res.status(200).json({
      status: 'success',
      data: projects
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
const getProject = async (req, res) => {
  try{
    const projectId = req.params.id;
    await prisma.$connect();
    console.log(projectId);
    const project = await prisma.projects.findUnique({
      where: { id: projectId }
    });
    res.status(201).json({
      status: 'success',
      data: project
    });
    await prisma.$disconnect();
  }
  catch(err){
    res.status(404).json({
      status: 'fail',
      data: 'pingo'
    });
    await prisma.$disconnect();
  }
};


const postProject = async (req, res) => {
  try{
    await prisma.$connect();
    const newProject = { ...req.body };
    const project = await prisma.projects.create({ 
      data: newProject
    });
    res.status(201).json({
      status: 'success',
      data: project
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

module.exports = { getProjects, getProject, postProject };