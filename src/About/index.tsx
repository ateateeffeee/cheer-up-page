import React, { useState, useEffect } from 'react';

const About: React.FC = () => {
    const [text, setText] = useState<string>('');

    useEffect(() => {
        fetch('/BandBio.txt')
            .then((response) => {
                if (response.ok) {
                    return response.text();
                } else {
                    throw new Error('Failed to fetch the file');
                }
            })
            .then((data) => setText(data))
            .catch((error) => console.error('Error fetching the bio:', error));
    }, []);

    return (
        <div id="about" className="about-page">
            <h1>About Us</h1>
            <div dangerouslySetInnerHTML={{ __html: text }} />
        </div>
    );
};

export default About;
