import fs from "fs";
import path from "path";

// Функция для замены Unicode в файле
function replaceUnicodeInFile(filePath: string): number {
  try {
    const content = fs.readFileSync(filePath, "utf8");

    // Заменяем \u0301 на *
    const updatedContent = content.replace(/\\u0301/g, "*");

    // Проверяем, были ли изменения
    if (content !== updatedContent) {
      fs.writeFileSync(filePath, updatedContent, "utf8");

      // Подсчитываем количество замен
      const matches = content.match(/\\u0301/g);
      // const count = matches ? matches.length : 0;

      // console.log(
      //   `✅ Обновлен: ${path.relative(
      //     process.cwd(),
      //     filePath
      //   )} (${count} замен)`
      // );
      // return count;
      return matches ? matches.length : 0;
    }

    return 0;
  } catch (error) {
    console.error(
      `❌ Ошибка при обработке ${filePath}:`,
      (error as Error).message
    );
    // return 0;
    return -1;
  }
}

//----------------------------------------------------------------
// --- НОВОЕ РЕШЕНИЕ 2: Обработка всех файлов в папке ---
function updateDirectory(): void {
  console.log("♻️ Обновление всех файлов в директории...");

  // ✅ ✅ ✅ НАСТРОЙКИ: ✅ ✅ ✅
  const targetDirectory = "prisma/lessons/vocabulary"; // Папка для обработки
  const allowedExtensions = [".ts", ".tsx", ".js", ".jsx"]; // Расширения файлов для проверки
  const ignoredFolders = ["node_modules", ".git", "dist", "build"]; // Папки, которые нужно игнорировать

  const projectRoot = process.cwd();
  const fullPathToDirectory = path.join(projectRoot, targetDirectory);
  let totalReplacements = 0;
  let filesProcessed = 0;

  function traverseDirectory(currentPath: string) {
    const entries = fs.readdirSync(currentPath, { withFileTypes: true });

    for (const entry of entries) {
      const entryPath = path.join(currentPath, entry.name);
      if (entry.isDirectory()) {
        // Пропускаем игнорируемые папки
        if (!ignoredFolders.includes(entry.name)) {
          traverseDirectory(entryPath);
        }
      } else if (allowedExtensions.includes(path.extname(entry.name))) {
        // Обрабатываем только файлы с нужным расширением
        const replacements = replaceUnicodeInFile(entryPath);

        if (replacements > 0) {
          // Выводим сообщение, если были замены
          console.log(
            `♻️ Обновлен: ${path.relative(
              projectRoot,
              entryPath
            )} (${replacements} замен)`
          );
          totalReplacements += replacements;
        } else if (replacements === 0) {
          // Выводим сообщение, если файл проверен, но замен нет
          console.log(
            `✔️ Проверен: ${path.relative(
              projectRoot,
              entryPath
            )} (замены не найдены)`
          );
        }
        // Если replacements < 0, сообщение об ошибке уже вывелось из `replaceUnicodeInFile`

        if (replacements >= 0) {
          filesProcessed++;
        }
        // totalReplacements += replaceUnicodeInFile(entryPath);
        // filesProcessed++;
      }
    }
  }

  if (fs.existsSync(fullPathToDirectory)) {
    traverseDirectory(fullPathToDirectory);
    console.log("\n🎉 Готово! Обработка директории завершена.");
    console.log(`📂 Обработано файлов: ${filesProcessed}`);
    console.log(`📊 Всего заменено символов: ${totalReplacements}`);
  } else {
    console.error(`❌ Директория не найдена: ${fullPathToDirectory}`);
  }
}

updateDirectory();
//--------------------------------------------------------------

//--------------------------------------------------------------
// --- НОВОЕ РЕШЕНИЕ 1: Обработка нескольких файлов по списку ---
// function updateMultipleFiles(): void {
//   console.log("♻️ Обновление нескольких файлов из списка...");

//   const projectRoot = process.cwd();
//   let totalReplacements = 0;
//   let filesProcessed = 0;

//   // ✅ ✅ ✅ ЗДЕСЬ УКАЖИТЕ СПИСОК ФАЙЛОВ: ✅ ✅ ✅
//   const filesToUpdate = [
//     "prisma/lessons/exercises/lesson-1/exercise-1.ts",
//     "prisma/lessons/exercises/lesson-1/exercise-2.ts",
//     // Добавьте сюда столько путей, сколько нужно
//   ];

//   for (const relativePath of filesToUpdate) {
//     const fullPath = path.join(projectRoot, relativePath);

//     if (fs.existsSync(fullPath)) {
//       const replacements = replaceUnicodeInFile(fullPath);

//       if (replacements > 0) {
//         console.log(`♻️ Обновлен: ${relativePath} (${replacements} замен)`);
//         totalReplacements += replacements;
//       } else if (replacements === 0) {
//         // Вот сообщение, которого не хватало!
//         console.log(`✔️ Проверен: ${relativePath} (замены не найдены)`);
//       }
//       // Если replacements < 0, сообщение об ошибке уже было выведено

//       filesProcessed++;
//     } else {
//       console.error(`⚠️ Файл не найден, пропущен: ${relativePath}`);
//     }
//   }

//   console.log("\n🎉 Готово! Обработка списка завершена.");
//   console.log(`📂 Обработано файлов: ${filesProcessed}`);
//   console.log(`📊 Всего заменено символов: ${totalReplacements}`);
// }

// updateMultipleFiles();
//-----------------------------------------------------------------------------

//------------------------------------------------------------------------------
// ФУНКЦИЯ - для обработки одного конкретного файла
// function updateSingleFile(): void {
//   console.log("♻️ Обновление одного файла...");

//   const projectRoot = process.cwd();

//   // ✅ ✅ ✅ ЗДЕСЬ УКАЖИТЕ ПУТЬ К ВАШЕМУ ФАЙЛУ: ✅ ✅ ✅
//   const updateFilePath = path.join(
//     projectRoot,
//     "prisma/lessons/dialogues/lesson-5/dialogueBlock.ts"
//   );

//   // 📝 ПРИМЕРЫ ДРУГИХ ПУТЕЙ:
//   // const updateFilePath = path.join(projectRoot, "prisma/lessons/lesson-1.ts")
//   // const updateFilePath = path.join(projectRoot, "src/data/exercise-data.ts")
//   // const updateFilePath = path.join(projectRoot, "components/my-component.tsx")

//   // 📝 ИЛИ МОЖНО УКАЗАТЬ ПРОСТО СТРОКОЙ:
//   // const updateFilePath = "prisma/lessons/exercises/lesson-5.ts"

//   if (fs.existsSync(updateFilePath)) {
//     console.log(
//       `📄 Обрабатываю файл: ${path.relative(projectRoot, updateFilePath)}`
//     );

//     const replacements = replaceUnicodeInFile(updateFilePath);

//     console.log("\n📊 Результат теста:");
//     console.log(` ✔️  Файл: ${path.relative(projectRoot, updateFilePath)}`);
//     console.log(` ✔️  Замен: ${replacements}`);

//     if (replacements > 0) {
//       console.log("🎉 Обновления успешны! Замены выполнены!");
//     } else {
//       console.log("ℹ️  Unicode символы \\u0301 не найдены в этом файле");
//     }
//   } else {
//     console.error(`❌ Файл не найден: ${updateFilePath}`);
//     console.log("💡 Проверьте путь к файлу");
//     console.log(`💡 Текущая директория: ${projectRoot}`);
//   }
// }

// updateSingleFile();
//------------------------------------------------------------------------------
