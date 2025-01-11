"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionOptions = exports.typeOrmConfig = void 0;
exports.typeOrmConfig = {
    type: "oracle",
    host: "10.1.1.241",
    username: "teste",
    password: "teste",
    port: 1521,
    sid: "BDTESTE",
    synchronize: false,
    logging: false,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    autoLoadEntities: true,
};
exports.connectionOptions = {
    type: "oracle",
    host: "10.1.1.241",
    username: "teste",
    password: "teste",
    port: 1521,
    sid: "BDTESTE",
    synchronize: false,
    logging: false,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
};
//# sourceMappingURL=typeorm.config.js.map