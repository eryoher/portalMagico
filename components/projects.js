import React, { Component } from 'react'
import { connect } from 'react-redux';

import Youtube from './common/youtube'
import Ofertas from './ofertas_donacion';
import { Row, Col } from 'antd';

class Projects extends Component {

    renderProjectsVideos() {
        let rows = []
        const { projects } = this.props
        projects.forEach((project, index) => {
            rows.push(
                <Col span={8} key={index} >
                    <Youtube 
                        video={project.videoUrl}
                    />
                </Col>
            )
            
        });

        return rows;
    }

    render() {
        return (
            <Row className="projects-content">                                
                <Col span={24} >
                    <div className={"title text-center"} >
                        <span className={'color-blue'} >Proyectos </span>
                        <span className={'text-bold'} >de la fundación</span>
                    </div>
                    <div className={'vertical-divider'} />
                </Col>
                <Col span={24} className={'list-videos-projects row'}>                       
                    {this.renderProjectsVideos()}                        
                </Col>                    
                <Col span={16}  > 
                    <center>
                        <img width={'718px'} height={'352px'} src={'https://noticierouniversal.com/wp-content/uploads/2018/03/como-aprender-jugadas-de-ajedrez-piezas-620x349.jpg'} />
                    </center>
                </Col>

                <Col span={8}>
                    <center>
                        <img width={'340px'} height={'352px'} src={'https://www.recreoviral.com/wp-content/uploads/2014/08/Ni%C3%B1os-jugando-en-la-India.jpg'} />
                    </center>
                </Col>
            
                <Col span={24} className={'donaciones-content'} >
                    <div className={'title'} >
                        <span className={'text-bold'} > Ofertas </span>
                        <span className={'color-blue'}> de donación</span>
                    </div>
                    <div className={'vertical-divider'} />
                    <div>
                        <Ofertas />
                    </div>
                </Col>
                <Col span={24} className={'proyectos-productivos '} >
                    <div className={'title'} >
                        <span className={'color-blue'}> Nuestros Proyectos </span>
                        <span className={'text-bold'} > Productivos</span>
                    </div>
                    <div className={'vertical-divider'} />
                    <div>                                    
                        <img width={'100%'} height={'700'} src={"http://localhost/freelance/portalMagicoImagenes/img/proyectos_productivos.png"} />                                 
                    </div>
                </Col>
                    
                
                
            </Row>
        )
    }
}

function mapStateToProps({ projects }){
    return {
        projects
    }
}



export default connect (mapStateToProps)(Projects);
