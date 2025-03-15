import { classNames } from '@/utils/classNames';
import { useMemo } from 'react';
import { HtmlContent } from './HtmlContent';
import styles from './MarkdownContent.module.css';
import { markdownConverter } from './markdownConverter';

interface MarkdownContentProps {
    /**
     * Source markdown
     */
    content: string;

    /**
     * Optional CSS class name which will be added to root element
     */
    className?: string;
}

/**
 * Renders given markdown content with optional enhancements and optional editability
 *
 * Note: There are two similar components:
 * - <MarkdownContent/> which renders general markdown content with some enhancements without markdown-markdown editability
 * - <MaxdownContent/> which renders specific flavor of markdown content for WebGPT with markdown-markdown editability
 *
 * @param {IArticleProps} props - The props for the component
 * @returns {JSX.Element} - The JSX element for the article
 */
export function MarkdownContent(props: MarkdownContentProps): JSX.Element {
    const { content: markdownContent, className } = props;

    // [0] const hash = useHash()

    /*
    [🍒]
    const [mode] = useLightModeDarkMode();

    const highlightjsCssSrc = {
        LIGHT: 'https://unpkg.com/@highlightjs/cdn-assets@11.7.0/styles/vs.min.css',
        DARK: 'https://unpkg.com/@highlightjs/cdn-assets@11.7.0/styles/dark.min.css',
    }[mode];
    */

    const htmlContent = useMemo(
        () =>
            markdownConverter
                .makeHtml(markdownContent)
                .split(/<p>\s*<\/p>/g)
                .join('')
                .split('\n')
                .join('<br/>'),
        [markdownContent],
    );

    if (htmlContent === '') {
        // Note: Do not make empty div for empty article
        return <></>;
    }

    // TODO: [0] If not using hash, remove IDs from html
    // [0] const currentSubsection = hash.substring(1);

    return (
        <>
            {/*[🍒] <style>{`@import url('${highlightjsCssSrc}');`}</style>*/}
            <HtmlContent
                content={htmlContent}
                className={classNames(styles.MarkdownContent, className)}

                /*
                [0]
                ref={(element) => {
                    if (!element) {
                        return;
                    }

                    if (currentSubsection) {
                        const section = element.querySelector(`#${currentSubsection}`);

                        if (section) {
                            section.scrollIntoView(true);
                        }
                    }
                }}
                */
            />
        </>
    );
}

/**
 * TODO: [👼] Components <HtmlContent/>, <MarkdownContent/> and <Content> are coupled together more then they should be
 * TODO: [0] Use has if isHashUsed is true
 * TODO: Maybe rename to <Content/> or <MarkdownContent/> or <Markdown/>
 * TODO: [0] Make has work + rename hash to fragment ACRY
 */
