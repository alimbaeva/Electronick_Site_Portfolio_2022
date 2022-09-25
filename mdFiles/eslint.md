## ESLINT 
---

ESLint - это компоновщик JavaScript, который позволяет вам применять набор стандартов стиля, форматирования и кодирования для вашей кодовой базы. Он просматривает ваш код и сообщает вам, когда вы не следуете установленному вами стандарту.


![Terminal](https://img.shields.io/badge/-<Terminal>-000?style=for-the-badge)

```npm i -D eslint```

```npm i -D eslint-loader```


![webpack](https://img.shields.io/badge/-<webpack.config.js>-2E4053?style=for-the-badge)

```
 entry: {
         module: {
        rules: [
            {
               test: /\.[tj]s$/,
               exclude: /node_modules/,
               use: ['babel-loader', 'eslint-loader']
            },
        ]
    }
},
```

![Terminal](https://img.shields.io/badge/-<Terminal>-000?style=for-the-badge)

```npm i -D babel-eslint``

Чтобы понимал консоли и промисы

```npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin``

![eslintrc](https://img.shields.io/badge/-<eslintrc_file>-873600?style=for-the-badge)

```
{
    "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ]

"rules": { 
    "no-console": 2 // Remember, this means error!  }

}
```

![.eslintignore](https://img.shields.io/badge/-<.eslintignore_file>-D4AC0D?style=for-the-badge)

```
node_modules
dist
```

![package](https://img.shields.io/badge/-<package_file>-424949?style=for-the-badge)

```
{
    ***
  "scripts": {
    ***
    "lint": "eslint . --ext .ts",
  }
}

```

![Terminal](https://img.shields.io/badge/-<Terminal>-000?style=for-the-badge)

```npm install --save-dev eslint-plugin-no-loops``

__no-loops__ - это плагин, который позволит вам обеспечить соблюдение соглашения, в котором указано, что forwhileциклы and являются незаконными и что вместо них следует использовать такие функции, как mapand forEach.

![eslintrc](https://img.shields.io/badge/-<eslintrc_file>-873600?style=for-the-badge)


```
"no-loops/no-loops": 2
```

[doc_eslint.org](https://eslint.org/docs/latest/rules/)

[doc_khalilstemmler](https://khalilstemmler.com/blogs/typescript/eslint-for-typescript/)


