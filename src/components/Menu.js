import React from 'react';
import styled from 'styled-components';
import { Button } from 'reactstrap';

const StyledMenu = styled.div`
    margin-top: 100px;
    display: flex;
    justify-content: center;
`;

const Menu = () => {
    return (
        <StyledMenu>
            <Button>Save</Button>{' '}
            <Button>Load</Button>
        </StyledMenu>
    );
};

export default Menu;