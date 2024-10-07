"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTagsIdToCoursesTagsTable1695044746630 = void 0;
const typeorm_1 = require("typeorm");
class AddTagsIdToCoursesTagsTable1695044746630 {
    async up(queryRunner) {
        await queryRunner.addColumn('courses_tags_tags', new typeorm_1.TableColumn({
            name: 'tagsId',
            type: 'uuid',
            isNullable: true,
        }));
        await queryRunner.createForeignKey('courses_tags_tags', new typeorm_1.TableForeignKey({
            name: 'courses_tags_tags',
            columnNames: ['tagsId'],
            referencedTableName: 'tags',
            referencedColumnNames: ['id'],
            onDelete: 'SET NULL',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey('courses_tags_tags', 'courses_tags_tags');
        await queryRunner.dropColumn('courses_tags_tags', 'tagsId');
    }
}
exports.AddTagsIdToCoursesTagsTable1695044746630 = AddTagsIdToCoursesTagsTable1695044746630;
//# sourceMappingURL=1695044746630-AddTagsIdToCoursesTagsTable.js.map