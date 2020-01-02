import React, { useState } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

const NameForm = ({ setName }) => {
    const [nameInput, setNameInput] = useState('');

    const handleChange = e => {
        e.preventDefault();
        setNameInput(e.target.value);
    };

    return (
        <div>
            <p>What is your name?</p>
            <Form onSubmit={e => {
                    e.preventDefault();
                    setName(nameInput);
                }}>
                <FormGroup>
                    <Input
                        type='text'
                        name='name'
                        placeholder='Name'
                        value={nameInput}
                        onChange={handleChange}
                    />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        </div>
    );
};

export default NameForm;