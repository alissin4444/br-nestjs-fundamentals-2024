"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTagsTable1694706531026 = void 0;
const typeorm_1 = require("typeorm");
class CreateTagsTable1694706531026 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'tags',
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
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('tags');
    }
}
exports.CreateTagsTable1694706531026 = CreateTagsTable1694706531026;
//# sourceMappingURL=1694706531026-CreateTagsTable.js.map