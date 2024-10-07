import { CoursesService } from './courses.service';
import { CreateCourseDTO } from './dto/create-course.dto';
import { UpdateCourseDTO } from './dto/update-course.dto';
export declare class CoursesController {
    private readonly courseService;
    constructor(courseService: CoursesService);
    findAll(): Promise<import("./entities/courses.entity").Course[]>;
    findOne(id: string): Promise<import("./entities/courses.entity").Course>;
    create(createCourseDTO: CreateCourseDTO): Promise<import("./entities/courses.entity").Course>;
    update(id: string, updateCourseDTO: UpdateCourseDTO): Promise<import("./entities/courses.entity").Course>;
    remove(id: string): Promise<import("./entities/courses.entity").Course>;
}
