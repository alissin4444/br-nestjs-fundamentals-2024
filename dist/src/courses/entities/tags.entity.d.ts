import { Course } from './courses.entity';
export declare class Tag {
    id: string;
    name: string;
    courses: Course[];
    created_at: Date;
    generatedId(): void;
}
