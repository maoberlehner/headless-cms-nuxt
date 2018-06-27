<template>
  <div :class="$options.name">
    <h1>{{ title }}</h1>
    <p>
      {{ intro }}
    </p>
    <app-content-block
      v-for="contentBlock in contentBlocks"
      :key="contentBlock.id"
      v-bind="contentBlock"
    />
    <ul>
      <li
        v-for="teaser in teasers"
        :key="teaser.id"
      >
        <app-teaser v-bind="teaser"/>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import { ABOUT } from '../../models/landing-page';
import { GET_LANDING_PAGE } from '../../store/action-types';
import landingPage from '../../store/modules/landing-page';
import registerStoreModule from '../../utils/register-store-module';

import AppContentBlock from '../../components/app/AppContentBlock.vue';
import AppTeaser from '../../components/app/AppTeaser.vue';

const STORE_NAMESPACE = `landingPage/about`;

export default {
  name: `About`,
  components: {
    AppContentBlock,
    AppTeaser,
  },
  computed: {
    ...mapState(STORE_NAMESPACE, [
      `contentBlocks`,
      `intro`,
      `teasers`,
      `title`,
    ]),
  },
  beforeCreate() {
    registerStoreModule({
      module: landingPage,
      moduleName: STORE_NAMESPACE,
      store: this.$store,
    });
  },
  async fetch({ store }) {
    registerStoreModule({
      module: landingPage,
      moduleName: STORE_NAMESPACE,
      store,
    });

    if (store.state[STORE_NAMESPACE].id) return;

    await store.dispatch(`${STORE_NAMESPACE}/${GET_LANDING_PAGE}`, ABOUT);
  },
};
</script>
