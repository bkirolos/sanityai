import { User } from '../user/user.interface';

export type ApplicationQuestionType = 'label' | 'text' | 'currency' | 'date' | 'number' | 'radio';

export interface ApplicationQuestion {
	order: number,
	type: ApplicationQuestionType,
	key: string,
	label: string,
	options?: {
		value: string | number | boolean,
		label: string,
		helperText?: string
	}[]
};

export interface ApplicationPage {
	order: number,
	title: string,
	questions: ApplicationQuestion[]
};

export interface ApplicationSection {
	order: number,
	title: string,
	pages: ApplicationPage[]
};

export interface Application {
	_id?: any,

	name: string,

	sections: ApplicationSection[],

	createDate?: Date,
	updateDate?: Date,
	createUser?: User,
	updateUser?: User,

	deleted?: boolean,
	deleteDate?: Date,
	deleteUser?: User
};
