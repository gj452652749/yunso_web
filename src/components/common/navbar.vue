<template>
    <nav class="navbar-default navbar-static-side" role="navigation">
            <div class="sidebar-collapse">
                <ul class="nav metismenu" id="side-menu">
                    <li class="nav-header">
                        <div class="dropdown profile-element"> <span>
                            <img alt="image" class="img-circle" src="/static/assets/img/profile_small.jpg" />
                             </span>
                            <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                            <span class="clear"> <span class="block m-t-xs"> <strong class="font-bold">David Williams</strong>
                             </span> <span class="text-muted text-xs block">Art Director <b class="caret"></b></span> </span> </a>
                            <ul class="dropdown-menu animated fadeInRight m-t-xs">
                                <li><a href="profile.html">Profile</a></li>
                                <li><a href="contacts.html">Contacts</a></li>
                                <li><a href="mailbox.html">Mailbox</a></li>
                                <li class="divider"></li>
                                <li><a href="login.html">Logout</a></li>
                            </ul>
                        </div>
                        <div class="logo-element">
                            IN+
                        </div>
                    </li>
                    <li>
                        <a href="index.html"><i class="fa fa-th-large"></i> <span class="nav-label">Dashboards</span> <span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level">
                            <li><a href="index.html">Dashboard v.1</a></li>
                            <li><a href="dashboard_2.html">Dashboard v.2</a></li>
                            <li><a href="dashboard_3.html">Dashboard v.3</a></li>
                            <li><a href="dashboard_4_1.html">Dashboard v.4</a></li>
                            <li><a href="dashboard_5.html">Dashboard v.5 <span class="label label-primary pull-right">NEW</span></a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="dashboard.html"><i class="fa fa-th-large"></i> <span class="nav-label">系统信息</span></a>
                    </li>
                    <li>
                        <a href="logging.html"><i class="fa fa-exclamation-circle"></i> <span class="nav-label">日志</span></a>
                    </li>
                    <li>
                        <a href="coreadmin.html"><i class="fa fa-cogs"></i> <span class="nav-label">应用管理</span></a>
                    </li>
                     <li class="active">
                        <a href="#"><i class="fa fa-desktop"></i> <span class="nav-label">我的应用</span>  <span class="pull-right label label-primary">SPECIAL</span></a>
                        <ul id="myapp" class="nav nav-second-level collapse">
                            <li><a v-link="{ path: '/overview?no=0' }" v-on:click="updateState(0)">应用信息</a></li>
                            <li><a href="analysis.html">分词器</a></li>
                            <li><a v-link="{ path: '/datasource?no=2' }" v-on:click="updateState(2)">我的数据源</a></li>
                            <li><a v-link="{ path: '/dataimport' }" v-on:click="updateState(3)">导入数据</a></li>
                            <li><a href="query.html">查询</a></li>
                        </ul>
                    </li>                  
                </ul>

            </div>
        </nav>
</template>
<script>
    // require("script!../../../static/assets/js/jquery-2.1.1.js");
    // require("script!../../../static/assets/js/bootstrap.min.js");
    // require("script!../../../static/assets/js/plugins/metisMenu/jquery.metisMenu.js");
    // require("script!../../../static/assets/js/inspinia.js");
    // require("script!../../../static/assets/js/plugins/slimscroll/jquery.slimscroll.min.js");
    //location.reload();
    export default {
        ready() {
            //sessionStorage.do='true';
            sessionStorage.oldActiveNo=2;
            var theIs=this;
                    $.ajax({
                    type: "get",
                    async: false,
                    url: "/static/datas/overview.json",
                    success: function(data){
                        console.log(data);
                        //theIs.getData();
                        //Drawer.drawCharts();
                    },
                    error: function(){
                        console.log('fail');
                    }
                });
        },
        methods: {
            updateState:function(no) { 
                //如果新点击页面，则更新active <li></li>
                // if(no!=sessionStorage.oldActiveNo) {
                //     this.updateActive(no);
                //     sessionStorage.oldActiveNo=no;
                // }              
                
                sessionStorage.do='true';
                console.log(no+'updateState');
            },
            //去旧迎新
            updateActive:function(no) {
                $("#myapp li:eq("+sessionStorage.oldActiveNo+")").removeClass("active");
                $("#myapp li:eq("+no+")").addClass("active");
                console.log(no+'updateActive');
            }
        }
    }
</script>