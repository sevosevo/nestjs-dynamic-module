import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { LoggerModule } from './logger/logger.module';

import { TypeOrmModule } from '@nestjs/typeorm'; 
import { DatabaseProviders } from './database/database.providers';
import Todo from './database/todo.entity';


@Module({
    imports: [
        LoggerModule.forRoot(),
        TypeOrmModule.forRootAsync({useClass: DatabaseProviders}),
        TypeOrmModule.forFeature([Todo])
    ],
    providers: [],
    controllers: [AppController],
})
export class AppModule { }
export default AppModule;