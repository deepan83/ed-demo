import DS from 'ember-data';
import {attr, belongsTo} from '@ember-decorators/data'
const { Model} = DS;

export default class PremiseModel extends Model {
  @attr('string') address;
  @belongsTo('customer') customer;
}
