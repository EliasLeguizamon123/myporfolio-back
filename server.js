const app = require('./app')

async function main() {
  await app.listen(process.env.PORT || 5000, () =>{
    console.log('====================================');
    console.log(`App Running on http://localhost:${process.env.PORT}`);
    console.log('====================================');
  })
}
main()