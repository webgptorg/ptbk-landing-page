export function getLandingPageMetadata(landingPageContent: string) {
    const titleMatch = landingPageContent.match(/^#\s*(.*)$/m);
    const title = titleMatch ? titleMatch[1] : null;

    const descriptionMatch = landingPageContent.match(/^\s*([^#\s].*)$/m);
    const description = descriptionMatch ? descriptionMatch[1] : null;

    const imageMatch = landingPageContent.match(/!\[.*\]\((.*)\)/);
    const image = imageMatch ? imageMatch[1] : null;

    return { title, description, image };
}
