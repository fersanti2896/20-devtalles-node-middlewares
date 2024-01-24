import { Request, Response } from 'express';
import { CustomError } from '../../domain';
import { CategoryService } from '../services';

export class CategoryController {
    constructor(
        public readonly categoryService: CategoryService
    ) {}

    private handleError = ( error: unknown, res: Response ) => {
        if( error instanceof CustomError ) {
            return res.status( error.statusCode ).json({ error: error.message });
        }

        return res.status(500).json({ error: 'Internal Server Error' });
    }

    createCategory = async( req: Request, res: Response ) => {
        res.json('Create Category');
    }

    getCategories = async( req: Request, res: Response ) => {
        res.json('Get Categories');
    }
}