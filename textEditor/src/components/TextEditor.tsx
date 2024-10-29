import React, { useState, ChangeEvent, TextareaHTMLAttributes } from 'react';

const TextEditor: React.FC = () => {

    const [text, setText] = useState<string>('')

    const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value)
    }

    return (
        <div>
            <h2>Text Editor</h2>
            <textarea onChange={handleTextChange} />
            <div>
                <h3>Preview:</h3>
                {text}
            </div>
        </div>
    );
};

export default TextEditor;
