"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursesService = void 0;
const common_1 = require("@nestjs/common");
const courses_entity_1 = require("./entities/courses.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const tags_entity_1 = require("./entities/tags.entity");
let CoursesService = class CoursesService {
    courseRepository;
    tagRepository;
    async findAll() {
        return this.courseRepository.find({
            relations: ['tags'],
        });
    }
    async findOne(id) {
        const course = await this.courseRepository.findOne({
            where: { id },
            relations: ['tags'],
        });
        if (!course) {
            throw new common_1.NotFoundException(`Course ID ${id} not found`);
        }
        return course;
    }
    async create(createCourseDTO) {
        const tags = await Promise.all(createCourseDTO.tags.map(name => this.preloadTagByName(name)));
        const course = this.courseRepository.create({
            ...createCourseDTO,
            tags,
        });
        return this.courseRepository.save(course);
    }
    async update(id, updateCourseDTO) {
        const tags = updateCourseDTO.tags &&
            (await Promise.all(updateCourseDTO.tags.map(name => this.preloadTagByName(name))));
        const course = await this.courseRepository.preload({
            ...updateCourseDTO,
            id,
            tags,
        });
        if (!course) {
            throw new common_1.NotFoundException(`Course ID ${id} not found`);
        }
        return this.courseRepository.save(course);
    }
    async remove(id) {
        const course = await this.courseRepository.findOne({
            where: { id },
        });
        if (!course) {
            throw new common_1.NotFoundException(`Course ID ${id} not found`);
        }
        return this.courseRepository.remove(course);
    }
    async preloadTagByName(name) {
        const tag = await this.tagRepository.findOne({ where: { name } });
        if (tag) {
            return tag;
        }
        return this.tagRepository.create({ name });
    }
};
exports.CoursesService = CoursesService;
__decorate([
    (0, typeorm_2.InjectRepository)(courses_entity_1.Course),
    __metadata("design:type", typeorm_1.Repository)
], CoursesService.prototype, "courseRepository", void 0);
__decorate([
    (0, typeorm_2.InjectRepository)(tags_entity_1.Tag),
    __metadata("design:type", typeorm_1.Repository)
], CoursesService.prototype, "tagRepository", void 0);
exports.CoursesService = CoursesService = __decorate([
    (0, common_1.Injectable)()
], CoursesService);
//# sourceMappingURL=courses.service.js.map