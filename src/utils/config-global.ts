export const HOST_API = import.meta.env.VITE_SERVER_URL;

import packageJson from '../../package.json';
import { paths } from '../routers/paths';

export type ConfigValue = {
  site: {
    name: string;
    serverUrl: string;
    assetURL: string;
    basePath: string;
    version: string;
  };
  auth: {
    method: 'jwt';
    skip: boolean;
    redirectPath: string;
  };
};

export const CONFIG: ConfigValue = {
  site: {
    name: 'Test_Connect',
    serverUrl: import.meta.env.VITE_SERVER_URL ?? '',
    assetURL: import.meta.env.VITE_ASSET_URL ?? '',
    basePath: import.meta.env.VITE_BASE_PATH ?? '',
    version: packageJson.version
  },
  /**
   * Auth
   * @method jwt | amplify | firebase | supabase | auth0
   */
  auth: {
    method: 'jwt',
    skip: false,
    redirectPath: paths.dashboard.root
  }
};
