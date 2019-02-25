import React, { Component } from 'react'
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

export default class AllCampaigns extends Component {  
    render(){
        return(
            <Tabs defaultActiveKey="1">
                <TabPane key={1} tab={'QUIENES SOMOS'} >
                    <ol className={'numbers'} >
                        <li>
                                MISION 
                            <div className={'content-ul'} >
                                La misión de la Fundación Portal Mágico es contribuir al buen aprovechamiento del tiempo
                                libre de los niños hospitalizados, dotando los hospitales infantiles con material didáctico,
                                desarrollando diferentes proyectos y campañas que logren sensibilizar a todos los ciudadanos
                                de Colombia, sobre la realidad de la población infantil hospitalizada para que entre todos
                                podamos brindarles alegría durante su hospitalización.
                            </div>
                        </li>
                        <li>
                                VISION
                            <div className={'content-ul'} >

                                Para el año 2025 seremos un modelo de organización que pueda institucionalizar su objeto
                                social en todos los hospitales infantiles del país, mediante la implementación y
                                autosostenimiento de sus diferentes proyectos. Nuestro trabajo y experiencia servirá como
                                modelo a seguir en países donde haya hospitales infantiles con las mismas necesidades que en
                                Colombia.
                            </div>
                        </li>
                        <li>
                                NUESTROS VALORES:
                            <div className={'content-ul'} >                            
                                <ul>
                                    <li>Liderar con el ejemplo </li>
                                    <li>Respeto a la persona </li>
                                    <li>Trabajo en equipo </li>
                                    <li>Compromiso</li>
                                    <li>Integridad </li>
                                    <li>Transparencia</li>
                                    <li>Profesionalismo</li>
                                    <li>Ética </li>
                                </ul>
                            </div>
                        </li>
                    </ol>
                </TabPane>
                <TabPane key={2} tab={'A QUIENES APOYAMOS HOSPITALES'} >                
                    Llevamos material didáctico a 6 hospitales de Bogotá
                    <ul>
                        <li>HOSPITAL DE LA MISERICORDIA </li>
                        <li>FUNDACIÓN CARIO INFANTIL</li>
                        <li>INSTITUTO NACIONAL DE CARDIOLOGÍA</li>
                        <li>HOSPITAL SAN RAFAEL</li>
                        <li>INSTITUTO DE ORTOPEDIA INFANTIL ROOSEVELT</li>
                        <li>HOSPITAL INFANTIL UNIVERSITARIO SAN JOSÉ</li>
                    </ul>
                </TabPane>
                <TabPane key={3} tab={'NUESTRA META'} >
                    <ul>
                        <li>HOSPITAL DE LA MISERICORDIA – 410 CAMITAS DIA – 149.650 CAMITAS AL AÑO</li>
                        <li>FUNDACIÓN CARIO INFANTIL – 80 CAMITAS DIA – 29.200 CAMITAS AL AÑO</li>
                        <li>INSTITUTO NACIONAL DE CARDIOLOGÍA – 55 CAMITAS DIA – 20.075 CAMITAS AL AÑO</li>
                        <li>HOSPITAL SAN RAFAEL – 40 CAMITAS DIA – 14.600 CAMITAS AL AÑO</li>
                        <li>INSTITUTO DE ORTOPEDIA INFANTIL ROOSEVELT – 80 CAMITAS DIA – 29.200 CAMITAS AL AÑO</li>
                        <li>HOSPITAL INFANTIL UNIVERSITARIO SAN JOSÉ – 60 CAMITAS DIA – 21.900 CAMITAS AL AÑO</li>
                    </ul>
                </TabPane>
                <TabPane key={4} tab={'INVITACION'}>
                    <div>
                        Te invitamos a contribuir a la felicidad de nuestros niños hospitalizados haciendo parte de
                        nuestros proyectos productivos y divulgándolos entre tus familiares y amigos. En corto tiempo
                        una gran comunidad estará regalando sonrisas a uno o más niños y mejorando sus vidas, es tu
                        deber y tu responsabilidad hacer feliz a un niño.
                    </div>
                </TabPane>
            </Tabs>
        )
    }
}
