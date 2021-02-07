import React from 'react';
import { Layout } from 'antd';
import NavigationButtons from './NavigationButtons';
import Routes, {routesConfig} from '../../Routes';

const { Header, Content, Footer } = Layout;


const Index = () => {
    return (
        <Layout>
            <Header>
             <NavigationButtons routesConfig={routesConfig}/>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Routes/>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Simple registration app</Footer>
        </Layout>
    )
}

export default Index;