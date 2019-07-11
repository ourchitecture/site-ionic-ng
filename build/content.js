const fs = require('fs-extra');
const path = require('path');

console.log('Building content...');

const contentDirectoryPath = './content';

const contentFilePaths = fs.readdirSync(contentDirectoryPath);

contentFilePaths.forEach(contentFilePartialPath => {

    const contentFilePath = path.join(contentDirectoryPath, contentFilePartialPath);
    const contentFileExtension = path.extname(contentFilePath);
    const contentFilePathWithoutExtension = contentFilePath.replace(contentFileExtension, '');

    console.log('Content file', contentFilePath, contentFileExtension);

    let contentType = '';

    switch (contentFileExtension) {
        case '.md':
            contentType = 'text/markdown; charset=UTF-8';
            break;
        case '.adoc', '.asciidoc':
            contentType = 'text/asciidoc; charset=UTF-8';
            break;
    }

    const content = fs.readFileSync(contentFilePath, { encoding: 'utf8' });

    const contentJson = {
        version: '1.0',
        contentType: contentType,
        content,
    };

    const angularAssetFilePath = path.join('src/assets', contentFilePathWithoutExtension + '.json');

    console.log('Writing content to angular asset path', angularAssetFilePath);

    fs.writeFileSync(angularAssetFilePath, JSON.stringify(contentJson), { encoding: 'utf8' });
});
