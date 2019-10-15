import { IsString } from 'class-validator';

export class TodoDTO {
    @IsString()
    readonly name !: string;
    @IsString()
    readonly description !: string;
}
export default TodoDTO;