// Core
import {CLIGen} from 'burst-generate-files';

CLIGen([
  {
    name: 'Entity: ./src/bus/__entityName__',
    templates: [
      {
        stringsReplacers: '__entityName__',
        pathToTemplate: './scripts/generate/templates/busEntity',
        outputPath: './src/bus/__entityName__',
        markers: [
          {
            pathToMarker: './src/init/redux/index.ts',
            pattern: '// MarkerGen reducers',
            markerTemplate:
              './scripts/generate/templates/busEntity/.genignore/importReducer.ts',
          },
          {
            pathToMarker: './src/init/redux/index.ts',
            pattern: '// MarkerGen add reducer',
            markerTemplate:
              './scripts/generate/templates/busEntity/.genignore/addReducer.ts',
          },
        ],
      },
    ],
  },
  {
    name: 'Thunk: ./src/bus/__entityName__/thunk',
    templates: [
      {
        stringsReplacers: ['__entityName__', '__thunkName__'],
        pathToTemplate: './scripts/generate/templates/thunk',
        outputPath: './src/bus/__entityName__/thunk',
      },
    ],
  },
]);
