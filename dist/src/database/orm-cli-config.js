"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = exports.dataSourceOptions = void 0;
require("dotenv/config");
const typeorm_1 = require("typeorm");
const _1694705312546_CreateCoursesTable_1 = require("../migrations/1694705312546-CreateCoursesTable");
const _1694706531026_CreateTagsTable_1 = require("../migrations/1694706531026-CreateTagsTable");
const _1695042750118_CreateCoursesTagsTable_1 = require("../migrations/1695042750118-CreateCoursesTagsTable");
const _1695043757120_AddCoursesIdToCoursesTagsTable_1 = require("../migrations/1695043757120-AddCoursesIdToCoursesTagsTable");
const _1695044746630_AddTagsIdToCoursesTagsTable_1 = require("../migrations/1695044746630-AddTagsIdToCoursesTagsTable");
const courses_entity_1 = require("../courses/entities/courses.entity");
const tags_entity_1 = require("../courses/entities/tags.entity");
exports.dataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [courses_entity_1.Course, tags_entity_1.Tag],
    synchronize: false,
};
exports.dataSource = new typeorm_1.DataSource({
    ...exports.dataSourceOptions,
    synchronize: false,
    migrations: [
        _1694705312546_CreateCoursesTable_1.CreateCoursesTable1694705312546,
        _1694706531026_CreateTagsTable_1.CreateTagsTable1694706531026,
        _1695042750118_CreateCoursesTagsTable_1.CreateCoursesTagsTable1695042750118,
        _1695043757120_AddCoursesIdToCoursesTagsTable_1.AddCoursesIdToCoursesTagsTable1695043757120,
        _1695044746630_AddTagsIdToCoursesTagsTable_1.AddTagsIdToCoursesTagsTable1695044746630,
    ],
});
//# sourceMappingURL=orm-cli-config.js.map