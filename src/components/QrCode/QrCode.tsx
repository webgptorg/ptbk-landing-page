'use client';
import { really_any } from '@/organization/really_any';
import { TODO_any } from '@/organization/TODO_any';
import type { QRCodeRenderersOptions } from 'qrcode';
import QRCodeGenerator from 'qrcode';
import { classNames } from '../../utils/classNames';
import styles from './QrCode.module.css';

interface QrCodeProps extends QRCodeRenderersOptions {
    /**
     * Text which will be encoded into QR code
     */
    text: string;

    /**
     * Optional CSS class name which will be added to root element
     */
    readonly className?: string;
}

/**
 * Renders a QR code
 */
export function QrCode(props: QrCodeProps): JSX.Element {
    const { text, className } = props;

    return (
        <div className={classNames(styles.QrCode, className)}>
            <canvas
                ref={(canvasElement) => {
                    if (!canvasElement) {
                        return;
                    }

                    // Note: Making some manipulation (probbably) due to internal errors of qrcode package
                    const options: QRCodeRenderersOptions = { ...props };
                    delete (options as really_any).href;
                    options.color = options.color || {};

                    /* <- TODO: [☣️] */
                    QRCodeGenerator.toCanvas(canvasElement, text, options, (error: TODO_any) => {
                        if (error) {
                            console.error(error);
                        }
                        // console.log('success!');
                    });
                }}
            />
        </div>
    );
}
