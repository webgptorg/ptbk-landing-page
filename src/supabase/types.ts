export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
    graphql_public: {
        Tables: {
            [_ in never]: never;
        };
        Views: {
            [_ in never]: never;
        };
        Functions: {
            graphql: {
                Args: {
                    operationName?: string;
                    query?: string;
                    variables?: Json;
                    extensions?: Json;
                };
                Returns: Json;
            };
        };
        Enums: {
            [_ in never]: never;
        };
        CompositeTypes: {
            [_ in never]: never;
        };
    };
    public: {
        Tables: {
            App: {
                Row: {
                    aippConfiguration: Json | null;
                    aippType: Database['public']['Enums']['aipp_type'] | null;
                    createdAt: string;
                    createdVia: string | null;
                    customCss: string | null;
                    customJavascript: string | null;
                    id: number;
                    integrationId: string | null;
                    note: string | null;
                    origins: string[] | null;
                    ownerEmail: string | null;
                    source: Json | null;
                    title: string | null;
                    toolsConfiguration: Json | null;
                    updatedAt: string | null;
                };
                Insert: {
                    aippConfiguration?: Json | null;
                    aippType?: Database['public']['Enums']['aipp_type'] | null;
                    createdAt?: string;
                    createdVia?: string | null;
                    customCss?: string | null;
                    customJavascript?: string | null;
                    id?: number;
                    integrationId?: string | null;
                    note?: string | null;
                    origins?: string[] | null;
                    ownerEmail?: string | null;
                    source?: Json | null;
                    title?: string | null;
                    toolsConfiguration?: Json | null;
                    updatedAt?: string | null;
                };
                Update: {
                    aippConfiguration?: Json | null;
                    aippType?: Database['public']['Enums']['aipp_type'] | null;
                    createdAt?: string;
                    createdVia?: string | null;
                    customCss?: string | null;
                    customJavascript?: string | null;
                    id?: number;
                    integrationId?: string | null;
                    note?: string | null;
                    origins?: string[] | null;
                    ownerEmail?: string | null;
                    source?: Json | null;
                    title?: string | null;
                    toolsConfiguration?: Json | null;
                    updatedAt?: string | null;
                };
                Relationships: [];
            };
            CallToActionClick: {
                Row: {
                    createdAt: string;
                    homeUrl: string | null;
                    id: number;
                    ip: string | null;
                    owner: string | null;
                    ownerNote: string | null;
                    realUrl: string | null;
                    responseData: Json | null;
                    userAgent: string | null;
                    webgptUrl: string | null;
                };
                Insert: {
                    createdAt?: string;
                    homeUrl?: string | null;
                    id?: number;
                    ip?: string | null;
                    owner?: string | null;
                    ownerNote?: string | null;
                    realUrl?: string | null;
                    responseData?: Json | null;
                    userAgent?: string | null;
                    webgptUrl?: string | null;
                };
                Update: {
                    createdAt?: string;
                    homeUrl?: string | null;
                    id?: number;
                    ip?: string | null;
                    owner?: string | null;
                    ownerNote?: string | null;
                    realUrl?: string | null;
                    responseData?: Json | null;
                    userAgent?: string | null;
                    webgptUrl?: string | null;
                };
                Relationships: [];
            };
            ClientEmailVerification: {
                Row: {
                    clientToken: string | null;
                    createdAt: string;
                    id: number;
                    verificationRequestId: number;
                };
                Insert: {
                    clientToken?: string | null;
                    createdAt?: string;
                    id?: number;
                    verificationRequestId: number;
                };
                Update: {
                    clientToken?: string | null;
                    createdAt?: string;
                    id?: number;
                    verificationRequestId?: number;
                };
                Relationships: [
                    {
                        foreignKeyName: 'ClientEmailVerification_verificationRequestId_fkey';
                        columns: ['verificationRequestId'];
                        isOneToOne: false;
                        referencedRelation: 'ClientEmailVerificationRequest';
                        referencedColumns: ['id'];
                    },
                ];
            };
            ClientEmailVerificationRequest: {
                Row: {
                    clientId: string;
                    code: string;
                    createdAt: string;
                    email: string;
                    id: number;
                };
                Insert: {
                    clientId?: string;
                    code: string;
                    createdAt?: string;
                    email: string;
                    id?: number;
                };
                Update: {
                    clientId?: string;
                    code?: string;
                    createdAt?: string;
                    email?: string;
                    id?: number;
                };
                Relationships: [];
            };
            ClientPartnerRegistration: {
                Row: {
                    clientId: string;
                    createdAt: string;
                    id: number;
                    partnerShortcode: string | null;
                    url: string;
                };
                Insert: {
                    clientId: string;
                    createdAt?: string;
                    id?: number;
                    partnerShortcode?: string | null;
                    url: string;
                };
                Update: {
                    clientId?: string;
                    createdAt?: string;
                    id?: number;
                    partnerShortcode?: string | null;
                    url?: string;
                };
                Relationships: [];
            };
            Email: {
                Row: {
                    cc: string | null;
                    content: string | null;
                    createdAt: string;
                    direction: string;
                    from: string | null;
                    id: number;
                    reactingTo: number | null;
                    subject: string | null;
                    to: string | null;
                };
                Insert: {
                    cc?: string | null;
                    content?: string | null;
                    createdAt?: string;
                    direction: string;
                    from?: string | null;
                    id?: number;
                    reactingTo?: number | null;
                    subject?: string | null;
                    to?: string | null;
                };
                Update: {
                    cc?: string | null;
                    content?: string | null;
                    createdAt?: string;
                    direction?: string;
                    from?: string | null;
                    id?: number;
                    reactingTo?: number | null;
                    subject?: string | null;
                    to?: string | null;
                };
                Relationships: [
                    {
                        foreignKeyName: 'public_Email_reactingTo_fkey';
                        columns: ['reactingTo'];
                        isOneToOne: false;
                        referencedRelation: 'Email';
                        referencedColumns: ['id'];
                    },
                ];
            };
            EmailAttempt: {
                Row: {
                    createdAt: string;
                    emailId: number;
                    id: number;
                    isSuccessful: boolean | null;
                    providerName: Database['public']['Enums']['email_provider_name'] | null;
                    raw: Json | null;
                };
                Insert: {
                    createdAt?: string;
                    emailId: number;
                    id?: number;
                    isSuccessful?: boolean | null;
                    providerName?: Database['public']['Enums']['email_provider_name'] | null;
                    raw?: Json | null;
                };
                Update: {
                    createdAt?: string;
                    emailId?: number;
                    id?: number;
                    isSuccessful?: boolean | null;
                    providerName?: Database['public']['Enums']['email_provider_name'] | null;
                    raw?: Json | null;
                };
                Relationships: [
                    {
                        foreignKeyName: 'public_EmailAttempt_emailId_fkey';
                        columns: ['emailId'];
                        isOneToOne: false;
                        referencedRelation: 'Email';
                        referencedColumns: ['id'];
                    },
                ];
            };
            EmailInboundQueue: {
                Row: {
                    createdAt: string;
                    error: Json | null;
                    id: number;
                    inboundEmailId: number | null;
                    outboundEmailId: number | null;
                    providerName: Database['public']['Enums']['email_provider_name'] | null;
                    rawEmail: string | null;
                    status: Database['public']['Enums']['queue_status'] | null;
                    updatedAt: string | null;
                };
                Insert: {
                    createdAt?: string;
                    error?: Json | null;
                    id?: number;
                    inboundEmailId?: number | null;
                    outboundEmailId?: number | null;
                    providerName?: Database['public']['Enums']['email_provider_name'] | null;
                    rawEmail?: string | null;
                    status?: Database['public']['Enums']['queue_status'] | null;
                    updatedAt?: string | null;
                };
                Update: {
                    createdAt?: string;
                    error?: Json | null;
                    id?: number;
                    inboundEmailId?: number | null;
                    outboundEmailId?: number | null;
                    providerName?: Database['public']['Enums']['email_provider_name'] | null;
                    rawEmail?: string | null;
                    status?: Database['public']['Enums']['queue_status'] | null;
                    updatedAt?: string | null;
                };
                Relationships: [
                    {
                        foreignKeyName: 'public_EmailInboundQueue_inboundEmail_fkey';
                        columns: ['inboundEmailId'];
                        isOneToOne: false;
                        referencedRelation: 'Email';
                        referencedColumns: ['id'];
                    },
                    {
                        foreignKeyName: 'public_EmailInboundQueue_outboundEmail_fkey';
                        columns: ['outboundEmailId'];
                        isOneToOne: false;
                        referencedRelation: 'Email';
                        referencedColumns: ['id'];
                    },
                ];
            };
            FormResponse: {
                Row: {
                    createdAt: string;
                    homeUrl: string | null;
                    id: number;
                    ip: string | null;
                    owner: string | null;
                    ownerNote: string | null;
                    realUrl: string | null;
                    responseData: Json | null;
                    userAgent: string | null;
                    webgptUrl: string | null;
                };
                Insert: {
                    createdAt?: string;
                    homeUrl?: string | null;
                    id?: number;
                    ip?: string | null;
                    owner?: string | null;
                    ownerNote?: string | null;
                    realUrl?: string | null;
                    responseData?: Json | null;
                    userAgent?: string | null;
                    webgptUrl?: string | null;
                };
                Update: {
                    createdAt?: string;
                    homeUrl?: string | null;
                    id?: number;
                    ip?: string | null;
                    owner?: string | null;
                    ownerNote?: string | null;
                    realUrl?: string | null;
                    responseData?: Json | null;
                    userAgent?: string | null;
                    webgptUrl?: string | null;
                };
                Relationships: [];
            };
            ImagePromptExecution: {
                Row: {
                    clientId: string | null;
                    createdAt: string;
                    id: number;
                    prompt: Json | null;
                    promptAt: string | null;
                    promptContent: string | null;
                    ptbkUrl: string | null;
                    rawResponse: Json | null;
                    result: Json | null;
                    resultAt: string | null;
                    resultSrc: string | null;
                    usedModel: string | null;
                };
                Insert: {
                    clientId?: string | null;
                    createdAt?: string;
                    id?: number;
                    prompt?: Json | null;
                    promptAt?: string | null;
                    promptContent?: string | null;
                    ptbkUrl?: string | null;
                    rawResponse?: Json | null;
                    result?: Json | null;
                    resultAt?: string | null;
                    resultSrc?: string | null;
                    usedModel?: string | null;
                };
                Update: {
                    clientId?: string | null;
                    createdAt?: string;
                    id?: number;
                    prompt?: Json | null;
                    promptAt?: string | null;
                    promptContent?: string | null;
                    ptbkUrl?: string | null;
                    rawResponse?: Json | null;
                    result?: Json | null;
                    resultAt?: string | null;
                    resultSrc?: string | null;
                    usedModel?: string | null;
                };
                Relationships: [];
            };
            Partner: {
                Row: {
                    createdAt: string;
                    id: number;
                    note: string | null;
                    shortcode: string;
                };
                Insert: {
                    createdAt?: string;
                    id?: number;
                    note?: string | null;
                    shortcode: string;
                };
                Update: {
                    createdAt?: string;
                    id?: number;
                    note?: string | null;
                    shortcode?: string;
                };
                Relationships: [];
            };
            PromptbookFeedback: {
                Row: {
                    clientId: string | null;
                    createdAt: string;
                    defaultValue: string | null;
                    id: number;
                    likedStatus: string | null;
                    note: string | null;
                    value: string | null;
                };
                Insert: {
                    clientId?: string | null;
                    createdAt?: string;
                    defaultValue?: string | null;
                    id?: number;
                    likedStatus?: string | null;
                    note?: string | null;
                    value?: string | null;
                };
                Update: {
                    clientId?: string | null;
                    createdAt?: string;
                    defaultValue?: string | null;
                    id?: number;
                    likedStatus?: string | null;
                    note?: string | null;
                    value?: string | null;
                };
                Relationships: [];
            };
            PromptExecution: {
                Row: {
                    appId: string | null;
                    createdAt: string;
                    id: number;
                    promptAt: string | null;
                    promptContent: string | null;
                    promptModelRequirements: Json | null;
                    promptParameters: Json | null;
                    ptpUrl: string | null;
                    rawResponse: Json | null;
                    resultAt: string | null;
                    resultContent: string | null;
                    usedModel: string | null;
                    userId: string | null;
                };
                Insert: {
                    appId?: string | null;
                    createdAt?: string;
                    id?: number;
                    promptAt?: string | null;
                    promptContent?: string | null;
                    promptModelRequirements?: Json | null;
                    promptParameters?: Json | null;
                    ptpUrl?: string | null;
                    rawResponse?: Json | null;
                    resultAt?: string | null;
                    resultContent?: string | null;
                    usedModel?: string | null;
                    userId?: string | null;
                };
                Update: {
                    appId?: string | null;
                    createdAt?: string;
                    id?: number;
                    promptAt?: string | null;
                    promptContent?: string | null;
                    promptModelRequirements?: Json | null;
                    promptParameters?: Json | null;
                    ptpUrl?: string | null;
                    rawResponse?: Json | null;
                    resultAt?: string | null;
                    resultContent?: string | null;
                    usedModel?: string | null;
                    userId?: string | null;
                };
                Relationships: [];
            };
            Scraped: {
                Row: {
                    createdAt: string;
                    description: string | null;
                    domain: string | null;
                    error: Json | null;
                    id: number;
                    keywords: string[] | null;
                    performance: Json | null;
                    screenshots: Json | null;
                    technologies: Json | null;
                    title: string | null;
                    url: string | null;
                };
                Insert: {
                    createdAt?: string;
                    description?: string | null;
                    domain?: string | null;
                    error?: Json | null;
                    id?: number;
                    keywords?: string[] | null;
                    performance?: Json | null;
                    screenshots?: Json | null;
                    technologies?: Json | null;
                    title?: string | null;
                    url?: string | null;
                };
                Update: {
                    createdAt?: string;
                    description?: string | null;
                    domain?: string | null;
                    error?: Json | null;
                    id?: number;
                    keywords?: string[] | null;
                    performance?: Json | null;
                    screenshots?: Json | null;
                    technologies?: Json | null;
                    title?: string | null;
                    url?: string | null;
                };
                Relationships: [];
            };
            SdkApiKey: {
                Row: {
                    apiKey: string;
                    conditions: Json | null;
                    createdAt: string;
                    id: number;
                    note: string | null;
                    partnerId: number;
                    permissions: Json | null;
                    validUntil: string | null;
                };
                Insert: {
                    apiKey: string;
                    conditions?: Json | null;
                    createdAt?: string;
                    id?: number;
                    note?: string | null;
                    partnerId: number;
                    permissions?: Json | null;
                    validUntil?: string | null;
                };
                Update: {
                    apiKey?: string;
                    conditions?: Json | null;
                    createdAt?: string;
                    id?: number;
                    note?: string | null;
                    partnerId?: number;
                    permissions?: Json | null;
                    validUntil?: string | null;
                };
                Relationships: [
                    {
                        foreignKeyName: 'public_SdkApiKey_partnerId_fkey';
                        columns: ['partnerId'];
                        isOneToOne: false;
                        referencedRelation: 'Partner';
                        referencedColumns: ['id'];
                    },
                ];
            };
            SdkTask: {
                Row: {
                    clientId: string;
                    createdAt: string;
                    externalId: string;
                    internalId: number;
                    request: Json;
                    response: Json | null;
                    sdkVersion: string | null;
                    status: Database['public']['Enums']['queue_status'];
                    updatedAt: string | null;
                    webgptVersion: string | null;
                };
                Insert: {
                    clientId: string;
                    createdAt?: string;
                    externalId: string;
                    internalId?: number;
                    request: Json;
                    response?: Json | null;
                    sdkVersion?: string | null;
                    status: Database['public']['Enums']['queue_status'];
                    updatedAt?: string | null;
                    webgptVersion?: string | null;
                };
                Update: {
                    clientId?: string;
                    createdAt?: string;
                    externalId?: string;
                    internalId?: number;
                    request?: Json;
                    response?: Json | null;
                    sdkVersion?: string | null;
                    status?: Database['public']['Enums']['queue_status'];
                    updatedAt?: string | null;
                    webgptVersion?: string | null;
                };
                Relationships: [];
            };
ShortcodeLink: {
    Row: {
        appId: number | null;
        createdAt: string;
        id: number;
        note: string | null;
        ownerEmail: string | null;
        shortcode: string;
        type: Database['public']['Enums']['shortcode_type'] | null;
        url: string[] | null;
        landingPage: string | null;
    };
Insert: {
        appId?: number | null;
        createdAt?: string;
        id?: number;
        note?: string | null;
        ownerEmail?: string | null;
        shortcode: string;
        type?: Database['public']['Enums']['shortcode_type'] | null;
        url?: string[] | null;
        landingPage?: string | null;
    };
Update: {
        appId?: number | null;
        createdAt?: string;
        id?: number;
        note?: string | null;
        ownerEmail?: string | null;
        shortcode?: string;
        type?: Database['public']['Enums']['shortcode_type'] | null;
        url?: string[] | null;
        landingPage?: string | null;
    };
                Relationships: [
                    {
                        foreignKeyName: 'ShortcodeLink_appId_fkey';
                        columns: ['appId'];
                        isOneToOne: false;
                        referencedRelation: 'App';
                        referencedColumns: ['id'];
                    },
                ];
            };
            ShortcodeLinkClick: {
                Row: {
                    clickedAt: string;
                    id: number;
                    ip: string | null;
                    language: string | null;
                    platform: string | null;
                    referer: string | null;
                    shortcodeLinkId: number;
                    userAgent: string | null;
                };
                Insert: {
                    clickedAt?: string;
                    id?: number;
                    ip?: string | null;
                    language?: string | null;
                    platform?: string | null;
                    referer?: string | null;
                    shortcodeLinkId: number;
                    userAgent?: string | null;
                };
                Update: {
                    clickedAt?: string;
                    id?: number;
                    ip?: string | null;
                    language?: string | null;
                    platform?: string | null;
                    referer?: string | null;
                    shortcodeLinkId?: number;
                    userAgent?: string | null;
                };
                Relationships: [
                    {
                        foreignKeyName: 'ShortcodeLinkClick_shortcodeLinkId_fkey';
                        columns: ['shortcodeLinkId'];
                        isOneToOne: false;
                        referencedRelation: 'ShortcodeLink';
                        referencedColumns: ['id'];
                    },
                ];
            };
            Site: {
                Row: {
                    author: string | null;
                    createdAt: string | null;
                    id: number;
                    note: string | null;
                    ownerEmail: string | null;
                    plan: string | null;
                    url: string | null;
                    wallpaperId: string | null;
                };
                Insert: {
                    author?: string | null;
                    createdAt?: string | null;
                    id?: number;
                    note?: string | null;
                    ownerEmail?: string | null;
                    plan?: string | null;
                    url?: string | null;
                    wallpaperId?: string | null;
                };
                Update: {
                    author?: string | null;
                    createdAt?: string | null;
                    id?: number;
                    note?: string | null;
                    ownerEmail?: string | null;
                    plan?: string | null;
                    url?: string | null;
                    wallpaperId?: string | null;
                };
                Relationships: [];
            };
            SupportRequest: {
                Row: {
                    author: string | null;
                    createdAt: string | null;
                    from: string | null;
                    id: number;
                    isSolved: boolean | null;
                    message: string | null;
                    note: string | null;
                };
                Insert: {
                    author?: string | null;
                    createdAt?: string | null;
                    from?: string | null;
                    id?: number;
                    isSolved?: boolean | null;
                    message?: string | null;
                    note?: string | null;
                };
                Update: {
                    author?: string | null;
                    createdAt?: string | null;
                    from?: string | null;
                    id?: number;
                    isSolved?: boolean | null;
                    message?: string | null;
                    note?: string | null;
                };
                Relationships: [];
            };
            Value: {
                Row: {
                    createdAt: string;
                    id: number;
                    key: string | null;
                    note: string | null;
                    validUntil: string | null;
                    value: Json | null;
                };
                Insert: {
                    createdAt?: string;
                    id?: number;
                    key?: string | null;
                    note?: string | null;
                    validUntil?: string | null;
                    value?: Json | null;
                };
                Update: {
                    createdAt?: string;
                    id?: number;
                    key?: string | null;
                    note?: string | null;
                    validUntil?: string | null;
                    value?: Json | null;
                };
                Relationships: [];
            };
            Wallpaper: {
                Row: {
                    analytics: Json;
                    author: string;
                    colorStats: Json | null;
                    contactlist: Json | null;
                    content: string;
                    createdAt: string;
                    executionReport: Json | null;
                    footer: Json | null;
                    id: string;
                    isPublic: boolean;
                    keywords: string[] | null;
                    layoutName: string;
                    linklist: Json | null;
                    menu: Json | null;
                    naturalSize: Json | null;
                    parent: string | null;
                    prompt: string | null;
                    src: string;
                    title: string;
                };
                Insert: {
                    analytics?: Json;
                    author: string;
                    colorStats?: Json | null;
                    contactlist?: Json | null;
                    content: string;
                    createdAt?: string;
                    executionReport?: Json | null;
                    footer?: Json | null;
                    id: string;
                    isPublic?: boolean;
                    keywords?: string[] | null;
                    layoutName?: string;
                    linklist?: Json | null;
                    menu?: Json | null;
                    naturalSize?: Json | null;
                    parent?: string | null;
                    prompt?: string | null;
                    src: string;
                    title: string;
                };
                Update: {
                    analytics?: Json;
                    author?: string;
                    colorStats?: Json | null;
                    contactlist?: Json | null;
                    content?: string;
                    createdAt?: string;
                    executionReport?: Json | null;
                    footer?: Json | null;
                    id?: string;
                    isPublic?: boolean;
                    keywords?: string[] | null;
                    layoutName?: string;
                    linklist?: Json | null;
                    menu?: Json | null;
                    naturalSize?: Json | null;
                    parent?: string | null;
                    prompt?: string | null;
                    src?: string;
                    title?: string;
                };
                Relationships: [];
            };
            WallpaperFeedback: {
                Row: {
                    author: string;
                    createdAt: string;
                    likedStatus: string;
                    note: string | null;
                    wallpaperId: string;
                };
                Insert: {
                    author: string;
                    createdAt?: string;
                    likedStatus: string;
                    note?: string | null;
                    wallpaperId: string;
                };
                Update: {
                    author?: string;
                    createdAt?: string;
                    likedStatus?: string;
                    note?: string | null;
                    wallpaperId?: string;
                };
                Relationships: [
                    {
                        foreignKeyName: 'WallpaperFeedback_wallpaperId_fkey';
                        columns: ['wallpaperId'];
                        isOneToOne: false;
                        referencedRelation: 'Wallpaper';
                        referencedColumns: ['id'];
                    },
                    {
                        foreignKeyName: 'WallpaperFeedback_wallpaperId_fkey';
                        columns: ['wallpaperId'];
                        isOneToOne: false;
                        referencedRelation: 'Wallpaper_random';
                        referencedColumns: ['id'];
                    },
                ];
            };
        };
        Views: {
            ClientEmailVerification_withRequests: {
                Row: {
                    clientId: string | null;
                    clientToken: string | null;
                    code: string | null;
                    createdAt: string | null;
                    email: string | null;
                    verificationRequestId: number | null;
                };
                Relationships: [
                    {
                        foreignKeyName: 'ClientEmailVerification_verificationRequestId_fkey';
                        columns: ['verificationRequestId'];
                        isOneToOne: false;
                        referencedRelation: 'ClientEmailVerificationRequest';
                        referencedColumns: ['id'];
                    },
                ];
            };
            Wallpaper_random: {
                Row: {
                    author: string | null;
                    colorStats: Json | null;
                    content: string | null;
                    createdAt: string | null;
                    id: string | null;
                    isPublic: boolean | null;
                    keywords: string[] | null;
                    nonce: number | null;
                    parent: string | null;
                    prompt: string | null;
                    src: string | null;
                    title: string | null;
                };
                Insert: {
                    author?: string | null;
                    colorStats?: Json | null;
                    content?: string | null;
                    createdAt?: string | null;
                    id?: string | null;
                    isPublic?: boolean | null;
                    keywords?: string[] | null;
                    nonce?: never;
                    parent?: string | null;
                    prompt?: string | null;
                    src?: string | null;
                    title?: string | null;
                };
                Update: {
                    author?: string | null;
                    colorStats?: Json | null;
                    content?: string | null;
                    createdAt?: string | null;
                    id?: string | null;
                    isPublic?: boolean | null;
                    keywords?: string[] | null;
                    nonce?: never;
                    parent?: string | null;
                    prompt?: string | null;
                    src?: string | null;
                    title?: string | null;
                };
                Relationships: [];
            };
        };
        Functions: {
            [_ in never]: never;
        };
        Enums: {
            aipp_type: 'BOOK' | 'CUSTOM' | 'CHAT_PROXY';
            email_provider_name: 'ZEPTOMAIL' | 'SENDGRID';
            queue_status: 'WAITING' | 'PROCESSING' | 'SUCCESS' | 'ERROR';
            shortcode_type: 'PROMPTBOOK_STUDIO_APP' | 'PROMPTBOOK_STUDIO_KNOWLEDGE_SOURCE' | 'CUSTOM';
        };
        CompositeTypes: {
            [_ in never]: never;
        };
    };
};

type PublicSchema = Database[Extract<keyof Database, 'public'>];

export type Tables<
    PublicTableNameOrOptions extends
        | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
        | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
        ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
              Database[PublicTableNameOrOptions['schema']]['Views'])
        : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
          Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
          Row: infer R;
      }
        ? R
        : never
    : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    ? (PublicSchema['Tables'] & PublicSchema['Views'])[PublicTableNameOrOptions] extends {
          Row: infer R;
      }
        ? R
        : never
    : never;

export type TablesInsert<
    PublicTableNameOrOptions extends keyof PublicSchema['Tables'] | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
        ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
        : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
          Insert: infer I;
      }
        ? I
        : never
    : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
          Insert: infer I;
      }
        ? I
        : never
    : never;

export type TablesUpdate<
    PublicTableNameOrOptions extends keyof PublicSchema['Tables'] | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
        ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
        : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
          Update: infer U;
      }
        ? U
        : never
    : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
          Update: infer U;
      }
        ? U
        : never
    : never;

export type Enums<
    PublicEnumNameOrOptions extends keyof PublicSchema['Enums'] | { schema: keyof Database },
    EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
        ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
        : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
    ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
    : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never;

export type CompositeTypes<
    PublicCompositeTypeNameOrOptions extends keyof PublicSchema['CompositeTypes'] | { schema: keyof Database },
    CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
        schema: keyof Database;
    }
        ? keyof Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
        : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
    ? Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
    : PublicCompositeTypeNameOrOptions extends keyof PublicSchema['CompositeTypes']
    ? PublicSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never;
