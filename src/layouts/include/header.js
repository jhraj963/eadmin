import React from 'react'

function Header() {
  return (
        
            <nav className="navbar navbar-inverse navbar-fixed-top " style={{paddingTop: "10px;"}}>
                <a data-original-title="Show/Hide Menu" data-placement="bottom" data-tooltip="tooltip" className="accordion-toggle btn btn-primary btn-sm visible-xs" data-toggle="collapse" href="#menu" id="menu-toggle">
                    <i className="icon-align-justify"></i>
                </a>
                {/* <!-- LOGO SECTION --> */}
                <header className="navbar-header">

                    <a href="index.html" className="navbar-brand">
                    <img src="assets/img/logo.png" alt="" />
                        
                        </a>
                </header>
                {/* <!-- END LOGO SECTION --> */}
                <ul className="nav navbar-top-links navbar-right">

                    {/* <!-- MESSAGES SECTION --> */}
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                            <span className="label label-success">2</span>    <i className="icon-envelope-alt"></i>&nbsp; <i className="icon-chevron-down"></i>
                        </a>

                        <ul className="dropdown-menu dropdown-messages">
                            <li>
                                <a href="#">
                                    <div>
                                       <strong>John Smith</strong>
                                        <span className="pull-right text-muted">
                                            <em>Today</em>
                                        </span>
                                    </div>
                                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing.
                                        <br />
                                        <span className="label label-primary">Important</span> 

                                    </div>
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a href="#">
                                    <div>
                                        <strong>Raphel Jonson</strong>
                                        <span className="pull-right text-muted">
                                            <em>Yesterday</em>
                                        </span>
                                    </div>
                                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing.
                                         <br />
                                        <span className="label label-success"> Moderate </span> 
                                    </div>
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a href="#">
                                    <div>
                                        <strong>Chi Ley Suk</strong>
                                        <span className="pull-right text-muted">
                                            <em>26 Jan 2014</em>
                                        </span>
                                    </div>
                                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing.
                                         <br />
                                        <span className="label label-danger"> Low </span> 
                                    </div>
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a className="text-center" href="#">
                                    <strong>Read All Messages</strong>
                                    <i className="icon-angle-right"></i>
                                </a>
                            </li>
                        </ul>

                    </li>
                    {/* <!--END MESSAGES SECTION --> */}

                    {/* <!--TASK SECTION --> */}
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                            <span className="label label-danger">5</span>   <i className="icon-tasks"></i>&nbsp; <i className="icon-chevron-down"></i>
                        </a>

                        <ul className="dropdown-menu dropdown-tasks">
                            <li>
                                <a href="#">
                                    <div>
                                        <p>
                                            <strong> Profile </strong>
                                            <span className="pull-right text-muted">40% Complete</span>
                                        </p>
                                        <div className="progress progress-striped active">
                                            <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: "40%"}}>
                                                <span className="sr-only">40% Complete (success)</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a href="#">
                                    <div>
                                        <p>
                                            <strong> Pending Tasks </strong>
                                            <span className="pull-right text-muted">20% Complete</span>
                                        </p>
                                        <div className="progress progress-striped active">
                                            <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: "20%"}}>
                                                <span className="sr-only">20% Complete</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a href="#">
                                    <div>
                                        <p>
                                            <strong> Work Completed </strong>
                                            <span className="pull-right text-muted">60% Complete</span>
                                        </p>
                                        <div className="progress progress-striped active">
                                            <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}>
                                                <span className="sr-only">60% Complete (warning)</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a href="#">
                                    <div>
                                        <p>
                                            <strong> Summary </strong>
                                            <span className="pull-right text-muted">80% Complete</span>
                                        </p>
                                        <div className="progress progress-striped active">
                                            <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}>
                                                <span className="sr-only">80% Complete (danger)</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a className="text-center" href="#">
                                    <strong>See All Tasks</strong>
                                    <i className="icon-angle-right"></i>
                                </a>
                            </li>
                        </ul>

                    </li>
                    {/* <!--END TASK SECTION --> */}

                    {/* <!--ALERTS SECTION --> */}
                    <li className="chat-panel dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                            <span className="label label-info">8</span>   <i className="icon-comments"></i>&nbsp; <i className="icon-chevron-down"></i>
                        </a>

                        <ul className="dropdown-menu dropdown-alerts">

                            <li>
                                <a href="#">
                                    <div>
                                        <i className="icon-comment" ></i> New Comment
                                    <span className="pull-right text-muted small"> 4 minutes ago</span>
                                    </div>
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a href="#">
                                    <div>
                                        <i className="icon-twitter info"></i> 3 New Follower
                                    <span className="pull-right text-muted small"> 9 minutes ago</span>
                                    </div>
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a href="#">
                                    <div>
                                        <i className="icon-envelope"></i> Message Sent
                                    <span className="pull-right text-muted small" > 20 minutes ago</span>
                                    </div>
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a href="#">
                                    <div>
                                        <i className="icon-tasks"></i> New Task
                                    <span className="pull-right text-muted small"> 1 Hour ago</span>
                                    </div>
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a href="#">
                                    <div>
                                        <i className="icon-upload"></i> Server Rebooted
                                    <span className="pull-right text-muted small"> 2 Hour ago</span>
                                    </div>
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a className="text-center" href="#">
                                    <strong>See All Alerts</strong>
                                    <i className="icon-angle-right"></i>
                                </a>
                            </li>
                        </ul>

                    </li>
                    {/* <!-- END ALERTS SECTION --> */}

                    {/* <!--ADMIN SETTINGS SECTIONS --> */}

                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                            <i className="icon-user "></i>&nbsp; <i className="icon-chevron-down "></i>
                        </a>

                        <ul className="dropdown-menu dropdown-user">
                            <li><a href="#"><i className="icon-user"></i> User Profile </a>
                            </li>
                            <li><a href="#"><i className="icon-gear"></i> Settings </a>
                            </li>
                            <li className="divider"></li>
                            <li><a href="login.html"><i className="icon-signout"></i> Logout </a>
                            </li>
                        </ul>

                    </li>
                    {/* <!--END ADMIN SETTINGS --> */}
                </ul>

            </nav>
        
        
  )
}

export default Header