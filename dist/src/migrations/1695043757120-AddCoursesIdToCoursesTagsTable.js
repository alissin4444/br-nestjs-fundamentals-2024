"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCoursesIdToCoursesTagsTable1695043757120 = void 0;
const typeorm_1 = require("typeorm");
class AddCoursesIdToCoursesTagsTable1695043757120 {
    async up(queryRunner) {
        await queryRunner.addColumn('courses_tags_tags', new typeorm_1.TableColumn({
            name: 'coursesId',
            type: 'uuid',
            isNullable: true,
        }));
        await queryRunner.createForeignKey('courses_tags_tags', new typeorm_1.TableForeignKey({
            name: 'courses_tags_courses',
            columnNames: ['coursesId'],
            referencedTableName: 'courses',
            referencedColumnNames: ['id'],
            onDelete: 'SET NULL',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey('courses_tags_tags', 'courses_tags_courses');
        await queryRunner.dropColumn('courses_tags_tags', 'coursesId');
    }
}
exports.AddCoursesIdToCoursesTagsTable1695043757120 = AddCoursesIdToCoursesTagsTable1695043757120;
//# sourceMappingURL=1695043757120-AddCoursesIdToCoursesTagsTable.js.map