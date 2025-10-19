import { getSupabaseForServer } from '@/supabase/getSupabaseForServer';
import { cache } from 'react';

export const getShortcodeLink = cache(async (shortcode: string) => {
    const { data, error } = await getSupabaseForServer()
        .from('ShortcodeLink')
        .select('id, url, landingPage')
        .eq('shortcode', shortcode)
        .single();

    if (error || !data) {
        return null;
    }

    return data;
});
