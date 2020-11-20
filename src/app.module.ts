import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MoviesModule,
    MongooseModule.forRoot(
      'mongodb+srv://nt264:a1597845@cluster1x.egqxr.mongodb.net/movies?retryWrites=true&w=majority')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
