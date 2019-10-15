import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('todos')
export class Todo {
    constructor(fields: any) {
        Object.assign(this, fields);
    }
    @PrimaryGeneratedColumn()
    id !: number;

    @Column()
    name !:  string;

    @Column()
    description !: string;
}

export default Todo;