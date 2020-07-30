<template>
  <b-navbar toggleable="lg" type="light" id="nav-bg" class="nav-font nav-style">
    <b-container>
      <b-navbar-brand :to="{name: 'home'}" class="brillo">
        <!-- Logo de empresa-->
        <span></span>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{name: 'home'}">     <div class="link-efect">Inicio</div></b-nav-item>
          <b-nav-item :to="{name: 'Nosotros'}"> <div class="link-efect">Nosotros</div></b-nav-item>
          <b-nav-item :to="{name: 'Productos'}" ><div class="link-efect"> Productos</div></b-nav-item>
            <b-nav-item :to="{name: 'Contacto'}" ><div class="link-efect"> Contacto</div></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>
<style scoped lang="scss">

%selectState{
  border-radius: 0;
  background: rgb(255, 245, 230);
  &:before,
  &:after {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
}

.nav-style{
  background-color: #f1e0cc;

  .router-link-exact-active{
    background-color:transparent;
    .link-efect{ 
      @extend %selectState;
    }
  }
}

$borderColor:#a4181a;
$curvatura:20px;
.link-efect {
  position: relative;
	padding: 5px 12px;
  margin: 0px 4px;
	background: transparent;
  border-radius: $curvatura;
	//border-top-right-radius: $curvatura;
	//border-bottom-left-radius: $curvatura;
	transition: all 1s;
	&:after,
	&:before {
		content: "";
		width: 50%;
		height: 100%;
		position: absolute;
    border-radius: $curvatura;
		transition: all 1s;
	}
	&:after {
		top: -1px;
		left: -1px;
		border-top: 3px double $borderColor;
		border-left: 3px double $borderColor;
	}
	&:before {
		bottom: -1px;
		right: -1px;
		border-bottom: 3px double $borderColor;
		border-right: 3px double $borderColor;
	}
	&:hover {
    @extend %selectState;
	}
}

@media (min-width:0) and (max-width: 992px) {
  .link-efect{
    &:after,
    &:before{
      width: 50px;
      height: 100%;
      border-radius: 0;
    }
  }  
}
</style>