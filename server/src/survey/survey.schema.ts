import * as mongoose from 'mongoose';
import { Survey } from './survey.interface';
const ObjectId = mongoose.Schema.Types.ObjectId;

export const surveySchema = new mongoose.Schema({
	name: String,

	__v: {type:Number, select:false},

	createDate: Date,
	updateDate: Date,
	createUser: {type:ObjectId, ref:'User'},
	updateUser: {type:ObjectId, ref:'User'},

	deleted: Boolean,
	deleteDate: Date,
	deleteUser: {type:ObjectId, ref:'User'}
});


export interface SurveyDocument extends mongoose.Document, Survey {};

export { Survey };
