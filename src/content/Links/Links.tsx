import { FC, useState } from 'react';
import Link from '../../components/Link/Link';
import LinkInput from '../../components/LinkInput/LinkInput';
import { apiUrl, errorMap } from '../../constants/api';
import useLocalStorage from '../../hooks/useLocalStorage';
import './Links.scss';

const Links: FC = () => {
    const [url, setUrl] = useState('');
    const [linkList, setLinkList] = useLocalStorage<Link[]>('linkList', '[]');

    const handleSubmit = async () => {
        try {
            // Fetch data
            const response = await fetch(`${apiUrl}${url}`);

            if (response.ok) {
                const data: ApiReturnType = await response.json();

                // Verify is everything is ok
                if (data.ok && data.result) {
                    // Add link to the list
                    setLinkList((prevLinkList) => [
                        ...prevLinkList,
                        { original: url, shorten: data.result?.full_short_link ?? '' }
                    ]);
                    // Reset input
                    setUrl('');
                } else if (data.error_code) {
                    // Alert the user
                    alert(errorMap[data.error_code]);
                }
            } else {
                // Alert the user
                alert(JSON.stringify(await response.json()));
            }
        } catch (error) {
            // Alert the user
            alert(error);
        }
    };

    return (
        <div className="links">
            <div className="content">
                <LinkInput value={url} setValue={setUrl} submitAction={handleSubmit} />

                <div className="list">
                    {linkList.map((link) => (
                        <Link key={link.shorten} link={link} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Links;
