import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../../api/user/entities/user.entity";

export default () => {
    return TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'will',
        password: 'A1element',
        database: 'test',
        autoLoadEntities: true,
        synchronize: true,
        keepConnectionAlive: true,
        entities: [__dirname, '../../api/**/*.entity{.ts,.js}']
    });
};