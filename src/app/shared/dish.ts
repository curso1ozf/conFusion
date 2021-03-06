import { CommentClass } from './comment';

export class DishClass {
    id: number;
    name: string;
    image: string;
    category: string;
    label: string;
    price: string;
    featured: boolean;
    description: string;
    comments: CommentClass [];
}