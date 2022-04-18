import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='vh-100'>
            <Accordion className='w-50 mx-auto mt-5'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Difference between authorization and authentication</Accordion.Header>
                    <Accordion.Body>
                        Authentication is used to determine users who claims them as user. Authorization define that what user can access and they cannot.
                        In any application authentication comes first. If user isn't authenticated user cannot access in protected components.
                        After authentication, user authenticate to protected routes. Authentication challenge the user to validate some crediantiality check. Authorization checks whether the user access are allowed.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>What other services does firebase provide other than authentication?</Accordion.Header>
                    <Accordion.Body>
                        Firebase provide us many features such as realtime database, web app hosting, crash notifications, cloud function,remote config,app indexing,dynamic links,AdWords,storage,cloud firestore, cloud messaging service and so on.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        Firebase: We can easily authentication of any application in firebase. Its gives us free backend authentication service for free. It provide us free Google, Github, Twitter, Apple, Email and password etc. login signup services.
                        There are many alternative of firebase authentication. They are AuthO,MongoDB,Passport,OKTA, JSON Web Token, Amazon Cognito, Keycloak
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;