import React, { Component } from 'react';

// import Custom Components
import Breadcrumb from '../../common/breadcrumb';
import PageHeader from '../../common/page-header';
import ElementList from '../../features/element-list';
import IconBox from '../../features/icon-box';

class IconBoxes extends Component{
    render() {
        return(
            <div className="main">

                <PageHeader title="Icon Boxes" subTitle="Elements"/>
                <Breadcrumb title="Icon Boxes" parent1={ ["Elements","elements/list"] } />

                <div className="page-content">
                    <div className="container">
                        <h2 className="title mb-4 text-center">Simple Icons <span className="title-separator">/</span> Centered Align <span className="title-separator">/</span> 3 Columns</h2>
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-sm-6">
                                <IconBox boxStyle = "text-center" iconClass="icon-info-circle" title="Quisque a lectus" text="Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue."/>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <IconBox boxStyle="text-center" iconClass="icon-star-o" title="Suspendisse potenti" text="Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat."/>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <IconBox boxStyle = "text-center" iconClass="icon-heart-o" title="Phasellus hendrerit" text="Pellentesque a diam sit amet mi ullamcorper vehicula. Nullam quis massa sit amet nibh viverra malesuada."/>
                            </div>
                        </div>

                        <hr className="mb-6"/>

                        <h2 className="title mb-5 text-center">Simple Icons <span className="title-separator">/</span> Left Align <span className="title-separator">/</span> 3 Columns</h2>
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-sm-6">
                                <IconBox boxStyle = "icon-box-left" iconClass="icon-info-circle" title="Quisque a lectus" text="Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue."/>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <IconBox boxStyle = "icon-box-left" iconClass="icon-star-o" title="Suspendisse potenti" text="Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat."/>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <IconBox boxStyle = "icon-box-left" iconClass="icon-heart-o" title="Phasellus hendrerit" text="Pellentesque a diam sit amet vehicula. Nullam quis massa sit amet nibh viverra malesuada."/>
                            </div>
                        </div>

                        <hr className="mb-6"/>

                        <h2 className="title mb-4 text-center">Circle Icons <span className="title-separator">/</span> Centered Align <span className="title-separator">/</span> 3 Columns</h2>
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-sm-6">
                                <IconBox boxStyle = "icon-box-circle text-center" iconClass="icon-info-circle" title="Quisque a lectus" text="Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue."/>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <IconBox boxStyle = "icon-box-circle text-center" iconClass="icon-star-o" title="Suspendisse potenti" text="Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat."/>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <IconBox boxStyle = "icon-box-circle text-center" iconClass="icon-heart-o" title="Phasellus hendrerit" text="Pellentesque a diam sit amet mi ullamcorper vehicula. Nullam quis massa sit amet nibh viverra malesuada."/>
                            </div>
                        </div>

                        <hr className="mb-6"/>

                        <h2 className="title mb-5 text-center">Circle Icons <span className="title-separator">/</span> Left Align <span className="title-separator">/</span> 3 Columns</h2>
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-sm-6">
                                <IconBox boxStyle = "icon-box-left icon-box-circle" iconClass="icon-info-circle" title="Quisque a lectus" text="Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus augue."/>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <IconBox boxStyle = "icon-box-left icon-box-circle" iconClass="icon-star-o" title="Suspendisse potenti" text="Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate eu erat."/>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <IconBox boxStyle = "icon-box-left icon-box-circle" iconClass="icon-heart-o" title="Phasellus hendrerit" text="Pellentesque a diam sit amet vehicula. Nullam quis massa sit amet nibh viverra malesuada."/>
                            </div>
                        </div>

                        <hr className="mb-6"/>

                        <h2 className="title mb-4 text-center">Simple Icons <span className="title-separator">/</span> Centered Align <span className="title-separator">/</span> 4 Columns</h2>
                        <div className="row justify-content-center">
                            <div className="col-lg-3 col-sm-6">
                                <IconBox boxStyle = "text-center" iconClass="icon-info-circle" title="Quisque a lectus" text="Sed egestas, ante et vulputate volutpat, eros pede semper"/>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <IconBox boxStyle = "text-center" iconClass="icon-star-o" title="Suspendisse potenti" text="Praesent dapibus, neque id cursus faucibus, tortor neque egestas "/>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <IconBox boxStyle = "text-center" iconClass="icon-heart-o" title="Phasellus hendrerit" text="Pellentesque a diam sit amet mi ullamcorper vehicula. "/>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <IconBox boxStyle = "text-center" iconClass="icon-cog" title="Fusce pellentesque" text="Nullam quis massa sit amet nibh viverra malesuada. "/>
                            </div>
                        </div>

                        <hr className="mb-6"/>

                        <h2 className="title mb-5 text-center">Simple Icons <span className="title-separator">/</span> Left Align <span className="title-separator">/</span> 4 Columns</h2>
                        <div className="row justify-content-center">
                            <div className="col-lg-3 col-sm-6">
                                <IconBox boxStyle = "icon-box-left" iconClass = "icon-info-circle" title = "Quisque a lectus" text = "Sed egestas, ante et vulputate volutpat eros"/>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <IconBox boxStyle = "icon-box-left" iconClass = "icon-star-o" title = "Suspendisse potenti" text = "Praesent dapibus, neque id cursus faucibus tortor"/>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <IconBox boxStyle = "icon-box-left" iconClass = "icon-heart-o" title = "Phasellus hendrerit" text = "Pellentesque a diam sit amet vehicula."/>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <IconBox boxStyle = "icon-box-left" iconClass = "icon-cog" title = "Fusce pellentesque" text = "Nullam quis massa sit amet nibh viverra"/>
                            </div>
                        </div>

                        <hr className="mb-6"/>

                        <h2 className="title mb-4 text-center">Circle Icons <span className="title-separator">/</span> Centered Align <span className="title-separator">/</span> 4 Columns</h2>
                        <div className="row justify-content-center">
                            <div className="col-lg-3 col-sm-6">
                                <IconBox boxStyle = "icon-box-circle text-center" iconClass = "icon-info-circle" title = "Quisque a lectus" text = "Sed egestas, ante et vulputate volutpat, eros pede semper" />
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <IconBox boxStyle = "icon-box-circle text-center" iconClass = "icon-star-o" title = "Suspendisse potenti" text = "Praesent dapibus, neque id cursus faucibus, tortor neque egestas" />
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <IconBox boxStyle = "icon-box-circle text-center" iconClass = "icon-heart-o" title = "Phasellus hendrerit" text = "Pellentesque a diam sit amet mi ullamcorper vehicula." />
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <IconBox boxStyle = "icon-box-circle text-center" iconClass = "icon-cog" title = "Fusce pellentesque" text = "Nullam quis massa sit amet nibh viverra malesuada." />
                            </div>
                        </div>
                    </div>
                </div>
                
                <ElementList/>
            </div>
        )
    }
}

export default IconBoxes;