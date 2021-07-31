import { NodePlopAPI } from 'node-plop';
import { componentGenerator } from './component';
import { pageGenerator } from './page';
import shell from 'shelljs';
interface PrettifyCustomActionData {
  path: string;
}

export default function plop(plop: NodePlopAPI) {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('page', pageGenerator);

  plop.setActionType('prettify', (_, config) => {
    const data = config.data as PrettifyCustomActionData;
    shell.exec(`yarn run prettify -- "${data.path}"`, { silent: true });
    return '';
  });
}
