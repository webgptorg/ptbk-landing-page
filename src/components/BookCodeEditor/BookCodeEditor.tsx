import MonacoEditor from '@monaco-editor/react';
import type { PipelineString } from '@promptbook/types';
import { useTheme } from 'next-themes';
import { LoadingInteractiveImage } from '../LoadingInteractiveImage/LoadingInteractiveImage';
import { registerBookLanguage } from './bookLanguage';

/**
 * Props for the BookCodeEditor component
 */
export type BookCodeEditorProps = {
    /**
     * Optional CSS class name which will be added to root element
     */
    readonly className?: string;

    /**
     * The code
     */
    readonly bookSourcecode: PipelineString;

    /**
     * Link to open the book in Promptbook Studio
     */
    readonly fullStudioUrl: string;
};

/**
 * Renders a Monaco editor to view a book
 *
 * @see https://microsoft.github.io/monaco-editor/
 */
export function BookCodeEditor(props: BookCodeEditorProps): JSX.Element {
    const { className, bookSourcecode, fullStudioUrl } = props;

    const { theme } = useTheme();

    // Function to handle Monaco instance when it's available
    function handleEditorWillMount(monaco: typeof import('monaco-editor')) {
        registerBookLanguage(monaco);
    }

    return (
        <MonacoEditor
            loading={<LoadingInteractiveImage width={60} height={60} />}
            theme={{ light: 'vs-light', dark: 'vs-dark' }[theme || 'dark']}
            language={'book'}
            beforeMount={handleEditorWillMount}
            options={{
                wordWrap: 'on',
                readOnly: true,
                readOnlyMessage: {
                    value: `[◳ Edit in Studio](${fullStudioUrl})`,
                    isTrusted: true,
                    supportHtml: true,
                },
                lineNumbers: 'off', // <- Disable line numbers
                glyphMargin: false, // <- Disable the glyph margin
                folding: false, // <- Disable the folding controls
                lineDecorationsWidth: 10, // <- Set the width of line decorations to 0
                lineNumbersMinChars: 0, // <- Set the minimum width for line numbers to 0
                minimap: { enabled: false },
            }}
            defaultValue={bookSourcecode}
            {...{ className }}
        />
    );
}
