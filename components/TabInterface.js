import React, { Component } from 'react';
import * as PropTypes from 'prop-types';

import Tab from './TabText';
import { Nav, NavItem, NavLink, Card, CardBody } from 'shards-react'

class TabInterface extends Component {
    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired,
    }

    constructor(props) {
        super(props);

        this.state = {
            activeTab: this.props.children[0].props.label,
        };
    }

    onClickTabItem = (tab) => {
        this.setState({ activeTab: tab });
    }

    render() {
        const {
            onClickTabItem,
            props: {
                children,
            },
            state: {
                activeTab,
            }
        } = this;

        return (
            <div className="tabs">
                <Nav fill tabs>
                    {children.map((child) => {
                        const { label } = child.props;

                        return (
                            <Tab
                                activeTab={activeTab}
                                key={label}
                                label={label}
                                onClick={onClickTabItem}
                            />
                        );
                    })}
                </Nav>
                <Card className="m-3" style={{background:'rgba(255,255,255,.1)'}}>
                    <CardBody>
                        <div className="tab-content" style={{color:'lightblue'}}>
                            {children.map((child) => {
                                if (child.props.label !== activeTab) return undefined;
                                return child.props.children;
                            })}
                        </div>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default TabInterface;