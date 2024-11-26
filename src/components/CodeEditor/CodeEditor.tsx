import MonacoEditor from '@monaco-editor/react';
import { useTouchDeviceDetection } from '../../hooks/useTouchDeviceDetection';
import { classNames } from '../../utils/classNames';
import styles from './CodeEditor.module.css';

type CodeEditorProps = {
    /**
     * If true, the editor always renders as simple <textarea/>
     *
     * [🥢]
     */
    readonly isSimpleEditor?: boolean;

    /**
     * Optional CSS class name which will be added to root element
     */
    readonly className?: string;
} & (
    | {
          /**
           * The code
           *
           * TODO: !!! Probbably not working - see [🍶]
           */
          readonly defaultValue: string;
      }
    | {
          /**
           * The code
           */
          readonly value: string;
      }
) &
    (
        | {
              /**
               * If false or undefined, the code in the editor can be edited
               */
              readonly isReadonly?: false;

              /**
               * If true, files can be dropped into the editor
               */
              readonly isFileDropEnabled: boolean;

              /**
               * Called when the code in editor changes
               */
              onChange(newCode: string): void;
          }
        | {
              /**
               * If true, the editor is read-only
               */
              readonly isReadonly?: true;
          }
    );

/**
 * Renders a Monaco editor OR simple <textarea/> for touch devices
 */
export function CodeEditor(props: CodeEditorProps): JSX.Element {
    const {
        defaultValue,
        isReadonly,
        isSimpleEditor = false, // <-[🥢]
        onChange,
        className,
    } = {
        defaultValue: undefined,
        isReadonly: undefined,
        onChange: undefined,
        // <- TODO: [🦪] Some helper type to be able to use discriminant union types with destructuring
        ...props,
    };

    const isTouchDevice = useTouchDeviceDetection();

    const mode = 'DARK';
    // <- TODO: Use theme dynamically: const [mode] = useLightModeDarkMode();

    if (isTouchDevice || isSimpleEditor /* [🥢] */) {
        return (
            // Note: Ignore `isFileDropEnabled` in simple editor - simple editor is for touch devices and there is usually not expected to drop files
            <textarea
                className={classNames(styles.fallbackEditor, className)}
                onChange={(event) => {
                    const value = event.target.value;

                    if (isReadonly) {
                        throw new Error('Value edited but the <CodeEditor/> is read-only.');
                    }
                    if (!onChange) {
                        throw new Error('Value edited but onChange is not defined.');
                    }

                    onChange(value);
                }}
                {...{ defaultValue }}
            />
        );
    }

    return (
        <MonacoEditor
            theme={{ LIGHT: 'vs-light', DARK: 'vs-dark' }[mode]}
            language={'markdown' /* <- TODO: !! Allow to pass */}
            options={{
                wordWrap: 'on',
                readOnly: isReadonly,
                readOnlyMessage: !isReadonly
                    ? undefined
                    : {
                          value: 'Output can not be edited.',
                          isTrusted: true,
                      },
                lineNumbers: 'on',
                minimap: { enabled: false },

                //     <- TODO: !! Allow to pass
            }}
            onChange={(value) => {
                if (value === undefined) {
                    return;
                }

                if (isReadonly) {
                    throw new Error('Value edited but the <CodeEditor/> is read-only.');
                }
                if (!onChange) {
                    throw new Error('Value edited but onChange is not defined.');
                }

                onChange(value);
            }}
            {...{ defaultValue }}
        />
    );
}
