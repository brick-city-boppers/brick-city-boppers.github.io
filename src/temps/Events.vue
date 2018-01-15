<template>
  <div class="columns hb-events-columns">

      <div class="column is-mobile">
          <div id="events-map2" class="hb-map"></div>
      </div>

      <div class="column is-one-third">
        <ul class="hb-events-list">
            <li>
                <div class="hb-box">
                    <article class="media">
                        <div class="media-left">
                            <figure class="image is-96x96">
                                <img src="../assets/pillowcase.jpg" alt="Image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <div class="content">
                                <p>
                                <strong>Custom Pillow Case: free food!</strong> <small>09/01/2018</small> <small>2:00pm</small>
                                <br>
                                    Create a pillowcase! Free giveaways! 
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </li>
            <li>
                <div class="hb-box">
                    <article class="media">
                        <div class="media-left">
                            <figure class="image is-96x96">
                                <img src="../assets/comedy.jpg" alt="Image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <div class="content">
                                <p>
                                <strong>Comedian</strong> <small>09/08/2018</small> <small>2:00pm</small>
                                <br>
                                    Let laugh with free food! 
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </li>     
            <li>
                <div class="hb-box">
                    <article class="media">
                        <div class="media-left">
                            <figure class="image is-96x96">
                                <img src="../assets/massage.jpg" alt="Image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <div class="content">
                                <p>
                                <strong>Free Massages and facial.</strong> <small>09/15/2018</small> <small>2:00pm</small>
                                <br>
                                    Relax before finals.
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </li>
            <li>
                <div class="hb-box">
                    <article class="media">
                        <div class="media-left">
                            <figure class="image is-96x96">
                                <img src="../assets/placeholder.png" alt="Image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <div class="content">
                                <p>
                                <strong>Custom Pillow Case: free food!</strong> <small>09/01/2018</small> <small>2:00pm</small>
                                <br>
                                    Create a pillowcase! Free giveaways! 
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </li>
            <li>
                <div class="hb-box">
                    <article class="media">
                        <div class="media-left">
                            <figure class="image is-96x96">
                                <img src="../assets/placeholder.png" alt="Image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <div class="content">
                                <p>
                                <strong>Custom Pillow Case: free food!</strong> <small>09/01/2018</small> <small>2:00pm</small>
                                <br>
                                    Create a pillowcase! Free giveaways! 
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </li>
            <li>
                <div class="hb-box">
                    <article class="media">
                        <div class="media-left">
                            <figure class="image is-96x96">
                                <img src="../assets/placeholder.png" alt="Image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <div class="content">
                                <p>
                                <strong>Custom Pillow Case: free food!</strong> <small>09/01/2018</small> <small>2:00pm</small>
                                <br>
                                    Create a pillowcase! Free giveaways! 
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </li>
            <li>
                <div class="hb-box">
                    <article class="media">
                        <div class="media-left">
                            <figure class="image is-96x96">
                                <img src="../assets/placeholder.png" alt="Image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <div class="content">
                                <p>
                                <strong>Custom Pillow Case: free food!</strong> <small>09/01/2018</small> <small>2:00pm</small>
                                <br>
                                    Create a pillowcase! Free giveaways! 
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </li>
            <li>
                <div class="hb-box">
                    <article class="media">
                        <div class="media-left">
                            <figure class="image is-96x96">
                                <img src="../assets/placeholder.png" alt="Image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <div class="content">
                                <p>
                                <strong>Custom Pillow Case: free food!</strong> <small>09/01/2018</small> <small>2:00pm</small>
                                <br>
                                    Create a pillowcase! Free giveaways! 
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </li>
        </ul>
    </div>
      
      <div class="column is-desktop">
          <div id="events-map" class="hb-map"></div>
      </div>

    </div>


</template>

<script>
    function initMap() {
        let rit = {lat: 43.0853377, lng: -77.6752779};
        let dorms = {lat: 43.085411, lng: -77.668355};
        let event1 = {lat: 43.084392, lng: -77.668440};
        let event2 = {lat: 43.084909, lng: -77.668004};
        let event3 = {lat: 43.085485, lng: -77.667661};
        let el = document.getElementById('events-map');

        if (!el || getComputedStyle(el, null).display == "none") {
            el = document.getElementById('events-map2');
        }

        let map = new google.maps.Map(el , {
            zoom: 17,
            center: dorms
        });

        let markerEvent1 = new google.maps.Marker({
            position: event1,
            map: map,
            title: 'Custom Pillow Making',
            infowindow: new google.maps.InfoWindow({
                content: `<strong>Where: </strong>Outside Gleason Dorms<br>
                          <strong>Date: </strong>09/1/2018 <br>
                          <strong>Time: </strong>2:00pm<br><br>
                            Create your own custom pillowcase and enjoy some free food!
                            `
            })
        });

        markerEvent1.addListener('click', function() {
          markerEvent1.infowindow.open(map, markerEvent1);
        });

        let markerEvent2 = new google.maps.Marker({
            position: event2,
            map: map,
            title: 'Comedian Speaker',
            infowindow: new google.maps.InfoWindow({
                content: `<strong>Where: </strong>Outside NRH<br>
                          <strong>Date: </strong>09/8/2018 <br>
                          <strong>Time: </strong>2:00pm<br><br>
                            Lets laugh with free food!
                            `
            })
        });

        markerEvent2.addListener('click', function() {
          markerEvent2.infowindow.open(map, markerEvent2);
        });

        let markerEvent3 = new google.maps.Marker({
            position: event3,
            map: map,
            infowindow: new google.maps.InfoWindow({
                content: `<strong>Where: </strong>Outside Sols Dorms<br>
                          <strong>Date: </strong>09/15/2018<br>
                          <strong>Time: </strong>2:00pm<br><br>
                            Free Massages and facials! Stay relaxed as you prepare for finals. <br>
                            Free Swag!
                            `
            })
        });

        markerEvent3.addListener('click', function() {
          markerEvent3.infowindow.open(map, markerEvent3);
        });
    };

    export default {
        name: 'events',
        methods: {
            initMap: initMap
        },
        mounted: function () {
  		    this.initMap();
  	    },
    }
</script>



<style lang="scss">

    .hb-events-columns {
        margin-top: 2px;

        .column {
            padding-right: 0;
            padding-left: 0;
            padding: 0;
        }
    }

    #events-map {
        width: 100%;
        height: 100%;
        z-index: 0;
        position: relative;
    }

    #events-map2 {
        height: 100%;
            margin-left: 15px;
        width: 98%;
        z-index: 0;
        position: relative;
    }

    @media screen and (max-width: 1200px){
        #events-map {
            height: 300px;
        }

        #events-map2 {
            height: 300px;
        }

        .is-mobile {
            display: block;   
            
            .hb-map {
                display: block;
            }
        }

        .is-desktop {
            display: none; 

            
            .hb-map {
                display: none;
            }  
        }
    }

    @media screen and (min-width: 1200px) {
        .is-mobile {
            display: none;   

            .hb-map {
                display: none;
            }
        }

        .is-desktop {
            display: block; 

            
            .hb-map {
                display: block;
            }  
        }
        
    }


    .hb-events-list {
        z-index: 2;
        position: relative;
        box-shadow: 0px -2px 4px 0px gray;
        max-height: 90vh;

        li {
            cursor: pointer;
            width: 100%;
            margin: 0;
            padding-left: 5%;
            padding-top: 5px;
            &:hover {
                background-color: #efefef;
            }
        }
    }

    
</style>
