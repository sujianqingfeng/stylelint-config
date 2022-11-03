# stylelint-config

## usage

```
pnpm add stylelint @sujian/stylelint-config -D
```

.stylelintrc.json

```
{
  "extends": "@sujian/stylelint-config"
}
```

package.json

```json
{
  "scripts": {
    "lint:style": "stylelint .",
    "lint:style-fix": "stylelint  . --fix"
  }
}
```


### vscode setting
```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true
  },
  "stylelint.validate": ["css", "scss", "vue", "less"],
}
```