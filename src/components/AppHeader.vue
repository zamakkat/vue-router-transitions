<template>
  <header class='container'>
    <nav>
      <ul class='nav-menu'>
        <li class='nav-item'>
          <router-link to='/' class='nav-link'>Home</router-link>
        </li>
        <li class='nav-item'>
          <router-link to='/about' class='nav-link'>About Us</router-link>
        </li>
        <li class='nav-item'>
          <router-link to='/contact' class='nav-link'>Contact Us</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
  .nav-menu {
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0;
  }

  .nav-item {
    list-style: none;
    margin-left: 10px;
  }

  .nav-item:first-child {
    margin-left: 0;
  }

  .nav-link {
    background-color: #42b983;
    border-radius: 5px;
    color: #fff;
    padding: 10px 20px;
    text-decoration: none;
  }

  .nav-link:hover {
    background-color: #3ba675;
  }
</style>
