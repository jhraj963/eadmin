import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function Dashboard() {
  return (
    <AdminLayout>
        <div id="content">
             
            <div className="inner" style={{minHeight: "700px;"}}>
                <div className="row">
                    <div className="col-lg-12">
                        <h1> Admin Dashboard </h1>
                    </div>
                </div>
                  <hr />
                 {/* <!--BLOCK SECTION --> */}
                 <div className="row">
                    <div className="col-lg-12">
                        <div style={{textAlign: "center"}}>
                           
                            <a className="quick-btn" href="#">
                                <i className="icon-check icon-2x"></i>
                                <span> Products</span>
                                <span className="label label-danger">2</span>
                            </a>

                            <a className="quick-btn" href="#">
                                <i className="icon-envelope icon-2x"></i>
                                <span>Messages</span>
                                <span className="label label-success">456</span>
                            </a>
                            <a className="quick-btn" href="#">
                                <i className="icon-signal icon-2x"></i>
                                <span>Profit</span>
                                <span className="label label-warning">+25</span>
                            </a>
                            <a className="quick-btn" href="#">
                                <i className="icon-external-link icon-2x"></i>
                                <span>value</span>
                                <span className="label btn-metis-2">3.14159265</span>
                            </a>
                            <a className="quick-btn" href="#">
                                <i className="icon-lemon icon-2x"></i>
                                <span>tasks</span>
                                <span className="label btn-metis-4">107</span>
                            </a>
                            <a className="quick-btn" href="#">
                                <i className="icon-bolt icon-2x"></i>
                                <span>Tickets</span>
                                <span className="label label-default">20</span>
                            </a>

                            
                            
                        </div>

                    </div>

                </div>
                  {/* <!--END BLOCK SECTION --> */}
                <hr />
                   {/* <!-- CHART & CHAT  SECTION --> */}
                 <div className="row">
                    <div className="col-lg-8">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                Real Time Traffic
                            </div>

                                                
			<div className="demo-container">
			<div id="placeholderRT" className="demo-placeholder"></div>
		</div>

                        </div>

                    </div>

                    
                     <div className="col-lg-4">

                        <div className="chat-panel panel panel-primary">
                            <div className="panel-heading">
                                <i className="icon-comments"></i>
                                Chat
                            <div className="btn-group pull-right">
                                <button type="button" data-toggle="dropdown">
                                    <i className="icon-chevron-down"></i>
                                </button>
                                <ul className="dropdown-menu slidedown">
                                    <li>
                                        <a href="#">
                                            <i className="icon-refresh"></i> Refresh
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className=" icon-comment"></i> Available
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="icon-time"></i> Busy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="icon-tint"></i> Away
                                        </a>
                                    </li>
                                    <li className="divider"></li>
                                    <li>
                                        <a href="#">
                                            <i className="icon-signout"></i> Sign Out
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            </div>

                            <div className="panel-body">
                                <ul className="chat">
                                    <li className="left clearfix">
                                        <span className="chat-img pull-left">
                                            <img src="assets/img/1.png" alt="User Avatar" className="img-circle" />
                                        </span>
                                        <div className="chat-body clearfix">
                                            <div className="header">
                                                <strong className="primary-font"> Jack Sparrow </strong>
                                                <small className="pull-right text-muted">
                                                    <i className="icon-time"></i> 12 mins ago
                                                </small>
                                            </div>
                                             <br />
                                            <p>
                                                Lorem ipsum dolor sit amet, bibendum ornare dolor, quis ullamcorper ligula sodales.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="right clearfix">
                                        <span className="chat-img pull-right">
                                            <img src="assets/img/2.png" alt="User Avatar" className="img-circle" />
                                        </span>
                                        <div className="chat-body clearfix">
                                            <div className="header">
                                                <small className=" text-muted">
                                                    <i className="icon-time"></i> 13 mins ago</small>
                                                <strong className="pull-right primary-font"> Jhony Deen</strong>
                                            </div>
                                            <br />
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur a dolor, quis ullamcorper ligula sodales.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="left clearfix">
                                        <span className="chat-img pull-left">
                                            <img src="assets/img/3.png" alt="User Avatar" className="img-circle" />
                                        </span>
                                        <div className="chat-body clearfix">
                                            <div className="header">
                                                <strong className="primary-font"> Jack Sparrow </strong>
                                                <small className="pull-right text-muted">
                                                    <i className="icon-time"></i> 12 mins ago
                                                </small>
                                            </div>
                                             <br />
                                            <p>
                                                Lorem ipsum dolor sit amet, bibendum ornare dolor, quis ullamcorper ligula sodales.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="right clearfix">
                                        <span className="chat-img pull-right">
                                            <img src="assets/img/4.png" alt="User Avatar" className="img-circle" />
                                        </span>
                                        <div className="chat-body clearfix">
                                            <div className="header">
                                                <small className=" text-muted">
                                                    <i className="icon-time"></i> 13 mins ago</small>
                                                <strong className="pull-right primary-font"> Jhony Deen</strong>
                                            </div>
                                            <br />
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur a dolor, quis ullamcorper ligula sodales.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="panel-footer">
                                <div className="input-group">
                                    <input id="Text1" type="text" className="form-control input-sm" placeholder="Type your message here..." />
                                    <span className="input-group-btn">
                                        <button className="btn btn-warning btn-sm" id="Button1">
                                            Send
                                        </button>
                                    </span>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
                 {/* <!--END CHAT & CHAT SECTION --> */}
                 {/* <!-- COMMENT AND NOTIFICATION  SECTION --> */}
                <div className="row">
                    <div className="col-lg-7">

                        <div className="chat-panel panel panel-success">
                            <div className="panel-heading">
                                <i className="icon-comments"></i>
                                New Comments
                            
                            </div>

                            <div className="panel-body">
                                <ul className="chat">
                                    <li className="left clearfix">
                                        <span className="chat-img pull-left">
                                            <img src="assets/img/1.png" alt="User Avatar" className="img-circle" />
                                        </span>
                                        <div className="chat-body clearfix">
                                            <div className="header">
                                                <strong className="primary-font "> Jack Sparrow </strong>
                                                <small className="pull-right text-muted label label-danger">
                                                    <i className="icon-time"></i> 12 mins ago
                                                </small>
                                            </div>
                                             <br />
                                            <p>
                                                Lorem ipsum dolor sit amet, bibendum ornare dolor, quis ullamcorper ligula sodales.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="right clearfix">
                                        <span className="chat-img pull-right">
                                            <img src="assets/img/2.png" alt="User Avatar" className="img-circle" />
                                        </span>
                                        <div className="chat-body clearfix">
                                            <div className="header">
                                                <small className=" text-muted label label-info">
                                                    <i className="icon-time"></i> 13 mins ago</small>
                                                <strong className="pull-right primary-font"> Jhony Deen</strong>
                                            </div>
                                            <br />
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur a dolor, quis ullamcorper ligula sodales.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="left clearfix">
                                        <span className="chat-img pull-left">
                                            <img src="assets/img/3.png" alt="User Avatar" className="img-circle" />
                                        </span>
                                        <div className="chat-body clearfix">
                                            <div className="header">
                                                <strong className="primary-font"> Jack Sparrow </strong>
                                                <small className="pull-right text-muted label label-warning">
                                                    <i className="icon-time"></i> 12 mins ago
                                                </small>
                                            </div>
                                             <br />
                                            <p>
                                                Lorem ipsum dolor sit amet, bibendum ornare dolor, quis ullamcorper ligula sodales.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="right clearfix">
                                        <span className="chat-img pull-right">
                                            <img src="assets/img/4.png" alt="User Avatar" className="img-circle" />
                                        </span>
                                        <div className="chat-body clearfix">
                                            <div className="header">
                                                <small className=" text-muted label label-primary">
                                                    <i className="icon-time"></i> 13 mins ago</small>
                                                <strong className="pull-right primary-font"> Jhony Deen</strong>
                                            </div>
                                            <br />
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur a dolor, quis ullamcorper ligula sodales.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="panel-footer">
                                <div className="input-group">
                                    <input id="btn-input" type="text" className="form-control input-sm" placeholder="Type your comment here..." />
                                    <span className="input-group-btn">
                                        <button className="btn btn-success btn-sm" id="btn-chat">
                                            Send
                                        </button>
                                    </span>
                                </div>
                            </div>

                        </div>


                    </div>
                    <div className="col-lg-5">
                         
                       <div className="panel panel-danger">
                            <div className="panel-heading">
                                <i className="icon-bell"></i> Notifications Alerts Panel
                            </div>

                            <div className="panel-body">
                                <div className="list-group">
                                    <a href="#" className="list-group-item">
                                        <i className=" icon-comment"></i> New Comment
                                    <span className="pull-right text-muted small"><em> 4 minutes ago</em>
                                    </span>
                                    </a>
                                    <a href="#" className="list-group-item">
                                        <i className="icon-twitter"></i> 3 New Followers
                                    <span className="pull-right text-muted small"><em> 12 minutes ago</em>
                                    </span>
                                    </a>
                                    <a href="#" className="list-group-item">
                                        <i className="icon-envelope"></i> Message Sent
                                    <span className="pull-right text-muted small"><em> 27 minutes ago</em>
                                    </span>
                                    </a>
                                    <a href="#" className="list-group-item">
                                        <i className="icon-tasks"></i> New Task
                                    <span className="pull-right text-muted small"><em>43 minutes ago</em>
                                    </span>
                                    </a>
                                    <a href="#" className="list-group-item">
                                        <i className="icon-upload"></i> Server Rebooted
                                    <span className="pull-right text-muted small"><em>11:32 AM</em>
                                    </span>
                                    </a>
                                    <a href="#" className="list-group-item">
                                        <i className="icon-warning-sign"></i> Server Crashed!
                                    <span className="pull-right text-muted small"><em>11:13 AM</em>
                                    </span>
                                    </a>
                                   
                                    <a href="#" className="list-group-item">
                                        <i className="icon-ok"></i> New Order Placed
                                    <span className="pull-right text-muted small"><em>9:49 AM</em>
                                    </span>
                                    </a>
                                    <a href="#" className="list-group-item">
                                        <i className=" icon-money"></i> Payment Received
                                    <span className="pull-right text-muted small"><em>Yesterday</em>
                                    </span>
                                    </a>
                                </div>

                                <a href="#" className="btn btn-default btn-block btn-primary">View All Alerts</a>
                            </div>

                        </div>

                          
                    
                    </div>
                </div>
                {/* <!-- END COMMENT AND NOTIFICATION  SECTION --> */}
                

                

                 {/* <!--  STACKING CHART  SECTION   --> */}
                <div className="row">
                   <div className="col-lg-12">
                    <div className="panel panel-default">
                            <div className="panel-heading">
                            Sales   Stacking
                            </div>

                            <div className="panel-body">
                              
			<div className="demo-container">
			<div id="placeholderStack" className="demo-placeholder"></div>
		</div>
                                <p className="stackControls">
			<button className="btn btn-primary" >With stacking</button>
			<button className="btn btn-primary">Without stacking</button>
		</p>

		<p className="graphControls">
			<button className="btn btn-primary">Bars</button>
			<button className="btn btn-primary">Lines</button>
			<button className="btn btn-primary">Lines with steps</button>
		</p>
		</div>
		
                            </div>
                    </div>
                     
                </div>
                 {/* <!--END STACKING CHART SCETION  --> */}

                 {/* <!--TABLE, PANEL, ACCORDION AND MODAL  --> */}
                          <div className="row">
                    <div className="col-lg-6">
                        <div className="box">
                            <header>
                                <h5>Simple Table</h5>
                                <div className="toolbar">
                                    <div className="btn-group">
                                        <a href="#sortableTable" data-toggle="collapse" className="btn btn-default btn-sm accordion-toggle minimize-box">
                                            <i className="icon-chevron-up"></i>
                                        </a>
                                    </div>
                                </div>
                            </header>
                            <div id="sortableTable" className="body collapse in">
                                <table className="table table-bordered sortableTable responsive-table">
                                    <thead>
                                        <tr>
                                            <th>#<i className="icon-sort"></i><i className="icon-sort-down"></i> <i className="icon-sort-up"></i></th>
                                            <th>First Name<i className="icon-sort"></i><i className="icon-sort-down"></i> <i className="icon-sort-up"></i></th>
                                            <th>Last Name<i className="icon-sort"></i><i className="icon-sort-down"></i> <i className="icon-sort-up"></i></th>
                                            <th>Score<i className="icon-sort"></i><i className="icon-sort-down"></i> <i className="icon-sort-up"></i></th>
                                        </tr>
                                    </thead>
                                    <tbody>


                                        <tr>
                                            <td>1</td>
                                            <td>Jill</td>
                                            <td>Smith</td>
                                            <td>50</td>
                                        </tr>

                                        <tr>
                                            <td>2</td>
                                            <td>Eve</td>
                                            <td>Jackson</td>
                                            <td>94</td>
                                        </tr>

                                        <tr>
                                            <td>3</td>
                                            <td>John</td>
                                            <td>Doe</td>
                                            <td>80</td>
                                        </tr>

                                        <tr>
                                            <td>4</td>
                                            <td>Adam</td>
                                            <td>Johnson</td>
                                            <td>67</td>
                                        </tr>


                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="panel panel-primary">
                            <div className="panel-heading ">
                                Collapsible Accordion Panel Group
                            </div>
                            <div className="panel-body">
                                <div className="panel-group" id="accordion">
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title">
                                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">Collapsible Group Item #1</a>
                                            </h4>
                                        </div>
                                        <div id="collapseOne" className="panel-collapse collapse in">
                                            <div className="panel-body">
                                                Lorem ipsum dolor sit amet, luaute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title">
                                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">Collapsible Group Item #2</a>
                                            </h4>
                                        </div>
                                        <div id="collapseTwo" className="panel-collapse collapse">
                                            <div className="panel-body">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title">
                                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">Collapsible Group Item #3</a>
                                            </h4>
                                        </div>
                                        <div id="collapseThree" className="panel-collapse collapse">
                                            <div className="panel-body">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                Primary Panel
                            </div>
                            <div className="panel-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                            </div>
                            <div className="panel-footer">
                                Panel Footer
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                Context Classes
                            </div>
                            <div className="panel-body">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Username</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="success">
                                                <td>1</td>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr className="info">
                                                <td>2</td>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                            </tr>
                                            <tr className="warning">
                                                <td>3</td>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                                <td>@twitter</td>
                                            </tr>
                                            <tr className="danger">
                                                <td>4</td>
                                                <td>John</td>
                                                <td>Smith</td>
                                                <td>@jsmith</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                Modal Example
                            </div>
                            <div className="panel-body">
                                <button className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
                                    Launch Demo Modal
                                </button>
                                <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                <h4 className="modal-title" id="myModalLabel">Modal title</h4>
                                            </div>
                                            <div className="modal-body">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                 {/* <!--TABLE, PANEL, ACCORDION AND MODAL  --> */}

                
            </div>

        </div>
        {/* <!--END PAGE CONTENT --> */}

         {/* <!-- RIGHT STRIP  SECTION --> */}
        <div id="right">

            
            <div className="well well-small">
                <ul className="list-unstyled">
                    <li>Visitor &nbsp; : <span>23,000</span></li>
                    <li>Users &nbsp; : <span>53,000</span></li>
                    <li>Registrations &nbsp; : <span>3,000</span></li>
                </ul>
            </div>
            <div className="well well-small">
                <button className="btn btn-block"> Help </button>
                <button className="btn btn-primary btn-block"> Tickets</button>
                <button className="btn btn-info btn-block"> New </button>
                <button className="btn btn-success btn-block"> Users </button>
                <button className="btn btn-danger btn-block"> Profit </button>
                <button className="btn btn-warning btn-block"> Sales </button>
                <button className="btn btn-inverse btn-block"> Stock </button>
            </div>
            <div className="well well-small">
                <span>Profit</span><span className="pull-right"><small>20%</small></span>

                <div className="progress mini">
                    <div className="progress-bar progress-bar-info" style={{width: "20%"}}></div>
                </div>
                <span>Sales</span><span className="pull-right"><small>40%</small></span>

                <div className="progress mini">
                    <div className="progress-bar progress-bar-success" style={{width: "40%"}}></div>
                </div>
                <span>Pending</span><span className="pull-right"><small>60%</small></span>

                <div className="progress mini">
                    <div className="progress-bar progress-bar-warning" style={{width: "60%"}}></div>
                </div>
                <span>Summary</span><span className="pull-right"><small>80%</small></span>

                <div className="progress mini">
                    <div className="progress-bar progress-bar-danger" style={{width: "80%"}}></div>
                </div>
            </div>
          
            
         

        </div>
    </AdminLayout>       
  )
}

export default Dashboard