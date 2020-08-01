<style lang="scss" scoped>
.navigation-list {
  .v-list__tile--active {
    background: rgba(255, 255, 255, 0.08);
    color: inherit !important;
  }
  .v-list__group__header__prepend-icon {
    .v-icon {
      color: #fff !important;
    }
  }
  .active {
    transform: rotate(-180deg);
  }
}
::v-deep {
  .v-list-group--no-action > .v-list-group__items > .v-list-item {
    padding-right: 32px !important;
    .v-list-item__icon {
      margin-left: 16px;
    }
  }
  .v-list-group--no-action.v-list-group--sub-group
    > .v-list-group__items
    > .v-list-item {
    padding-right: 68px !important;
  }
}
</style>
<template>
  <div class="navigation-list">
    <v-list>
      <template v-for="(item, i) in items">
        <v-list-item v-if="!item.child" :to="item.to" :key="i">
          <v-list-item-icon>
            <v-tooltip v-if="miniVariant" open-delay="0" transition="animated fadeIn" left>
              <template v-slot:activator="{ on }">
                <v-icon v-on="on">{{ item.icon }}</v-icon>
              </template>
              {{ item.title }}
            </v-tooltip>
            <v-icon v-else>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
        <v-list-group v-else :key="i" no-action color="white" :prepend-icon="item.icon">
          <template v-slot:activator>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </template>
          <template v-for="(subMenu, index)  in item.child">
            <v-list-item v-if="!subMenu.child" :to="subMenu.to" dark :key="index" link>
              <v-list-item-icon>
                <v-tooltip v-if="miniVariant" open-delay="0" transition="animated fadeIn" left>
                  <template v-slot:activator="{ on }">
                    <v-icon v-on="on">{{ subMenu.icon }}</v-icon>
                  </template>
                  {{ subMenu.title }}
                </v-tooltip>
                <v-icon v-else>{{ subMenu.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ subMenu.title }}</v-list-item-title>
            </v-list-item>
            <v-list-group v-else :key="index" sub-group no-action color="white">
              <template v-slot:activator>
                <v-list-item-title>{{ subMenu.title }}</v-list-item-title>
              </template>

              <v-list-item
                v-for="(thirdMenu, i) in subMenu.child"
                :key="i"
                :to="subMenu.to"
                dark
                link
              >
                <v-list-item-icon>
                  <v-icon v-text="thirdMenu.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-title v-text="thirdMenu.title"></v-list-item-title>
              </v-list-item>
            </v-list-group>
          </template>
        </v-list-group>
      </template>
    </v-list>
    <!-- </v-list>
  
        <v-list-group v-else :key="i" no-action :prepend-icon="item.icon">
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
          <v-list-tile v-for="subMenu in item.child" :to="subMenu.to" :key="subMenu.title">
            <v-list-tile-action>
              <v-tooltip v-if="miniVariant" open-delay="0" transition="animated fadeIn" left>
                <template v-slot:activator="{ on }">
                  <v-icon v-on="on">{{ subMenu.icon }}</v-icon>
                </template>
                {{ subMenu.title }}
              </v-tooltip>
              <v-icon v-else>{{ subMenu.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-title v-text="subMenu.title" />
          </v-list-tile>
    </v-list-group>-->
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
import { INav } from '~/models/Navigation'

@Component
export default class NavigationComponent extends Vue {
  @Prop()
  miniVariant!: boolean
  isActive = false
  items: INav[] = []
  created() {
    let roles = this.$store.getters['auth/role']
    this.items = this.$service.navigation.get(roles)
  }
}
</script>
