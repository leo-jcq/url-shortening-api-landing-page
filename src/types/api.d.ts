type ErrorCode = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

interface ApiReturnType {
    ok: boolean;
    result?: {
        code: string;
        short_link: string;
        full_short_link: string;
        short_link2: string;
        full_short_link2: string;
        short_link3: string;
        full_short_link3: string;
        share_link: string;
        full_share_link: string;
        original_link: string;
    };
    error_code?: ErrorCode;
    error?: string;
}
