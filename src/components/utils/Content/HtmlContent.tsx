import parse from 'html-react-parser';

interface HtmlContentProps {
    /**
     * Source html
     */
    content: string;

    /**
     * Optional CSS class name which will be added to root element
     */
    className?: string;
}

/**
 * Renders given html content with optional editability
 */
export function HtmlContent(props: HtmlContentProps): JSX.Element {
    const { content, className } = props;

    const children =
        parse(
            content,
        ); /* <- Note: Using html-react-parser (not dangerouslySetInnerHTML) to avoid react hydration errors */

    return (
        <>
            <div {...{ className }}>{children}</div>
        </>
    );
}

/**
 * TODO: [👼] Components <HtmlContent/>, <MarkdownContent/> and <Content> are coupled together more then they should be
 * TODO: [🧠][💬] Allow to change fonts and do rich text editing
 * TODO: [👩‍🦰] Allow to change fonts in <WallpaperContentSection/> or <Content/> or <HtmlContent/>
 * TODO: [👨‍🦰] Show editable hint in <WallpaperContentSection/> or <Content/> or <HtmlContent/> (<- <HtmlContentEditable/>)
 * TODO: [🕶] Is `element !== document.activeElement` good enough? Isnt document.activeElement sometimes child of element?
 */
