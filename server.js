const app = require('./app')

async function main() {
  await app.listen(process.env.PORT || 5000, () =>{
    console.log('====================================');
    process.env.PORT ? console.log(`App Running on http://localhost:${process.env.PORT}`) : console.log(`App Running on http://localhost:5000`);
    console.log('====================================');
  })
}
main()