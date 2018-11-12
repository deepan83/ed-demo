import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  address() {
    return faker.address.streetAddress();
  }
});
