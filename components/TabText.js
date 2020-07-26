import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { NavItem, NavLink} from "shards-react";

class TabText extends Component {
    static propTypes = {
        activeTab: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    };

    onClick = () => {
        const { label, onClick } = this.props;
        onClick(label);
    }

    render() {
        const {
            onClick,
            props: {
                activeTab,
                label,
            },
        } = this;

        let className = 'tab-list-item';
        let linkClass = '';

        if (activeTab === label) {
            className += ' tab-list-active';
            linkClass += 'active';
        }

        return (
            <>
                <NavItem
                    className={className}
                    onClick={onClick}
                >
                    <NavLink href="#" className={linkClass}>
                        {label}
                    </NavLink>
                </NavItem>
                <style jsx>{`
                    .active{
                        background: rgba(0,0,0,.5);
                    }
                `}</style>
            </>
        );
    }
}


export default TabText;