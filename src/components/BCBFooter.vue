<template>
    <v-flex class="bcb-home__footer">
        <v-flex class="bcb-spacer--med-plus"></v-flex>

        <v-flex class="bcb-footer__sign-up-container">
            <v-flex class="bcb-footer__sign-up">
            <v-form>
                <v-flex class="bcb-footer__sign-up-title"><span class="bcb-footer__sign-up--important">Sign up</span> for our weekly newsletter!</v-flex>
                <v-layout row>
                <v-text-field clearable class="bcb-footer__sign-up-input"
                    background-color="white"
                    label="Sign up with Email"
                    solo
                    v-model="email"
                    :rules="emailRules"
                ></v-text-field>

                <v-btn class="bcb-footer__sign-up-button">
                    <v-icon>fas fa-arrow-right</v-icon>
                </v-btn>
                </v-layout>
                <v-flex class="bcb-footer__sign-up-field"></v-flex>
            </v-form>
            </v-flex>
        </v-flex>

        <v-flex class="bcb-spacer--med"></v-flex>

        <v-flex class="bcb-footer__contact-container">
        <v-flex class="bcb-footer__contact">
            <v-flex class="bcb-header">Contact Us</v-flex>
            <v-layout row justify-space-between class="bcb-footer__contact-email" @click="copy">
            <v-icon small>fas fa-envelope</v-icon>
            <v-flex tag="div">bcbswing@gmail.com</v-flex>
            </v-layout>

            <v-layout row justify-space-between class="bcb-footer__contact-phone" @click="copy">
            <v-icon small>fas fa-phone-square</v-icon>
            <v-flex tag="div">TBA</v-flex>
            </v-layout>

            <v-alert class="bcb-alert"
            :value="copied"
            transition="slide-y-reverse-transition"
            type="success"
            >
            Copied
            </v-alert>
        </v-flex>
        </v-flex>
    </v-flex>
</template>

<script>

import $ from 'jquery';

export default {
  name: 'BCBFooter',
  data: function() {
    return {
        email: '',
        copied: false,
        emailRules: [
          v => !!v || '',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
    }
  },
  props: {},
  computed: {},
  methods: {
    // Adds then removes the copy alert after a certain amount of time
    triggerCopied: function() {
      this.copied = true;
      setTimeout(() => {
        this.copied = false;
      }, 1000);
    },

    copy: function(event) {
      let range = undefined;
      if (document.selection) { // IE
          range = document.body.createTextRange();
          range.moveToElementText($(event.target)[0]);
          range.select();
      } else if (window.getSelection) {
          range = document.createRange();
          range.selectNode($(event.target)[0]);
          window.getSelection().removeAllRanges();
          window.getSelection().addRange(range);
      }

      document.execCommand('copy');
      window.getSelection().removeAllRanges();

      this.triggerCopied();   
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

    #bcb-app {
        .bcb-home__footer {
            height: 423px;
            bottom: -70px;
            background-color: #272727;
            color: #FEFEFE;
            position: absolute;
            width: 100%;

            .bcb-footer__sign-up--important {
            color: orange;
            }

            .bcb-footer__sign-up-button {
            background-color: orange;
            color: #FEFEFE;
            position: relative;
            margin: 0 !important;
            /* display: block; */
            /* padding: 13px 5px; */
            height: 48px;
            border-radius: 0 10px 10px 0px;
            left: -2px;
            }

            .bcb-footer__sign-up-input {
            border-radius: 10px 0px 0px 10px;
            }
        }

        .bcb-footer__sign-up-container {
            display: block;

            .bcb-footer__sign-up {
            width: 50%;
            margin: auto;

            .bcb-footer__sign-up-title {
                font-size: 18px !important;
                width: 100%;
                margin-bottom: 2px;
            }
            }
        }

        $email-icon-color: rgb(41, 146, 187);
        $email-text-color: rgb(221, 221, 221);

        $phone-icon-color: rgb(192, 99, 192);
        $phone-text-color: rgb(221, 221, 221);

        .bcb-footer__contact-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            
            .bcb-footer__contact {
            margin: auto;
            }

            .bcb-header {
            margin-bottom: 5px;
            }

            .bcb-footer__contact-email {
            svg {
                color: $email-icon-color;
                transition: color 0.15s;
            }

            div {
                color: $email-text-color;
                transition: color 0.15s;
            }

            &:hover {
                cursor: pointer;

                svg {
                color: saturate($email-icon-color, 100%);
                }

                div {
                color: lighten($email-text-color, 30%);
                }
            }
            }

            .bcb-footer__contact-phone {
            svg {
                color: $phone-icon-color;
                transition: color 0.15s;
            }

            div {
                color: $phone-text-color;
                transition: color 0.15s;
            }

            &:hover {
                cursor: pointer;

                svg {
                color: saturate($phone-icon-color, 30%);
                }

                div {
                color: lighten($phone-text-color, 30%);
                }
            }
            }

            svg {
            font-size: 16px;
            margin-right: 12px;
            height: 20px;
            }
        }
    }

</style>
