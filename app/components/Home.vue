<template>
    <Page>
        <ActionBar>
            <Label text="Home"/>
        </ActionBar>

        <GridLayout>
            <Label class="info">

            </Label>
            <button text="Navigate with method" @tap="submit" />
        </GridLayout>
    </Page>
</template>

<script>
  export default {
    computed: {
      message() {
        return "Blank {N}-Vue app yeah baiklah, coba";
      }
    },
    methods: {
        submit() {
        // ...

        this.$router.push('dashboard.index')

        // ...
      }
    },


    mounted () {
        console.log({router: this.$router});
    },

  };
</script>

<style scoped lang="scss">
    @import '@nativescript/theme/scss/variables/blue';

    // Custom styles
    .fas {
        @include colorize($color: accent);
    }

    .info {
        font-size: 20;
        horizontal-align: center;
        vertical-align: center;
    }
</style>
