import { MarkdownContent } from '../utils/MarkdownContent/MarkdownContent';

type ArticleSectionProps = {
    children: string;
};

export function ArticleSection(props: ArticleSectionProps) {
    const { children } = props;

    return (
        <div className="relative overflow-hidden p-6">
            <div className="max-w-4xl mx-auto">
                <MarkdownContent>{children}</MarkdownContent>
            </div>
        </div>
    );
}
