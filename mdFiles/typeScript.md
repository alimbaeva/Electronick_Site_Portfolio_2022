## TYPESCRIPT
---

![Terminal](https://img.shields.io/badge/-<Terminal>-000?style=for-the-badge)

```npm install typescript --save-dev```

```npm install @types/node --save-dev```

```npm install --save-dev ts-node nodemon```

![tsconfig.json_file](https://img.shields.io/badge/-<tsconfig.json_file>-196F3D?style=for-the-badge)

```
{
  "compilerOptions": {
    "target": "es5",                          
    "module": "commonjs",                    
    "lib": ["es6"],                     
    "allowJs": true,
    "outDir": "dist",                          
    "rootDir": "src",
    "strict": true,         
    "noImplicitAny": true,
    "esModuleInterop": true,
    "resolveJsonModule": true
  }
}
```

![package](https://img.shields.io/badge/-<package_file>-424949?style=for-the-badge)

```
***
{
    ***
    "start:dev": "nodemon",
}
```

Запустивnpm __run start:dev__, nodemonвы запустите наше приложениеts-node ./src/index.ts, отслеживая изменения .tsи .js файлы изнутри /src.

![Terminal](https://img.shields.io/badge/-<Terminal>-000?style=for-the-badge)

```npm install --save-dev rimraf```

Теперь, когда мы запустимnpm run build, rimrafудалим нашу старую buildпапку, прежде чем компилятор TypeScript отправит новый код dist

![ERROR](https://img.shields.io/badge/-<ERROR>-E74C3C?style=for-the-badge)

![ERROR](https://img.shields.io/badge/-<error_TS5055:_Cannot_write_file_'C:/Users_Асель/OneDrive/Desktop/Electronick_Site_Portfolio_2022/webpack.config.js'_because_it_would_overwrite_input_file.>-641E16?style=for-the-badge)

![ERROR](https://img.shields.io/badge/-<error_TS6059:_File_'C:/Users/Асель/OneDrive/Desktop/Electronick_Site_Portfolio_2022/webpack.config.>-641E16?style=for-the-badge)
![ERROR](https://img.shields.io/badge/-<js'_is_not_under_'rootDir'_'C:/Users/Асель/OneDrive/Desktop/Electronick_Site_Portfolio_2022/src'.>-641E16?style=for-the-badge)
![ERROR](https://img.shields.io/badge/-<_'rootDir'_is_expected_to_contain_all_source_files._The_file_is_in_the_program_because:_Matched_by_default_include_pattern_'**/*'>-641E16?style=for-the-badge)


Сделала

![tsconfig.json_file](https://img.shields.io/badge/-<tsconfig.json_file>-196F3D?style=for-the-badge)

```// "allowJs": true,  ```

[doc_stackoverflow.com](https://stackoverflow.com/questions/42609768/typescript-error-cannot-write-file-because-it-would-overwrite-input-file)