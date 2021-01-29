import React from 'react';

const Jumbotron = ({appName = 1}) => {
    return (
        <div>
            This is a Jumbotron from App {appName}
        </div>
    );
};

export default Jumbotron;