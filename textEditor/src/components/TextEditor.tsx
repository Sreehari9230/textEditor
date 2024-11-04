import React, { useState, ChangeEvent } from 'react';
import './css/TextEditor.css'

const TextEditor: React.FC = () => {

    const [text, setText] = useState<string>('')

    const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value)
    }

    return (
        <div style={{   }}>
            <h2>Text Editor</h2>
            <textarea onChange={handleTextChange} value={text} rows={20}
                style={{ width: '99%', padding: '10px', fontSize: '16px' }} /> 
            {/*             <div>
                <h3>Preview:</h3>
                {text}
            </div> */}
        </div>
    );
};

export default TextEditor;
