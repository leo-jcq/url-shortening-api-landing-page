import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from 'react';
import './LinkInput.scss';

interface LinkInputProps {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    submitAction: () => void;
}

const LinkInput: FC<LinkInputProps> = ({ value, setValue, submitAction }) => {
    const [error, setError] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        setError(false);
    };

    const handleSubmit = () => {
        if (value === null || value === '') {
            setError(true);
        } else {
            submitAction();
        }
    };

    return (
        <div className={`linkInput ${error ? ' error' : ''}`}>
            <div className="inputContainer">
                <input
                    type="text"
                    className="input"
                    id="linkInput"
                    placeholder="Shorten a link here..."
                    value={value}
                    onChange={handleChange}
                />

                <span className="error">Please add a link</span>
            </div>

            <button className="submit" onClick={handleSubmit}>
                Shorten It!
            </button>
        </div>
    );
};

export default LinkInput;
