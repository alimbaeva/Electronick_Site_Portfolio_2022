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

Функция __cssLoaders__ - что бы не повторять один и тот же часть кода, эту часть кода включили в эту функцию.

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
