import registerStoreModule from '../../utils/register-store-module';

export default {
  beforeCreate() {
    const { module, name } = this.$options.meta.fetch;

    registerStoreModule({ module, name, store: this.$store });
  },
  async fetch({ store, route }) {
    const {
      module,
      mutation,
      name,
      pageId,
    } = route.meta[0].fetch;

    registerStoreModule({ module, name, store });

    await store.dispatch(`${name}/${mutation}`, pageId);
  },
};
