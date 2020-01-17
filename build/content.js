/* eslint-disable */

const fs = require('fs-extra');
const path = require('path');
const yaml = require('js-yaml');
const showdown = require('showdown');

require('./showdown/extensions/html-remove-p');
require('./showdown/extensions/angular/components');
require('./showdown/extensions/angular/wiki-page-links');
require('./showdown/extensions/src-asset-links');

const showdownConverter = new showdown.Converter({
    extensions: [
        'ng-components',
        'ng-wiki-page-links',
        'src-asset-links',
        'html-remove-p',
    ],
});

function prepareFileSystemAndBuildContent() {

    const contentConfigText = fs.readFileSync('./content.yml', 'utf8');
    const contentConfig = yaml.safeLoad(contentConfigText);

    const contentDirectoryPath = contentConfig.content.dir;

    const angularContentDirectoryPath = path.join(contentConfig.ng.module.dir, contentConfig.ng.module.targetDir);

    buildContent(contentConfig, contentDirectoryPath, angularContentDirectoryPath);
}

function getKnownFileTypes() {
    return {
        text: {
            contentType: 'text/html; charset=UTF-8',
            ext: ['.txt'],
        },
        json: {
            contentType: 'application/json; charset=UTF-8',
            ext: ['.json'],
        },
        typescript: {
            contentType: 'application/typescript; charset=UTF-8',
            ext: ['.ts'],
        },
        markdown: {
            contentType: 'text/markdown; charset=UTF-8',
            ext: ['.md'],
        },
        asciidoc: {
            contentType: 'text/asciidoc; charset=UTF-8',
            ext: ['.adoc', '.asciidoc'],
        },
    };
}

function getTransformFileTypes(knownFileTypes) {

    const fileTypes = {
        markdown: knownFileTypes.markdown,
        asciidoc: knownFileTypes.asciidoc,
    };

    fileTypes.markdown.transform = (content) => {
        return showdownConverter.makeHtml(content);
    };

    fileTypes.asciidoc.transform = (content) => content;

    return fileTypes;
}

function getContentJson(transformFileTypes, contentFilePath, contentFileExtension) {

    const rawContent = fs.readFileSync(contentFilePath, 'utf8');

    let matchFound = false;
    let transformedContent = rawContent;

    Object.keys(transformFileTypes).forEach((transformFileTypeKey) => {

        if (matchFound) {
            return false;
        }

        const transformFileType = transformFileTypes[transformFileTypeKey];

        if (transformFileType.ext.indexOf(contentFileExtension) >= 0) {

            // console.log('Processing transform file type: ', transformFileTypeKey);

            transformedContent = transformFileType.transform(rawContent);
            matchFound = true;

            return false;
        }
    });

    const contentJson = {
        version: '1.0',
        content: transformedContent,
    };

    return contentJson;
}

function getAngularModuleTemplate(
    contentConfig,
    angularModuleImports,
    angularModuleRoutes,
    angularModuleDeclarations) {

    const moduleTemplateFilePath = path.join(contentConfig.ng.templates.dir, contentConfig.ng.templates.module);

    const templateContent = fs.readFileSync(moduleTemplateFilePath, 'utf8');

    return templateContent
        .replace('${angularModuleImports}', angularModuleImports)
        .replace('${angularModuleRoutes}', angularModuleRoutes)
        .replace('${angularModuleDeclarations}', angularModuleDeclarations);
}

function getAngularComponentTemplate(
    contentConfig,
    angularComponentSelector,
    content,
    angularComponentName) {

    const componentTemplateFilePath = path.join(contentConfig.ng.templates.dir, contentConfig.ng.templates.component);

    const templateContent = fs.readFileSync(componentTemplateFilePath, 'utf8');

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

function writeAngularComponents(
    contentConfig,
    knownFileTypes,
    transformFileTypes,
    contentDirectoryPath) {

    const contentFilePaths = fs.readdirSync(contentDirectoryPath);

    const angularComponentDeclarations = [];

    contentFilePaths.forEach((originalContentFilePartialPath) => {

        const rewriteToIndex = contentConfig.content.rewriteReadmeToIndex &&
            originalContentFilePartialPath.toLowerCase() === 'readme.md';

        // rename 'README' to 'index'
        const contentFilePartialPath = rewriteToIndex ? 'index.md' : originalContentFilePartialPath;

        const originalContentFilePath = path.join(contentDirectoryPath, originalContentFilePartialPath);
        const contentFilePath = path.join(contentDirectoryPath, contentFilePartialPath);
        const contentFileExtension = path.extname(contentFilePath);
        const contentFilePathWithoutExtension = contentFilePartialPath.replace(contentFileExtension, '');

        const contentJson = getContentJson(transformFileTypes, originalContentFilePath, contentFileExtension);

        const angularComponentFileNameWithoutExtension = `${contentFilePathWithoutExtension}.page`.toLowerCase();
        const angularComponentFileName = `${angularComponentFileNameWithoutExtension}${knownFileTypes.typescript.ext[0]}`;
        const angularComponentSelector = `content-${contentFilePathWithoutExtension.toLowerCase()}`;
        const angularComponentName = `${convertToTitleCase(contentFilePathWithoutExtension)}Page`;

        const angularComponentContent = getAngularComponentTemplate(
            contentConfig,
            angularComponentSelector,
            contentJson.content,
            angularComponentName);

        const angularFilePath = path.join(contentConfig.ng.module.dir, contentConfig.ng.module.targetDir, angularComponentFileName);

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

function writeAngularModule(contentConfig, knownFileTypes, angularComponentDeclarations) {

    const angularModuleTemplateData = buildAngularModuleTemplateData(angularComponentDeclarations)

    const angularModuleContent = getAngularModuleTemplate(
        contentConfig,
        angularModuleTemplateData.imports,
        angularModuleTemplateData.routes,
        angularModuleTemplateData.declarations);

    const angularContentModuleFileName = 'pages.module' + knownFileTypes.typescript.ext[0];

    const angulareModuleFilePath = path.join(contentConfig.ng.module.dir, contentConfig.ng.module.targetDir, angularContentModuleFileName).toLowerCase();

    console.log('Writing content to angular path', angulareModuleFilePath);
    fs.writeFileSync(angulareModuleFilePath, angularModuleContent);
}

function buildContent(contentConfig, contentDirectoryPath, angularContentDirectoryPath) {

    if (!fs.existsSync(angularContentDirectoryPath)) {
        console.log('Create angular content directory', angularContentDirectoryPath);
        fs.mkdirSync(angularContentDirectoryPath);
    }

    const knownFileTypes = getKnownFileTypes();
    const transformFileTypes = getTransformFileTypes(knownFileTypes);

    const stylePathSource = path.join(contentConfig.ng.templates.dir, contentConfig.ng.templates.style);
    const stylePathTarget = path.join(angularContentDirectoryPath, contentConfig.ng.templates.style);

    fs.copyFileSync(stylePathSource, stylePathTarget);

    const angularComponentDeclarations = writeAngularComponents(
        contentConfig,
        knownFileTypes,
        transformFileTypes,
        contentDirectoryPath);

    writeAngularModule(contentConfig, knownFileTypes, angularComponentDeclarations);
}

console.log('Building content...');

prepareFileSystemAndBuildContent();
