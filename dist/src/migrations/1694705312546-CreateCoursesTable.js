"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCoursesTable1694705312546 = void 0;
const typeorm_1 = require("typeorm");
class CreateCoursesTable1694705312546 {
    async up(queryRunner) {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'courses',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'description',
                    type: 'varchar',
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
        await queryRunner.dropTable('courses');
    }
}
exports.CreateCoursesTable1694705312546 = CreateCoursesTable1694705312546;
//# sourceMappingURL=1694705312546-CreateCoursesTable.js.map