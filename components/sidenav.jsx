import React from 'react';
import { ListItem } from './listitem'
import { Row, Col } from 'react-bootstrap';

import IndexData from '../data/IndexData'

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: IndexData
        }
    }
    render() {
        const { collections } = this.state
        return (
            <Row>
                <Col lg={{ span: 9, offset: 3 }} xs={12} className='sidenav'>
                    {
                        collections.map(({ id, ...otherCollectionProps }) => {
                            if(otherCollectionProps.showSorted && otherCollectionProps.children) {
                                otherCollectionProps.children.sort((a, b) => {
                                    let titleA = a.title;
                                    let titleB = b.title;
                                    if (titleA < titleB) {
                                        return -1;
                                    }
                                    if (titleA > titleB) {
                                        return 1;
                                    }
                                    return 0;
                                });
                            }
                            return (<ListItem key={id} {...otherCollectionProps} />)
                        })
                    }
                </Col>
            </Row>
        )
    }
}

export default SideNav;