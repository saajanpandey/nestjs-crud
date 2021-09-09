import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule} from '@nestjs/typeorm';
import { ContactsModule } from './contacts/contacts.module';

@Module({
  imports: [
      TypeOrmModule.forRoot({
        type:'mysql',
        host:'localhost',
        port: 3306,
        username: 'root',
        password:'nepal123',
        database:'testnestjs',
        autoLoadEntities: true,
        synchronize:true,
      }),
      ContactsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
