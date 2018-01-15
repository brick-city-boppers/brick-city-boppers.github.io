<template>
 <div class="columns">
     <div class="column is-one-third hb-form">

        <h1 class="title is-4">Volunteer Today!</h1>
        <div class="content">
            <p>Join the sleep team!</p>
        </div>
         <div class="field">
            <label class="label">First Name</label>
            <div class="control">
                <input class="input" type="text" placeholder="e.g Alex">
            </div>
        </div>

        <div class="field">
            <label class="label">Last Name</label>
            <div class="control">
                <input class="input" type="text" placeholder="e.g Smith">
            </div>
        </div>

        <div class="field">
            <label class="label">Email</label>
            <div class="control">
                <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com">
            </div>
        </div>
        <br>
        <div id="hb-confirmed" class="hb-hidden">
            <p><i class="fa fa-check"></i> Success! You're email has been received!</p>
        </div>
        <a id="hb-submit" class="button is-info is-rounded">Submit</a>

        </div> 
    </div>
</template>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        let submitEl = document.getElementById('hb-submit');
        let confirmedEl = document.getElementById('hb-confirmed');

        if (submitEl) {
            submitEl.addEventListener('click', function () {
                console.log('happened');
                confirmedEl.classList.remove('hb-hidden');
            });
        }
        
    });    
</script>

<style lang="scss">
    .hb-form {
        margin-left: 5%;
        padding: 50px;

        h1 {
            color: rgb(31, 147, 192);
        }

        #hb-confirmed {
            padding-bottom: 10px;
            i {
                color: lime;
            }
        }

        .hb-hidden {
            display: none;
        }
    }
</style>
