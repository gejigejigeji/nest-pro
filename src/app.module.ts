import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
//配置文件
import configuration from './config/configuration'
//ORM配置
import TypeOrmConfig from './config/database/TypeOrm.config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './api/user/user.module'
import { HttpModule } from '@nestjs/axios'

@Module({
  imports: [
    //环境变量与配置文件
    ConfigModule.forRoot({
      envFilePath: 'src/config/dev/development.env',
      load: [configuration],
    }),
    //ORM配置
    TypeOrmConfig(),
    //HTTP模块
    HttpModule,
    //API模块
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class ApplicationModule {}
