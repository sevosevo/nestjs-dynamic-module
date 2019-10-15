import { Injectable } from "@nestjs/common";
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Todo } from './todo.entity';

const {
    username,
    password
} = process.env;

@Injectable()
export class DatabaseProviders implements TypeOrmOptionsFactory{
    createTypeOrmOptions(connectionName ?: string): TypeOrmModuleOptions {
        return {
            name: connectionName,
            type: 'mysql',
            username: username || 'root',
            password: password || '',
            database: 'test',
            synchronize: true,
            port: 3306,
            entities: [Todo]
        }
    }
}
export default DatabaseProviders;