import 'zone.js/dist/zone-node';
import 'polyfills.server';
import { AppServerModule } from './app/app.server.module';
import { bootstrapServer } from 'shared-server';

// tslint:disable-next-line:no-default-export
export default bootstrapServer(AppServerModule);
