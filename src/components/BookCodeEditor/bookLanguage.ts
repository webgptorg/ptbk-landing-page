/**
 * Note: [🚒] This should not be source-of-truth, it should be generated from Promptbook engine parser and exported from `@promptbook/book-language`
 */

/**
 * Registers the 'book' language with Monaco Editor
 * This must be called before using the 'book' language in Monaco
 *
 * @param monaco The monaco editor instance
 */
export function registerBookLanguage(monaco: typeof import('monaco-editor')) {
    // Register the language if it hasn't been registered already
    if (!monaco.languages.getLanguages().some((lang) => lang.id === 'book')) {
        // Register the 'book' language
        monaco.languages.register({
            id: 'book',
            extensions: ['.book', '.book.md', '.ptbk', '.ptbk.md'],
            aliases: ['Book', 'book', 'Promptbook'],
        });

        // Define tokenizer for syntax highlighting
        monaco.languages.setMonarchTokensProvider('book', {
            tokenizer: {
                root: [
                    // Headers
                    [
                        /^(#{1,6})(\s+)(.+)$/,
                        ['punctuation.definition.heading.book', 'white', 'entity.name.section.book'],
                    ],

                    // Commands
                    [
                        /^(\s*(?:[-*+]|\d+[.)])\s*)?(SECTION|EXPECT|FORMAT|JOKER|MODEL|PARAMETER|POSTPROCESS|BOOK_VERSION|FORMFACTOR|URL|KNOWLEDGE|ACTION|INSTRUMENT|PERSONA|FOREACH|BOILERPLATE|EXAMPLE|SAMPLE)/,
                        'keyword.command.$2.book',
                    ],

                    // Code blocks
                    [/^(\s*)(```|~~~)(.*)$/, { token: 'markup.fenced_code.block.book', next: '@codeblock' }],

                    // Inline formatting
                    [/\*\*([^*]+)\*\*/, 'markup.bold.book'],
                    [/\*([^*]+)\*/, 'markup.italic.book'],
                    [/`([^`]+)`/, 'markup.inline.raw.string.book'],
                    [/\[([^\]]+)\]\(([^)]+)\)/, ['string.other.link.title.book', 'markup.underline.link.book']],
                    [/\{([^}]+)\}/, 'variable.parameter.book'],

                    // Lists
                    [/^(\s*)([-*+])(\s+)(.*)$/, ['', 'punctuation.definition.list.book', '', 'markup.list.item.book']],
                    [
                        /^(\s*)(\d+[.)])(\s+)(.*)$/,
                        ['', 'punctuation.definition.list.book', '', 'markup.list.item.book'],
                    ],

                    // Block quotes
                    [/^(\s*)(>)(\s+)(.*)$/, ['', 'markup.quote.book', '', 'markup.quote.book']],

                    // Comments
                    [/<!--/, { token: 'comment.block.book', next: '@comment' }],
                ],
                codeblock: [
                    [/^(\s*)(```|~~~)(\s*)$/, { token: 'markup.fenced_code.block.book', next: '@pop' }],
                    [/.*$/, 'source.embedded'],
                ],
                comment: [
                    [/-->/, { token: 'comment.block.book', next: '@pop' }],
                    [/./, 'comment.block.book'],
                ],
            },
        });

        // Load grammar configuration
        monaco.languages.setLanguageConfiguration('book', {
            comments: {
                blockComment: ['<!--', '-->'],
            },
            brackets: [
                ['{', '}'],
                ['[', ']'],
                ['(', ')'],
            ],
            autoClosingPairs: [
                { open: '{', close: '}' },
                { open: '[', close: ']' },
                { open: '(', close: ')' },
                { open: '`', close: '`', notIn: ['string'] },
                { open: '"', close: '"', notIn: ['string'] },
                { open: "'", close: "'", notIn: ['string'] },
            ],
            surroundingPairs: [
                { open: '{', close: '}' },
                { open: '[', close: ']' },
                { open: '(', close: ')' },
                { open: '`', close: '`' },
                { open: '"', close: '"' },
                { open: "'", close: "'" },
                { open: '*', close: '*' },
            ],
            folding: {
                markers: {
                    start: new RegExp('^\\s*<!--\\s*#region\\b.*-->'),
                    end: new RegExp('^\\s*<!--\\s*#endregion\\b.*-->'),
                },
            },
        });
    }
}
