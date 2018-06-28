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

import { GET_LANDING_PAGE } from '../store/action-types';
import { HOME } from '../models/landing-page';
import fetch from '../components/mixins/fetch';
import landingPage from '../store/modules/landing-page';

import AppContentBlock from '../components/app/AppContentBlock.vue';
import AppTeaser from '../components/app/AppTeaser.vue';

const STORE_NAMESPACE = `${landingPage.name}/home`;

export default {
  name: `Home`,
  meta: {
    fetch: {
      module: landingPage,
      mutation: GET_LANDING_PAGE,
      name: STORE_NAMESPACE,
      pageId: HOME,
    },
  },
  components: {
    AppContentBlock,
    AppTeaser,
  },
  mixins: [fetch],
  computed: {
    ...mapState(STORE_NAMESPACE, [
      `contentBlocks`,
      `intro`,
      `teasers`,
      `title`,
    ]),
  },
};
</script>
