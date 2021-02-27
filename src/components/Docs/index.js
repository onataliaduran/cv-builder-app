import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Subnav, SubnavItem, ItemTxt } from './Docs-styled-elements';

import Resumes from './Resumes';
import CoverLetters from './CoverLetters';
{/* <div></div> */}

const Docs = () => {
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
