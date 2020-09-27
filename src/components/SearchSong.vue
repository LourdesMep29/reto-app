<template>
    <section class="container-search">
        <div class="head-search"> 
            <input class="search" placeholder="Buscar" >  
            <p class="user"> <font-awesome-icon icon="user" class="icon-user"/>Francisco M</p>           
        </div>

        <div class="description"> 
            <img class="img-description" src="../assets/logo.png">
            <div class="detail">
                <h1>Artista </h1>
                <p>Lo mejor de Adele </p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, adipisci at? Blanditiis voluptates ut laboriosam repellendus vitae, deserunt praesentium id nemo reiciendis repellat. Consequuntur ab voluptates, dolorum repudiandae itaque fugiat.</p>
                <div class="box-btn">
                    <button class="btn-reprod">Reproducir</button>
                    <button class="btn-follow">Seguir</button>
                </div>
            </div>  
        </div>
    </section>    
</template>

<script>
export default {
    name: 'searchsong',
}
</script>

<style>
.container-search{
  width: 100%;
}
.head-search{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
}

.search{
    width: 524px;
    height: 30px;
    margin: 30px 0px  30px 0px;
    border-radius: 100px;
    border: 1px solid #828282;
    font-size: 1rem;
    outline: none;
    padding-left: 15px; 
}
.user {
    padding-right: 20px;
}
.icon-user{
    color: #E86060;
    padding-right: 5px;
}

.description{
    display: flex;
    flex-direction: row;
    padding-left: 40px;
    width: 95%;
    height: 200px;
   
}

.img-description{
    border: 1px solid #cccccc;
}

.detail{
    padding: 20px;
    background: #A70000;
    opacity: 0.7;
    color: white;
}
.btn-reprod{
    width: 117px;
    height: 31px;
    border-radius: 100px;
    background: #E86060;
    border: none;
    color: white;
    cursor: pointer;
    outline: none;
    margin: 5px;
}
.btn-reprod:hover{
    background:#bd0f0f;
    border: 1px solid white;
}
.btn-follow{
    width: 117px;
    height: 31px;
    border-radius: 100px;
    background-color: transparent;
    border: 1px solid #EB5757;
    cursor: pointer;
    outline: none;
    margin: 5px;

}

.btn-follow:hover{
    background: white;
}

h1{
    margin: 5px;
}
</style>