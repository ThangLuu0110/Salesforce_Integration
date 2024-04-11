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
                        minAge: '',
                        maxAge: '',
                        nationality: '',
                        position: '',
                        positionDetail: ''
                    }}
                    onSubmit={(values) => {
                        console.log(values)
                    }}
                >
                    <Form>
                        <div className="search-component name">
                            <label className="search-component__label" htmlFor="playerName">Player Name: </label>
                            <Field id="playerName" name="playerName" placeholder="Player Name"/>
                        </div>
                        <div className="search-component age">
                            <label className="search-component__label" htmlFor="playerAge">Player Age: </label>
                            <Field id="minAge" name="minAge" placeholder="From"/> 
                            <Field id="maxAge" name="maxAge" placeholder="To"/>
                        </div>
                        <div className="search-component nationality">
                            <label className="search-component__label" htmlFor="nationality">Nationality: </label>
                            <Field id="nationality" name="nationality" placeholder="Nationality"/>
                        </div>
                        <div className="search-component position">
                            <label className="search-component__label" htmlFor="position">Position: </label>
                            <Field id="position" name="position" component="select"> 
                                <option value="">None</option>
                                {this.props.detailPositionList.map((position, index) => (
                                    <option key={index} value={position.Value}>{position.Label}</option>
                                ))}
                            </Field>
                        </div>
                        <div className="search-component positionDetail">
                            <label className="search-component__label" htmlFor="positionDetail">Detail Position: </label>
                            <Field id="positionDetail" name="positionDetail" component="select"> 
                                <option value="">None</option>
                                {this.props.detailPositionList.map((position, index) => (
                                    <option key={index} value={position.Value}>{position.Label}</option>
                                ))}
                            </Field>
                        </div>
                        <div className="search__button">
                            <button type="submit">Submit</button>
                        </div>
                    </Form>
                </Formik>

            </div>
        )
    }
}