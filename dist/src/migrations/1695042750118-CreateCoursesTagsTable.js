"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCoursesTagsTable1695042750118 = void 0;
const typeorm_1 = require("typeorm");
class CreateCoursesTagsTable1695042750118 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'courses_tags_tags',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('courses_tags_tags');
    }
}
exports.CreateCoursesTagsTable1695042750118 = CreateCoursesTagsTable1695042750118;
//# sourceMappingURL=1695042750118-CreateCoursesTagsTable.js.map