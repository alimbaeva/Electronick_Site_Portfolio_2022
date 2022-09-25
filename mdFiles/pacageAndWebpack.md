# Инициализировать файл package.json
![Terminal](https://img.shields.io/badge/-<Terminal>-000?style=for-the-badge)

```npm init -y```

```npm install -D webpack webpack-cli```

webpack CLI предоставляет разработчикам гибкий набор команд для увеличения скорости при настройке пользовательского проекта webpack. [doc](https://www.npmjs.com/package/webpack-cli)

## Создаем в корне проекта файл: webpack.config.js
---
![webpack](https://img.shields.io/badge/-<webpack.config.js>-2E4053?style=for-the-badge)

* 1

```
module.exports = {

}
```

* 2
```
module.exports = {
    entry: {
            main: './index.ts',
        },
}
```
__entry__ - Объект entry - это то место, где webpack ищет, чтобы начать сборку пакета. Контекст - это абсолютная строка для каталога, содержащего файлы записи.  [doc](https://webpack.js.org/configuration/entry-context/#root)

* 3
```
module.exports = {
    ***
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')
    },
}
```

__output__ - Настройка параметров outputконфигурации указывает webpack, как записать скомпилированные файлы на диск. Обратите внимание, что, хотя точек может быть несколькоentry, указана только одна outputконфигурация. [doc](https://webpack.js.org/concepts/output/#root)

![Terminal](https://img.shields.io/badge/-<Terminal>-000?style=for-the-badge)

```npm install -D html-webpack-plagin```

__Плагины__ являются основой webpack. Сам Webpack построен на той же системе плагинов, которую вы используете в своей конфигурации webpack!

Они также служат для выполнения чего-либо еще, чего не может сделать загрузчик. Webpack предоставляет множество таких плагинов из [doc](https://webpack.js.org/concepts/plugins/#root)

![webpack](https://img.shields.io/badge/-<webpack.config.js>-2E4053?style=for-the-badge)

В начало файла

```const HTMLWebpackPlugin = require('html-webpack-plugin');```

* 4
```
module.exports = {
    ***
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            clean: true,
        }),
    ]
}
```

__HtmlWebpackPlugin__ Упрощает создание HTML-файлов для обслуживания ваших пакетов webpack. Это особенно полезно для пакетов webpack, которые включают хэш в имени файла, который изменяется при каждой компиляции. Вы можете либо позволить плагину генерировать для вас HTML-файл, либо предоставить свой собственный шаблон с помощью шаблонов Lodash, либо использовать свой собственный загрузчик. [doc](https://webpack.js.org/plugins/html-webpack-plugin/#root)

![Terminal](https://img.shields.io/badge/-<Terminal>-000?style=for-the-badge)

```npm install -D clean-webpack-plugin ```

По умолчанию этот плагин удаляет все файлы внутри output.pathкаталога webpack, а также все неиспользуемые ресурсы webpack после каждой успешной перестройки.  [doc](https://www.npmjs.com/package/clean-webpack-plugin)

![webpack](https://img.shields.io/badge/-<webpack.config.js>-2E4053?style=for-the-badge)

В начало файла

```const {CleanWebpackPlugin} = require('clean-webpack-plugin');```

* 5
```
module.exports = {
    ***
    plugins: [
        ***
        new CleanWebpackPlugin(),
    ]
}
```

* 6
```
module.exports = {
    context: path.resolve(__dirname, 'src'),
    ***
}
```

__context__ - Базовый каталог, абсолютный путь, для разрешения точек входа и загрузчиков из конфигурации.   [doc](https://webpack.js.org/configuration/entry-context/#context)

## Модули
---
В модульном программировании разработчики разбивают программы на отдельные функциональные блоки, называемые модулем.
Каждый модуль имеет меньшую площадь поверхности, чем полная программа, что делает проверку, отладку и тестирование тривиальными. Хорошо написанные модули обеспечивают четкие абстракции и границы инкапсуляции, так что каждый модуль имеет согласованный дизайн и четкую цель в рамках общего приложения.     [doc](https://webpack.js.org/concepts/modules/#root)


rules [rule]
Массив правил, которые сопоставляются с запросами при создании модулей. Эти правила могут изменять способ создания модуля. Они могут применять загрузчики к модулю или изменять анализатор.


![webpack](https://img.shields.io/badge/-<webpack.config.js>-2E4053?style=for-the-badge)

* 7
```
module.exports = {
    ***
     module: {
        rules: [

        ]
    }
}
```

__rule.type__ задает тип для соответствующего модуля. Это предотвращает появление defaultRules и их поведения при импорте по умолчанию. Например, если вы хотите загрузить .jsonфайл через пользовательский загрузчик, вам нужно будет установить typejavascript/autoзначение, чтобы обойти встроенный в webpack импорт json. [doc](https://webpack.js.org/configuration/module/#ruletest)

__rule.use__ может быть массивом UseEntry, которые применяются к модулям. Каждая запись определяет загрузчик, который будет использоваться. [doc](https://webpack.js.org/configuration/module/#ruleuse)


![Terminal](https://img.shields.io/badge/-<Terminal>-000?style=for-the-badge)

```npm install -D css-loader```

__css-loader__ - это сторонний пакет, поддерживаемый членами сообщества, он потенциально не имеет такой же поддержки, политики безопасности или лицензии, как webpack, и он не поддерживается webpack.   [doc](https://webpack.js.org/loaders/css-loader/#root)

```npm install -D style-loader```

__style-loader__ - это сторонний пакет, поддерживаемый членами сообщества, он потенциально не имеет такой же поддержки, политики безопасности или лицензии, как webpack, и он не поддерживается webpack.   [doc](https://webpack.js.org/loaders/style-loader/#root)

```npm install -D less-loader```

```npm install -D sass-loader```


![Terminal](https://img.shields.io/badge/-<Terminal>-000?style=for-the-badge)

```npm install -D mini-css-extract-plugin```

Этот плагин извлекает CSS в отдельные файлы. Он создает файл CSS для каждого файла JS, который содержит CSS. Он поддерживает загрузку CSS и исходных текстов по требованию.
Он построен поверх новой функции webpack v5 и требует webpack 5 для работы.
По сравнению с плагином extract-text-webpack:
*	Асинхронная загрузка
*	Нет повторяющейся компиляции (производительность)
*	Проще в использовании
*	Специфичный для CSS

[doc](https://webpack.js.org/plugins/mini-css-extract-plugin/)

![webpack](https://img.shields.io/badge/-<webpack.config.js>-2E4053?style=for-the-badge)

В начало файла

```const MiniCssExtractPlugin = require('mini-css-extract-plugin');```

```
const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }

    if (isProd) {
        config.minimizer = [
            new CssMinimizerWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    }

    return config;
}
```

```
 optimization: optimization(),
```

![webpack](https://img.shields.io/badge/-<webpack.config.js>-2E4053?style=for-the-badge)
![CSS](https://img.shields.io/badge/-<CSS>-D68910?style=for-the-badge)


* 8
```
module.exports = {
    ***
     module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoaders(),
            },
        ]
    }
}
```

* 9
```
const cssLoaders = (extra) => {
    const loaders = [
        { 
             loader: MiniCssExtractPlugin.loader,
             options: {}
         },
         'css-loader',
     ]

     if (extra) {
        if (extra === 'sass-loader') {
            loaders.push({
                loader: "sass-loader",
                options: {
                  sourceMap: true,
                },
            })
        }
        loaders.push(extra);
     }
    return loaders
}
```

Функция __cssLoaders__ - что бы не повторять один и тот же часть кода, эту часть кода включили в эту функцию.[doc](https://webpack.js.org/loaders/sass-loader/#sourcemap)

![SCSS](https://img.shields.io/badge/-<SCSS>-D68910?style=for-the-badge)
![SCSS](https://img.shields.io/badge/-<SASS>-D68910?style=for-the-badge)


* 10
```
module.exports = {
    ***
     module: {
        rules: [
            ***
            {
                test: /\.s[ac]ss$/,
                use:cssLoaders('sass-loader')
            },
        ]
    }
}
```

![LESS](https://img.shields.io/badge/-<LESS>-D68910?style=for-the-badge)

* 11
```
module.exports = {
    ***
     module: {
        rules: [
            ***
            {
                test: /\.less$/,
                use:cssLoaders('less-loader'),
            },
        ]
    }
}
```


![Terminal](https://img.shields.io/badge/-<Terminal>-000?style=for-the-badge)

```npm install -D file-loader```

Модули ресурсов - это тип модуля, который позволяет использовать файлы ресурсов (шрифты, значки и т. Д.) Без настройки дополнительных загрузчиков.

__file-loader__ для отправки файла в выходной каталог
[doc](https://webpack.js.org/guides/asset-modules/#root)

![webpack](https://img.shields.io/badge/-<webpack.config.js>-2E4053?style=for-the-badge)
![PNG](https://img.shields.io/badge/-<IMAGE>-D68910?style=for-the-badge)

* 12
```
module.exports = {
    ***
     module: {
        rules: [
            ***
             {
                test: /\.(png|jpg|svg|gif)$/,
                use: fileLoaderUse('images') 
            },
        ]
    }
}
```

![FONTS](https://img.shields.io/badge/-<FONTS>-D68910?style=for-the-badge)

* 13
```
module.exports = {
    ***
     module: {
        rules: [
            ***
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: fileLoaderUse('fonts'),
            },
        ]
    }
}
```

![Terminal](https://img.shields.io/badge/-<Terminal>-000?style=for-the-badge)

```npm install -D xml-loader```

```npm install -D csv-loader```

```npm install -D papaparse```


![webpack](https://img.shields.io/badge/-<webpack.config.js>-2E4053?style=for-the-badge)
![XML_CSV](https://img.shields.io/badge/-<XML_CSV>-D68910?style=for-the-badge)

* 14
```
module.exports = {
    ***
     module: {
        rules: [
            ***
              {
                test: /\.xml$/,
                use: ['xml-loader'],
            },
            {
                test: /\.csv$/,
                use: ['csv-loader'],
            },
        ]
    }
}
```

## resolve
---

Эти параметры изменяют способ разрешения модулей. Webpack предоставляет разумные значения по умолчанию, но можно изменить разрешение в деталях. [doc](https://webpack.js.org/configuration/resolve/#root)

__extension__ Эти параметры изменяют способ разрешения модулей. Webpack предоставляет разумные значения по умолчанию, но можно изменить разрешение в деталях. Посмотрите на разрешение модуля для более подробного объяснения того, как работает распознаватель.

__Alias:__  object
Создайте псевдонимы для import или require некоторые модули проще. Например, для псевдонима группы часто используемых src/ папки:
[doc](https://webpack.js.org/configuration/resolve/#resolvealias)

* 15
```
 resolve: {
        extensions: ['.js'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@@': path.resolve(__dirname, 'src/asset')
        }
    },
```

__splitChunks__ .чанки
string = 'async' function (chunk)
Это указывает, какие фрагменты будут выбраны для оптимизации. Если указана строка, допустимыми значениями являются all, async, и initial. Предоставление allможет быть особенно мощным, потому что это означает, что блоки могут быть разделены даже между асинхронными и неасинхронными блоками.
[doc](https://webpack.js.org/plugins/split-chunks-plugin/#optimizationsplitchunks)


![Terminal](https://img.shields.io/badge/-<Terminal>-000?style=for-the-badge)

```npm install -D webpack-dev-server```

Используйте webpack с сервером разработки, который обеспечивает перезагрузку в реальном времени. Это должно использоваться только для разработки.
Он использует webpack-dev-промежуточное программное обеспечение под капотом, которое обеспечивает быстрый доступ в памяти к ресурсам webpack.
[doc](https://www.npmjs.com/package/webpack-dev-server)

![webpack](https://img.shields.io/badge/-<webpack.config.js>-2E4053?style=for-the-badge)

* 15
```
 resolve: {
        ***
        devServer: {
            port: 4000,
            hot: isDev,
        },
    },
```

![package](https://img.shields.io/badge/-<package_file>-424949?style=for-the-badge)

```"webpack-dev-server": "^4.11.1",```

```
 "scripts": {
    "dev": "webpack --mode development",
    "build": "webpack --mode production",
    "watch": "webpack --mode development --watch",
    "start": "webpack-dev-server --mode development --open"
  },
```

![Terminal](https://img.shields.io/badge/-<Terminal>-000?style=for-the-badge)

```npm install -D copy-webpack-plugin```

Копирует отдельные файлы или целые каталоги, которые уже существуют, в каталог сборки.
[doc](https://www.npmjs.com/package/copy-webpack-plugin)
[doc](https://webpack.js.org/plugins/copy-webpack-plugin/)


![webpack](https://img.shields.io/badge/-<webpack.config.js>-2E4053?style=for-the-badge)

В начало файла

* 16
```
 const CopyWebpackPlugin = require('copy-webpack-plugin');
```

* 17
```
module.exports = {
    ***
    plugins: [
        ***
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/favicon.ico')
                }
            ]
        }),
    ]
}
```


![Terminal](https://img.shields.io/badge/-<Terminal>-000?style=for-the-badge)

```npm install -D cross-env```

__cross-env__ позволяет использовать одну команду, не беспокоясь о правильной настройке или использовании переменной среды для платформы. Просто установите его так, как если бы он работал в системе POSIX, и cross-envпозаботьтесь о его правильной настройке.  [doc](https://www.npmjs.com/package/cross-env)

![package](https://img.shields.io/badge/-<package_file>-424949?style=for-the-badge)

Предоставление опции modeконфигурации указывает webpack соответствующим образом использовать встроенные оптимизации.
string = 'production': 'none' | 'development' | 'production'
[doc](https://webpack.js.org/configuration/mode/)

Цели разработки и производственных сборок сильно различаются. В процессе разработки нам требуется надежное сопоставление исходных текстов и локальный сервер с возможностью оперативной перезагрузки или горячей замены модуля. В производстве наши цели смещаются в сторону сокращения пакетов, облегченных исходных карт и оптимизированных ресурсов для увеличения времени загрузки. Учитывая это логическое разделение, мы обычно рекомендуем писать отдельные конфигурации webpack для каждой среды      [doc](https://webpack.js.org/guides/production/)

Использование режима просмотра
Вы можете поручить webpack "просматривать" все файлы в вашем графике зависимостей на предмет изменений. Если один из этих файлов будет обновлен, код будет перекомпилирован, поэтому вам не придется запускать полную сборку вручную.
[doc](https://webpack.js.org/guides/development/#choosing-a-development-tool)




```
"scripts": {
    "dev": "cross-env NODE_ENV=development webpack --mode development",
    "build": "cross-env NODE_ENV=production webpack --mode production",
    "watch": "cross-env NODE_ENV=development webpack --mode development --watch",
    "start": "cross-env NODE_ENV=development webpack-dev-server --mode development --open"
  },
```

[doc](https://webpack.js.org/guides/package-exports/#with-nodejs-runtime-detection)


![Terminal](https://img.shields.io/badge/-<Terminal>-000?style=for-the-badge)

```npm install terser-webpack-plugin --save-dev```

Webpack v5 поставляется с последней terser-webpack-pluginверсией из коробки. Если вы используете Webpack версии 5 или выше и хотите настроить параметры, вам все равно потребуется установить terser-webpack-plugin. Используя Webpack v4, вы должны установить terser-webpack-pluginверсию 4.
[doc](https://webpack.js.org/plugins/terser-webpack-plugin/)

```npm install css-minimizer-webpack-plugin --save-dev```

Этот плагин использует cssnano для оптимизации и минимизации вашего CSS.
Точно так же, как оптимизация-css-assets-webpack-plugin но более точный с исходными картами и ресурсами, использующими строку запроса, допускает кэширование и работает в параллельном режиме.
[doc](https://github.com/webpack-contrib/css-minimizer-webpack-plugin)


## BABLE
---


![Terminal](https://img.shields.io/badge/-<Terminal>-000?style=for-the-badge)

```npm install --save-dev babel-loader @babel/core```

[doc](https://babeljs.io/setup#installation)

@babel/preset-env это интеллектуальная предустановка, которая позволяет вам использовать последнюю версию JavaScript без необходимости микроуправления тем, какие синтаксические преобразования (и, при необходимости, полизаполнения браузера) необходимы для вашей целевой среды (ов). Это делает вашу жизнь проще, а пакеты JavaScript меньше!

[doc](https://babeljs.io/docs/en/babel-preset-env)


```npm install --save-dev @babel/preset-env```

```npm install --save @babel/polyfill```

```npm i -D @babel/plugin-proposal-class-properties```

![webpack](https://img.shields.io/badge/-<webpack.config.js>-2E4053?style=for-the-badge)

```
 entry: {
        main: ['@babel/polyfill', './index.js'],
        analytics: './analitics.js'
    },
```

```
module.exports = {
    ***
     module: {
        rules: [
            ***
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ]
    }
}
```

[doc](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties)


![babelrc_file](https://img.shields.io/badge/-<.babelrc_file>-2E4053?style=for-the-badge)

```
{
    "presets": [
      "@babel/preset-env", 
      "@babel/preset-typescript"
    ],
    "plugins": ["@babel/plugin-proposal-class-properties"]
}
```

[doc](https://www.taniarascia.com/how-to-use-webpack/)



## ESLINT 
---

