import React, { Component } from 'react';

// import Custom Components
import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';
import ElementList from '../../features/element-list';
import Accordion from '../../features/accordion/accordion';
import Card from '../../features/accordion/card';

class Accordions extends Component {

    render() {
        return (
            <div className="main">
                <PageHeader title="Accordions" subTitle="Elements"/>
                <Breadcrumb title="Accordions" parent1={ ["Elements","elements/list"] } />
                <div className="page-content">
                    <div className="container">
                        <h2 className="title mb-3">Simple Accordions</h2>

                        <div className="row">
                            <div className="col-md-6">
                                <Accordion>
                                    <Card title="Cras ornare tristique elit." expanded="true">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.
                                    </Card>
                                    <Card title="Vivamus vestibulum ntulla">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.
                                    </Card>
                                    <Card title="Praesent placerat risus">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.
                                    </Card>
                                </Accordion>
                            </div>
                            
                            <div className="col-md-6">
                                <Accordion adClass="accordion-plus">
                                    <Card title="Cras ornare tristique elit." expanded="true">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.
                                    </Card>
                                    <Card title="Vivamus vestibulum ntulla">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.
                                    </Card>
                                    <Card title="Praesent placerat risus">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.
                                    </Card>
                                </Accordion>
                            </div>
                        </div>

                        <hr className="mb-4" />

                        <h2 className="title mb-3">Accordion with Icons</h2>

                        <div className="row">
                            <div className="col-md-6">
                                <Accordion adClass="accordion-icon">
                                    <Card title="<i class='icon-star-o'></i>Cras ornare tristique elit." expanded="true">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.
                                    </Card>
                                    <Card title="<i class='icon-info-circle'></i>Vivamus vestibulum ntulla">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.
                                    </Card>
                                    <Card title="<i class='icon-heart-o'></i>Praesent placerat risus">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.
                                    </Card>
                                </Accordion>
                            </div>

                            <div className="col-md-6">
                                <Accordion adClass="accordion-icon">
                                    <Card title="<i class='icon-star-o'></i>Cras ornare tristique elit." expanded="true" adClass="card-box bg-light">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.
                                    </Card>
                                    <Card title="<i class='icon-info-circle'></i>Vivamus vestibulum ntulla" adClass="card-box bg-light">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.
                                    </Card>
                                    <Card title="<i class='icon-heart-o'></i>Praesent placerat risus" adClass="card-box bg-light">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.
                                    </Card>
                                </Accordion>
                            </div>
                        </div>

                        <hr className="mb-4" />

                        <h2 className="title mb-3">Accordions on Background</h2>

                        <div className="row">
                            <div className="col-md-6">
                                <Accordion adClass="accordion-rounded">
                                    <Card title="Cras ornare tristique elit." expanded="true" adClass="card-box card-sm bg-light">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.
                                    </Card>
                                    <Card title="Vivamus vestibulum ntulla" adClass="card-box card-sm bg-light">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.
                                    </Card>
                                    <Card title="Praesent placerat risus" adClass="card-box card-sm bg-light">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.
                                    </Card>
                                </Accordion>
                            </div>

                            <div className="col-md-6">
                                <Accordion adClass="accordion-rounded accordion-plus">
                                    <Card title="Cras ornare tristique elit." expanded="true" adClass="card-box card-sm bg-white">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.
                                    </Card>
                                    <Card title="Vivamus vestibulum ntulla"  adClass="card-box card-sm bg-white">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.
                                    </Card>
                                    <Card title="Praesent placerat risus"  adClass="card-box card-sm bg-white">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.
                                    </Card>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>

                <ElementList />
            </div>
        );
    }
}

export default Accordions;