import { spaceTrim } from '@promptbook/utils';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import styles from './MarkdownContent.module.css';

type MarkdownContentProps = {
    children: string;
};

export function MarkdownContent(props: MarkdownContentProps) {
    let { children } = props;

    children = spaceTrim(children);

    return (
        <ReactMarkdown
            className={styles.MarkdownContent}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
                // Custom styling for list items to ensure proper indentation
                ul: ({ /*node,*/ ...props }) => <ul className="list-disc pl-4 space-y-2" {...props} />,
                li: ({ /*node,*/ ...props }) => <li className="ml-2" {...props} />,
            }}
        >
            {children}
        </ReactMarkdown>
    );
}
