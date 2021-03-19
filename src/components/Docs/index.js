import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Subnav, SubnavItem, ItemTxt } from './Docs-styled-elements';
// import axios from 'axios';

import Resumes from './Resumes';
import CoverLetters from './CoverLetters';


const Docs = () => {

    // const [content, setContent] = useState(0);

    // useEffect(() => {
    //     console.log('UseEffect', content);
    //     // SIDE EFFECT
    //     const getContent = async () => {
    //         try {
    //             const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    //             console.log(response);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }
    //     getContent();
    //     return () => {
    //         console.log('Cleanup UseEffect');
    //     }
    // }, [content]);


    return (
        <Router>
            <Container>
                <h1>Docs</h1>
                <Subnav>
                    <SubnavItem to="/docs/resumes">
                        <ItemTxt>Resumes</ItemTxt>
                    </SubnavItem>
                    <SubnavItem to="/docs/coverletters">
                        <ItemTxt>Cover Letters</ItemTxt>
                    </SubnavItem>
                </Subnav>
                <div>
                    <Switch>
                        <Route exact path="/docs/resumes">
                            <Resumes />
                        </Route>
                        <Route path="/docs/coverletters">
                            <CoverLetters />
                        </Route>
                    </Switch>
                </div>
            </Container>
        </Router>
    )
}

export default Docs;
