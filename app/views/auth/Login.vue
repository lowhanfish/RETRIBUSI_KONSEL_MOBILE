<template>
    <Page actionBarHidden="true" class="coverImage">
      <ScrollView orientation="vertical">
        <StackLayout width="100%">
          <!-- <Image class="img_logo" src="~/assets/img/logo.png" stretch="aspectFit"/> -->

          <!-- <Label class="textLabelLogin" :text="$store.state.url.LOGIN_URL"/> -->
          <FlexboxLayout class="logoLogin">
              <FlexboxLayout class="coverLogoLogin" androidElevation="3" flexDirection="column" justifyContent="center" alignItems="center">
                <Image class="img_logo" src="~/assets/img/logo.png" stretch="aspectFit"/>
              </FlexboxLayout>
          </FlexboxLayout>




          <FlexboxLayout class="formLayout redemption">
              <FlexboxLayout flexDirection="column" class="inputLayout">
                <Label class="textLabelLogin" text="Username"/>
                <TextField v-model="user.username" class="textfieldku" hint="Username"/>
              </FlexboxLayout>

              <FlexboxLayout flexDirection="column" class="inputLayout">
                <Label class="textLabelLogin" text="Password"/>
                <TextField v-model="user.password"  class="textfieldku" hint="Password" :secure ="true"/>
              </FlexboxLayout>

              <FlexboxLayout flexDirection="column" class="inputLayout">
                <Ripple @tap="login()" rippleColor="#c8c8c8" ippleDuration="10" class="buttonLogin" >
                  <FlexboxLayout androidElevation="3" alignItems="center" justifyContent="center" flexDirection="column">
                    <Label class="buttonLoginLable" text="LOGINX" textWrap="true" />

                  </FlexboxLayout>
                </Ripple>
              </FlexboxLayout>

              <!-- <Button text="Button"></Button> -->

            

          </FlexboxLayout>

          <FlexboxLayout v-if="errorMessage" class="flexError">
            <Label class="notifError">{{errorMessage}}</Label>
          </FlexboxLayout>

        </StackLayout>

      </ScrollView>



      



     
    </Page>
</template>

<script>


import * as AppSettings from '@nativescript/core/application-settings';


  export default {
    data() {
      return {
        user:{
            username    :   'indra_am',
            password    :   'indra_am', 
        },

        loadingku : false,
        errorMessage : '',

      }
    },

    methods: {
      coba(){
        console.log("Yeaaah")
      },
      // login(){
      //   this.$router.push('dashboard.index')
      // },


      login(){

        console.log("SAYA DIPANGGIL");
        console.log(this.$store.state.url.LOGIN_URL+'login');
        
        this.loadingku = true;
        const body = {
            username : this.user.username,
            password : this.user.password
        }

        this.errorMessage = '';

        console.log(this.$store.state.url.LOGIN_URL+'login');

        fetch(this.$store.state.url.LOGIN_URL+'login', {
            method : 'POST',
            headers : {
              'content-type' : 'application/json',
            },
            body : JSON.stringify(body),
        }).then((response) => {
          // console.log(response);
          if (response.ok) {
              this.loadingku=false
              return response.json(); 
          } 
          return response.json().then(error => {
              this.errorMessage = JSON.stringify(error.message)
              this.loadingku=false
              this.showNotif(this.errorMessage, 'mail', 'white', 'red')  
              throw new Error(error.message); 
          });
        }).then(async (result) => {

          this.loadingku=false
          
          
          AppSettings.setString("token", result.token);
          AppSettings.setString("profile",JSON.stringify(result.profile));
          
          console.log(result); 

            // localStorage.token = result.token;
            // localStorage.profile = JSON.stringify(result.profile);

            setTimeout(() => {
             this.$router.pushClear('dashboard.index')
           }, 500);
           
            var lev = result.profile.profile
            console.log(lev.menu_klp);

        });
          
        




      },










    },
    watch: {
      user: {
          handler() {
              this.errorMessage = "";
          },
          deep: true
      }
    },


    mounted () {

      const token = AppSettings.getString("token")
      if (token == null || token == '' || token == undefined) {} 
      else {
        this.$router.push('dashboard.index')
      }
    },

};
</script>

<style scoped lang="css">
 





</style>
