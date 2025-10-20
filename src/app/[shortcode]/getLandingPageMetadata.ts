import { removeMarkdownComments, removeMarkdownFormatting } from '@promptbook/markdown-utils';

export function getLandingPageMetadata(landingPageContent: string) {
    landingPageContent = removeMarkdownComments(landingPageContent);

    const titleMatch = landingPageContent.match(/^#\s*(.*)$/m);
    const title = titleMatch ? titleMatch[1] : null;

    const descriptionMatch = landingPageContent.match(/^\s*([^#\s].*)$/m);
    const descriptionMarkdown = descriptionMatch ? descriptionMatch[1] : null;
    const description = descriptionMarkdown === null ? null : removeMarkdownFormatting(descriptionMarkdown);

    const imageMatch = landingPageContent.match(/!\[.*\]\((.*)\)/);
    const image = imageMatch ? imageMatch[1] : null;

    return { title, description, image };
}
