import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Grid, SingleResumen } from './Resumes-styled-elements';

const Resumes = ({previewHandler}) => {

    const [content, setContent] = useState([]);

    useEffect(() => {
        console.log('Corriendo useEffect', content);
        // SIDE EFFECT
        const getContent = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                const {data} = response;
                console.log(data);
                setContent(data);
            } catch (error) {
                console.error(error);
            }
        }
        getContent();

        // CLEAN UP FUNCTION
        return () => {
            console.log('Clean and unmounted commponent');
        }
    }, []);

    return (
        <div>
            <h2>Resumes</h2>
            <Grid>
                { content.map(doc => <SingleResumen onClick={ () => previewHandler() } key={doc.id}>CV</SingleResumen>) }
            </Grid>
        </div>
    )
}

export default Resumes; 
