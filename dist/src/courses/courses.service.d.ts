import { Course } from './entities/courses.entity';
import { CreateCourseDTO } from './dto/create-course.dto';
import { UpdateCourseDTO } from './dto/update-course.dto';
export declare class CoursesService {
    private readonly courseRepository;
    private readonly tagRepository;
    findAll(): Promise<Course[]>;
    findOne(id: string): Promise<Course>;
    create(createCourseDTO: CreateCourseDTO): Promise<Course>;
    update(id: string, updateCourseDTO: UpdateCourseDTO): Promise<Course>;
    remove(id: string): Promise<Course>;
    private preloadTagByName;
}
