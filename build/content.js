const fs = require('fs-extra');
const path = require('path');
const rimraf = require('rimraf');
const showdown = require('showdown');

require('./showdown/extensions/ionicLinks');
require('./showdown/extensions/srcAssetLinks');

const showdownConverter = new showdown.Converter({
    extensions: [
        'ionic-links',
        'src-asset-links',
    ],
});

function prepareFileSystemAndBuildContent() {

    const contentDirectoryPath = './content';

    const angularDirectoryPath = './src/app';
    const angularContentDirectoryPath = path.join(angularDirectoryPath, contentDirectoryPath);

    buildContent(contentDirectoryPath, angularContentDirectoryPath);
}

function getKnownFileTypes() {
    return {
        text: {
            contentType: 'text/html; charset=UTF-8',
            ext: ['.txt'],
            isEnabled: false,
            transform: (content) => content,
        },
        json: {
            contentType: 'application/json; charset=UTF-8',
            ext: ['.json'],
            isEnabled: false,
            transform: (content) => content,
        },
        typescript: {
            contentType: 'application/typescript; charset=UTF-8',
            ext: ['.ts'],
            isEnabled: false,
            transform: (content) => content,
        },
        markdown: {
            contentType: 'text/markdown; charset=UTF-8',
            ext: ['.md'],
            isEnabled: true,
            transform: (content) => {
                return showdownConverter.makeHtml(content);
            },
        },
        asciidoc: {
            contentType: 'text/asciidoc; charset=UTF-8',
            ext: ['.adoc', '.asciidoc'],
            isEnabled: true,
            transform: (content) => content,
        },
    };
}

function getContentJson(knownFileTypes, contentFilePath, contentFileExtension) {

    const rawContent = fs.readFileSync(contentFilePath, { encoding: 'utf8' });

    let matchFound = false;
    let contentType = knownFileTypes.text.contentType;
    let transformedContent = rawContent;

    Object.keys(knownFileTypes).forEach((knownFileTypeKey) => {

        if (matchFound) {
            return false;
        }

        const knownFileType = knownFileTypes[knownFileTypeKey];

        if (knownFileType.isEnabled && knownFileType.ext.indexOf(contentFileExtension) >= 0) {

            // console.log('Processing known file type: ', knownFileTypeKey);

            // contentType = knownFileType.contentType;
            transformedContent = knownFileType.transform(rawContent);
            matchFound = true;

            return false;
        }
    });

    const contentJson = {
        version: '1.0',
        contentType: contentType,
        content: transformedContent,
    };

    return contentJson;
}

function getAngularModuleTemplate(
    angularModuleImports,
    angularModuleRoutes,
    angularModuleDeclarations) {

    const templateContent = fs.readFileSync('./build/templates/module.ts', { encoding: 'utf8' });

    return templateContent
        .replace('${angularModuleImports}', angularModuleImports)
        .replace('${angularModuleRoutes}', angularModuleRoutes)
        .replace('${angularModuleDeclarations}', angularModuleDeclarations);
}

function getAngularComponentTemplate(
    angularComponentSelector,
    content,
    angularComponentName) {

    const templateContent = fs.readFileSync('./build/templates/component.ts', { encoding: 'utf8' });

    return templateContent
        .replace('${angularComponentSelector}', angularComponentSelector)
        .replace('${content}', content)
        .replace('${angularComponentName}', angularComponentName);
}

function buildAngularModuleTemplateData(angularComponentDeclarations) {

    const angularModuleImports = angularComponentDeclarations
        .map((c) => {
            return `import { ${c.name} } from './${c.importFileName}';`;
        })
        .join('\n');

    const angularModuleRoutes = angularComponentDeclarations
        .map((c) => {
            return `{ path: '${c.routePath}', component: ${c.name} }`;
        })
        .join(',\n\t\t\t');

    const angularModuleDeclarations = angularComponentDeclarations
        .map((c) => {
            return c.name;
        })
        .join(',\n\t\t');

    return {
        imports: angularModuleImports,
        routes: angularModuleRoutes,
        declarations: angularModuleDeclarations,
    };
}

const invalidAngularNameCharacterRegex = /[^a-zA-Z0-9]/g;

function convertToTitleCase(text) {
    return text
        .replace(/(\w)(\w*)/g, (g0, g1, g2) => {
            return g1.toUpperCase() + g2.toLowerCase();
        })
        .replace(invalidAngularNameCharacterRegex, '');
}

function writeAngularComponents(knownFileTypes, contentDirectoryPath) {

    const contentFilePaths = fs.readdirSync(contentDirectoryPath);

    const angularComponentDeclarations = [];

    contentFilePaths.forEach(contentFilePartialPath => {

        const contentFilePath = path.join(contentDirectoryPath, contentFilePartialPath);
        const contentFileExtension = path.extname(contentFilePath);
        const contentFilePathWithoutExtension = contentFilePartialPath.replace(contentFileExtension, '');

        // console.log('Content file', contentFilePath, contentFileExtension);

        const contentJson = getContentJson(knownFileTypes, contentFilePath, contentFileExtension);

        const angularComponentFileNameWithoutExtension = `${contentFilePathWithoutExtension}.page`.toLowerCase();
        const angularComponentFileName = `${angularComponentFileNameWithoutExtension}${knownFileTypes.typescript.ext[0]}`;
        const angularComponentSelector = `content-${contentFilePathWithoutExtension.toLowerCase()}`;
        const angularComponentName = `${convertToTitleCase(contentFilePathWithoutExtension)}Page`;

        const angularComponentContent = getAngularComponentTemplate(
            angularComponentSelector,
            contentJson.content,
            angularComponentName);

        const angularFilePath = path.join('./src/app/content', angularComponentFileName);

        angularComponentDeclarations.push({
            importFileName: angularComponentFileNameWithoutExtension,
            routePath: contentFilePathWithoutExtension,
            name: angularComponentName,
        });

        console.log('Writing content to angular path', angularFilePath);
        fs.writeFileSync(angularFilePath, angularComponentContent);
    });

    return angularComponentDeclarations;
}

function writeAngularModule(knownFileTypes, angularComponentDeclarations) {

    const angularModuleTemplateData = buildAngularModuleTemplateData(angularComponentDeclarations)

    const angularModuleContent = getAngularModuleTemplate(
        angularModuleTemplateData.imports,
        angularModuleTemplateData.routes,
        angularModuleTemplateData.declarations);

    const angulareModuleFilePath = path.join('./src/app/content', 'content.module' + knownFileTypes.typescript.ext[0]).toLowerCase();

    console.log('Writing content to angular path', angulareModuleFilePath);
    fs.writeFileSync(angulareModuleFilePath, angularModuleContent);
}

function buildContent(contentDirectoryPath, angularContentDirectoryPath) {

    if (!fs.existsSync(angularContentDirectoryPath)) {
        console.log('Create angular content directory', angularContentDirectoryPath);
        fs.mkdirSync(angularContentDirectoryPath);
    }

    const knownFileTypes = getKnownFileTypes();

    const angularComponentDeclarations = writeAngularComponents(knownFileTypes, contentDirectoryPath);

    writeAngularModule(knownFileTypes, angularComponentDeclarations);
}

console.log('Building content...');

prepareFileSystemAndBuildContent();
