export const apiUrl = 'https://api.shrtco.de/v2/shorten?url=';

export const errorMap = {
    1: 'No URL specified',
    2: 'Invalid URL',
    3: 'Rate limit reached. Wait a second and try again',
    4: 'Blocked IP-Adress',
    5: 'shrtcode code (slug) already taken/in use',
    6: 'Unknown error',
    7: 'No code specified',
    8: 'Invalid code submitted',
    9: 'Missing required parameters',
    10: 'Trying to shorten a disallowed Link'
};
