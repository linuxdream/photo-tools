import fs from "fs";
import path from "path";

// The parent directory of the Takeout directories
const googlePhotosPath = "/mnt/d/Photos/Julie_Photos/Google Photo Backups/";

// The directory to write the files to. Needs to be outside of the Google Photos directory.
const targetDir = "/mnt/d/Photos/Clean_Google_Photos/";

const googleDirectories = getDirectoryList(googlePhotosPath);

// For each Takeout dir...
googleDirectories.forEach((gd) => {
  const googleDirPath = path.join(googlePhotosPath, gd);
  const googleFiles = getAllFiles(googleDirPath, []);

  // Get all the files in all subdirectories.
  googleFiles.forEach((f) => {
    const file = path.parse(f);
    // Capture the Google named directory/album.
    const targetDirPath = path.join(targetDir, file.dir.split(path.sep).pop() as string);

    // Set the target file path for this file.
    const targetFilePath = path.join(targetDirPath, file.base);

    // Create the directory if it doesn't exist.
    createDirectoryIfNotExists(targetDirPath);

    // Copy the file if it doesn't exist.
    if (!fs.existsSync(targetFilePath)) {
      console.log(`Writing ${file.base} to ${targetFilePath}`);
      fs.copyFileSync(f, targetFilePath);
    } else {
      console.log(`${file.base} already exists in ${targetDirPath}`);
    }
  });
});

function getDirectoryList(googlePhotosPath: string) {
  return fs
    .readdirSync(googlePhotosPath, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);
}

function getAllFiles(dirPath: string, arrayOfFiles: []): Array<string> {
  const files = fs.readdirSync(dirPath);

  const arrayOfFilesLocal: Array<string> = arrayOfFiles || [];

  files.forEach((file: string) => {
    if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
      arrayOfFilesLocal.concat(getAllFiles(path.join(dirPath, file), arrayOfFiles).flat() as []);
    } else {
      if ([".json"].includes(path.extname(file))) {
        return;
      }

      arrayOfFilesLocal.push(path.join(dirPath, file));
    }
  });

  return arrayOfFilesLocal;
}

function createDirectoryIfNotExists(dirPath: string) {
  if (!fs.existsSync(dirPath as string)) {
    fs.mkdirSync(dirPath as string);
  }
}
