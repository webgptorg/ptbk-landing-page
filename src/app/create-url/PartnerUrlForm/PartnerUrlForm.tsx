'use client';
import { QrCode } from '@/components/QrCode/QrCode';
import { keepUnused } from '@/organization/keepUnused';
import { really_any } from '@/organization/really_any';
import { classNames } from '@/utils/classNames';
import { normalizeTo_snake_case, spaceTrim } from '@promptbook/utils';
import { useMemo, useRef, useState } from 'react';
import { NEXT_PUBLIC_URL } from '../../../../config';
import styles from './PartnerUrlForm.module.css';

interface PartnerUrlFormProps {
    /**
     * Optional CSS class name which will be added to root element
     */
    readonly className?: string;
}

/**
 * Renders a form that can be used to create a partner URLs
 */
export function PartnerUrlForm(props: PartnerUrlFormProps): JSX.Element {
    const { className } = props;

    const formRef = useRef<HTMLFormElement>(null);
    const [partnerUrlData, setPartnerUrlData] = useState<Record<string, string>>({});

    const partnerUrl = useMemo(() => {
        const partnerUrl = new URL(NEXT_PUBLIC_URL);

        // console.log(formRef.current?.dataset);

        if (partnerUrlData.partner) {
            partnerUrlData.utm_campaign = `partner-${partnerUrlData.partner}`;
        }

        for (let [key, value] of Object.entries(partnerUrlData)) {
            value = spaceTrim(value);

            if (value === '') {
                continue;
            }

            if (key.startsWith('is') && value === 'on') {
                value = '1';
            }

            if (!key.startsWith('utm_')) {
                key = normalizeTo_snake_case(`test_${key}`);
            }

            partnerUrl.searchParams.set(key, value);
        }

        return partnerUrl;
    }, [partnerUrlData]);

    return (
        <div className={classNames(styles.PartnerUrlForm, className)}>
            <form
                className={styles.input}
                ref={formRef}
                onChange={(event) => {
                    keepUnused(event);

                    const formData = new FormData(formRef.current!);
                    const partnerUrlData = Object.fromEntries(formData.entries());
                    setPartnerUrlData(partnerUrlData as really_any);
                }}
            >
                {JSON.stringify(partnerUrlData, null, 4)}

                <div className={styles.field}>
                    <label>
                        <p>UTM medium:</p>
                        <input name="utm_medium" placeholder="social" type="text" />
                    </label>
                    <p className={styles.note}>
                        Used to identify a medium of delivery, for example social, display, cpm, ppc, cpc, organic,
                        affiliate, email, referral,...
                    </p>
                </div>
                <div className={styles.field}>
                    <label>
                        <p>UTM Source:</p>
                        <input name="utm_source" placeholder="facebook" type="text" />
                    </label>
                    <p className={styles.note}>
                        Used to identify a source of delivery, for example facebook, google, youtube, linkedin...
                    </p>
                </div>
                <div className={styles.field}>
                    <label>
                        <p>UTM Content:</p>
                        <input name="utm_content" placeholder="post-2025-05-05-001" type="text" />
                    </label>
                    <p className={styles.note}>
                        Used to differentiate ads or links that point to the same URL, for example call-to-action,
                        header-image, end-banner, sidebar, footer, post-2023-12-19-001,...
                    </p>
                </div>

                <div className={styles.field}>
                    <label>
                        <p>Claim:</p>
                        <textarea name="claim" />
                    </label>
                </div>

                <div className={styles.field}>
                    <label>
                        <p>Show unapproved testimonials:</p>
                        <input name="is_unapproved_testimonials_shown" type="checkbox" />
                    </label>
                </div>

                <div className={styles.field}>
                    <label>
                        <p>Role of Pavol Hejný:</p>
                        <textarea name="pavol_role" />
                    </label>
                </div>

                <div className={styles.field}>
                    <label>
                        <p>Role of Jiří Jahn:</p>
                        <textarea name="jiri_role" />
                    </label>
                </div>
            </form>

            <div className={styles.output}>
                <input type="text" readOnly value={partnerUrl.href} />

                <button
                    data-button-type="call-to-action"
                    className="button"
                    onClick={() => {
                        navigator.clipboard.writeText(partnerUrl.href);
                    }}
                >
                    Copy
                </button>

                <div className={styles.qrCodeContainer}>
                    <QrCode
                        className={styles.QrCode}
                        text={partnerUrl.href}
                        margin={0}
                        color={{
                            dark: '#000000',
                            light: '#ffffff00',
                        }}
                    />
                </div>

                <div className={styles.previewIframeContainer}>
                    <iframe src={partnerUrl.href} loading="lazy" className={styles.previewIframe} />{' '}
                </div>
            </div>
        </div>
    );
}

/**
 * TODO: !! Allow to pick entry page
 * TODO: !! Normalize position of GET parameters
 * TODO: !! Normalize GET parameters to lowercase, hamburgerCase
 * TODO: Backup to localstorage
 * TODO: Persist created links
 * TODO: Add here link shortener as iframe/link
 * TODO: Integrate here link shortener
 */
