import { Controller, Get, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { LoggerService } from './logger/logger.service';
import { Logger } from './logger/logger.decorator';
import { Todo } from './database/todo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoDTO } from './dtos/todo.dto';

@Controller('api')
export class AppController{

    constructor(
        @Logger('AppController') private readonly logger: LoggerService,
        @InjectRepository(Todo) private readonly todo: Repository<Todo>
    )  {}

    @Get('/todo')
    getTodos(): Promise<Array<Todo>> {
        this.logger.log('Getting todos');
        return this.todo.find()
        .then(todos => {
            this.logger.log('Fetched todos');
            return todos;
        });
    }
    @Post('/todo')
    @UsePipes(new ValidationPipe({ transform: true }))
    postTodo(@Body() todoDTO: TodoDTO): Promise<Todo> {
        this.logger.log('Creating todo');
        const todo = new Todo(todoDTO);
        return this.todo.save(todo)
        .then((todo: Todo) => {
            this.logger.log('Saved to database');
            return todo;
        });
    }
    
}