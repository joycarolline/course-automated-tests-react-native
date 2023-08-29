# VSCode

Abra com `CTRL+P` e digite `> open user settings (json)`

```json
{
  "files.exclude": {
    "**/.git": false // Mostrar a pasta oculta .git
  },
  "editor.tokenColorCustomizations": {
    "comments": "#ffa407" // Modificar a cor dos comentarios
  },
  "emeraldwalk.runonsave": { // Salva 
    "commands": [
      {
        "match": "\\.tsx|\\.ts|\\.js|\\.jsx$",
        "cmd": "npx prettier ${relativeFile} --write && npx eslint ${relativeFile} --fix"
      }
    ]
  },
  "editor.tabSize": 2 // Tab com 2 spaços
}
```

Instale:
```
emeraldwalk.RunOnSave
https://marketplace.visualstudio.com/items?itemName=emeraldwalk.RunOnSave
```

```
ms-vsliveshare.vsliveshare
https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare
```