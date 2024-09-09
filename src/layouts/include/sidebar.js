import React from 'react'
import { Link,useLocation } from 'react-router-dom'
function Sidebar() {

	const activeMenu=(e)=>{
        document.querySelectorAll('.submenu').forEach(
            function(e){
                e.classList.remove('active');
            }
        )
        const childElement = e.target.parentElement.querySelector('.submenu');
        if(childElement && childElement.classList.contains('submenu')){
            childElement.classList.add('active');
        }
    }

	const location = useLocation();
	const isLinkActive = (path)=>{
        return location.pathname == path ? 'active' : "";
    }
  return (
       <div id="left" >
            <div className="media user-media well-small">
                <a className="user-link" href="#">
                    <img className="media-object img-thumbnail user-img" alt="User Picture" src="assets/img/user.gif" />
                </a>
                <br />
                <div className="media-body">
                    <h5 className="media-heading"> Joe Romlin</h5>
                    <ul className="list-unstyled user-info">
                        
                        <li>
                             <a className="btn btn-success btn-xs btn-circle" style={{ width: "10px", height: "12px" }}></a> Online
                           
                        </li>
                       
                    </ul>
                </div>
                <br />
            </div>

            <ul id="menu" className="collapse">

                
                <li className="panel active">
                    <a href="index.html" >
                        <i className="icon-table"></i> Dashboard
	   
                       
                    </a>                   
                </li>



                <li className="panel ">
                    <a href="#" data-parent="#menu" data-toggle="collapse" className="accordion-toggle" data-target="#component-nav">
                        <i className="icon-tasks"> </i> UI Elements     
	   
                        <span className="pull-right">
                          <i className="icon-angle-left"></i>
                        </span>
                       &nbsp; <span className="label label-default">10</span>&nbsp;
                    </a>
                    <ul className="collapse" id="component-nav">
                       
                        <li className=""><a href="button.html"><i className="icon-angle-right"></i> Buttons </a></li>
                         <li className=""><a href="icon.html"><i className="icon-angle-right"></i> Icons </a></li>
                        <li className=""><a href="progress.html"><i className="icon-angle-right"></i> Progress </a></li>
                        <li className=""><a href="tabs_panels.html"><i className="icon-angle-right"></i> Tabs & Panels </a></li>
                        <li className=""><a href="notifications.html"><i className="icon-angle-right"></i> Notification </a></li>
                         <li className=""><a href="more_notifications.html"><i className="icon-angle-right"></i> More Notification </a></li>
                        <li className=""><a href="modals.html"><i className="icon-angle-right"></i> Modals </a></li>
                          <li className=""><a href="wizard.html"><i className="icon-angle-right"></i> Wizard </a></li>
                         <li className=""><a href="sliders.html"><i className="icon-angle-right"></i> Sliders </a></li>
                        <li className=""><a href="typography.html"><i className="icon-angle-right"></i> Typography </a></li>
                    </ul>
                </li>
                <li className="panel ">
                    <a href="#" data-parent="#menu" data-toggle="collapse" className="accordion-toggle collapsed" data-target="#form-nav">
                        <i className="icon-pencil"></i> Forms
	   
                        <span className="pull-right">
                            <i className="icon-angle-left"></i>
                        </span>
                          &nbsp; <span className="label label-success">5</span>&nbsp;
                    </a>
                    <ul className="collapse" id="form-nav">
                        <li className=""><a href="forms_general.html"><i className="icon-angle-right"></i> General </a></li>
                        <li className=""><a href="forms_advance.html"><i className="icon-angle-right"></i> Advance </a></li>
                        <li className=""><a href="forms_validation.html"><i className="icon-angle-right"></i> Validation </a></li>
                        <li className=""><a href="forms_fileupload.html"><i className="icon-angle-right"></i> FileUpload </a></li>
                        <li className=""><a href="forms_editors.html"><i className="icon-angle-right"></i> WYSIWYG / Editor </a></li>
                    </ul>
                </li>

                <li className="panel">
                    <a href="#" data-parent="#menu" data-toggle="collapse" className="accordion-toggle" data-target="#pagesr-nav">
                        <i className="icon-table"></i> Pages
	   
                        <span className="pull-right">
                            <i className="icon-angle-left"></i>
                        </span>
                          &nbsp; <span className="label label-info">6</span>&nbsp;
                    </a>
                    <ul className="collapse" id="pagesr-nav">
                        <li><a href="pages_calendar.html"><i className="icon-angle-right"></i> Calendar </a></li>
                        <li><a href="pages_timeline.html"><i className="icon-angle-right"></i> Timeline </a></li>
                        <li><a href="pages_social.html"><i className="icon-angle-right"></i> Social </a></li>
                        <li><a href="pages_pricing.html"><i className="icon-angle-right"></i> Pricing </a></li>
                        <li><a href="pages_offline.html"><i className="icon-angle-right"></i> Offline </a></li>
                        <li><a href="pages_uc.html"><i className="icon-angle-right"></i> Under Construction </a></li>
                    </ul>
                </li>
                <li className="panel">
                    <a href="#" data-parent="#menu" data-toggle="collapse" className="accordion-toggle" data-target="#chart-nav">
                        <i className="icon-bar-chart"></i> Charts
	   
                        <span className="pull-right">
                            <i className="icon-angle-left"></i>
                        </span>
                          &nbsp; <span className="label label-danger">4</span>&nbsp;
                    </a>
                    <ul className="collapse" id="chart-nav">



                        <li><a href="charts_line.html"><i className="icon-angle-right"></i> Line Charts </a></li>
                        <li><a href="charts_bar.html"><i className="icon-angle-right"></i> Bar Charts</a></li>
                        <li><a href="charts_pie.html"><i className="icon-angle-right"></i> Pie Charts </a></li>
                        <li><a href="charts_other.html"><i className="icon-angle-right"></i> other Charts </a></li>
                    </ul>
                </li>

                <li className="panel">
                    <a href="#" data-parent="#menu" data-toggle="collapse" className="accordion-toggle" data-target="#DDL-nav">
                        <i className=" icon-sitemap"></i> 3 Level Menu
	   
                        <span className="pull-right">
                            <i className="icon-angle-left"></i>
                        </span>
                    </a>
                    <ul className="collapse" id="DDL-nav">
                        <li>
                            <a href="#" data-parent="#DDL-nav" data-toggle="collapse" className="accordion-toggle" data-target="#DDL1-nav">
                                <i className="icon-sitemap"></i>&nbsp; Demo Link 1
	   
                        <span className="pull-right" style={{marginRight: "20px;"}}>
                            <i className="icon-angle-left"></i>
                        </span>


                            </a>
                            <ul className="collapse" id="DDL1-nav">
                                <li>
                                    <a href="#"><i className="icon-angle-right"></i> Demo Link 1 </a>

                                </li>
                                <li>
                                    <a href="#"><i className="icon-angle-right"></i> Demo Link 2 </a></li>
                                <li>
                                    <a href="#"><i className="icon-angle-right"></i> Demo Link 3 </a></li>

                            </ul>

                        </li>
                        <li><a href="#"><i className="icon-angle-right"></i> Demo Link 2 </a></li>
                        <li><a href="#"><i className="icon-angle-right"></i> Demo Link 3 </a></li>
                        <li><a href="#"><i className="icon-angle-right"></i> Demo Link 4 </a></li>
                    </ul>
                </li>
                <li className="panel">
                    <a href="#" data-parent="#menu" data-toggle="collapse" className="accordion-toggle" data-target="#DDL4-nav">
                        <i className=" icon-folder-open-alt"></i> 4 Level Menu
	   
                        <span className="pull-right">
                            <i className="icon-angle-left"></i>
                        </span>
                    </a>
                    <ul className="collapse" id="DDL4-nav">
                        <li>
                            <a href="#" data-parent="DDL4-nav" data-toggle="collapse" className="accordion-toggle" data-target="#DDL4_1-nav">
                                <i className="icon-sitemap"></i>&nbsp; Demo Link 1
	   
                        <span className="pull-right" style={{marginRight: "20px;"}}>
                            <i className="icon-angle-left"></i>
                        </span>


                            </a>
                            <ul className="collapse" id="DDL4_1-nav">
                                <li>

                                    <a href="#" data-parent="#DDL4_1-nav" data-toggle="collapse" className="accordion-toggle" data-target="#DDL4_2-nav">
                                        <i className="icon-sitemap"></i>&nbsp; Demo Link 1
	   
                        <span className="pull-right" style={{marginRight: "20px;"}}>
                            <i className="icon-angle-left"></i>
                        </span>
                                    </a>
                                    <ul className="collapse" id="DDL4_2-nav">



                                        <li><a href="#"><i className="icon-angle-right"></i> Demo Link 1 </a></li>
                                        <li><a href="#"><i className="icon-angle-right"></i> Demo Link 2 </a></li>
                                    </ul>



                                </li>
                                <li><a href="#"><i className="icon-angle-right"></i> Demo Link 2 </a></li>
                                <li><a href="#"><i className="icon-angle-right"></i> Demo Link 3 </a></li>
                            </ul>

                        </li>
                        <li><a href="#"><i className="icon-angle-right"></i> Demo Link 2 </a></li>
                        <li><a href="#"><i className="icon-angle-right"></i> Demo Link 3 </a></li>
                        <li><a href="#"><i className="icon-angle-right"></i> Demo Link 4 </a></li>
                    </ul>
                </li>
                <li className="panel">
                    <a href="#" data-parent="#menu" data-toggle="collapse" className="accordion-toggle" data-target="#error-nav">
                        <i className="icon-warning-sign"></i> Error Pages
	   
                        <span className="pull-right">
                            <i className="icon-angle-left"></i>
                        </span>
                          &nbsp; <span className="label label-warning">5</span>&nbsp;
                    </a>
                    <ul className="collapse" id="error-nav">
                        <li><a href="errors_403.html"><i className="icon-angle-right"></i> Error 403  </a></li>
                        <li><a href="errors_404.html"><i className="icon-angle-right"></i> Error 404  </a></li>
                        <li><a href="errors_405.html"><i className="icon-angle-right"></i> Error 405  </a></li>
                        <li><a href="errors_500.html"><i className="icon-angle-right"></i> Error 500  </a></li>
                        <li><a href="errors_503.html"><i className="icon-angle-right"></i> Error 503  </a></li>
                    </ul>
                </li>


                <li><a href="gallery.html"><i className="icon-film"></i> Image Gallery </a></li>
                <li><a href="tables.html"><i className="icon-table"></i> Data Tables </a></li>
                <li><a href="maps.html"><i className="icon-map-marker"></i> Maps </a></li>

                <li><a href="grid.html"><i className="icon-columns"></i> Grid </a></li>
                 <li className="panel">
                    <a href="#" data-parent="#menu" data-toggle="collapse" className="accordion-toggle" data-target="#blank-nav">
                        <i className="icon-check-empty"></i> Blank Pages
	   
                        <span className="pull-right">
                            <i className="icon-angle-left"></i>
                        </span>
                         &nbsp; <span className="label label-success">2</span>&nbsp;
                    </a>
                    <ul className="collapse" id="blank-nav">
                       
                        <li><a href="blank.html"><i className="icon-angle-right"></i> Blank Page One  </a></li>
                        <li><a href="blank2.html"><i className="icon-angle-right"></i> Blank Page Two  </a></li>
                    </ul>
                </li>
                <li><a href="login.html"><i className="icon-signin"></i> Login Page </a></li>

            </ul>

        </div>
         
  )
}

export default Sidebar