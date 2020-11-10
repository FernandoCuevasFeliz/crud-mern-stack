import app from './app';
import dbInit from './database';

async function main() {
  app.listen(app.get('port'), () => {
    console.log('Server runnig on port', app.get('port'));
  });
  await dbInit();
}

main();
