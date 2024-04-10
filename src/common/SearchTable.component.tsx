import {Formik, Form, Field} from 'formik';
import React, {Component} from 'react';
import {DetailPositionInformation} from './constants';

interface SearchTableProps{
    detailPositionList: DetailPositionInformation[];
}

export default class SearchTableComponent extends Component<SearchTableProps>{
    render(){
        return (
            <div>
                <Formik
                    initialValues={{
                        playerName: '',
                        nationality: '',
                        position: '',

                    }}
                    onSubmit={() => {}}
                >
                    <Form>
                        <label htmlFor="playerName">Player Name: </label>
                        <Field id="playerName" name="playerName" placeholder="Player Name"/>

                        <label htmlFor="nationality">Nationality: </label>
                        <Field id="nationality" name="nationality" placeholder="Nationality"/>

                        <label htmlFor="position">Position: </label>
                        <Field id="position" name="position" component="select">
                            {this.props.detailPositionList.map(())}
                        </Field>

                        <button type="submit">Submit</button>
                    </Form>
                </Formik>

            </div>
        )
    }
}