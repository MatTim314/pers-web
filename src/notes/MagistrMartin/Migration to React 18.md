Goal is to migrate entire front-end administration repository to React v18

## Migration of MUI from v4 to v5
Migrating to React18 breaks dependencies of MUI component library

>***mui-dropzone*** was responsible for forcing MUI v4 and that was forcing react 17

# Steps
1. Replaced **mui-dropzone*** with **react-dropzone**. Corrected the styling and usages. 