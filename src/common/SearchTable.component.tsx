import {Formik, Form, Field} from 'formik';
import React, {Component} from 'react';
import {DetailPositionInformation} from './constants';

interface SearchTableProps{
    detailPositionList: DetailPositionInformation[];
}

export default class SearchTableComponent extends Component<SearchTableProps>{
    render(){
        return (
            <div className='search-table grid wide'>
                <Formik
                    initialValues={{
                        playerName: '',
                        nationality: '',
                        position: '',

                    }}
                    onSubmit={(values) => {
                        console.log(values)
                    }}
                >
                    <Form>
                        <label htmlFor="playerName">Player Name: </label>
                        <Field id="playerName" name="playerName" placeholder="Player Name"/>

                        <label htmlFor="nationality">Nationality: </label>
                        <Field id="nationality" name="nationality" placeholder="Nationality"/>

                        <label htmlFor="position">Position: </label>
                        <Field id="position" name="position" component="select">
                            <option value="">None</option>
                            {this.props.detailPositionList.map((position, index) => (
                                <option key={index} value={position.Value}>{position.Label}</option>
                            ))}
                        </Field>

                        <button type="submit">Submit</button>
                    </Form>
                </Formik>

            </div>
        )
    }
}