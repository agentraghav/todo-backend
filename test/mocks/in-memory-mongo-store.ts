import config from 'config';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { connect, Mongoose as M } from 'mongoose';
import { Mongoose } from '@storage';

export class InMemoryMongoStore extends Mongoose.MongoStore {
  constructor() {
    super();
  }

  public async connect(): Promise<M> {
    const uri: string = config.get('mongoDb.uri');
    const options = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    };
    return connect(uri, options);
  }
}
