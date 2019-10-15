import { Inject } from '@nestjs/common';

//Store all required service loggers
export const prefixesForLoggers: string[] = new Array<string>();

export function Logger(prefix: string = '') {
	if(!prefixesForLoggers.includes(prefix)) {
		prefixesForLoggers.push(prefix);
	}
	return Inject(`LoggerService${prefix}`);
}