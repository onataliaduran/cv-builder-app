import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Subnav, SubnavItem, ItemTxt } from './Docs-styled-elements';

import Resumes from './Resumes';
import CoverLetters from './CoverLetters';
import Preview from './Preview';


const Docs = () => {

    const [preview, setPreview] = useState(false);

    const previewHandler = () => {
        setPreview(!preview);
    }

    return (
        <Router>
            <Container splited={preview}>
                <div>
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
                                <Resumes previewHandler={previewHandler} />
                            </Route>
                            <Route path="/docs/coverletters">
                                <CoverLetters />
                            </Route>
                        </Switch>
                    </div>
                </div>
                { preview && <Preview /> } 
            </Container>
        </Router>
    )
}

export default Docs;
