import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

(async () => {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    app.listen(process.env.PORT ? parseInt(process.env.PORT) : 8000, () => {
        console.log('Server started at port '+process.env.PORT);
    });
})();
