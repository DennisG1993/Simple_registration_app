import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {Menu} from "antd";

const NavigationButtons = ({routesConfig = []}) => {
    const renderNavButtons = () => {
        return routesConfig.map(({path, label}, index) => {
            return (
                <Menu.Item key={index}>
                    <Link to={path} style={{textDecoration: 'none', color: 'unset'}}>
                        {label}
                    </Link>
                </Menu.Item>

            );
        });
    }

    return (
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
            {renderNavButtons()}
        </Menu>
    );
}

NavigationButtons.propTypes = {
    routesConfig: PropTypes.arrayOf(PropTypes.shape({
        path: PropTypes.string,
        label: PropTypes.string,
    }))
}

export default NavigationButtons;