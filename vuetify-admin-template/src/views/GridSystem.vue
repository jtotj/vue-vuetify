<template>
  <v-container
    fluid
  >
    <!-- fluid  full size -->
    <v-row no-gutters>
      <v-col>
        <v-card
          class="pa-3"
          outlined
        >
          Col
        </v-card>
      </v-col>
      <v-spacer />
      <v-col>
        <v-card
          class="pa-3"
          outlined
        >
          Col
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="pa-3"
          outlined
        >
          Col
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-spacer />
      <v-col>
        <v-card
          class="pa-3"
          outlined
        >
          Col
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="pa-3"
          outlined
        >
          Col
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="pa-3"
          outlined
        >
          Col
        </v-card>
      </v-col>
    </v-row>


    <v-card class="mt-5 pa-3">
      <v-row
        :style="{height:'120px'}"
        class="red"
        align="center"
      >
        <v-spacer />
        <v-col>
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
      </v-row>
    </v-card>

    <v-card class="mt-5 pa-3">
      <v-row
        :style="{height:'120px'}"
        class="yellow"
      >
        <v-col align-self="start">
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
        <v-col align-self="center">
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
        <v-col align-self="end">
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<script>
export default {

}
</script>
<style lang="">

</style>
