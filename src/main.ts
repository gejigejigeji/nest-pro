import { NestFactory } from '@nestjs/core'
import { ApplicationModule } from './app.module'
import { GlobalInterceptor } from './interceptor/global.interceptor'
declare const module: any

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule)
  app.useGlobalInterceptors(new GlobalInterceptor())
  await app.listen(3000)
  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }
}
bootstrap()
