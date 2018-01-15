<template>
    <div class="columns">
        <div class="column is-two-thirds container">
            <section class="section">
                <h1 class="title hb-center-text">Learn about Sleep</h1>
            </section>
            
            
            <ul class="hb-videos"> 
                <li class="hb-center-text"><iframe width="640" height="360" src="https://www.youtube.com/embed/MJK-dMlATmM" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></li>
                <li><iframe width="640" height="360" src="https://www.youtube.com/embed/LWULB9Aoopc" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></li>
                <li><iframe width="640" height="360" src="https://www.youtube.com/embed/9KaMufF0rAY" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></li>
                <li><iframe width="640" height="360" src="https://www.youtube.com/embed/WNj1Y11t_x8" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></li>
            </ul>
        </div>
        <div class="column">
            <section class="section">
                <h1 class="title hb-center-text white-text">About</h1>
            </section>
            <div class="content hb-about">
                <h1 class="title is-5">About Head2Bed</h1>
                <p>An organization created to spread information about and influence first year college student to 
                    get consistent and the recomended sleep.</p>
                <br><br>
                <h1 class="title is-5">Mission</h1>
                <p>Help educate and influence young minds about the benefits of sleep.</p>
                <br><br>
                <h1 class="title is-5">Contact</h1>
                <p>
                    <strong><i class="fa fa-envelope" aria-hidden="true"></i> Email: </strong>contact@head2bead.life <br>
                    <strong><i class="fa fa-phone" aria-hidden="true"></i> Phone: </strong>703-243-1697
                </p>
            </div>
        </div>
    </div>

</template>

<style lang="scss">

    .white-text {
        color: white;
    }

    .hb-center-text {
        text-align: center;
    }

    .hb-videos {
        li {
            padding: 10px 0;
            display: flex;
            justify-content: center;
        }
    }

    .hb-about {
        padding-top: 10px;
        padding-left: 25px;
        padding-right: 80px;
        
        h1 {
            color: rgb(31, 147, 192);
        }
    }
</style>
