<template>
    <div>
      <nav class="main-header navbar navbar-expand bg-white navbar-light border-bottom" >
        <!-- Left navbar links -->
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" data-widget="pushmenu" href="#"><i class="fa fa-bars"></i></a>
          </li>
        </ul>
         <!-- Right navbar links -->
         <ul class="navbar-nav ml-auto">
          <!-- Messages Dropdown Menu -->
          <li class="nav-item dropdown messages-menu">
            <a class="nav-link" data-toggle="dropdown" href="#">
              <i class="fa fa-comments-o"></i>
              <span class="badge badge-success navbar-badge ml-3 label d-none">3</span>
            </a>
            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right" >
              <div id="messages_menu">
                <a href="#" class="dropdown-item">
                  <!-- Message Start -->
                  <div class="media">
                    <div class="media-body">
                      <h3 class="dropdown-item-title">
                        Brad Diesel
                      </h3>
                      <p class="text-sm">Call me whenever you can...</p>
                      <p class="text-sm text-muted"><i class="fa fa-clock-o mr-1"></i> 4 Hours Ago</p>
                    </div>
                  </div>
                  <!-- Message End -->
                </a>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item">
                  <!-- Message Start -->
                  <div class="media">
                    <div class="media-body">
                      <h3 class="dropdown-item-title">
                        John Pierce
                      </h3>
                      <p class="text-sm">I got your message bro</p>
                      <p class="text-sm text-muted"><i class="fa fa-clock-o mr-1"></i> 4 Hours Ago</p>
                    </div>
                  </div>
                  <!-- Message End -->
                </a>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item">
                  <!-- Message Start -->
                  <div class="media">
                    <div class="media-body">
                      <h3 class="dropdown-item-title">
                        Nora Silvester
                      </h3>
                      <p class="text-sm">The subject goes here</p>
                      <p class="text-sm text-muted"><i class="fa fa-clock-o mr-1"></i> 4 Hours Ago</p>
                    </div>
                  </div>
                  <!-- Message End -->
                </a>
              </div>
              
              <div class="dropdown-divider"></div>
              <a id="view-all-messages" class="dropdown-item dropdown-footer" style="cursor: pointer;">See All Messages</a>
            </div>
          </li>
          
          <li class="nav-item">
            <router-link class="nav-link" to="/logout">Logout</router-link>
          </li>
        </ul>
      </nav>


      <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <!-- Brand Logo -->
        <a href="${pageContext.request.contextPath}/admin" class="brand-link" >
          <img src="${pageContext.request.contextPath}/resources/images/dashboard/Alio_logo_simbol_0427.png" alt="AdminLTE Logo"  class="brand-image elevation-3" style="opacity: .8;display: none;">
          <span class="brand-text font-weight-bold" style="font-size: 1.5rem; height: 56px;">
          <!-- ALIO -->
          <img src="${pageContext.request.contextPath}/resources/images/dashboard/Alio_logo_0427.png" alt="AdminLTE Logo" class="" style="opacity: .8">
          </span>
        </a>
        <div class="sidebar font-weight-light">
        <nav>
          <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li class="nav-item">
              <router-link to="/" class="nav-link" exact>
                <i class="nav-icon">
                  <font-awesome-icon icon="th" />
                </i>
                
                <p>
                  Summary
                </p>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/posts" class="nav-link" exact>
                <i class="nav-icon">
                  <font-awesome-icon icon="th" />
                </i>
                <p>
                  Posts
                </p>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/posts/new" class="nav-link" exact>
               <i class="nav-icon">
                  <font-awesome-icon icon="th" />
                </i>
                <p>
                  New Post
                </p>
              </router-link>
            </li>
            
          </ul>
        </nav>
        </div>
      </aside>
    </div>
</template>


<script>
 
import {Auth} from '../../api'
export default {
  data() {
    return {
      loggedIn: Auth.loggedIn()
    }
  },
  created() {
    Auth.onChange = loggedIn => {
      console.log('onchage', loggedIn)
      this.loggedIn = loggedIn
    }
  }
}
</script>