import { Injectable, Scope } from '@nestjs/common';

@Injectable({
	scope: Scope.TRANSIENT
})
export class LoggerService {
	private prefix ?: string;

	log(message: string){
		let str = message;
		if(this.prefix) 
			str = `${this.prefix} - ${message}`;
		console.log(str);
	}

	warn(message: string){
		let str = message;
		if(this.prefix) 
			str = `${this.prefix} - ${message}`;
		console.error('WARNING... ', str);
	}

	setPrefix(prefix: string) {
		this.prefix = prefix;
	}
}
export default LoggerService;