<template>
  <b-navbar toggleable="lg" type="light" id="nav-bg" class="nav-font">
    <b-container>
      <b-navbar-brand :to="{name: 'home'}" class="brillo">
        <img src="@/assets/logo.png" alt="Logo" class="logo-empresa">
        <span></span>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{name: 'home'}"> Inicio</b-nav-item>
          <b-nav-item :to="{name: 'Nosotros'}" > ¿Quienes Somos?</b-nav-item>
          <b-nav-item :to="{name: 'Productos'}"> Proyectos</b-nav-item>
            <b-nav-item :to="{name: 'Contacto'}" >Contacto</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>
