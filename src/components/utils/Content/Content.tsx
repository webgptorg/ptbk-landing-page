import { useMemo } from 'react';
import { HtmlContent } from './HtmlContent';
import { MarkdownContent } from './MarkdownContent';
import { detectContentFormat } from './detectContentFormat';

interface ContentProps {
    /**
     * Source markdown
     */
    content: string;

    /**
     * Optional CSS class name which will be added to root element
     */
    className?: string;

    /**
     * Are tags <!--font:Poppins--> detected and applied
     *
     * Note: This is only for markdown content
     * Note: When you use this you NEED to include the fonts into the page for example by using <ImportFonts/> component
     */
    isusingFonts?: boolean;

    /**
     * Is enhanced by using openmoji
     */
    isUsingOpenmoji?: boolean;

    /**
     * Is enhanced by adding links, normalize dashes and emojify
     */
    isEnhanced?: boolean;
}

/**
 * Renders given html or markdown content with optional enhancements and optional editability
 *
 * Note: This component renders either <HtmlContent/> or <MarkdownContent/> based on the content format
 *       If you want to render <MaxdownContent/> use it directly
 *
 * @param {IArticleProps} props - The props for the component
 * @returns {JSX.Element} - The JSX element for the article
 */
export function Content(props: ContentProps): JSX.Element {
    const { content, className, isusingFonts, isUsingOpenmoji, isEnhanced } = props;

    const contentFormat = useMemo(() => detectContentFormat(content), [content]);

    return (
        <>
            {contentFormat === 'html' && <HtmlContent {...{ content, className }} />}
            {['markdown', 'text'].includes(contentFormat) && (
                <MarkdownContent
                    {...{
                        content,
                        className,
                        isusingFonts,
                        isUsingOpenmoji,
                        isEnhanced,
                    }}
                />
            )}
        </>
    );
}

/**
 * TODO: [👼] Components <HtmlContent/>, <MarkdownContent/> and <Content> are coupled together more then they should be
 * TODO: [👩‍🦰] Allow to change fonts in <WallpaperContentSection/> or <Content/> or <HtmlContent/>
 * TODO: [👨‍🦰] Show editable hint in <WallpaperContentSection/> or <Content/> or <HtmlContent/>
 */
